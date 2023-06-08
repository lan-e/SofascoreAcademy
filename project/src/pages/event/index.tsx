import React from "react";
import Head from "next/head";
import { Container, Main } from "@/components/sharedstyles";
import Leagues from "@/components/Leagues/Leagues";

import { useRouter } from "next/router";
import en from "../../../locales/en/en";
import hr from "../../../locales/hr/hr";

const match = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : hr;

  return (
    <>
      <Head>
        <title>Mini Sofascore | {t.event}</title>
      </Head>
      <Main>
        <Leagues />
        <Container>
          <h1>{t.event}</h1>
        </Container>
      </Main>
    </>
  );
};

export default match;
