import React from "react";
import { useEffect, useState, useContext } from "react";
import { NavStlyed, NavLink, StyledImg } from "./styles";
import { SportContext } from "@/utils/SportProvider";

import { useRouter } from "next/router";
import en from "../../../../locales/en/en";
import hr from "../../../../locales/hr/hr";
import { IcoWhite } from "../styles";

export default function Navigation() {
  //language
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : hr;

  //american football --> am.football on mobile
  const amFoot = t.amFoot;
  const americanFoot = t.americanFoot;

  const [text, setText] = useState(americanFoot);

  function ChangeText() {
    if (window.innerWidth < 991) setText(amFoot);
    else {
      setText(americanFoot);
    }
  }
  useEffect(() => {
    ChangeText();
  }, []);

  const { selectedSport, setSport } = useContext(SportContext);
  const handleFootballButtonClick = () => {
    setSport("football");
  };

  const handleBasketballButtonClick = () => {
    setSport("basketball");
  };

  const handleAmFootballButtonClick = () => {
    setSport("american-football");
  };

  return (
    <NavStlyed>
      <NavLink
        href="/"
        onClick={handleFootballButtonClick}
        className={selectedSport === "football" ? "active" : ""}
      >
        <IcoWhite
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#j46tvih8ba)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.15 4.2c4.236-4.314 11.153-4.314 15.417 0 4.235 4.286 4.235 11.286 0 15.6-4.264 4.314-11.153 4.286-15.416 0-4.236-4.286-4.236-11.314 0-15.6zm12-.657A9.35 9.35 0 0 0 5.225 5.286c-2.965 3-3.53 7.485-1.723 11.057l1.835-.772L8.33 18.6l-.762 1.857c3.53 1.829 7.962 1.229 10.927-1.743 2.937-3 3.501-7.514 1.723-11.085L18.38 8.4l-2.993-3.029.763-1.828zm.763 8.371 1.412 3.629-2.965 3-3.558-1.4.932-4.257 4.179-.972zM8.16 5.486 11.69 7l-.763 4.057-4.038.743-1.468-3.543L8.16 5.486z"
            />
          </g>
          <defs>
            <clipPath id="j46tvih8ba">
              <path fill="currentColor" d="M0 0h24v24H0z" />
            </clipPath>
          </defs>
        </IcoWhite>
        {t.football}
      </NavLink>
      <NavLink
        href="/"
        onClick={handleBasketballButtonClick}
        className={selectedSport === "basketball" ? "active" : ""}
      >
        <IcoWhite
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#yjyt02v9wa)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M21.402 12.8c.029-.257.029-.514.029-.8 0-5.429-4.292-9.857-9.572-9.857-5.28 0-9.572 4.428-9.572 9.857 0 5.429 4.292 9.857 9.572 9.857 4.998-.028 9.12-4 9.543-9.057zm-1.666-3.371c-.169-.086-.338-.172-.48-.229-1.044-.371-2.23-.2-3.049.2a13.571 13.571 0 0 0-.847-1.029c1.327-1.028 2.09-1.514 2.767-1.914a8.633 8.633 0 0 1 1.61 2.972zm.34 3.342c-.085 1.143-.424 2.2-.904 3.172-.31-1.886-1.045-3.657-2.203-5.4.48-.2 1.186-.286 1.836-.057.819.285 1.242 1.057 1.27 2.285zm-6.58-6.285c.48-.572.706-1.286.678-2-.028-.257-.056-.486-.141-.715a8.23 8.23 0 0 1 3.134 1.715c-.678.4-1.468.943-2.71 1.914-.34-.343-.65-.629-.96-.914zm-1.355-3c.424.257.678.628.706 1.085.028.372-.113.772-.395 1.086a9.932 9.932 0 0 0-3.53-1.628c.904-.372 1.892-.543 2.937-.543h.282zm-5.082 1.6c1.637.143 2.993.571 4.292 1.428-1.243.686-2.57 1.029-3.84 1.315-1.186.285-2.316.571-3.332 1.114a8.19 8.19 0 0 1 2.88-3.857zM3.67 10.97c.988-1.085 2.456-1.457 4.122-1.857 1.468-.371 3.134-.771 4.687-1.771.31.257.621.543.932.857-3.925 3.2-6.777 6.686-8.301 8.629a8.68 8.68 0 0 1-1.497-4.886c-.028-.286 0-.629.057-.972zm2.287 6.972c1.468-1.886 4.348-5.457 8.357-8.743.31.371.622.714.876 1.086-1.469 1.914-1.78 3.114-2.457 6.257-.31 1.514-.96 2.914-1.779 3.914a8.192 8.192 0 0 1-4.997-2.514zm6.607 2.514a11.728 11.728 0 0 0 1.44-3.628c.62-2.858.875-3.886 1.976-5.4 1.27 1.971 1.92 4.028 2.033 6.2-1.355 1.6-3.275 2.657-5.45 2.828z"
            />
          </g>
          <defs>
            <clipPath id="yjyt02v9wa">
              <path fill="currentColor" d="M0 0h24v24H0z" />
            </clipPath>
          </defs>
        </IcoWhite>
        {t.basketball}
      </NavLink>
      <NavLink
        href="/"
        onClick={handleAmFootballButtonClick}
        className={selectedSport === "american-football" ? "active" : ""}
      >
        <IcoWhite
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#agkd6xzsxa)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.193 3.8c4.8 0 6.804 3.2 7.115 5.714h.706c.367 0 .65.286.65.658a.643.643 0 0 1-.65.657h-.65V13.6c0 .343 0 .686.029 1h2.739c.988 0 1.072.8 1.1 1.057v3.4c0 .772-.366 1.115-1.129 1.115-.79 0-3.162-.343-3.84-4.2h-2.089c-.282 3.342-2.739 3.628-3.53 3.628-1.242 0-2.287-.514-3.218-1.543-.198-.2-.424-.543-.593-.8a.87.87 0 0 1-.141-.2l-.076-.076-1.647-.01c-.395 0-1.13-.171-1.355-1.285a15.468 15.468 0 0 0-.339-1.114c-.339-.943-.734-2.115-.734-3.63 0-3.428 2.936-7.142 7.652-7.142zm9.685 12.171h-2.316c.367 1.743 1.158 2.772 2.316 2.858v-2.857zm-9.713-10.8c-3.897 0-6.325 3-6.325 5.8 0 1.286.339 2.286.65 3.172.14.428.282.857.366 1.257.029.143.029.2.057.229H6.55c.48 0 .847.2 1.158.628.057.057.113.143.17.229.14.228.338.514.48.657.875 1 1.665 1.114 2.258 1.114 1.469 0 2.23-.971 2.23-2.886v-.084l-.015-.486c-.019-.322-.05-.639-.069-.944-.113-1.257-.197-2.457.565-3.314.536-.572 1.355-.886 2.626-.972-.254-1.8-1.694-4.4-5.788-4.4zm.282 9.429c.734 0 1.327.6 1.327 1.343s-.593 1.343-1.327 1.343-1.327-.6-1.327-1.343.593-1.343 1.327-1.343zm5.562-3.743c-.875.057-1.44.229-1.722.543-.367.429-.31 1.257-.226 2.314.028.258.028.572.056.886h1.92c-.028-.314-.028-.657-.028-1v-2.743z"
            />
          </g>
          <defs>
            <clipPath id="agkd6xzsxa">
              <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
          </defs>
        </IcoWhite>
        {text}
      </NavLink>
    </NavStlyed>
  );
}
