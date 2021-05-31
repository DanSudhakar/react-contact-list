import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addContact,
  editContact,
  resetContact,
} from "../redux/contacts/ContactActions";

export default function AddEditContact() {
  let sContact = useSelector((state) => state.contact);
  useEffect(() => {
    if (sContact) setContact(sContact);
  }, [sContact]);
  const dispatch = useDispatch();
  const [contact, setContact] = useState({
    name: "",
    phoneNumber: "",
    email: "",
  });
  const handleChange = (name, value) => {
    const oldContact = { ...contact };
    oldContact[name] = value;
    setContact(oldContact);
  };
  const closeRef = useRef();
  const handleSubmit = () => {
    if (contact.id !== null && contact.id !== undefined) {
      dispatch(editContact(contact, contact.id));
    } else {
      dispatch(addContact(contact));
    }
    dispatch(resetContact());
    closeRef.current.click();
  };
  return (
    <>
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLongTitle">
            Add / Edit Contact
          </h5>
          <button
            ref={closeRef}
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <form>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput">Name</label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Name"
                value={contact.name}
                onChange={(e) => handleChange("name", e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput2">Phone Number</label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput2"
                placeholder="Phone Number"
                value={contact.phoneNumber}
                onChange={(e) => handleChange("phoneNumber", e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput2">Email</label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput2"
                placeholder="Email"
                value={contact.email}
                onChange={(e) => handleChange("email", e.target.value)}
              />
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-dismiss="modal"
          >
            Cancel
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => handleSubmit()}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
