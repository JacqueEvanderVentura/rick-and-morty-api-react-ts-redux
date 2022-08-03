import {
  faChevronLeft,
  faChevronRight,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { CharacterInfo } from "./CharacterInfo/CharacterInfo";
import { CharacterListPaginated } from "./CharacterList/CharacterList";

export const CharactersHub = () => {
  let [page, setPage] = useState(1);

  function handlePreviousPage5Jump() {
    page < 6 ? setPage(42) : setPage(page - 5);
  }

  function handlePreviousPage1Jump() {
    page < 2 ? setPage(42) : setPage(--page);
  }

  function handleNextPage1Jump() {
    page > 41 ? setPage(1) : setPage(++page);
  }

  function handleNextPage5Jump() {
    page > 37 ? setPage(1) : setPage(page + 5);
  }

  const allCharacters = useSelector((state:any)=>state.allCharacters)

  const [showingModalCharacterInfo, setShowingModalCharacterInfo] = useState(false);
  const [selectedIdCharacter, setSelectedIdCharacter] = useState("Rick Sanchez");

  const refCharacter = useRef() as any;

  function handleModal(character: any) {
    setSelectedIdCharacter(character);
    setShowingModalCharacterInfo(true);
    refCharacter.current.value = ''
  }

  return (
    <div className="flex items-center justify-center bg-[#262c3a] bg-2 text-white w-screen h-screen custom-scrollbar-div  ">
      <div className="flex flex-col bg-[#0009] w-screen sm:w-4/6 h-5/6 p-3 rounded-lg overflow-x-auto space-y-7 ">
        <div className="sticky top-0">
          <div className="flex justify-center text-black">
            <input ref={refCharacter} className="w-56 px-2 placeholder:italic placeholder:text-center placeholder:pl-6 outline-none" list="allCharactersDataList" placeholder="-- Select character id --"/>
            <datalist id='allCharactersDataList' >
              {allCharacters.map((character:any, index:number)=>
                <option key={index} value={character.id}>{character.name}</option>
                )}
            </datalist>
            <button onClick={()=>handleModal(refCharacter.current.value)}><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div className="space-x-2 ">
              <button
                title="5 steps to previous page"
                onClick={handlePreviousPage5Jump}
              >
                <FontAwesomeIcon icon={faChevronLeft} />
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <button
                title="1 step to previous page"
                onClick={handlePreviousPage1Jump}
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
            </div>
            <h3>{page}</h3>
            <div className="space-x-2">
              <button title="1 step to next page" onClick={handleNextPage1Jump}>
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
              <button
                title="5 steps to next page"
                onClick={handleNextPage5Jump}
              >
                <FontAwesomeIcon icon={faChevronRight} />
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </div>
        </div>
        <div>
          <CharacterListPaginated page={page}/>
        </div>
      </div>
      {showingModalCharacterInfo && <CharacterInfo characterId={selectedIdCharacter} setShowingModal={setShowingModalCharacterInfo}/>}
    </div>
  );
};
