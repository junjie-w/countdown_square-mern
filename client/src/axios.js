import axios from "axios";

const instance = axios.create({
  baseURL: ' https://countdown-square-backend.herokuapp.com'
})

export default instance;