import {AnswerValue, Question, User, Users} from "../interfaces";

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const SAVE_QUESTION_ANSWER_TO_USER = 'SAVE_QUESTION_ANSWER_TO_USER';
export const SAVE_QUESTION_TO_USER = 'SAVE_QUESTION_TO_USER';

export interface ReceiveUsersAction {
    type: string,
    users: Users
}

export interface SaveQuestionAnswerToUserAction {
    type: string;
    user: User;
    question: Question;
    answer: AnswerValue;
}

export interface SaveQuestionToUserAction {
    type: string;
    question: Question;
    user: User;
}

export function receiveUsers(users: Users) {
    return {
        type: RECEIVE_USERS,
        users: users
    }
}

export function saveQuestionAnswerToUser(user: User, question: Question, answer: AnswerValue) {
    return {
        type: SAVE_QUESTION_ANSWER_TO_USER,
        user,
        question,
        answer
    }
}

export function saveQuestionToUser(user: User, question: Question) {
    return {
        type: SAVE_QUESTION_TO_USER,
        question,
        user
    }
}
