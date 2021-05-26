export type AnswerValue = 'optionOne' | 'optionTwo';

export interface Answer {
    [index: string]: AnswerValue
}

type SingleAnswer = Answer | string;

export interface Answers {
    [index: string]: SingleAnswer
}

export interface Item {
    name: string;
    id: string| number;
    disabled?: boolean;
    [index: string]: any;
}

export interface VoteOption {
    votes: Array<string>;
    text: string;
}

export interface Question {
    id: string,
    author: string;
    timestamp: number;
    optionOne: VoteOption;
    optionTwo: VoteOption;
}

export interface Questions {
    [index: string]: Question
}

export interface User {
    id: string,
    name: string,
    avatarURL: string,
    questions: Array<string>,
    answers: Answers
}

export interface Users {
    [index: string]: User
}

export interface Auth {
    user: User | null,
    loggedOut: boolean
}

export interface State {
    users: Users,
    questions: Questions,
    auth: Auth,
    loading: boolean,
}
