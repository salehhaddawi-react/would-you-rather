export interface Answer {
    [index: string]: string
}

export interface VoteOption {
    votes: Array<string>;
    text: string;
}

export interface Question {
    id: string,
    author: string;
    timestamp: string;
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
    answers: Answer
}

export interface Users {
    [index: string]: User
}

export interface State {
    users: Users,
    questions: Questions,
    auth: User | null | undefined,
    loading: boolean,
}
