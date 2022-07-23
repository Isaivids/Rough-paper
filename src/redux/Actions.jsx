export const ADD ='ADD';
export const REMOVE ='REMOVE';
export const UPDATE_TODO = "UPDATE_TODO";
export const PROGRESS ='PROGRESS';
export const RESET ='RESET';
export const DSC ='DSC';
export const ASC ='ASC';


export function add(data) {
    return{
        type: ADD,
        payload: data,
    }
}

export function remove(dataId) {
    return{
        type: REMOVE,
        payload: dataId,
    }
}

export function updateTodo(todo) {
    return {
        type:UPDATE_TODO,
        payload: todo,
    }
}

export function progress(dataId) {
    return{
        type: PROGRESS,
        payload: dataId,
    }
}

export function reset(data) {
    return{
        type: RESET,
        payload: data,
    }
}

export function asc(data) {
    return{
        type: ASC,
        payload: data,
    }
}

export function dsc(data) {
    return{
        type: DSC,
        payload: data,
    }
}