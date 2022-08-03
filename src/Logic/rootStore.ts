import { combineReducers, compose, createStore } from "redux";
import { reducerAllCharacters } from "./Characters/AllCharacters/reducerAllCharacters";
import { reducerCharacterListPaginated } from "./Characters/CharacterListPaginated/reducerCharacterListPaginated";

const allReducers = combineReducers({
  paginatedCharacters: reducerCharacterListPaginated,
  allCharacters: reducerAllCharacters,
});
const composeEnhancers =
  ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()) ||
  compose;

export const rootStore = createStore(allReducers, composeEnhancers);
