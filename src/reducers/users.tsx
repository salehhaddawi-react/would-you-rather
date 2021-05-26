import {
    ReceiveUsersAction,
    RECEIVE_USERS,
} from "../actions/users";
import {
    SAVE_QUESTION,
    SAVE_QUESTION_ANSWER,
    SaveQuestionAction,
    SaveQuestionAnswerAction
} from "../actions/questions";
import {Users} from "../interfaces";

export default function users(state: Users = {}, action: any) {
    let ac;
    switch (action.type) {
        case RECEIVE_USERS:
            ac = (action as ReceiveUsersAction);

            return {
                ...state,
                ...action.users
            }
        case SAVE_QUESTION_ANSWER:
            ac = (action as SaveQuestionAnswerAction);

            return {
                ...state,
                [ac.user.id]: {
                    ...state[ac.user.id],
                    answers: {
                        ...state[ac.user.id].answers,
                        [ac.question.id]: ac.answer
                    }
                }
            }
        case SAVE_QUESTION:
            ac = (action as SaveQuestionAction);

            return {
                ...state,
                [ac.user.id]: {
                    ...state[ac.user.id],
                    questions: state[ac.user.id].questions.concat(ac.question.id)
                }
            }
        default:
            return state;
    }
}
