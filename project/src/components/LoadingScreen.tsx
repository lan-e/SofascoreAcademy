import { FC } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import PulseLoader from "react-spinners/PulseLoader";

export const ClipLoading = () => {
  return (
    <div
      style={{
        inset: "0",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        zIndex: 1000,
        overflowX: "hidden",
      }}
    >
      <ClipLoader color="#374df5" size={20} />
    </div>
  );
};
export const PulseLoading = () => {
  return (
    <div
      style={{
        inset: "0",
        width: "100%",
        height: "100%",
        backgroundColor: "#eff3f8",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        zIndex: 1000,
        overflowX: "hidden",
      }}
    >
      <PulseLoader color="#374df5" size={20} />
    </div>
  );
};
