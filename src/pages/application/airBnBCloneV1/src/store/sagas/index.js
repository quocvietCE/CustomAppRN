import {takeLatest, all} from 'redux-saga/effects';
import authSaga from './AuthSaga';
import {login} from '../slice/AuthSlice';

function* handleLogin() {
  yield takeLatest(login.type, authSaga.handleLogin);
}

export default function* rootSaga() {
  yield all([handleLogin()]);
}
