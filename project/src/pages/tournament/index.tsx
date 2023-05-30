import React from "react";
import Head from "next/head";
import Link from "next/link";
import Leagues from "@/components/Leagues";
import { Container, Main } from "@/components/sharedstyles";

export const getStaticProps = async () => {
  const data = await (
    await fetch(`https://academy.dev.sofascore.com/tournament/2`)
  ).json();
  return {
    props: { tournament: data },
  };
};
const TournamentPage = ({ tournament }) => {
  //   const [id, setId] = useState<number>(2);

  //   const getStaticProps = async (id: number) => {
  //     const data = await (
  //       await fetch(`https://academy.dev.sofascore.com/tournament/${id}`)
  //     ).json();
  //     return {
  //       props: { tournament: data },
  //     };
  //   };
  //   useEffect(() => {
  //     getStaticProps(id);
  //     setId(id + 1);
  //   }, [id]);
  return (
    <>
      <Head>
        <title>Mini Sofascore | Tournament</title>
        <meta name="description" content="Mini Sofascore" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Leagues />
        <Container>
          <h1>Leagues</h1>
          {/* {tournament.map((tournament: any) => ( */}
          <Link href={`/tournament/${tournament.id}`} key={tournament.id}>
            {tournament.name}
          </Link>
          {/* ))} */}
          {/* <PlayerContainer>{player.data}</PlayerContainer> */}
        </Container>
      </Main>
    </>
  );
};

export default TournamentPage;
