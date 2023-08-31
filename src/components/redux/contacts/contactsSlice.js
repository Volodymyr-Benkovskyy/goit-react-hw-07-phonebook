import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    addContactActionRequest(state) {
      state.isLoading = true; // ==> action
    },
    addContactActionSuccess(state, { payload }) {
      state.isLoading = false;
      state.items.push(payload);
    },
    addContactActionError(state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },

    getContactActionRequest(state) {
      state.isLoading = true;
    },
    getContactActionSuccess(state, { payload }) {
      state.isLoading = false;
      state.items = payload;
    },
    getContactActionError(state, payload) {
      state.isLoading = false;
      state.error = payload;
    },

    removeContactActionRequest(state) {
      state.isLoading = true;
    },

    removeContactActionSuccess(state, { payload }) {
      state.isLoading = false;
      state.items = state.items.filter(el => el.id !== payload);
      /*    const index = state.items.findIndex(contact => contact.id === payload.id);
      state.items.splice(index, 1); */
    },

    removeContactActionError(state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const {
  removeContactActionRequest,
  removeContactActionSuccess,
  removeContactActionError,
  getContactActionError,
  getContactActionSuccess,
  getContactActionRequest,
  addContactActionRequest,
  addContactActionSuccess,
  addContactActionError,
} = contactsSlice.actions;

export default contactsSlice.reducer;
