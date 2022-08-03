import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { usePromiseTracker } from "react-promise-tracker";

export const Loading = () => {
  const { promiseInProgress } = usePromiseTracker();

  return (
    <div className="flex justify-center items-center">
      {promiseInProgress &&
      <FontAwesomeIcon
        className="text-white fa-6x fa-spin-pulse"
        icon={faSpinner}
      />}
    </div>
  );
};
