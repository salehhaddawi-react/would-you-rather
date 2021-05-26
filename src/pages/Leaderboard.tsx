import React from "react";
import {useSelector} from "react-redux";
import {State} from "../interfaces";
import {Redirect} from 'react-router-dom';

function LeaderBoard() {

    const auth = useSelector((state: State) => state.auth);
    const users = useSelector((state: State) => state.users);

    if (!auth.user) {
        return <Redirect to={{
            pathname: "/login",
            state: { referrer: '/leaderboard' }
        }}/>
    }

    const scores = Object.keys(users).map((uId) => ({
        uId: uId,
        answers: Object.keys(users[uId].answers).length,
        questions: users[uId].questions.length,
    }))
        .sort((a, b) => (b.answers + b.questions) - (a.answers + a.questions));

    return (
        <div className="flex w-full justify-center mt-10">
            <div className="lg:w-4/12 text-center">
                {scores.map((score) => (
                    <div className="mt-4" key={score.uId}>
                        <div className="bg-gradient-to-t from-blue-900 via-blue-500 to-blue-400 rounded-3xl shadow-md relative flex flex-col items-center justify-between md:items-start py-5 md:p-5 transition-all duration-150 p-2">
                            <img className="rounded-full w-16 h-16 shadow-sm absolute -top-8 transform md:scale-110 duration-700"
                                src={users[score.uId].avatarURL} alt="profile-pic"/>

                            <div className="align-middle text-2xl font-semibold text-gray-200 text-center m-auto md:m-0 md:mt-8 mt-4">
                                {users[score.uId].name}
                            </div>
                            <div className="flex justify-around w-full items-center align-middle justify-center">
                                <div className="text-white w-full">
                                    <div className="flex items-center justify-between">
                                        <span className="my-1 font-bold">
                                            Answered Questions
                                        </span>
                                        <span>{score.answers}</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="my-1 font-bold">
                                            Created Questions
                                        </span>
                                        <span>{score.questions}</span>
                                    </div>
                                </div>
                                <div className="items-center align-middle justify-center m-4">
                                    <div className="rounded-full bg-white flex flex-col items-center align-middle justify-center w-16 h-16">
                                        <span>Score</span>
                                        {score.answers + score.questions}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>))}
            </div>
        </div>
    );
}

export default LeaderBoard;
