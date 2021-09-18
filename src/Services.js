import axios from "axios";
axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const getQuestions = () => {
    return axios.get('http://localhost:3031/questions', {}).then((response) => {
        console.log('get question:', response);
        return response.data.data;
    }).catch((error) => {
        console.log('error:', error);
    });
};

const postRate = (rate) => {
    axios.post('http://localhost:3031/rates', { rate }).then((response) => {
        console.log('post rate:', response);
    }).catch((error) => {
        console.log('error:', error);
    });
};

const postResponse = (response) => {
    axios.post('http://localhost:3031/responses', { response }).then((response) => {
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
