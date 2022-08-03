import { faSpinner, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const Landing = ({ parallaxRef }: any) => {
  return (
    <React.Fragment>
      <FontAwesomeIcon
        className="absolute z-0 top-1/3 left-1/3 text-white fa-6x fa-spin-pulse"
        icon={faSpinner}
      />
      <div className="bg-1 bg-stone-300 flex flex-col justify-center items-start w-screen h-screen z-20 relative">
        <img
          src={require("../../Assets/imgs/rick-and-morty-logo.png")}
          alt="logo ricky and morty"
          // className="scale-[.3]"
        />
        <FontAwesomeIcon
          onClick={() => parallaxRef && parallaxRef.current.scrollTo(1)}
          className="fa-4x fa-bounce text-[#000] self-center cursor-pointer"
          icon={faChevronDown}
        />
      </div>

    </React.Fragment>
  );
};
