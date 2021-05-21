export interface Answer {
    [index: string]: string
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

export interface IStore {
    users: Users | null
}
