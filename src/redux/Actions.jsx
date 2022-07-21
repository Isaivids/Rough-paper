export const ADD ='ADD';
export const REMOVE ='REMOVE';
export const EDIT ='EDIT';


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