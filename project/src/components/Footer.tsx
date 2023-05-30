import React from "react";
import Link from "next/link";
import { Logo } from "./sharedstyles";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterStlyed>
      <Link href="/">
        <Logo src="img/logoBlack.svg" alt="sofaLogo" width="100" height="100" />
      </Link>
      <FooterContent>© 2023 Sofascore – All Rights Reserved.</FooterContent>
    </FooterStlyed>
  );
};

export default Footer;

const FooterStlyed = styled.div`
  width: 100%;
  height: 116px;
  bottom: 0;
  position: fixed;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 24px;
  background-color: #fff;
  box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.12);
`;
const FooterContent = styled.div`
  color: rgba(18, 18, 18, 0.4);
  font-family: Roboto;
  font-size: 12px;
  margin-top: 24px;
  margin-bottom: 32px;
`;
