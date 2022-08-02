import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const Landing = ({parallaxRef}:any) => {
  return (
    <div className="bg-1 bg-stone-300 flex flex-col justify-center items-start w-screen h-screen">
      <img
        src={require("../../Assets/bg/rick-and-morty-logo.png")}
        alt="logo ricky"
        // className="scale-[.3]"
      />
        <FontAwesomeIcon 
        onClick={() => parallaxRef && parallaxRef.current.scrollTo(1)}
        className="fa-4x fa-bounce text-[#000] self-center cursor-pointer" icon={faChevronDown} />
    </div>
  );
};
