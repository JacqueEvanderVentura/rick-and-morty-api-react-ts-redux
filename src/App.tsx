import { useEffect, useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import { Landing } from "./Components/Landing/Landing";
import { CharactersHub } from "./Components/CharactersHub/CharactersHub";
import { useDispatch } from "react-redux";
import { actionsAllCharacters } from './Logic/Characters/AllCharacters/actionsAllCharacters'


function App() {
const dispatch = useDispatch()
  
useEffect(()=>{
  for (let i = 0; i < 43; i++) {
    fetch(`https://rickandmortyapi.com/api/character?page=${i}`)
      .then((response) => response.json())
      .then((data) =>
        dispatch({
          type: actionsAllCharacters.GET_ALL_CHARACTERS,
          payload: { allCharacters: data.results },
        })
      );
  }
},[])
  const parallaxRef = useRef<any>(null);

  return (
    <Parallax ref={parallaxRef} pages={2}>

      <ParallaxLayer offset={0} speed={0.1}>
        <Landing parallaxRef={parallaxRef} />
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={0}>
        <CharactersHub />
      </ParallaxLayer>

    </Parallax>
  );
}

export default App;
