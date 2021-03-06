import {combineReducers} from "redux";
import users from "./users";
import questions from "./questions";
import loading from "./loading";
import auth from "./auth";

export default combineReducers({
    users, questions, auth, loading,
})
