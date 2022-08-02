import { useDispatch } from "react-redux";
import { actionsCharacterList } from "./actionsCharacterList";

const initialState = [{}];

export function reducerCharacterList(state=initialState, action:any){

    switch(action.type){
        case actionsCharacterList.RELOAD_LIST:
            return [...action.payload.characters];
        
       
        default:
            return state;
    }
}