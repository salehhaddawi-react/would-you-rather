import {Users} from "../interfaces";

export const RECEIVE_USERS = 'RECEIVE_USERS';

export interface ReceiveUsersAction {
    type: string,
    users: Users
}

export function receiveUsers(users: Users) {
    return {
        type: RECEIVE_USERS,
        users: users
    }
}
