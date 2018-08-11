import { combineReducers } from "redux";

import loginError from "./errorReducer"
import loggedUser from "./loggedUser"

export default combineReducers({
    loginError,
    loggedUser
});