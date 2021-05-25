import {AnswerValue, Question, Questions, User} from "../interfaces";
import {Dispatch} from "redux";
import * as api from '../utils/api';
import {hideLoading, showLoading} from "./loading";
import {saveQuestionAnswerToUser, saveQuestionToUser} from "./users";

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER';
export const SAVE_QUESTION = 'SAVE_QUESTION';

export interface ReceiveQuestionsAction {
    type: string;
    questions: Questions;
}

export interface SaveQuestionAnswerAction {
    type: string;
    user: User;
    question: Question;
    answer: AnswerValue;
}

export interface SaveQuestionAction {
    type: string;
    question: Question;
    user: User;
}

export function receiveQuestions(questions: Questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

function saveQuestionAnswer(user: User, question: Question, answer: AnswerValue) {
    return {
        type: SAVE_QUESTION_ANSWER,
        user,
        question,
        answer
    }
}

export function handleSaveQuestionAnswer(user: User, question: Question, answer: AnswerValue) {
    return (dispatch: Dispatch<any>) => {
        dispatch(showLoading());

        dispatch(saveQuestionAnswer(user, question, answer));
        dispatch(saveQuestionAnswerToUser(user, question, answer));

        api.saveQuestionAnswer(user, question, answer).then(() => {
            dispatch(hideLoading());
        });
    }
}

function saveQuestion(question: Question) {
    return {
        type: SAVE_QUESTION,
        question
    }
}

export function handleSaveQuestion(optionOneText: string, optionTwoText: string, user: User) {
    return (dispatch: Dispatch<any>) => {
        dispatch(showLoading());

        api.saveQuestion(optionOneText, optionTwoText, user.id).then((question: Question) => {
            dispatch(saveQuestion(question));
            dispatch(saveQuestionToUser(user, question));

            dispatch(hideLoading());
        });
    }
}
