const initState = {
    projects: [
        {id:'1', title:'Title-1', content:'Content-1'},
        {id:'2', title:'Title-2', content:'Content-2'},
        {id:'3', title:'Title-3', content:'Content-3'}
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('Created project ', action.project);
            
            return {
                ...state,
                projects: [...state.projects, action.project]
            }
        case 'CREATE_PROJECT_ERROR':
            console.log('Created project error ', action.err);
            return state;
        case 'GET_ALL_PROJECTS':
            console.log('Retrive all projects ', action.payload);
            return {
                ...state,
                projects: [...action.payload]
            }
        default:
            return state;
    }
}

export default projectReducer
