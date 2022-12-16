import axios from "axios";

axios.defaults.baseURL = "https://d-rest-framework.herokuapp.com/";
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;


// create request and response instances
export const axiosReq = axios.create();
export const axiosRes = axios.create();
