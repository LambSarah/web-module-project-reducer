export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = 'CLEAR_DISPLAY';
export const SET_MEMORY = 'SET_MEMORY';
export const RECALL_MEMORY = 'RECALL_MEMORY';
export const CLEAR_MEMORY = 'CLEAR_MEMORY';

export const addOne = () => {
    return ({ type: ADD_ONE });
}

export const applyNumber = (number) => {
    console.log('number clicked:', number)
    return ({ type: APPLY_NUMBER, payload: number });
}

export const changeOperation = (operator) => {
    console.log('changeOperation ', operator)
    return ({ type: CHANGE_OPERATION, payload: operator });
}

export const clearDisplay = () => {
    console.log('display cleared');
    return ({ type: CLEAR_DISPLAY });
}

export const setMemory = (total) => {
    console.log('setMemory: ', total);
    return ({ type: SET_MEMORY, payload: total });
}

export const recallMemory = (memory) => {
    console.log('recallMemory: ', memory);
    return ({ type: RECALL_MEMORY, payload: memory })
}

export const clearMemory = () => {
    console.log('memoryCleared');
    return ({ type: CLEAR_MEMORY });
}