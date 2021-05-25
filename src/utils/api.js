import {
    _getQuestions,
    _getUsers,
    _login,
    _logout,
    _saveQuestion,
    _saveQuestionAnswer
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

export function saveQuestionAnswer(user, question, answer) {
    return _saveQuestionAnswer({
        authedUser: user.id,
        qid: question.id,
        answer
    })
}

export function saveQuestion(optionOneText, optionTwoText, author) {
    return _saveQuestion({
        optionOneText,
        optionTwoText,
        author
    })
}
