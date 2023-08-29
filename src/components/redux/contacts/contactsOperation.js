import {
  addContactActionError,
  addContactActionRequest,
  addContactActionSuccess,
  getContactActionError,
  getContactActionRequest,
  getContactActionSuccess,
} from 'components/redux/contacts/contactsSlice';

import { addContactApi, getContactsApi } from 'services/firebasApi';

export const addOperationContacts = newcontacts => {
  return dispatch => {
    dispatch(addContactActionRequest());
    addContactApi(newcontacts)
      .then(newContact => dispatch(addContactActionSuccess(newcontacts)))
      .catch(error => dispatch(addContactActionError(error.message)));
  };
};

export const getOperationContacts = () => dispatch => {
  dispatch(getContactActionRequest());
  getContactsApi()
    .then(data => dispatch(getContactActionSuccess(data)))
    .catch(error => dispatch(getContactActionError(error.message)));
};
