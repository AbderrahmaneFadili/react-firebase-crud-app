import React from "react";
import ContactFormComponent from "./components/ContactForm";
import {
  addContactAction,
  fetchContacts,
} from "../../redux/actions/contactsActions";
import { connect } from "react-redux";

const ContactForm = (props) => <ContactFormComponent {...props} />;

const mapDispatchToProps = (dispatch) => ({
  addContactAction: (contact) => dispatch(addContactAction(contact)),
  fetchContacts: () => dispatch(fetchContacts()),
});

const mapStateToProps = ({ contactReducer }) => ({
  loading: contactReducer.laoding,
  error: contactReducer.error,
  contactId: contactReducer.contactId,
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
