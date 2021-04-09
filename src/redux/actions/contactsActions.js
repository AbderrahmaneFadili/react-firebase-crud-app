import {
  FETCH_CONTACTS_BEGIN,
  FETCH_CONTACTS_SUCCESS,
  FETCH_CONTACTS_FAILURE,
  ADD_CONTACTS_BEGIN,
  ADD_CONTACTS_SUCCESS,
  ADD_CONTACTS_FAILURE,
  DELETE_CONTACT_BEGIN,
  DELETE_CONTACT_SUCCESS,
  DELETE_CONTACT_FAILURE,
} from "../types/contactsTypes";

import {
  getAllContacts,
  addContact,
  deleteContact,
} from "../../firebase/firebase.utilities";

///// get all contacts acions ////
const fetchContactsBegin = () => ({
  type: FETCH_CONTACTS_BEGIN,
});

const fetchContactsSuccess = (payload) => ({
  type: FETCH_CONTACTS_SUCCESS,
  payload,
});

const fetchContactsFailure = (payload) => ({
  type: FETCH_CONTACTS_FAILURE,
  payload,
});

export const fetchContacts = () => (dispatch) => {
  dispatch(fetchContactsBegin());
  getAllContacts()
    .then((snapshot) => {
      dispatch(fetchContactsSuccess(snapshot.docs));
    })
    .catch((error) => dispatch(fetchContactsFailure(error)));
};

//////// add contact ////////

export const addContactBegin = () => ({
  type: ADD_CONTACTS_BEGIN,
});

export const addContactSuccess = (payload) => ({
  type: ADD_CONTACTS_SUCCESS,
  payload,
});

export const addContactFailure = (payload) => ({
  type: ADD_CONTACTS_FAILURE,
  payload,
});

export const addContactAction = (contact) => (dispatch) => {
  dispatch(addContactBegin());
  addContact(contact)
    .then((data) => {
      dispatch(addContactSuccess(data.id));
    })
    .catch((error) => dispatch(addContactFailure(error)));
};

//Delete Contact
const deleteContactBegin = () => ({
  type: DELETE_CONTACT_BEGIN,
});

const deleteContactSuccess = (payload) => ({
  type: DELETE_CONTACT_SUCCESS,
  payload,
});

const deleteContactFailure = (payload) => ({
  type: DELETE_CONTACT_FAILURE,
  payload,
});

export const deleteContactAction = (id) => (dispatch) => {
  dispatch(deleteContactBegin);
  deleteContact(id)
    .then((data) => {
      dispatch(deleteContactSuccess(data.id));
    })
    .catch((error) => dispatch(deleteContactFailure(error)));
};
