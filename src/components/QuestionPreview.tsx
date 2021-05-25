import React from "react";
import {Question, State} from "../interfaces";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

interface QuestionPreviewProps {
    question: Question
}

export default function QuestionPreview(props: QuestionPreviewProps) {
    const {question} = props;

    const users = useSelector((state: State) => state.users);
    const questionAuthor = users[question.author];

    return (
        <div className="mt-4">
            <div
                className="bg-gradient-to-t from-blue-900 via-blue-500 to-blue-400 rounded-3xl shadow-md relative flex flex-col items-center justify-between md:items-start py-5 md:p-5 transition-all duration-150 p-2">
                <img className="rounded-full w-16 h-16 shadow-sm absolute -top-8 transform md:scale-110 duration-700"
                     src={questionAuthor.avatarURL} alt="profile-pic"/>

                <div className="align-middle text-2xl font-semibold text-gray-200 text-center m-auto md:m-0 md:mt-8 mt-4">
                    {questionAuthor.name + ' Asks'}
                </div>
                <div className="text-white font-light md:block">
                    <br/>
                    <h3 className="font-bold">Would You Rather</h3>
                    <br/>
                    <span className="text-sm">...{question.optionOne.text}...</span>
                </div>

                <div className="flex flex-col w-full justify-around">
                    <Link to={`/questions/${question.id}`} className="mt-2 text-white bg-blue-400 active:bg-blue-400 font-bold uppercase text-base px-8 py-2 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 text-center">
                        View Poll
                    </Link>
                </div>
            </div>
        </div>
    );
}
