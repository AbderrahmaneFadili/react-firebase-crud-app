import {
  FETCH_CONTACTS_BEGIN,
  FETCH_CONTACTS_SUCCESS,
  FETCH_CONTACTS_FAILURE,
} from "../types/contactsTypes";

const initialState = {
  loading: false,
  contacts: [],
  error: null,
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CONTACTS_BEGIN:
      return {
        ...state,
        loading: true,
        contacts: [],
        error: null,
      };
    case FETCH_CONTACTS_SUCCESS: {
      const docs = action.payload;
      const contactsList = [];
      docs.forEach((doc) => {
        contactsList.push(doc.data());
      });
      return {
        ...state,
        loading: false,
        contacts: contactsList,
        error: null,
      };
    }
    case FETCH_CONTACTS_FAILURE:
      return {
        ...state,
        loading: false,
        contacts: [],
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default contactReducer;
