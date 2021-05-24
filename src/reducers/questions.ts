import {ReceiveQuestionsAction, RECEIVE_QUESTIONS} from "../actions/questions";
import {Questions} from "../interfaces";

export default function questions(state: Questions = {}, action: ReceiveQuestionsAction) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }

        default:
            return state;
    }
}
