import {createSlice} from '@reduxjs/toolkit';

const initState = {
  loggedInState: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initState,
  reducers: {
    login(state, action) {},
    loginSuccess(state, action) {
      const {result} = action;
      state.loggedInState = result;
    },
    loginFailed(state, action) {},
    logout(state, action) {
      state.loggedInState = null;
    },
  },
});

export const {login, loginSuccess, loginFailed, logout} = authSlice.actions;

export default authSlice.reducer;
