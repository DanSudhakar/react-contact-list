import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteContact,
  getContact,
  resetContact,
} from "../redux/contacts/ContactActions";
import AddEditContact from "./AddEditContact";

export default function Contacts() {
  const dispatch = useDispatch();
  let contacts = useSelector((state) => state.contacts);
  let contact = useSelector((state) => state.contact);

  return (
    <React.Fragment>
      <div className="container d-flex flex-row justify-content-between mt-4">
        <h1>All contacts</h1>
        <button
          data-toggle="modal"
          data-target="#exampleModalCenter"
          className="btn btn-primary"
          onClick={() => resetContact()}
        >
          + Add Contact
        </button>
      </div>
      <div>
        <div></div>
        {contacts.length === 0 && (
          <p className="text-center text-danger">No Records Found</p>
        )}
        {contacts.length > 0 && (
          <table className="container table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">S.No</th>
                <th scope="col">Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, index) => {
                return (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <th>{contact.name}</th>
                    <th>{contact.phoneNumber}</th>
                    <th>{contact.email}</th>
                    <th>
                      <button
                        className="btn btn-primary"
                        data-toggle="modal"
                        data-target="#exampleModalCenter"
                        onClick={() => dispatch(getContact(index))}
                      >
                        Edit
                      </button>
                      &nbsp;
                      <button
                        className="btn btn-danger"
                        onClick={() => dispatch(deleteContact(index))}
                      >
                        Delete
                      </button>
                    </th>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
      <div
        className="modal fade"
        id="exampleModalCenter"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <AddEditContact contact={contact}></AddEditContact>
        </div>
      </div>
    </React.Fragment>
  );
}
// const mapStateToProps = (state) => {
//   return {
//     contacts: state.contacts,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getAllContacts: () => dispatch(getAllContacts()),
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
