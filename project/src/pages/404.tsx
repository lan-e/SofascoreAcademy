import React, { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Container, Main, StyledLink } from "@/components/sharedstyles";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    function countdown() {
      var count: any = 4;
      var myTimer = setInterval(function () {
        document.querySelector("p").innerHTML = `Auto redirect in: ${count}`;
        count--;
        if (count == 0) {
          clearInterval(myTimer);
        }
      }, 1000);
    }
    setTimeout(() => {
      router.push("/");
    }, 5000);
    countdown();
  }),
    [];
  return (
    <>
      <Head>
        <title>Mini Sofascore | 404</title>
      </Head>
      <Main>
        <Container>
          <h1>Ooops..</h1>
          <h2>That page cannot be found.</h2>
          <h3>
            Go back to the <StyledLink href="/">Homepage</StyledLink>
          </h3>
          <p>Auto redirect in: 5 </p>
        </Container>
      </Main>
    </>
  );
};

export default NotFound;
