import { createStore, combineReducers, applyMiddleware } from "redux";
import { contactsReducer, contactReducer } from "./reducers/contactsReducers";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  contactsReducer,
  contactReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
