import React from "react";
import ContactFormComponent from "./components/ContactForm";
import {
  addContactAction,
  fetchContacts,
} from "../../redux/actions/contactsActions";
import { disableEditingAction } from "../../redux/actions/isEditingActions";
import { connect } from "react-redux";

const ContactForm = (props) => <ContactFormComponent {...props} />;

const mapDispatchToProps = (dispatch) => ({
  addContactAction: (contact) => dispatch(addContactAction(contact)),
  fetchContacts: () => dispatch(fetchContacts()),
  disableEditingAction: () => dispatch(disableEditingAction()),
});

const mapStateToProps = ({ contactReducer, isEditingReducer }) => ({
  loading: contactReducer.laoding,
  error: contactReducer.error,
  contactId: contactReducer.contactId,
  isEditing: isEditingReducer.isEditing,
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
