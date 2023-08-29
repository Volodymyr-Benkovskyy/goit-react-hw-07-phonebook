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

    removeContact(state, action) {
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.splice(index, 1);
    },
  },
});

export const {
  getContactActionError,
  getContactActionSuccess,
  getContactActionRequest,
  addContactActionRequest,
  addContactActionSuccess,
  addContactActionError,
  removeContact,
} = contactsSlice.actions;

export default contactsSlice.reducer;
