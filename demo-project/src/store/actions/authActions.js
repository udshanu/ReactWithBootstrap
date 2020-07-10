import api from '../../actions/api';

export const signUp = (signup) => {
    return (dispatch, getState) => {
        api.auth().signUp(signup).then(() => {
            dispatch({type: 'SIGNUP', payload: signup});
        }).catch((err) => {
            dispatch({type: 'SIGNUP_ERROR', err});
        })
        
    }
};

export const signIn = (credentials) => {
    return (dispatch, getState) => {
        api.auth().signIn(credentials).then((response) => {
            console.log('Login Response: ', response);

            localStorage.setItem('token', response.data.token);

            dispatch({type: 'LOGIN_SUCCESS', payload: response.data});
            
        }).catch((err) => {
            dispatch({type: 'LOGIN_ERROR', err});
        })
        
    }
};

export const signOut = () => {
    return (dispatch, getState) => {
        api.auth().signOut().then((response) => {
            console.log('signOut Response: ', response);

            if (response.data.succeeded) {
                localStorage.removeItem('token');
                dispatch({type: 'SIGNOUT_SUCCESS', payload: response.data});
            }
            else {
                dispatch({type: 'SIGNOUT_ERROR'});
            }
            
        }).catch((err) => {
            dispatch({type: 'SIGNOUT_ERROR', err});
        })
        
    }
};