import {AnswerValue, Question, Questions, User} from "../interfaces";

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

export function saveQuestionAnswer(user: User, question: Question, answer: AnswerValue) {
    return {
        type: SAVE_QUESTION_ANSWER,
        user,
        question,
        answer
    }
}

export function saveQuestion(question: Question, user: User) {
    return {
        type: SAVE_QUESTION,
        question,
        user
    }
}
