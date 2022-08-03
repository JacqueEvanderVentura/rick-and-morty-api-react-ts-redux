import React, { createContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionsCharacterList } from "../../../Logic/Characters/CharacterList/actionsCharacterList";
import { CharacterInfo } from "../CharacterInfo/CharacterInfo";

export const CharacterList = ({ page }: any) => {
  const [showingModalCharacterInfo, setShowingModalCharacterInfo] =
    useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState("Rick Sanchez");

  const dispatch = useDispatch();
  const handleLoadCharacters = () => {
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((response) => response.json())
      .then((data) =>
        dispatch({
          type: actionsCharacterList.RELOAD_LIST,
          payload: { characters: data.results },
        })
      );
  };
  useEffect(() => handleLoadCharacters(), [page]);

  const characters = useSelector((state: any) => state.characters);

  function handleModal(character: any) {
    setShowingModalCharacterInfo(true);
    setSelectedCharacter(character);
  }
  return (
    <div className="flex justify-center ">
      <table className="table-fixed w-full text-center">
          <thead>
            <tr className="text-xl bg-[#0002] whitespace-nowrap">
              <th>Full name</th>
              <th>First appearance</th>
            </tr>
          </thead>
          
          <tbody>
            {characters.map((character: any, index: number) => (
              <tr key={index}>
                <td>
                  <span className="cursor-pointer hyperlink" onClick={() => handleModal(character)}>
                    {character.name}
                  </span>
                </td>
                <td>
                  Episode {character.episode && character.episode[0].replace(/\D/g, "")}
                </td>
              </tr>
            ))}
          </tbody>
      </table>
      {showingModalCharacterInfo && (
        <CharacterInfo
          setShowingModal={setShowingModalCharacterInfo}
          character={selectedCharacter}
        />
      )}
    </div>
  );
};
