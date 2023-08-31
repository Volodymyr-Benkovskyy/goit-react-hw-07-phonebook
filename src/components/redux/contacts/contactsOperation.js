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
} from 'services/firebaseioApi';

export const addOperationContacts = items => {
  return dispatch => {
    dispatch(addContactActionRequest());
    addContactApi(items)
      .then(items => dispatch(addContactActionSuccess(items)))
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
