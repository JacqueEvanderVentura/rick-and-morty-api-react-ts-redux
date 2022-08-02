import { reducerCharacterList } from "./reducerCharacterList";
import { createStore } from "redux";

export const storeCharacterList = createStore(reducerCharacterList as any);