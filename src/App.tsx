import { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import { Landing } from "./Components/Landing/Landing";
import { CharactersHub } from "./Components/CharactersHub/CharactersHub";



function App() {
 
  
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
