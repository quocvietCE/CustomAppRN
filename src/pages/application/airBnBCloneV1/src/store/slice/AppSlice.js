import {createSlice} from '@reduxjs/toolkit';

const initState = {
  languageCode: 'en',
  errorObject: {},
  isLoading: false,
};

const appSlice = createSlice({
  name: 'apps',
  initialState: initState,
  reducers: {
    clearError(state, action) {
      state.errorObject = {};
    },
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
    setErrorMessage(state, action) {
      state.errorObject = action.payload;
    },
  },
});

export const {clearError, setLoading, setErrorMessage} = appSlice.actions;

export default appSlice.reducer;
