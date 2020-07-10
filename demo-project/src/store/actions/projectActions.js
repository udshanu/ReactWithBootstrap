import api from '../../actions/api';

export const createProject = (project) => {
    return (dispatch, getState) => {
        //make async call to database
        api.project().create(project).then(() => {
            dispatch({type: 'CREATE_PROJECT', project});
        }).catch((err) => {
            dispatch({type: 'CREATE_PROJECT_ERROR', err});
        })
        
    }
};

export const getAllProjects = () => {
    return (dispatch, getState) => {
        //make async call to database
        api.project().getAll().then((response) => {
            console.log('All project response: ', response);
            dispatch({type: 'GET_ALL_PROJECTS', payload: response.data});
        }).catch((err) => {
            if (!err.response) {
                // network error
                var errorStatus = 'Error: Network Error';
                console.log('Error: Network Error', errorStatus);
            } else {
                var errorStatus = err.response.data.message;
                console.log('OTher error', errorStatus);
            }

            localStorage.removeItem('token');
            dispatch({type: 'GET_ALL_PROJECTS_ERROR', err});
        })
        
    }
};