import React from "react";
import Head from "next/head";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import SportProvider from "../utils/SportProvider";
import DateProvider from "../utils/DateProvider";
import { VisibleProvider } from "../utils/VisibleContext";
export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Mini Sofascore</title>
        <meta name="description" content="Mini Sofascore" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <SportProvider>
        <DateProvider>
          <Header />
          <VisibleProvider>{children}</VisibleProvider>
          <Footer />
        </DateProvider>
      </SportProvider>
    </>
  );
}
// export const MobileLayout = ({ children }) => {
//   return (
//     <>
//       <Head>
//         <title>Mini Sofascore</title>
//         <meta name="description" content="Mini Sofascore" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       {children}
//       <Footer />
//     </>
//   );
// };
