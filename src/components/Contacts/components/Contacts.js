import React, { useEffect, useState } from "react";
import ContactForm from "../../ContactForm";
import "./Contacts.css";
import Loader from "react-loader-spinner";
import { findByLabelText } from "@testing-library/dom";

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
                <th scope="col"></th>
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
                      <td className="d-flex justify-content-between">
                        <i className="fas fa-times"></i>
                        <i className="fas fa-pencil-alt"></i>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          {loading && (
            <div className="d-flex justify-content-center">
              <Loader type="ThreeDots" color="#333" height={30} width={30} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Contacts;
