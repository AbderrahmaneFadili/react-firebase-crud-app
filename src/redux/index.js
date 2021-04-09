import { createStore, combineReducers, applyMiddleware } from "redux";
import { contactsReducer, contactReducer } from "./reducers/contactsReducers";
import { isEditingReducer } from "./reducers/isEditingReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  contactsReducer,
  contactReducer,
  isEditingReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
