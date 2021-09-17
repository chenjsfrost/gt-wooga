import axios from "axios";
axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const postRate = (rate) => {
    axios.post('http://localhost:3031/rates', { rate }).then((response) => {
        console.log('response:', response);
    }).catch((error) => {
        console.log('error:', error);
    });
}

export {
    postRate,
};
