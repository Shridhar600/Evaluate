import axios from 'axios';
const API_URL = "http://localhost:5000/exam/";


export default {
    async getForms(userId){
        const response = await axios
            .get(API_URL + "getuserexams/" + userId);
        return response.data;
    },

    async createForm(data){
        console.log(data);
        const response = await axios
            .post(API_URL + "create", data);
        console.log(response.data);
        return response.data;
    },

    async getForm(examId){
        const response = await axios
            .get(API_URL + "exam/" + examId);
        return response.data;
    },

    async autoSave(data){
        console.log(data);
        const response = await axios
            .put(API_URL + "editexam/", data);
        console.log(response.data);
        return response.data;
    },

    async submitResponse(data){
        console.log(data);
        const response = await axios
            .post(API_URL + "addresponse", data);
        console.log(response.data);
        return response.data;
    },

    async getResponse(examId){
      //  console.log(formId);
        const response = await axios
            .get(API_URL + "getresponse/" + examId);
        return response.data;
        
    }
};
