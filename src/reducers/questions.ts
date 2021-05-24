import {ReceiveQuestionsAction, SaveQuestionAnswerAction, RECEIVE_QUESTIONS, SAVE_QUESTION_ANSWER} from "../actions/questions";
import {Questions} from "../interfaces";

type QuestionActions = ReceiveQuestionsAction | SaveQuestionAnswerAction;

export default function questions(state: Questions = {}, action: QuestionActions) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...(action as ReceiveQuestionsAction).questions
            }
        case SAVE_QUESTION_ANSWER:
            return state;

        default:
            return state;
    }
}
