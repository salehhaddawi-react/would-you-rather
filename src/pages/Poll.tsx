import React from "react";
import {useSelector} from "react-redux";
import {State} from "../interfaces";
import {Redirect, RouteComponentProps} from 'react-router-dom';
import Question, {QMode} from "../components/Question";

interface PollProps {
    question_id: string;
}

function Poll(props: RouteComponentProps<PollProps>) {

    const loggedUser = useSelector((state: State) => state.auth);
    const questions  = useSelector((state: State) => state.questions);

    let questionMode = 'answer';

    if (!loggedUser) {
        return <Redirect to="/login"/>
    }

    const question_id = props.match.params.question_id;
    // if user already answered
    if (
        questions[question_id].optionOne.votes.includes(loggedUser.id) ||
        questions[question_id].optionTwo.votes.includes(loggedUser.id)
    ) {

        questionMode = 'result';
    }

    if (!question_id) {
        return <Redirect to="/"/>
    }

    return (
        <div className="flex w-full justify-center mt-10">
            <div className="lg:w-4/12">
                <Question question={questions[question_id]} mode={questionMode as QMode}/>
            </div>
        </div>
    );
}

export default Poll;
