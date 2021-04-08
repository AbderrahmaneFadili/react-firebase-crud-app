import { db } from "./firebase";

//get All Contacts
const getAllContacts = () => {
  return db.collection("contacts").get();
};

export { getAllContacts };
