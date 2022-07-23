import { ADD, ASC, DSC, PROGRESS, REMOVE, RESET, UPDATE_TODO } from "./Actions";
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
        
        case UPDATE_TODO:
                let updatedContent = [...state];
                let index = -1;
                for (let i = 0; i < updatedContent.length; i++) {
                    index++;
                    if (updatedContent[i].id === action.payload.id) {
                        break;
                    }
    
                }
                if (index !== -1) {
                    updatedContent[index] = action.payload;
                    return updatedContent;
                }
                break;
        
        case ASC:
            let asc = [...state];
            asc.sort((a, b) => (a.content > b.content) ? 1 : -1);
            return asc;

        case DSC:
            let dsc = [...state];
            dsc.sort((a, b) => (b.content > a.content) ? 1 : -1);
            return dsc;
    
        default:
            return state;
    }

}

