import { db } from "./firebase";

//get All Contacts
const getAllContacts = () => {
  return db.collection("contacts").get();
};

//add document
const addContact = (contact) => {
  return db.collection("contacts").add(contact);
};

export { getAllContacts, addContact };
