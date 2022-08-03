import { actionsAllCharacters } from "./actionsAllCharacters";

const initialState = [{}];

export function reducerAllCharacters(state=initialState, action:any){

    switch(action.type){
        case actionsAllCharacters.GET_ALL_CHARACTERS:
            return [...state, ...action.payload.allCharacters]
        default:
            return state;
    }
}