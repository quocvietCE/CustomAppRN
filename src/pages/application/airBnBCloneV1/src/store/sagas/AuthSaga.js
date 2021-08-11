import {put, select} from 'redux-saga/effects';
import user from '../../config/constants/user.json';
import {loginSuccess, loginFailed} from '../slice/AuthSlice';
import * as RootNavigation from '../../helpers/RootNavigation';
import I18N from '../../config/i18n';

function* handleLogin(data) {
  try {
    const {email, password} = data.payload;
    const {isConnected} = yield select((state) => state.network);
    if (!isConnected) {
      RootNavigation.navigate('MyModal', {
        errorMessage: I18N.t('apiError.NetworkError'),
      });
      return;
    }
    if (email === user.email && password === user.password) {
      yield put({
        type: loginSuccess.type,
        result: true,
      });
    } else {
      yield put({
        type: loginFailed.type,
        result: false,
      });
      RootNavigation.navigate('MyModal', {
        errorMessage: I18N.t('userLoginFailed'),
      });
    }
  } catch (error) {
    console.log('error: ', error);
    yield put({
      type: loginFailed.type,
      result: false,
    });
    RootNavigation.navigate('MyModal', {
      errorMessage: error,
    });
  }
}

const authSaga = {
  handleLogin,
};

export default authSaga;
