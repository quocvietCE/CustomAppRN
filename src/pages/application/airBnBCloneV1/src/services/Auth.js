import api from '../helpers/axios';
import API_URL from '../config/constants/apiUrl';
import {API_METHOD} from '../config/constants/enumsAPI';

export const requestLogin = (phone, password) =>
  api(API_URL.LOGIN, API_METHOD.POST, {
    country_code: 'vn',
    phone,
    password,
  });
