import {Dispatch} from "redux";
import {getInitialData} from "../utils/api";
import {receiveUsers} from "./users";
import {hideLoading, showLoading} from "./loading";

export default function handleInitialDataAction() {
    return (dispatch: Dispatch) => {
        dispatch(showLoading());

        getInitialData().then(({users}) => {
            dispatch(receiveUsers(users));

            dispatch(hideLoading());
        });
    }
}
