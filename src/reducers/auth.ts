import {Auth} from "../interfaces";
import {LOGIN, LoginAction, LOGOUT, LogoutAction} from "../actions/auth";

type AuthAction = LoginAction | LogoutAction;

export default function auth(state: Auth = {user: null, loggedOut: false}, action: AuthAction) {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                user: action.user
            };
        case LOGOUT:
            return {
                ...state,
                user: null,
                loggedOut: true
            };
        default:
            return state;
    }
}
