import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Leagues from "@/components/Leagues/Leagues";
import {
  Main,
  FlexHor,
  IcoBlue,
  FlexBtw,
  FlexVerLeft,
} from "@/components/sharedstyles";
import {
  BlueTitle,
  Cont,
  Select,
  SettingsContainer,
  Title,
  GreyCont,
  Theme,
  Input,
  Subtitle,
  GreyTitle,
  Hr,
  BottomText,
  SelectLang,
  SelectPointer,
  LangTitle,
} from "@/components/settingsStyles";

import en from "../../locales/en/en";
import hr from "../../locales/hr/hr";
//language switch
import { useRouter } from "next/router";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";

function settings({ toggleTheme, isDarkTheme }) {
  //language
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : hr;

  const handleLang = (e) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };
  //theme
  const [isToggled, setIsToggled] = useState(isDarkTheme);
  const onToggle = () => {
    setIsToggled(!isToggled);
    toggleTheme();
  };

  function changeDate() {}
  return (
    <>
      <Head>
        <title>Mini Sofascore | {t.settings}</title>
      </Head>
      <Main>
        <Leagues />
        <SettingsContainer>
          <Cont>
            <Title>{t.settings}</Title>
          </Cont>
          <SelectLang>
            <LangTitle>{t.lang}</LangTitle>
            <Select onChange={handleLang} defaultValue={locale}>
              <option value="en">English</option>
              <option value="hr">Hrvatski</option>
            </Select>
            <SelectPointer
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#tdzndi5cga)">
                <path d="m7 10 5 5 5-5H7z" />
              </g>
              <defs>
                <clipPath id="tdzndi5cga">
                  <path fill="#fff" d="M0 0h24v24H0z" />
                </clipPath>
              </defs>
            </SelectPointer>
          </SelectLang>
          <GreyCont>
            <BlueTitle>{t.theme}</BlueTitle>
            <Theme>
              <div>{t.themeChange}</div>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={isToggled}
                  onChange={onToggle}
                />
                <span className="slider round"></span>
              </label>
            </Theme>
          </GreyCont>
          <GreyCont>
            <BlueTitle>{t.dateChange}</BlueTitle>
            <form>
              <Theme>
                <div>DD / MM / YYYY</div>
                <Input
                  type="radio"
                  id="date1"
                  name="date"
                  value="date1"
                  placeholder="radio"
                  onChange={changeDate}
                  checked
                />
              </Theme>
              <Theme>
                <div>MM / DD / YYYY</div>
                <Input
                  type="radio"
                  id="date2"
                  name="date"
                  value="date2"
                  placeholder="radio"
                />
              </Theme>
            </form>
          </GreyCont>
          <GreyCont>
            <Title>{t.about}</Title>
            <Subtitle>
              <h4>Sofascore Frontend Academy</h4>
              <div>{t.class23}</div>
            </Subtitle>
            <Hr />
            <GreyTitle>{t.appName}</GreyTitle>
            <BottomText>Mini Sofascore App</BottomText>
            <GreyTitle>{t.apiCredit}</GreyTitle>
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
                <IcoBlue
                  width="132"
                  height="20"
                  viewBox="0 0 132 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#j2mb71rbta)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M19.865 0c.08 0 .145.065.145.145H20v4.712c0 .08-.065.146-.145.146H5.143a.145.145 0 0 0-.146.145v4.707c0 .08-.065.145-.145.145H.145A.145.145 0 0 1 0 9.855V.145C0 .065.065 0 .145 0h19.72zm-4.712 10.005a.145.145 0 0 0-.146.145v4.707c0 .08-.064.146-.145.146H.145a.145.145 0 0 0-.145.145v4.707c0 .08.065.145.145.145H19.86c.08 0 .145-.065.145-.145V10.15a.145.145 0 0 0-.145-.145h-4.707zm18.179-1.58c1.535.09 2.756.334 3.661.73.911.395 1.566.94 1.966 1.625.406.69.606 1.526.606 2.502 0 1.025-.265 1.926-.8 2.711-.536.78-1.286 1.396-2.247 1.836-.96.445-2.06.665-3.301.665-1.161 0-2.226-.2-3.197-.595-.97-.395-1.766-1-2.386-1.816-.605-.79-.95-1.776-1.04-2.951a.098.098 0 0 1 .1-.105h2.92c.05 0 .096.035.1.085.136.885.511 1.54 1.126 1.97.636.446 1.436.666 2.397.666 1.035 0 1.84-.215 2.406-.64.565-.426.85-.996.85-1.711 0-.726-.265-1.27-.8-1.626-.535-.355-1.406-.57-2.616-.65-1.241-.075-2.317-.27-3.222-.58-.905-.31-1.61-.801-2.116-1.466-.505-.666-.756-1.566-.756-2.697 0-.96.256-1.81.766-2.546.51-.735 1.206-1.31 2.08-1.72.881-.411 1.877-.616 2.992-.616 1.831 0 3.322.455 4.468 1.37 1.12.896 1.765 2.162 1.94 3.797a.1.1 0 0 1-.1.11h-2.92a.102.102 0 0 1-.1-.085c-.121-.78-.461-1.38-1.022-1.8-.585-.436-1.355-.65-2.316-.65-.87 0-1.545.2-2.036.594-.485.396-.73.886-.73 1.476 0 .635.235 1.126.71 1.476.47.35 1.346.565 2.617.64zm16.293-1.942c-.906-.49-1.896-.73-2.967-.73-1.1 0-2.1.245-3.001.73-.9.49-1.611 1.206-2.141 2.151-.526.946-.79 2.101-.79 3.467s.264 2.521.79 3.467c.525.945 1.24 1.666 2.14 2.16.901.496 1.902.746 3.002.746 1.07 0 2.061-.25 2.967-.745.905-.495 1.63-1.216 2.176-2.161.54-.946.815-2.101.815-3.467s-.27-2.521-.815-3.467c-.54-.945-1.266-1.666-2.176-2.15zm-.826 8.324c-.525.63-1.24.94-2.14.94-.901 0-1.611-.314-2.127-.94-.52-.63-.78-1.525-.78-2.686 0-1.18.265-2.081.79-2.711.526-.63 1.23-.94 2.116-.94.9 0 1.611.314 2.141.94.526.63.79 1.53.79 2.711 0 1.166-.26 2.061-.79 2.686zm6.354-10.73c0-1.106.31-1.92.94-2.456.63-.535 1.416-.806 2.361-.806h2.692a.1.1 0 0 1 .1.1v2.542a.1.1 0 0 1-.1.1h-2.132c-.62 0-.93.365-.93 1.095v1.226a.1.1 0 0 0 .1.1h2.962a.1.1 0 0 1 .1.1v2.546a.1.1 0 0 1-.1.1h-2.962a.1.1 0 0 0-.1.1v9.34a.1.1 0 0 1-.1.1h-2.731a.1.1 0 0 1-.1-.1V8.83a.1.1 0 0 0-.1-.1h-1.706a.1.1 0 0 1-.1-.1V6.083a.1.1 0 0 1 .1-.1h1.706a.1.1 0 0 0 .1-.1V4.077zm16.433 2.881c-.986-.805-2.316-1.21-3.987-1.21-.976 0-1.861.165-2.651.49-.79.325-1.436.8-1.931 1.42-.476.596-.766 1.301-.87 2.122-.01.06.04.11.1.11h2.78c.05 0 .09-.035.1-.08.106-.475.346-.846.73-1.116.406-.285.976-.43 1.722-.43 1.706 0 2.561.715 2.561 2.141v.18a.1.1 0 0 1-.1.1h-3.132c-1.52 0-2.726.35-3.616 1.046-.89.7-1.336 1.666-1.336 2.906 0 .776.14 1.416.42 1.921.28.506.64.906 1.08 1.196.44.295.926.5 1.456.615.526.115 1.031.175 1.511.175 1.1 0 2.021-.215 2.757-.64.395-.23.735-.495 1.025-.805.06-.066.175-.02.175.07v1a.1.1 0 0 0 .1.1h2.496a.1.1 0 0 0 .1-.1V10.4c-.014-1.49-.505-2.636-1.49-3.442zm-3.152 8.84c-.48.215-.945.325-1.395.325-.636 0-1.146-.13-1.536-.385-.39-.255-.58-.646-.58-1.176 0-.51.19-.9.57-1.16.38-.265.98-.395 1.8-.395h2.737a.1.1 0 0 1 .1.1v.065c0 .665-.165 1.215-.49 1.65-.32.43-.725.756-1.206.976zm11.771-5.023c1.861.105 3.197.446 4.002 1.01.806.566 1.206 1.437 1.22 2.627 0 .78-.21 1.476-.63 2.096-.42.62-1.025 1.11-1.825 1.466-.8.355-1.766.535-2.897.535-1.026 0-1.95-.145-2.781-.44-.83-.295-1.501-.735-2.011-1.326-.49-.565-.77-1.285-.83-2.15a.098.098 0 0 1 .1-.106h2.76c.05 0 .09.035.1.08.08.486.356.84.836 1.07.505.24 1.12.361 1.851.361.82 0 1.42-.13 1.8-.385.381-.255.571-.6.571-1.036 0-.435-.17-.755-.51-.965-.345-.21-1.02-.34-2.026-.385-1.086-.05-2.016-.19-2.791-.42-.776-.23-1.371-.606-1.791-1.116-.42-.51-.63-1.2-.63-2.071 0-.776.215-1.45.64-2.026.425-.575 1.015-1.026 1.766-1.35.75-.326 1.615-.491 2.59-.491 1.552 0 2.802.35 3.758 1.045.925.676 1.46 1.626 1.605 2.842a.1.1 0 0 1-.1.11h-2.78a.102.102 0 0 1-.1-.08 1.41 1.41 0 0 0-.731-1.036c-.435-.245-.986-.37-1.651-.37-.7 0-1.22.12-1.57.35-.351.23-.526.536-.526.906 0 .265.07.48.2.65.13.17.385.305.755.405.37.105.91.17 1.626.2zm13.792 4.558c-.495.28-1.03.42-1.606.42-.9 0-1.61-.31-2.126-.93-.52-.62-.78-1.521-.78-2.697 0-1.18.265-2.081.79-2.711.525-.63 1.23-.94 2.116-.94.65 0 1.2.164 1.651.49.43.315.72.8.865 1.455.01.045.05.08.1.08h2.807c.06 0 .11-.055.1-.115-.215-1.556-.826-2.711-1.821-3.467-1.026-.775-2.271-1.16-3.747-1.16-1.04 0-2.006.24-2.896.72-.89.48-1.611 1.196-2.161 2.141-.55.946-.826 2.111-.826 3.492 0 1.38.265 2.541.79 3.492.526.945 1.236 1.66 2.127 2.15.89.491 1.88.731 2.966.731.886 0 1.721-.16 2.511-.475.79-.32 1.456-.81 2.001-1.476.52-.64.886-1.436 1.091-2.39.015-.061-.035-.121-.1-.121h-2.802a.096.096 0 0 0-.094.075c-.16.55-.48.966-.956 1.236zm11.026-9.58c1.07 0 2.061.24 2.966.73.905.485 1.631 1.206 2.176 2.151.545.946.815 2.101.815 3.467s-.275 2.521-.815 3.467c-.545.945-1.271 1.666-2.176 2.16a6.087 6.087 0 0 1-2.966.746c-1.101 0-2.102-.25-3.002-.745-.9-.495-1.616-1.216-2.141-2.161-.525-.946-.79-2.101-.79-3.467s.265-2.521.79-3.467c.53-.945 1.241-1.66 2.141-2.15.9-.486 1.901-.731 3.002-.731zm0 9.995c.9 0 1.615-.31 2.141-.94.525-.626.79-1.521.79-2.687 0-1.18-.265-2.081-.79-2.711-.531-.626-1.241-.94-2.141-.94-.886 0-1.591.31-2.117.94-.525.63-.79 1.53-.79 2.711 0 1.16.26 2.056.78 2.686.516.626 1.226.94 2.127.94zm10.885-9.13c-.19.18-.37.39-.54.626-.055.08-.18.04-.18-.06V6.078a.1.1 0 0 0-.1-.1h-2.522a.1.1 0 0 0-.1.1v12.081a.1.1 0 0 0 .1.1h2.732a.1.1 0 0 0 .1-.1v-6.943c0-.606.095-1.09.28-1.456.185-.365.435-.63.745-.79a2.24 2.24 0 0 1 1.071-.246h2.251a.1.1 0 0 0 .1-.1V6.078a.1.1 0 0 0-.1-.1h-1.856c-.87.005-1.531.215-1.981.64zm13.157-.135c.86.485 1.54 1.206 2.036 2.161.495.956.745 2.111.745 3.472v.385c0 .09-.01.185-.03.28a.102.102 0 0 1-.1.085h-8.284a.1.1 0 0 0-.1.11c.09.796.32 1.436.685 1.911.49.636 1.206.956 2.151.956.62 0 1.146-.11 1.581-.335.415-.21.7-.565.86-1.056.015-.04.05-.07.095-.07h2.827c.065 0 .115.06.1.12-.305 1.336-.956 2.326-1.951 2.972-1.026.665-2.216 1-3.582 1-1.07 0-2.036-.24-2.906-.73-.871-.49-1.561-1.206-2.071-2.151-.511-.946-.766-2.101-.766-3.467 0-1.336.265-2.476.801-3.422.53-.945 1.24-1.675 2.126-2.186a5.676 5.676 0 0 1 2.886-.765c1.071 0 2.036.245 2.897.73zm-.911 2.662c-.425-.576-1.095-.86-2.011-.86-.915 0-1.621.33-2.111.99-.255.335-.44.75-.565 1.235-.02.065.03.125.095.125h5.047c.065 0 .11-.06.1-.12-.095-.545-.28-1.005-.555-1.37z"
                    />
                  </g>
                  <defs>
                    <clipPath id="j2mb71rbta">
                      <path fill="currentColor" d="M0 0h132v20H0z" />
                    </clipPath>
                  </defs>
                </IcoBlue>
              </Link>
            </FlexHor>
          </GreyCont>
        </SettingsContainer>
      </Main>
    </>
  );
}

export default settings;
