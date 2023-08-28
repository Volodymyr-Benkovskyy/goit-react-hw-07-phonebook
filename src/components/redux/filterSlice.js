import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setFilter: {
      reducer(state, action) {
        return action.payload;
      },
      prepare(event) {
        return {
          payload: event.target.value,
        };
      },
    },
  },
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;
