import { faSpinner, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const CharacterInfo = ({ character, setShowingModal }: any) => {
  return (
    <div className="modal">
      <div className="card w-2/4 min-w-fit text-black">

        <button
          aria-label="Cerrar"
          className="bg-red-500 hover:bg-red-600 max-h-fit max-w-fit min-h-fit m-0 h-8 py-0  px-2 self-end transition-all hover:transition-all"
          onClick={() => setShowingModal(false)}>

          <FontAwesomeIcon icon={faX} />
        </button>

        <h3>{character.name}</h3>
        <hr />

        <div className="flex flex-row justify-between space-x-1">
          <div>
            <div className="align-top">
              <span>Status:</span>
              {character.status === "Alive"
                ? "Alive 👍🏼"
                : character.status === "Dead"
                ? "Dead 💀"
                : "Unknown ❔"}
            </div>

            <div>
              <span>Species:</span> {character.species}
            </div>

            <div>
              <span>Gender:</span>
              {character.gender === "Male" ? "Male 👨‍🦱" : "Female 👩"}
            </div>

            <div>
              <span>First appearance:</span>
              <a
                href={character.episode[0]}
                target="_blank"
                rel="noreferrer"
                className="hyperlink"
              >
                Episode {character.episode[0].replace(/\D/g, "")}
              </a>
            </div>

            <div>
              <span>Last appearance:</span>
              <a
                href={character.episode[character.episode.length - 1]}
                target="_blank"
                rel="noreferrer"
                className="hyperlink"
              >
                Episode {character.episode[character.episode.length - 1].replace(/\D/g,"")}
              </a>
            </div>
            <div>
              <span>Last known location:</span>
              <a
                href={character.location.url}
                target="_blank"
                rel="noreferrer"
                className="hyperlink"
              >
                {character.location.name}
              </a>
            </div>
          </div>
          <div className=" flex justify-center items-center">
            <FontAwesomeIcon
              className="absolute z-0 fa-3x fa-spin-pulse"
              icon={faSpinner}
            />
            <img
              className="z-10 border-8 border-black"
              src={character.image}
              alt={character.name}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
