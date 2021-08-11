import {setLoading} from '../../../store/slice/AppSlice';
import store from '../../../store';
import I18N from '../../../config/i18n';
import * as RootNavigation from '../../../helpers/RootNavigation';

const handleNetworkError = () => {
  RootNavigation.navigate('MyModal', {
    errorMessage: I18N.t('apiError.NetworkError'),
  });
};

const handleBadRequest = (errorKey) => {
  RootNavigation.navigate('MyModal', {errorMessage: errorKey});
};

const handleUnauthorized = () =>
  RootNavigation.navigate('MyModal', {
    errorMessage: I18N.t('apiError.SessionExpired'),
  });

const handleForbidden = () =>
  RootNavigation.navigate('MyModal', {
    errorMessage: I18N.t('apiError.Forbidden'),
  });

const handleRequestNotFound = () =>
  RootNavigation.navigate('MyModal', {
    errorMessage: I18N.t('apiError.Forbidden'),
  });

const handleMethodNotAllowed = () =>
  RootNavigation.navigate('MyModal', {
    errorMessage: I18N.t('apiError.MethodNotAllow'),
  });

const handleServerError = () =>
  RootNavigation.navigate('MyModal', {
    errorMessage: I18N.t('apiError.ServerError'),
  });

const errorHandler = (error) => {
  store.dispatch(setLoading(false));
  console.log('errorHandler error: ', error);
  const status = error?.response?.status;
  if (error.message === 'Network Error' && !error.response) {
    handleNetworkError();
  }
  switch (status) {
    case 400: {
      // Translation error from API, base on format data from API to get errorKey
      const errorKey = 'BadRequest';
      handleBadRequest(errorKey);
      break;
    }
    case 401:
      handleUnauthorized();
      break;
    case 403:
      handleForbidden();
      break;
    case 405:
      handleMethodNotAllowed();
      break;
    case 500:
      handleServerError();
      break;
    default:
      handleRequestNotFound(); // 404
      break;
  }

  return Promise.reject(error);
};

export default errorHandler;
