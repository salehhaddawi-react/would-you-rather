import {
    ReceiveUsersAction,
    RECEIVE_USERS,
    SAVE_QUESTION_TO_USER,
    SAVE_QUESTION_ANSWER_TO_USER,
    SaveQuestionToUserAction, SaveQuestionAnswerToUserAction
} from "../actions/users";
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
        case SAVE_QUESTION_ANSWER_TO_USER:
            ac = (action as SaveQuestionAnswerToUserAction);

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
        case SAVE_QUESTION_TO_USER:
            ac = (action as SaveQuestionToUserAction);

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
