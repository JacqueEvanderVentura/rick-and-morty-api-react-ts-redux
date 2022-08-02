import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { actionsCharacterList } from "../../Logic/Characters/CharacterList/actionsCharacterList";
import { CharacterList } from "./CharacterList/CharacterList";

export const CharactersHub = () => {
  // const dispatch = useDispatch();
  let [page, setPage] = useState(1);  
  
  function handlePreviousPage5Jump(){
    page < 6? setPage(42):setPage(page - 5)
    // return dispatch({type:actionsCharacterList.SET_PAGE, payload:{page:page}})
  }
  
  function handlePreviousPage1Jump(){
    page < 2? setPage(42):setPage(--page) 
    // return dispatch({type:actionsCharacterList.SET_PAGE, payload:{page:page}})

  }
  
  function handleNextPage1Jump(){
    page > 41? setPage(1):setPage(++page) 
    // return dispatch({type:actionsCharacterList.SET_PAGE, payload:{page:page}})

  }
  
  function handleNextPage5Jump(){
    page > 37? setPage(1):setPage(page + 5) 
    // return dispatch({type:actionsCharacterList.SET_PAGE, payload:{page:page}})

  }

 

  return (
    <div className="flex items-center justify-center bg-stone-300 w-screen h-screen ">
      <div className="flex flex-col bg-[#8888] w-3/4 h-5/6 min-w-fit min-h-fit p-3 rounded-lg">

        <div className="flex flex-row justify-between items-center">
          <div className="space-x-2">
            <button title="5 steps to previous page" onClick={handlePreviousPage5Jump}><FontAwesomeIcon icon={faChevronLeft}/><FontAwesomeIcon icon={faChevronLeft}/></button>
            <button title="1 step to previous page" onClick={handlePreviousPage1Jump}><FontAwesomeIcon icon={faChevronLeft}/></button>
          </div>
            {page}
          <div className="space-x-2">
            <button title="1 step to next page" onClick={handleNextPage1Jump}><FontAwesomeIcon icon={faChevronRight}/></button>
            <button title="5 steps to next page" onClick={handleNextPage5Jump}><FontAwesomeIcon icon={faChevronRight}/><FontAwesomeIcon icon={faChevronRight}/></button>
          </div>
         </div>

          <CharacterList page={page} />
      </div>
    </div>
  );
};
