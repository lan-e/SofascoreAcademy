// import React from "react";
// import { useEffect, useState } from "react";
// import Image from "next/image";
// import styled from "styled-components";
// import Link from "next/link";

// const MobileNav = () => {
//   const [text, setText] = useState("American Football");
//   function ChangeText() {
//     if (window.innerWidth < 991) setText("Am. Football");
//     else {
//       setText("American Football");
//     }
//   }
//   useEffect(() => {
//     ChangeText();
//   }, []);

//   return (
//     <NavStlyed>
//       {/* <NavLink href="/" className="active"> */}
//       <NavLink href="/">
//         <StyledImg
//           src="img/icon_football.svg"
//           width="100"
//           height="100"
//           alt="footballico"
//         />
//         Football
//       </NavLink>
//       <NavLink href="/basketball">
//         <StyledImg
//           src="img/icon_basketball.svg"
//           width="100"
//           height="100"
//           alt="footballico"
//         />
//         Basketball
//       </NavLink>

//       <NavLink href="/american-football">
//         <StyledImg
//           src="img/icon_american_football.svg"
//           width="100"
//           height="100"
//           alt="footballico"
//         />
//         {text}
//         {/* {typeof window !== "undefined" && window.innerWidth < 991 ? (
//           <div>Am. Football</div>
//         ) : (
//           <div>American Football</div>
//         )} */}
//       </NavLink>
//     </NavStlyed>
//   );
// };

// export default MobileNav;

// const NavStlyed = styled.div`
//   position: fixed;
//   top: 64px;
//   width: 100%;
//   height: 48px;
//   display: flex;
//   justify-content: center;
//   align-items: end;
//   background-color: #374df5;
//   @media (max-width: 991px) {
//     top: 48px;
//   }
// `;

// const StyledImg = styled(Image)`
//   filter: invert(97%) sepia(44%) saturate(0%) hue-rotate(277deg)
//     brightness(106%) contrast(100%);
//   width: 16px;
//   height: 16px;
//   margin-right: 4px;
//   margin-bottom: 4px;
// `;

// const NavLink = styled(Link)`
//   color: #fff;
//   font-size: 14px;
//   padding: 14px 0;
//   width: 150px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   text-align: center;
//   border-bottom: 4px solid #374df5;
//   @media (max-width: 991px) {
//     border: 0;
//     padding: 8px 0;
//   }
//   &:hover {
//     border-bottom: 4px solid #fff;
//     cursor: pointer;
//     @media (max-width: 991px) {
//       border: 0;
//     }
//   }
//   @media (max-width: 991px) {
//     flex-direction: column;
//     margin-bottom: 0px;
//   }
//   @media (max-width: 767px) {
//     width: 100px;
//   }
// `;
