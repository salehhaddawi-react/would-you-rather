import {User} from "../interfaces";
import {Dispatch} from "redux";
import * as api from '../utils/api';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export interface LoginAction {
    type: string,
    user: User
}

export interface LogoutAction {
    type: string,
    user: User
}

function login(user: User) {
    return {
        type: LOGIN,
        user
    }
}

function logout(user: User) {
    return {
        type: LOGOUT,
        user
    }
}

export function handleLogin(user: User) {
    return (dispatch: Dispatch) => {
        dispatch(login(user));

        api.login(user);
    }
}

export function handleLogout(user: User) {
    return (dispatch: Dispatch) => {
        dispatch(logout(user));

        api.logout(user);
    }
}
