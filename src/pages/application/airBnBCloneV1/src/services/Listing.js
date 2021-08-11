import api from '../helpers/axios';
import API_URL from '../config/constants/ApiUrl';
import {API_METHOD} from '../config/constants/EnumsAPI';

export const getListing = (isLoading = true) =>
  api(API_URL.PRODUCT, API_METHOD.GET, null, {isLoading});
