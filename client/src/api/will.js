import axios from 'axios';

// Define axios methods for will retrieval
export default {
    getDocumentByID: async(id) => {
        let res = await axios.get(`../api/documents/getDocumentByID/${id}`);
        return res.data;
    },

    getRandomDocuments: async(num) => {
        let res = await axios.get(`api/documents/getRandomDocuments/${num}`);
        return res.data;
    }, 

    postNewDocument: async(payload) => {
        let res = await axios.post(`api/documents/`, payload)
                    .then((response) => {
                        return response;
                    }, (error) => {
                        return error;
                    });

    }
}