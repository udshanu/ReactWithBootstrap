
const initState = {
    authError: null,
    succeeded: false
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SIGNUP':
            console.log('SignUp user ', action.payload);
            
            return state 
        case 'SIGNUP_ERROR':
            console.log('SignUp error ', action.err);
            return state;
        case 'LOGIN_SUCCESS':
            console.log('login success ', action.payload);
            return {
                ...state,
            authError: null,
            succeeded: action.payload.succeeded
            };
        case 'LOGIN_ERROR':
            console.log('login error ');
            return {
                ...state,
            authError: 'Login failed.',
            isSignedIn: false
            };
        case 'SIGNOUT_SUCCESS':
            console.log('signout success ');
            return {
                ...state,
                authError: null,
                succeeded: false
            };
        case 'SIGNOUT_ERROR':
            console.log('signout error ');
            return state;
        default:
            return state;
    }
}

export default authReducer
