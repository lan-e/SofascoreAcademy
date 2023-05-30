import React from "react";
import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Mini Sofascore</title>
        <meta name="description" content="Mini Sofascore" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
