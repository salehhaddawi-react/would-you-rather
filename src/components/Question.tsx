import React, {useState} from "react";
import {Link} from "react-router-dom";
import {AnswerValue, Question as Q, State} from "../interfaces";
import {useDispatch, useSelector} from "react-redux";
import RadioGroup from "./RadioGroup";
import ProgressBar from "./ProgressBar";
import {handleSaveQuestionAnswer} from "../actions/questions";

export type QMode = 'view' | 'answer' | 'result';

interface QuestionProps {
    question: Q;
    mode: QMode,
}

export default function Question(props: QuestionProps) {
    const {question, mode} = props;

    const [selectedOption, setSelectedOption] = useState<string>();

    const loggedUser = useSelector((state: State) => state.auth);
    const users = useSelector((state: State) => state.users);
    const questions = useSelector((state: State) => state.questions);
    const isLoading = useSelector((state: State) => state.loading);

    const dispatch = useDispatch();

    const questionAuthor = users[question.author];
    const items = [    // prepare options to look like items to be accepted by typescript
        {id: 'optionOne', name: question.optionOne.text},
        {id: 'optionTwo', name: question.optionTwo.text},
    ];
    const votes = {
        'total': questions[question.id].optionOne.votes.length + questions[question.id].optionTwo.votes.length,
        'optionOne': questions[question.id].optionOne.votes.length,
        'optionTwo': questions[question.id].optionTwo.votes.length,
    }

    if (!questionAuthor || !loggedUser) {
        return <div/>;
    }

    // in case if question mode is result will contains either optionOne or optionTwo
    let answeredOption = users[loggedUser.id].answers[question.id];

    const onChange = (value: string) => {
        setSelectedOption(value);
    }

    const onClick = () => {
        if (selectedOption) {
            dispatch(handleSaveQuestionAnswer(loggedUser, question, selectedOption as AnswerValue));
        }
    }

    return (
        <div className="mt-4">
            <div
                className="bg-gradient-to-t from-blue-900 via-blue-500 to-blue-400 rounded-3xl shadow-md relative flex flex-col items-center justify-between md:items-start py-5 md:p-5 transition-all duration-150 p-2">
                <img className="rounded-full w-16 h-16 shadow-sm absolute -top-8 transform md:scale-110 duration-700"
                     src={questionAuthor.avatarURL} alt="profile-pic"/>

                <div
                    className="align-middle text-2xl font-semibold text-gray-200 text-center m-auto md:m-0 md:mt-8 mt-4">{questionAuthor.name + ' Asks'}</div>
                <div className="text-white font-light md:block">
                    <br/>
                    <h3 className="font-bold">Would You Rather</h3>
                    <br/>
                    {mode === 'view' && <span className="text-sm">...{question.optionOne.text}...</span>}
                </div>

                {/* BRIEF VIEW MODE */}
                <div className="flex flex-col w-full justify-around">
                    {mode === 'view' &&
                    <Link to={`/questions/${question.id}`} className="mt-2 text-white bg-blue-400 active:bg-blue-400 font-bold uppercase text-base px-8 py-2 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 text-center">
                        View Poll
                    </Link>}

                    {/* ANSWER VIEW MODE */}
                    {mode === 'answer' && !isLoading &&
                    <>
                        <RadioGroup items={items} onChange={onChange}/>
                        <button onClick={onClick} className={`mt-4 mb-4 text-white ${selectedOption ? 'bg-blue-400 active:bg-blue-400' : 'bg-gray-300 pointer-events-none'} font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`}>
                            submit
                        </button>
                    </>
                    }

                    {/* RESULT VIEW MODE */}
                    {mode === 'result' && !isLoading &&
                    <>
                        <div className={`${answeredOption === 'optionOne' ? 'border-green-600 bg-green-200' : 'border-blueGray-600 bg-blueGray-200'} border-2 p-2 rounded-lg my-1 relative`}>
                            {answeredOption === 'optionOne' && <div className="absolute rounded-full w-12 h-12 bg-yellow-500 border-2 text-center text-xs flex justify-center align-middle items-center" style={{top: '-25px', right: '-15px', transform: 'rotate(45deg)'}}>
                                <span>Your Answer</span>
                            </div>}
                            <ProgressBar progress={Math.ceil(votes['optionOne'] / votes['total'] * 100)} color={answeredOption === 'optionOne' ? 'blue' : 'red'} label={question.optionOne.text} text={`${votes['optionOne']} out of ${votes['total']}`}/>
                        </div>
                        <div className={`${answeredOption === 'optionTwo'  ? 'border-green-600 bg-green-200' : 'border-blueGray-600 bg-blueGray-200'} border-2 p-2 rounded-lg my-1 relative`}>
                            {answeredOption === 'optionTwo' && <div className="absolute rounded-full w-12 h-12 bg-yellow-500 border-2 text-center text-xs flex justify-center align-middle items-center" style={{top: '-25px', right: '-15px', transform: 'rotate(45deg)'}}>
                                <span>Your Answer</span>
                            </div>}
                            <ProgressBar progress={Math.ceil(votes['optionTwo'] / votes['total'] * 100)} color={answeredOption === 'optionTwo' ? 'blue' : 'red'} label={question.optionTwo.text} text={`${votes['optionTwo']} out of ${votes['total']}`}/>
                        </div>
                    </>
                    }
                </div>
            </div>
        </div>
    );
}
