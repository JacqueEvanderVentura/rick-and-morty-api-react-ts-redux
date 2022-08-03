import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionsCharacterList } from "../../../Logic/Characters/CharacterList/actionsCharacterList";

export const CharacterList = ({page}:any) => {
  const dispatch = useDispatch();
  
  const handleLoadCharacters=()=>{
        fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
        .then(response=> response.json())
        .then(data=>dispatch({type: actionsCharacterList.RELOAD_LIST, payload:{characters:data.results}}))
}
  useEffect(()=>handleLoadCharacters(),[page])

  const characters = useSelector((state:any)=> state.characters)

  return (
    <table>
      <thead>
        <tr className="text-xl">
          <th>Full name</th>
          <th>First appearance</th>
        </tr>
      </thead>
      <tbody>
        {characters.map((character:any, index:number)=>
          <tr key={index}>
            <td>{character.name}</td>
            <td>Episode {character.episode && character.episode[0].replace(/\D/g,'')}</td>
          </tr>
          )}
      </tbody>
    </table>
  );
};
