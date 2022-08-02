import { combineReducers, compose, createStore } from "redux"
import { reducerCharacterList } from "./Characters/CharacterList/reducerCharacterList"

const allReducers = combineReducers(
  {  characters: reducerCharacterList }
)
const composeEnhancers = ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()) || compose;

export const rootStore = createStore(allReducers, composeEnhancers);