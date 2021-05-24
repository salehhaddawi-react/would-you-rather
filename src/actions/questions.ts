import {Questions} from "../interfaces";

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';

export interface ReceiveQuestionsAction {
    type: string,
    questions: Questions
}

export function receiveQuestions(questions: Questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}
