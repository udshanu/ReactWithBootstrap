import axios from 'axios';

//const baseUrl = "http://localhost:7068/api/";
const baseUrl = "http://localhost:3477/";

export default {
    dCandidate(url = baseUrl + 'user/'){
        return {
            fetchAll: () => axios.get(url),
            fetchById: id => axios.get(url + id),
            create: data => axios.post(url, data),
            update: (id, updateRecord) => axios.put(url + id, updateRecord),
            delete: id => axios.delete(url + id)
        }
    },
    register(url = baseUrl + 'Account/Register/'){
        return {
            create: data => axios.post(url, data)
        }
    }
}