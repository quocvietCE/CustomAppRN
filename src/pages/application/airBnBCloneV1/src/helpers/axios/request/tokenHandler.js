import {setLoading} from '../../../store/slice/AppSlice';
import store from '../../../store';

const tokenHandler = (config) => {
  console.log('tokenHandler config: ', config);
  if (config.headers.isLoading) {
    store.dispatch(setLoading(true));
  }
  return config;
};

export default tokenHandler;
