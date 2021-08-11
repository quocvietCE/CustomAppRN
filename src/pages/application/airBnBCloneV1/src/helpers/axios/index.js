import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import API_URL from '../../config/constants/ApiUrl';
import './request/config';
import './response/config';

export default (url, method, data, headers) =>
  new Promise(async (resolve, reject) => {
    try {
      let defaultHeader = {
        'Content-type': 'application/json',
      };
      /** for action has no token */
      if (url !== API_URL.LOGIN && url !== API_URL.REGISTER) {
        const token = await AsyncStorage.getItem('TOKEN');
        if (token) {
          defaultHeader = {
            'Content-type': 'application/json',
            Authorization: `Bearer ${token}`,
          };
        }
      }

      const response = await axios.request({
        data,
        headers: {
          ...defaultHeader,
          ...headers,
        },
        method,
        url,
        timeout: 60000,
      });
      console.log('response API: ', response);
      resolve(response.data);
    } catch (error) {
      reject(error);
    }
  });
