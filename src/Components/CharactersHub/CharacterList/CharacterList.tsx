import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionsCharacterListPaginated } from "../../../Logic/Characters/CharacterListPaginated/actionsCharacterListPaginated";
import { rootStore } from "../../../Logic/rootStore";
import { CharacterInfo } from "../CharacterInfo/CharacterInfo";
import { trackPromise } from 'react-promise-tracker';
import { Loading } from "../../Loading/Loading";


export const CharacterListPaginated = ({ page }: any) => {
  const [showingModalCharacterInfo, setShowingModalCharacterInfo] =
    useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState("Rick Sanchez");

  const dispatch = useDispatch();
  const handleLoadCharacters = () => {
    trackPromise(

      fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((response) => response.json())
      .then((data) =>
      dispatch({
        type: actionsCharacterListPaginated.RELOAD_LIST,
        payload: { charactersPaginated: data.results },
      })
      )
      );
  };

  useEffect(() => handleLoadCharacters(), [page]);

  const characters = useSelector((state: any) => state.paginatedCharacters);

  function handleModal(character: any) {
    setShowingModalCharacterInfo(true);
    setSelectedCharacter(character);
  }
  return (
    <div className="flex justify-center ">
      <Loading/>
      <table className="table-fixed w-full text-center">
          <thead>
            <tr className="text-xl bg-[#000] sticky top-0 whitespace-nowrap">
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
