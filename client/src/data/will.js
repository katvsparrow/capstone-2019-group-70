import axios from 'axios';

export default {
    getDocumentByID: async(id) => {
        let res = await axios.get(`api/documents/getDocumentByID/${id}`);
        console.log(res);
        console.log('----------------');
        console.log(res.data);
        return res.data;
    }
}