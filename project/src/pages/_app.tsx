import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import { ThemeProvider, DefaultTheme } from "styled-components";
import GlobalStyle from "../components/globalstyles";
import { SWRConfig } from "swr";
import "../../App.css";

const theme: DefaultTheme = {
  colors: {
    primary: "#374df5",
    secondary: "#1327ba",
  },
};
//@ts-ignore
const fetcher = (...args) => fetch(...args).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("404");
    }
  });

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <SWRConfig value={{ fetcher: fetcher }}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SWRConfig>
      </ThemeProvider>
    </>
  );
}
export default App;
