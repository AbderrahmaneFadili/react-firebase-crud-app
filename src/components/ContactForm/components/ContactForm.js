import React, { useState, useEffect } from "react";

const ContactForm = (props) => {
  const intialFieldsValues = {
    fullName: "",
    mobile: "",
    email: "",
    address: "",
  };

  const [values, setValues] = useState(intialFieldsValues);

  //handle input change
  const handleInputChange = (event) => {
    let { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  //handle Submit
  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      values.fullName === "" ||
      values.mobile === "" ||
      values.email === "" ||
      values.address === ""
    ) {
      alert("Please fill all the fields");
    } else {
      props.addContactAction({
        address: values.address,
        email: values.email,
        fullName: values.fullName,
        mobile: values.mobile,
      });

      props.fetchContacts();

      setValues({
        ...values,
        fullName: "",
        address: "",
        mobile: "",
        email: "",
      });
    }
  };

  return (
    <form autoCapitalize="off" onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">
            <i className="fas fa-user"></i>
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Fullname"
          name="fullName"
          value={values.fullName}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-row mb-3">
        <div className="input-group col-md-6">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              <i className="fas fa-phone"></i>
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Mobile"
            name="mobile"
            value={values.mobile}
            onChange={handleInputChange}
          />
        </div>

        <div className="input-group col-md-6">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              <i className="fas fa-envelope"></i>
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="form-group">
        <textarea
          className="form-control"
          placeholder="Address"
          name="address"
          rows="3"
          onChange={handleInputChange}
        ></textarea>
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-dark btn-block">
          Save
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
