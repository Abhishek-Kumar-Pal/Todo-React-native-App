export const ADD ='ADD';
export const REMOVE ='REMOVE';
export const UPDATE ='UPDATE';

export const add = (item) => {
    return {type: ADD , value: item};
};

export const remove = (id) => {
    return {type: REMOVE , id:id};
};

export const update= (id) => {
    return {type: UPDATE , id:id};
};