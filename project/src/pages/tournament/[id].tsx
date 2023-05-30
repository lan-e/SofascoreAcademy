import React from "react";
import { useRouter } from "next/router";
import { Main } from "@/components/sharedstyles";
import styled from "styled-components";

export const getStaticPaths = async () => {
  const response = await fetch(
    `https://academy.dev.sofascore.com/tournament/2`
  );
  const data = await response.json();

  const paths = data.map((tourn) => {
    return {
      params: { id: tourn.id.toString() },
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
    `https://academy.dev.sofascore.com/tournament/${id}`
  );
  const data = await response.json();
  return {
    props: { tourn: data },
  };
};
const Details = ({ tourn }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Main>
      <PlayerContainer>
        <h1>Player: {id}</h1>
        <p>{tourn.name}</p>
      </PlayerContainer>
    </Main>
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
    /* margin-top: 0; */
    border-radius: 16px;
  }
`;
