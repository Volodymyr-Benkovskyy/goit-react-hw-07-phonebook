import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'BookContacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    addContactActionRequest(state) {
      state.isLoading = true; // ==> action
    },
    addContactActionSuccess(state, { payload }) {
      state.isLoading = false;
      state.contacts.push(payload);
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
      state.contacts = payload;
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
      state.contacts = state.contacts.filter(el => el.id !== payload);
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
