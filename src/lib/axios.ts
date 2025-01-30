import Axios, { AxiosError } from 'axios';

enum HTTP_STATUS_CODES {
  UNAUTHORIZED = 401
}

const axios = Axios.create({
  baseURL: 'https://backend-ashen-seven-22.vercel.app',
});

// Request Interceptors
axios.interceptors.request.use((config) => {
  try {
    const token = localStorage.getItem('token');

    if (token) {
      config.headers['token'] = token;
    }

    return config;
  } catch (e) {
    console.error(e);
    return config;
  }
});

// Response Interceptors
axios.interceptors.response.use(response => response, (err: AxiosError) => {
  if (err.response && err.response.status === HTTP_STATUS_CODES.UNAUTHORIZED) {
    // Delete token when time expires
    localStorage.removeItem('token');
  }
  return Promise.reject(err);
});

export default axios;
