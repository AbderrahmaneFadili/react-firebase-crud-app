import React from "react";
import { connect } from "react-redux";
import ContactsCompoenent from "./components/Contacts";
import { fetchContacts } from "../../redux/actions/contactsActions";

const Contacts = (props) => <ContactsCompoenent {...props} />;

const mapStateToProps = (state) => ({
  loading: state.loading,
  contacts: state.contacts,
  error: state.error,
});

const mapDispatchToProps = (dispatch) => ({
  fetchContacts: () => dispatch(fetchContacts()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
