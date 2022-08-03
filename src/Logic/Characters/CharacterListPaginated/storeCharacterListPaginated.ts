import { reducerCharacterListPaginated } from "./reducerCharacterListPaginated";
import { createStore } from "redux";

export const storeCharacterListPaginated = createStore(reducerCharacterListPaginated as any);