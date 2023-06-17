import React from "react";
import Head from "next/head";
import Leagues from "@/components/Leagues/Leagues";
import { Main } from "@/components/sharedstyles";

import { useRouter } from "next/router";
import en from "../../../locales/en/en";
import hr from "../../../locales/hr/hr";

export default function TournamentPage() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : hr;

  return (
    <>
      <Head>
        <title>Mini Sofascore | {t.leagues}</title>
      </Head>
      <Main>
        <Leagues />
      </Main>
    </>
  );
}
