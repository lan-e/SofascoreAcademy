import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Leagues from "@/components/Leagues/Leagues";
import styled from "styled-components";
import {
  Main,
  FlexVer,
  FlexHor,
  Logo,
  Container,
} from "@/components/sharedstyles";

export default function settings() {
  return (
    <>
      <Head>
        <title>Mini Sofascore | Settings</title>
      </Head>
      <Main>
        <Leagues />
        <SettingsContainer>
          <Cont>
            <Title>Settings</Title>
          </Cont>
          <Select>
            <FlexVer>
              <BlueTitle>Language</BlueTitle>
              <div>English</div>
            </FlexVer>
            {/* <select>
              <option>English</option>
              <option>Croatian</option>
            </select> */}
            <Image
              src="img/ic_pointer_down.svg"
              width="20"
              height="20"
              alt="pointerdown"
            />
          </Select>
          <GreyCont>
            <BlueTitle>Theme</BlueTitle>
            <form>
              <Theme>
                <div>Light</div>
                <Input
                  type="radio"
                  id="light"
                  name="theme"
                  value="light"
                  checked
                />
              </Theme>
              <Theme>
                <div>Dark</div>
                <Input type="radio" id="dark" name="theme" value="dark" />
              </Theme>
            </form>
          </GreyCont>
          <GreyCont>
            <BlueTitle>Date Format</BlueTitle>
            <form>
              <Theme>
                <div>DD / MM / YYYY</div>
                <Input
                  type="radio"
                  id="light"
                  name="theme"
                  value="light"
                  checked
                />
              </Theme>
              <Theme>
                <div>MM / DD / YYYY</div>
                <Input type="radio" id="dark" name="theme" value="dark" />
              </Theme>
            </form>
          </GreyCont>
          <GreyCont>
            <Title>About</Title>
            <Subtitle>
              <h4>Sofascore Frontend Academy</h4>
              <div>Class 2023</div>
            </Subtitle>
            <Hr />
            <GreyTitle>App Name</GreyTitle>
            <BottomText>Mini Sofascore App</BottomText>
            <GreyTitle>API Credit</GreyTitle>
            <Link href="https://corporate.sofascore.com/hr/" target="_blank">
              <BottomText>Sofascore</BottomText>
            </Link>
            <GreyTitle>Developer</GreyTitle>
            <Link href="https://portfolio-nela.netlify.app/" target="_blank">
              <BottomText>Nela Đuranec</BottomText>
            </Link>
            <Hr />
            <FlexHor>
              <Link href="/">
                <Logo
                  style={{ marginBottom: "16px" }}
                  src="img/logoBlue.svg"
                  width="100"
                  height="100"
                  alt="sofaLogo"
                />
              </Link>
            </FlexHor>
          </GreyCont>
        </SettingsContainer>
      </Main>
    </>
  );
}
const GreyCont = styled.div`
  background-color: #c0cfe433;
  width: 100%;
  padding: 16px 16px;
  border-radius: 8px;
  margin: 8px 8px;
`;
const Cont = styled(GreyCont)`
  background-color: rgba(0, 0, 0, 0);
  padding: 0;
  margin: 10px 0;
`;
const Select = styled(GreyCont)`
  width: 100%;
  border: 1px solid #12121219;
  padding: 6px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 2px;
`;
const SettingsContainer = styled(Container)`
  justify-content: center;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.08);
`;
const Title = styled.h2`
  margin: 10px 0 16px 0;
`;
const Subtitle = styled.div`
  margin-bottom: 16px;
`;
const GreyTitle = styled.div`
  font-size: 12px;
  font-weight: 500;
  font-family: "Roboto";
  color: #12121266;
`;
const BlueTitle = styled.h5`
  color: #374df5;
`;
const BottomText = styled.div`
  font-size: 14px;
  margin-bottom: 16px;
`;
const Hr = styled.hr`
  width: 100%;
  border: 1px solid #12121219;
  margin-bottom: 16px;
`;
const Theme = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 0;
  font-size: 14px;
  width: 100%;
`;
const Input = styled.input`
  font-size: 24px;
`;
