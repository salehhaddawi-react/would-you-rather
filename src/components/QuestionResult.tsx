import React from "react";
import {Question, State} from "../interfaces";
import {useSelector} from "react-redux";
import ProgressBar from "./ProgressBar";

interface QuestionResultProps {
    question: Question
}

export default function QuestionResult(props: QuestionResultProps) {
    const {question} = props;

    const loggedUser = useSelector((state: State) => state.auth);
    const users = useSelector((state: State) => state.users);
    const questions = useSelector((state: State) => state.questions);
    const isLoading = useSelector((state: State) => state.loading);

    const questionAuthor = users[question.author];
    const votes = {
        'total': questions[question.id].optionOne.votes.length + questions[question.id].optionTwo.votes.length,
        'optionOne': questions[question.id].optionOne.votes.length,
        'optionTwo': questions[question.id].optionTwo.votes.length,
    }

    if (!questionAuthor || !loggedUser) {
        return <div/>;
    }

    // in case if question is answered the result will contains either optionOne or optionTwo
    let answeredOption = users[loggedUser.id].answers[question.id];

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
    )
}
