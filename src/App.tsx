import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import {Home} from './Components/Home/Home';

function App() {

  return (
    <Parallax pages={2}>
      <ParallaxLayer offset={0} speed={1}>
        <Home />
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={1}>
        
      </ParallaxLayer>
    </Parallax>
  );
}

export default App;
