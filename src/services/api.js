import axios from "axios";
// import config from "../config";

// axios default configs
const Api = axios.create();
Api.defaults.baseURL = 'http://localhost:8000/api'

export default Api