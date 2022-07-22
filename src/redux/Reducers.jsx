import { ADD, EDIT, PROGRESS, REMOVE, RESET } from "./Actions";
import {data} from './States'

export const reducer = (state = data, action) =>{
    switch (action.type) {
        case ADD:
            let updatedList = [...state];
            updatedList.push(action.payload)
            return updatedList;
        case REMOVE:
            let newList = [...state];
            newList = newList.filter(data => data.id !== action.payload);
            return newList;
        case PROGRESS:
            let stat = [...state];
            for (let i=0; i<stat.length ; i++){
                if(stat[i].id === action.payload){
                    stat[i].progress = !stat[i].progress;
                }
            }
            return stat;
        case RESET:
            let reset = [...state];
            reset.splice(0,state.length)
            return reset;
    
        default:
            return state;
    }

}

