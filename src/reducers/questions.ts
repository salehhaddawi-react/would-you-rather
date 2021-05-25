import {
    ReceiveQuestionsAction,
    SaveQuestionAnswerAction,
    SaveQuestionAction,
    RECEIVE_QUESTIONS,
    SAVE_QUESTION_ANSWER,
    SAVE_QUESTION,
} from "../actions/questions";
import {Questions} from "../interfaces";

export default function questions(state: Questions = {}, action: any) {
    let ac;
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            action = (action as ReceiveQuestionsAction);

            return {
                ...state,
                ...action.questions
            }
        case SAVE_QUESTION_ANSWER:
            ac = (action as SaveQuestionAnswerAction);

            return {
                ...state,
                [ac.question.id]: {
                    ...state[ac.question.id],
                    [ac.answer]: {
                        ...state[ac.question.id][ac.answer],
                        votes: state[ac.question.id][ac.answer].votes.concat(ac.user.id)
                    }
                }
            };
        case SAVE_QUESTION:
            ac = (action as SaveQuestionAction);

            return {
                ...state,
                [ac.question.id]: {
                    ...ac.question
                }
            }
        default:
            return state;
    }
}
