import React, {useState} from "react";
import {AnswerValue, Question, State} from "../interfaces";
import {useDispatch, useSelector} from "react-redux";
import RadioGroup from "./RadioGroup";
import {handleSaveQuestionAnswer} from "../actions/shared";

interface QuestionAnswerProps {
    question: Question
}

export default function QuestionAnswer(props: QuestionAnswerProps) {
    const {question} = props;

    const [selectedOption, setSelectedOption] = useState<string>();

    const user = useSelector((state: State) => state.auth).user;
    const users = useSelector((state: State) => state.users);
    const isLoading = useSelector((state: State) => state.loading);
    const questionAuthor = users[question.author];

    const dispatch = useDispatch();

    const items = [    // prepare options to look like items to be accepted by typescript
        {id: 'optionOne', name: question.optionOne.text},
        {id: 'optionTwo', name: question.optionTwo.text},
    ];

    const onChange = (value: string) => {
        setSelectedOption(value);
    }

    const onClick = () => {
        if (user && selectedOption) {
            dispatch(handleSaveQuestionAnswer(user, question, selectedOption as AnswerValue));
        }
    }

    return (
        <div className="mt-4">
            <div className="bg-gradient-to-t from-blue-900 via-blue-500 to-blue-400 rounded-3xl shadow-md relative flex flex-col items-center justify-between md:items-start py-5 md:p-5 transition-all duration-150 p-2">
                <img className="rounded-full w-16 h-16 shadow-sm absolute -top-8 transform md:scale-110 duration-700"
                     src={questionAuthor.avatarURL} alt="profile-pic"/>

                <div className="align-middle text-2xl font-semibold text-gray-200 text-center m-auto md:m-0 md:mt-8 mt-4">
                    {questionAuthor.name + ' Asks'}
                </div>
                <div className="text-white font-light md:block">
                    <br/>
                    <h3 className="font-bold">Would You Rather</h3>
                    <br/>
                </div>

                <div className="flex flex-col w-full justify-around">
                    {!isLoading &&
                    <>
                        <RadioGroup items={items} onChange={onChange}/>
                        <button onClick={onClick} className={`mt-4 mb-4 text-white ${selectedOption ? 'bg-blue-400 active:bg-blue-400' : 'bg-gray-300 pointer-events-none'} font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`}>
                            submit
                        </button>
                    </>
                    }
                </div>
            </div>
        </div>
    );
}
