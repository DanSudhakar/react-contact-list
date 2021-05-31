import {
  ADD_CONTACT,
  DELETE_CONTACT,
  EDIT_CONTACT,
  GET_ALL_CONTACTS,
  GET_CONTACT,
  RESET_CONTACT,
} from "./ContactTypes";

export const getAllContacts = () => {
  return {
    type: GET_ALL_CONTACTS,
  };
};

export const addContact = (contact) => {
  return {
    type: ADD_CONTACT,
    payload: contact,
  };
};

export const editContact = (contact, id) => {
  return {
    type: EDIT_CONTACT,
    payload: contact,
    id: id,
  };
};

export const getContact = (index) => {
  return {
    type: GET_CONTACT,
    index: index,
  };
};

export const deleteContact = (index) => {
  return {
    type: DELETE_CONTACT,
    index: index,
  };
};

export const resetContact = () => {
  return {
    type: RESET_CONTACT,
  };
};
