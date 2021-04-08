import {
  FETCH_CONTACTS_BEGIN,
  FETCH_CONTACTS_SUCCESS,
  FETCH_CONTACTS_FAILURE,
} from "../types/contactsTypes";

import { getAllContacts } from "../../firebase/firebase.utilities";

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
