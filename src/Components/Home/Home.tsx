import React from "react";

export const Home = () => {
  return (
    <div className="bg-1 flex justify-center items-start w-screen h-screen">
      <img
        src={require("../../Assets/bg/rick-and-morty-logo.png")}
        alt="logo ricky"
        // className="scale-[.3]"
      />
    </div>
  );
};
