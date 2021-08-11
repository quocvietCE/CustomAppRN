import {createSlice} from '@reduxjs/toolkit';

const initState = {
  isConnected: false,
  typeNetwork: '',
};

const networkSlice = createSlice({
  name: 'network',
  initialState: initState,
  reducers: {
    setStatusConnected(state, action) {
      const {isConnected, typeNetwork} = action.payload;
      state.isConnected = isConnected;
      state.typeNetwork = typeNetwork;
    },
  },
});

export const {setStatusConnected} = networkSlice.actions;

export default networkSlice.reducer;
