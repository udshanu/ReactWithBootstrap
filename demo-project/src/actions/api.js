import axios from 'axios';

//const baseUrl = "http://localhost:7068/api/";
const baseUrl = "http://localhost:3477/";

export default {
    // dCandidate(url = baseUrl + 'user/'){
    //     return {
    //         fetchAll: () => axios.get(url),
    //         fetchById: id => axios.get(url + id),
    //         create: data => axios.post(url, data),
    //         update: (id, updateRecord) => axios.put(url + id, updateRecord),
    //         delete: id => axios.delete(url + id)
    //     }
    // },
    auth(url = baseUrl + 'Account/'){
        return {
            signUp: data => axios.post(url + 'Register/', data),
            signIn: data => axios.post(url + 'Login/', data),
            signOut: () => axios.post(url + 'Logout/')
        }
    },
    project(url = baseUrl + 'Project/'){
        return {
            create: data => axios.post(url + 'CreateProject/', data),
            //getAll: () => axios.get(url + 'GetAllProjects/')
            getAll: () => axios.get(url + 'GetAllProjects/', {headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`}})
            //getAll: () => axios.get(baseUrl + 'UserProfile/' + 'GetUserProfile/', {headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`}})
        }
    }
}