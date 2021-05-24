import React from "react";
import {useSelector} from "react-redux";
import {State} from "../interfaces";
import {Redirect, RouteComponentProps} from 'react-router-dom';
import Question from "../components/Question";

interface PollProps {
    question_id: string;
}

function Poll(props: RouteComponentProps<PollProps>) {

    const loggedUser = useSelector((state: State) => state.auth);
    const questions  = useSelector((state: State) => state.questions);

    if (!loggedUser) {
        return <Redirect to="/login"/>
    }

    const question_id = props.match.params.question_id;

    if (!question_id) {
        return <Redirect to="/"/>
    }

    return (
        <div className="flex w-full justify-center mt-10">
            <Question question={questions[question_id]}/>
        </div>
    );
}

export default Poll;
