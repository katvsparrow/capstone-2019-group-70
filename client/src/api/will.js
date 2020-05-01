import axios from 'axios';

// Define axios methods for will retrieval
export default {
    getDocumentByID: async(id) => {
        let res = await axios.get(`api/documents/getDocumentByID/${id}`);
        return res.data;
    },

    getRandomDocuments: async(num) => {
        let res = await axios.get(`api/documents/getRandomDocuments/${num}`);
        return res.data;
    }
}