import axios from 'axios';

export default {
    getFavoritedWills: async(id) => {
        let res = await axios.get(`api/users/getFavoritedWillsByID/${id}`);
        return res.data; 
    }, 
    
    getUserInformation: async(user_id) => {
        let res = await axios.get(`api/users/getUserInformation/${user_id}`);
        return res.data; 
    }, 

    createUser: async(user_id, username) => {
        let payload = {
            user_id: user_id, 
            username: username
        }
        
        console.log(payload);

        await axios.post(`api/users/createNewUser/`, payload)
            .then((response) => {
                return response;
            }, (error) => {
                return error;
            });
    }
}