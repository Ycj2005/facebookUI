const axios = require('axios');
axios.defaults.baseURL = 'http://localhost:3000/api';


// send any post request throught axios 
/* this function used for sending a post data to url
user need to pass url and data in following manner 
url : "endpoint of request " eg: https://www.example.com/endpoint/ex/..."
data : "json object"
sucessfull request return a server responce "
*/
const doPost = async (url,data={})=>{
    try {
        const res = await axios.post(url,data);
        return res.data;
    } catch (error) {
        return error;
    }
}


// send any post request throught axios 
/* this function used for sending a post data to url
user need to pass url and data in following manner 
url : "endpoint of request " eg: https://www.example.com/endpoint/ex/..."
data : "json object"
sucessfull request return a server responce "
*/
const doGet = async (url,data={})=>{
    try {
        const res = await axios.post(url,data)
        return res;
    } catch (error) {
        return error;
    }
}

export {doPost,doGet}