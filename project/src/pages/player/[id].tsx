import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Main } from "@/components/sharedstyles";
import styled from "styled-components";

export const getStaticPaths = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await response.json();

  const paths = data.map((sports) => {
    return {
      params: { id: sports.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const data = await response.json();
  return {
    props: { player: data },
  };
};
const Details = ({ player }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>Mini Sofascore | Player</title>
      </Head>
      <Main>
        <PlayerContainer>
          <h1>Player: {id}</h1>
          <p>{player.name}</p>
          <p>{player.email}</p>
          <p>{player.website}</p>
          <p>{player.address.city}</p>
        </PlayerContainer>
      </Main>
    </>
  );
};

export default Details;
const PlayerContainer = styled.div`
  min-height: 670px;
  height: max-content;
  width: 35vw;
  background-color: #fff;
  border-radius: 16px;
  padding: 16px;
  margin: 0 12px;
  @media (max-width: 991px) {
    width: 80vw;
    margin-top: 48px;
    border-radius: 16px;
  }
`;
