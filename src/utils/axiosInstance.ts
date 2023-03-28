import axios from 'axios';

export const APIinstance = axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 5000,
});
