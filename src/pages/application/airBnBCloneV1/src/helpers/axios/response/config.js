import axios from 'axios';
import dataHandler from './dataHandler';
import errorHandler from './errorHandler';

export default axios.interceptors.response.use(dataHandler, errorHandler);
