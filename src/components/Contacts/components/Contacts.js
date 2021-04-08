import React, { useEffect, useState } from "react";
import ContactForm from "../../ContactForm";
const Contacts = ({ contacts, fetchContacts, loading }) => {
  useEffect(() => {
    fetchContacts();
  }, []);
  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4 text-center">Contact Register</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-5">
          <ContactForm />
        </div>
        <div className="col-md-7">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Fullname</th>
                <th scope="col">Mobile</th>
                <th scope="col">Emaile</th>
                <th scope="col">Address</th>
              </tr>
            </thead>

            <tbody>
              {contacts.length > 0 &&
                contacts.map((contact, i) => {
                  return (
                    <tr key={i.toString()}>
                      <td>{contact.fullName}</td>
                      <td>{contact.mobile}</td>
                      <td>{contact.email}</td>
                      <td>{contact.address}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          {loading && "Loading..."}
        </div>
      </div>
    </>
  );
};

export default Contacts;
