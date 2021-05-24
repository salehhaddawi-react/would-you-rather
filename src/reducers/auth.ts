import {User} from "../interfaces";
import {LOGIN, LoginAction, LOGOUT, LogoutAction} from "../actions/auth";

type AuthAction = LoginAction | LogoutAction;

export default function auth(state: User | null = null, action: AuthAction) {
    switch (action.type) {
        case LOGIN:
            return action.user;
        case LOGOUT:
            return null;
        default:
            return state;
    }
}
