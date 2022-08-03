import { reducerAllCharacters } from "./reducerAllCharacters";
import { createStore } from "redux";

export const storeAllCharacters = createStore(reducerAllCharacters as any);