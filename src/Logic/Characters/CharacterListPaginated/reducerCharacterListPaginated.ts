import { actionsCharacterListPaginated } from "./actionsCharacterListPaginated";

const initialState = [{}];

export function reducerCharacterListPaginated(state=initialState, action:any){

    switch(action.type){
        case actionsCharacterListPaginated.RELOAD_LIST:
            return [...action.payload.charactersPaginated];
    
        default:
            return state;
    }
}