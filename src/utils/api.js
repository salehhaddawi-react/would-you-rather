import {
    _getQuestions,
    _getUsers,
    _login,
    _logout
} from './_DATA.js'

export function getInitialData () {
    return Promise.all([
        _getUsers(),
        _getQuestions()
    ]).then(([users, questions]) => ({
        users,
        questions
    }))
}

export function login(user) {
    return _login(user);
}

export function logout(user) {
    return _logout(user);
}
