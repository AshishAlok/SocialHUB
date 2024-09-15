import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000',
  timeout: 5000 // Adjust timeout as needed
});



export default api;
