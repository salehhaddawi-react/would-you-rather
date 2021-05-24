import {Dispatch} from "redux";
import {getInitialData} from "../utils/api";
import {receiveUsers} from "./users";
import {receiveQuestions} from "./questions";
import {hideLoading, showLoading} from "./loading";

export default function handleInitialDataAction() {
    return (dispatch: Dispatch) => {
        dispatch(showLoading());

        getInitialData().then(({users, questions}) => {
            
            dispatch(receiveUsers(users));
            dispatch(receiveQuestions(questions));

            dispatch(hideLoading());
        });
    }
}
