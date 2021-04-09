import {
  FETCH_CONTACTS_BEGIN,
  FETCH_CONTACTS_SUCCESS,
  FETCH_CONTACTS_FAILURE,
  ADD_CONTACTS_BEGIN,
  ADD_CONTACTS_SUCCESS,
  ADD_CONTACTS_FAILURE,
  DELETE_CONTACT_BEGIN,
  DELETE_CONTACT_FAILURE,
  DELETE_CONTACT_SUCCESS,
  GET_CONTACT_BY_ID_BEGIN,
  GET_CONTACT_BY_ID_SUCCESS,
  GET_CONTACT_BY_ID_FAILURE,
} from "../types/contactsTypes";

//contacts reducer initial state
const initialState = {
  loading: false,
  contacts: [],
  error: null,
};

const contactsReducer = (state = initialState, action) => {
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
        contactsList.push(doc);
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

//contact reducer
const contactReducer = (
  state = {
    loading: false,
    contactId: null,
    error: null,
    contact: null,
  },
  action,
) => {
  switch (action.type) {
    case ADD_CONTACTS_BEGIN:
      return {
        ...state,
        loading: true,
        contact: null,
        error: null,
      };
    case ADD_CONTACTS_SUCCESS:
      return {
        ...state,
        loading: false,
        contactId: action.payload,
        error: null,
      };
    case ADD_CONTACTS_FAILURE:
      return {
        ...state,
        loading: false,
        contactId: null,
        error: action.payload,
      };
    case DELETE_CONTACT_BEGIN:
      return {
        ...state,
        loading: true,
        contactId: null,
        error: null,
      };
    case DELETE_CONTACT_SUCCESS:
      return {
        ...state,
        loading: false,
        contactId: action.payload,
        error: null,
      };
    case DELETE_CONTACT_FAILURE:
      return {
        ...state,
        loading: false,
        contactId: null,
        error: action.payload,
      };
    case GET_CONTACT_BY_ID_BEGIN:
      return {
        ...state,
        contact: null,
        loading: true,
      };
    case GET_CONTACT_BY_ID_SUCCESS:
      return {
        ...state,
        contact: action.payload,
        loading: false,
      };
    case GET_CONTACT_BY_ID_FAILURE:
      return {
        ...state,
        contact: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export { contactsReducer, contactReducer };
