import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {State} from "../interfaces";
import {Redirect} from 'react-router-dom';
import {handleSaveQuestion} from "../actions/questions";

function Add() {
    const loggedUser = useSelector((state: State) => state.auth);
    const [optionOne, setOptionOne] = useState('');
    const [optionTwo, setOptionTwo] = useState('');
    const [questionCreated, setQuestionCreated] = useState(false);

    const dispatch = useDispatch();

    if (!loggedUser) {
        return <Redirect to="/login"/>
    }

    const checkFilled = () => {
        return optionOne.trim() && optionTwo.trim();
    }

    const onClick = () => {
        if (checkFilled()) {
            dispatch(handleSaveQuestion(optionOne, optionTwo, loggedUser));
        }

        setQuestionCreated(true);
    }

    if (questionCreated) {
        return <Redirect to="/"/>
    }

    return (
        <div className="flex w-full justify-center mt-10">
            <div className="lg:w-4/12 text-center">
                <div className="bg-gradient-to-t from-blue-900 via-blue-500 to-blue-400 rounded-3xl shadow-md relative flex flex-col items-center justify-between md:items-start py-5 md:p-5 transition-all duration-150 p-2">
                    <div className="align-middle text-2xl font-semibold text-gray-200 text-center m-auto md:m-0 md:mt-8 mt-4">
                        <span>Create New Question</span>
                    </div>
                    <div className="text-white font-light md:block w-full mt-4">
                        <h3 className="font-bold text-left">Would You Rather</h3>
                        <br/>
                        <div>
                            <input onChange={(e) => setOptionOne(e.target.value)} type="text" placeholder="Enter Option One Text" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
                        </div>
                        <div className="align-middle flex items-center justify-center">
                            <span className="h-px rounded-sm bg-white flex-1"/>
                            <span className="mx-2" >OR</span>
                            <span className="h-px rounded-sm bg-white flex-1"/>
                        </div>
                        <div>
                            <input onChange={(e) => setOptionTwo(e.target.value)} type="text" placeholder="Enter Option Two Text" className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"/>
                        </div>

                        <div className="flex flex-col w-full justify-around mt-4">
                            <button onClick={onClick} className={`mt-4 mb-4 text-white ${checkFilled() ? 'bg-blue-400 active:bg-blue-400' : 'bg-gray-300 pointer-events-none'} font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`}>
                                submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Add;
