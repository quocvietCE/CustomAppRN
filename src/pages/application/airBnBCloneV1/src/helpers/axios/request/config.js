import axios from 'axios';
import errorHandler from './errorHandler';
import tokenHandler from './tokenHandler';

export default axios.interceptors.request.use(tokenHandler, errorHandler);
