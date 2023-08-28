import { createSlice } from '@reduxjs/toolkit';

const initialValue = { contacts: [] };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialValue,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare({ id, name, number }) {
        return {
          payload: {
            id,
            name,
            number,
          },
        };
      },
    },
    removeContact(state, action) {
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.splice(index, 1);
    },
  },
});

export const { addContact, removeContact } = contactsSlice.actions;

export default contactsSlice.reducer;
