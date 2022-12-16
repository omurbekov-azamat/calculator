import {GotValue} from "../../types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: GotValue = {
  value: '',
}

export const pushSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    getValue: (state, action:PayloadAction<string>) => {
      state.value += action.payload;
    },
    getTotal: (state) => {
      // eslint-disable-next-line no-eval
      state.value = eval(state.value);
    },
    getClear: (state) => {
      state.value = '';
    }
  },
});

export const pushReducer = pushSlice.reducer;
export const {getValue, getTotal, getClear} = pushSlice.actions;