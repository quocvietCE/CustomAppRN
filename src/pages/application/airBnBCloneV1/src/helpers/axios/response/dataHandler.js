import {setLoading} from '../../../store/slice/AppSlice';
import store from '../../../store';

const dataHandler = (data) => {
  console.log('dataHandler data: ', data);
  store.dispatch(setLoading(false));
  return {
    data: data?.data,
    method: data.config.method,
    url: data.config.url,
    status: data.status,
  };
};

export default dataHandler;
