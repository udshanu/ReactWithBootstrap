import api from './api';

export const ACTION_TYPES = {
    CREATE : 'CREATE',
   UPDATE :'UPDATE',
   DELETE:'DELETE',
   FETCH_ALL:'FETCH_ALL',
   LOGIN:'LOGIN'
}

export const create = (data, onSuccess) => {
    return dispatch => {
        api.register().create(data).then(response => {
            dispatch({
                type: ACTION_TYPES.CREATE,
                payload: response.data.message
            })

            onSuccess();
        }).catch(err => console.log(err))
    };
}

export const Login = (data, onSuccess) => {
    return dispatch => {
        api.register().login(data).then(response => {
            dispatch({
                type: ACTION_TYPES.LOGIN,
                payload: response.data
            })

            onSuccess(response);
        }).catch(err => console.log(err))
    };
}