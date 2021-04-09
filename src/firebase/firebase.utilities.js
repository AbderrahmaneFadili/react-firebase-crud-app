import { db } from "./firebase";

//get All Contacts
const getAllContacts = () => {
  return db.collection("contacts").get();
};

//add document
const addContact = (contact) => {
  return db.collection("contacts").add(contact);
};

//delete document
const deleteContact = (id) => {
  return db.collection("contacts").doc(id).delete();
};

//get document
const getContactById = (id) => {
  return db.collection("contacts").doc(id).get();
};
export { getAllContacts, addContact, deleteContact, getContactById };
