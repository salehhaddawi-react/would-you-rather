import {
    _getUsers,
    _login,
    _logout
} from './_DATA.js'

export function getInitialData () {
    return Promise.all([
        _getUsers(),
    ]).then(([users]) => ({
        users,
    }))
}

export function login(user) {
    return _login(user);
}

export function logout(user) {
    return _logout(user);
}
