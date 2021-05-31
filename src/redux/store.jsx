import { createStore } from "redux";
import { contactReducer } from "./contacts/ContactReducer";

const store = createStore(contactReducer);

export default store;
