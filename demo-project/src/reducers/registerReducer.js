import { ACTION_TYPES } from '../actions/RegisterAction';

const initialState = {
    employeelist: [],
    loginData: []
}

export const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.CREATE:
            return{
                ...state,
                employeelist: [...state.employeelist, action.payload] 
            }
        case ACTION_TYPES.LOGIN:
            return{
                ...state,
                loginData: [...state.loginData, action.payload] 
            }
    
        default:
            return state;
    }
}