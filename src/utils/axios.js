import axios from 'axios';
 
const instance = axios.create({
  baseURL: 'http://localhost:8080',
  withCredentials: true
});

// instance.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem('jwt'); // Retrieve the token from localStorage
//     if (token) {
//       config.headers['Authorization'] = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export default instance;