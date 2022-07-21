import { ADD, REMOVE } from "./Actions";
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
    
        default:
            return state;
    }

}

