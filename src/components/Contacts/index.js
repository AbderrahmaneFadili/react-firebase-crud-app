import React from "react";
import { connect } from "react-redux";
import ContactsCompoenent from "./components/Contacts";
import {
  fetchContacts,
  deleteContactAction,
} from "../../redux/actions/contactsActions";
import { enableIsEditingAction } from "../../redux/actions/isEditingActions";

const Contacts = (props) => <ContactsCompoenent {...props} />;

const mapStateToProps = ({ contactsReducer, contactReducer }) => ({
  contactsLoading: contactsReducer.loading,
  contacts: contactsReducer.contacts,
  contactsError: contactsReducer.error,
  contactId: contactReducer.contactId,
});

const mapDispatchToProps = (dispatch) => ({
  fetchContacts: () => dispatch(fetchContacts()),
  deleteContactAction: (id) => dispatch(deleteContactAction(id)),
  enableIsEditingAction: () => dispatch(enableIsEditingAction()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
