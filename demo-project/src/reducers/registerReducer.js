import { ACTION_TYPES } from '../actions/register';

const initialState = {
    employeelist: []
}

export const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.CREATE:
            return{
                ...state,
                list: [...state.list, action.payload] 
            }
    
        default:
            return state;
    }
}