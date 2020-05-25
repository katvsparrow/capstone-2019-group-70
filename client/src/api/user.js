import axios from 'axios';

const base = "http://localhost:3000/";

export default {
    getFavoritedWills: async(id) => {
        let res = await axios.get(`api/users/getFavoritedWillsByID/${id}`);
        return res.data; 
    }, 
    
    getUserInformation: async(uid) => {
        let res = await axios.get(base + `api/users/getUserInformation/${uid}`);
        return res.data[0]; 
    }, 

    createUser: async(user_id, username) => {
        let payload = {
            user_id: user_id, 
            username: username
        }

        await axios.post(`api/users/createNewUser/`, payload)
            .then((response) => {
                return response;
            }, (error) => {
                return error;
            });
    }
}