import {Dispatch} from "redux";
import {getInitialData} from "../utils/api";
import {receiveUsers} from "./users";
import {receiveQuestions, saveQuestion, saveQuestionAnswer} from "./questions";
import {hideLoading, showLoading} from "./loading";
import {AnswerValue, Question, User} from "../interfaces";
import * as api from "../utils/api";

export default function handleInitialDataAction() {
    return (dispatch: Dispatch) => {
        dispatch(showLoading());

        getInitialData().then(({users, questions}) => {

            dispatch(receiveUsers(users));
            dispatch(receiveQuestions(questions));

            dispatch(hideLoading());
        });
    }
}

export function handleSaveQuestionAnswer(user: User, question: Question, answer: AnswerValue) {
    return (dispatch: Dispatch<any>) => {
        dispatch(showLoading());

        dispatch(saveQuestionAnswer(user, question, answer));

        api.saveQuestionAnswer(user, question, answer).then(() => {
            dispatch(hideLoading());
        });
    }
}

export function handleSaveQuestion(optionOneText: string, optionTwoText: string, user: User) {
    return (dispatch: Dispatch<any>) => {
        dispatch(showLoading());

        api.saveQuestion(optionOneText, optionTwoText, user.id).then((question: Question) => {
            dispatch(saveQuestion(question, user));

            dispatch(hideLoading());
        });
    }
}
