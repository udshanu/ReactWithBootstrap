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
            dispatch({type: 'GET_ALL_PROJECTS_ERROR', err});
        })
        
    }
};