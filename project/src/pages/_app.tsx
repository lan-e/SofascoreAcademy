import type { AppProps } from "next/app";
import { useState } from "react";
import { SWRConfig } from "swr";
import Layout from "@/components/Layout";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../../themes";
import GlobalStyle from "../components/globalstyles";

//@ts-ignore
const fetcher = (...args) =>fetch(...args).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("404");
    }
  });

function App({ Component, pageProps }: AppProps) {
  const [selectedTheme, setSelectedTheme] = useState(lightTheme);

  const isDarkTheme = selectedTheme === darkTheme;
  function toggleTheme() {
    setSelectedTheme(isDarkTheme ? lightTheme : darkTheme);
  }
  return (
    <>
      <ThemeProvider theme={selectedTheme}>
        <GlobalStyle />
        <SWRConfig value={{ fetcher: fetcher }}>
          <Layout>
            <Component
              {...pageProps}
              toggleTheme={toggleTheme}
              isDarkTheme={isDarkTheme}
            />
          </Layout>
        </SWRConfig>
      </ThemeProvider>
    </>
  );
}
export default App;
