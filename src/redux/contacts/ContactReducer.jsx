import {
  ADD_CONTACT,
  DELETE_CONTACT,
  EDIT_CONTACT,
  GET_ALL_CONTACTS,
  GET_CONTACT,
  RESET_CONTACT,
} from "./ContactTypes";

const initialState = {
  contacts: [
    {
      name: "Sudhakar",
      phoneNumber: "9839394849",
      email: "dansudhakar@gmail.com",
    },
    {
      name: "Raj",
      phoneNumber: "9839394849",
      email: "dansudhakar@gmail.com",
    },
  ],
};

export const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CONTACTS:
      return {
        ...state,
      };
    case ADD_CONTACT: {
      let contacts = [...state.contacts];
      contacts.push(action.payload);
      return {
        ...state,
        contacts,
      };
    }
    case EDIT_CONTACT: {
      let contacts = [...state.contacts];
      contacts[action.id] = action.payload;
      return {
        ...state,
        contacts,
      };
    }
    case GET_CONTACT: {
      return {
        ...state,
        contact: { ...state.contacts[action.index], id: action.index },
      };
    }
    case DELETE_CONTACT: {
      let contacts = [...state.contacts];
      contacts.splice(action.index, 1);
      return {
        ...state,
        contacts,
      };
    }
    case RESET_CONTACT: {
      return {
        ...state,
        contact: {
          name: "",
          phoneNumber: "",
          email: "",
        },
      };
    }
    default:
      return state;
  }
};
