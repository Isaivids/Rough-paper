export const ADD ='ADD';
export const REMOVE ='REMOVE';
export const EDIT ='EDIT';
export const PROGRESS ='PROGRESS';
export const RESET ='RESET';


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

export function edit(data) {
    return{
        type: EDIT,
        payload: data,
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