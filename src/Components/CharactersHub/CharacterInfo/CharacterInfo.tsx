import { faSpinner, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { trackPromise } from 'react-promise-tracker';

export const CharacterInfo = ({ character, characterId, setShowingModal }: any) => {

  const [selectedCharacter, setSelectedCharacter] = useState(character);

    useEffect(()=>{
      if(characterId){
        trackPromise(
          fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
          .then((response) => response.json())
          .then((data) => setSelectedCharacter(data))
        )}
    }
    ,[characterId])

  return (
    <div className="modal">
      <div className="card w-2/4 min-w-fit text-black ">

        <button
          aria-label="Cerrar"
          className="bg-red-500 hover:bg-red-600 max-h-fit max-w-fit min-h-fit m-0 h-8 py-0  px-2 self-end transition-all hover:transition-all"
          onClick={() => setShowingModal(false)}>

          <FontAwesomeIcon icon={faX} />
        </button>
        <h3>{selectedCharacter?.name}</h3>
        <hr />

        <div className="flex flex-col md:flex-row justify-between space-x-1">
          <div>
            <div className="align-top">
              <span>Status: </span>
              {selectedCharacter?.status === "Alive"
                ? "Alive 👍🏼"
                : selectedCharacter?.status === "Dead"
                ? "Dead 💀"
                : "Unknown ❔"}
            </div>

            <div>
              <span>Species: </span> {selectedCharacter?.species}
            </div>

            <div>
              <span>Gender: </span>
              {selectedCharacter?.gender === "Male" ? "Male 👨‍🦱" : "Female 👩"}
            </div>

            <div>
              <span>First appearance: </span>
              <a
                href={selectedCharacter?.episode[0]}
                target="_blank"
                rel="noreferrer"
                className="hyperlink"
              >
                Episode {selectedCharacter?.episode[0].replace(/\D/g, "")}
              </a>
            </div>

            <div>
              <span>Last appearance: </span>
              <a
                href={selectedCharacter?.episode[selectedCharacter?.episode.length - 1]}
                target="_blank"
                rel="noreferrer"
                className="hyperlink"
              >
                Episode {selectedCharacter?.episode[selectedCharacter?.episode.length - 1].replace(/\D/g,"")}
              </a>
            </div>
            <div>
              <span>Last known location: </span>
              <a
                href={selectedCharacter?.location.url}
                target="_blank"
                rel="noreferrer"
                className="hyperlink"
              >
                {selectedCharacter?.location.name}
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
              src={selectedCharacter?.image}
              alt={selectedCharacter?.name}
            />
          </div> 
        </div>
      </div>
    </div>
  );
};
