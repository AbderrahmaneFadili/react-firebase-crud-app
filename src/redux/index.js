import { createStore, applyMiddleware } from "redux";
import contactReducer from "./reducers/contactsReducers";
import thunk from "redux-thunk";

const store = createStore(contactReducer, applyMiddleware(thunk));
export default store;
