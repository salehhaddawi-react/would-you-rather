import {AnswerValue, Question, Questions, User, VoteOption} from "../interfaces";
import {Dispatch} from "redux";
import * as api from '../utils/api';
import handleInitialDataAction from "./shared";

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER';

export interface ReceiveQuestionsAction {
    type: string;
    questions: Questions;
}

export interface SaveQuestionAnswerAction {
    type: string;
    user: User;
    question: Question;
    vote: VoteOption;
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
        dispatch(saveQuestionAnswer(user, question, answer));

        api.saveQuestionAnswer(user, question, answer).then(() => {
            dispatch(handleInitialDataAction());
        });
    }
}
