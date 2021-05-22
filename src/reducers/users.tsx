import {ReceiveUsersAction, RECEIVE_USERS} from "../actions/users";
import {Users} from "../interfaces";

export default function users(state: Users = {}, action: ReceiveUsersAction) {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }

        default:
            return state;
    }
}
