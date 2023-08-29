import {
  addContactActionError,
  addContactActionRequest,
  addContactActionSuccess,
  getContactActionError,
  getContactActionRequest,
  getContactActionSuccess,
  removeContactActionError,
  removeContactActionRequest,
  removeContactActionSuccess,
} from 'components/redux/contacts/contactsSlice';

import {
  addContactApi,
  getContactsApi,
  removeContactsApi,
} from 'services/firebasApi';

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

export const deleteOperationContacts = id => dispatch => {
  dispatch(removeContactActionRequest());
  removeContactsApi(id)
    .then(data => dispatch(removeContactActionSuccess(id)))
    .catch(err => dispatch(removeContactActionError(err.message)));
};
