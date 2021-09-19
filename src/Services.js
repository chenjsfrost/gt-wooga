import axios from "axios";
import hostUrl from "./config/serviceConfig";
axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const getQuestions = () => {
    return axios.get(`${hostUrl}/questions`, {}).then((response) => {
        console.log('get question:', response);
        return response.data.data;
    }).catch((error) => {
        console.log('error:', error);
    });
};

const postRate = (rate) => {
    axios.post(`${hostUrl}/rates`, { rate }).then((response) => {
        console.log('post rate:', response);
    }).catch((error) => {
        console.log('error:', error);
    });
};

const postResponse = (response) => {
    axios.post(`${hostUrl}/responses`, { response }).then((response) => {
        console.log('post response:', response);
    }).catch((error) => {
        console.log('error:', error);
    });
};

export {
    getQuestions,
    postRate,
    postResponse,
};
