import React from "react";
import {useSelector} from "react-redux";
import {State} from "../interfaces";
import {Redirect, RouteComponentProps} from 'react-router-dom';
import QuestionAnswer from "../components/QuestionAnswer";
import QuestionResult from "../components/QuestionResult";

interface PollProps {
    question_id: string;
}

function Poll(props: RouteComponentProps<PollProps>) {

    const loggedUser = useSelector((state: State) => state.auth);
    const questions  = useSelector((state: State) => state.questions);

    let questionAnswered = false;

    if (!loggedUser) {
        return <Redirect to="/login"/>
    }

    const question_id = props.match.params.question_id;

    // if user already answered
    if (
        questions[question_id].optionOne.votes.includes(loggedUser.id) ||
        questions[question_id].optionTwo.votes.includes(loggedUser.id)
    ) {

        questionAnswered = true;
    }

    if (!question_id) {
        return <Redirect to="/"/>
    }

    return (
        <div className="flex w-full justify-center mt-10">
            <div className="lg:w-4/12">
                {/*Show question options to let user answer*/}
                {!questionAnswered && <QuestionAnswer question={questions[question_id]}/>}

                {/*Show question result*/}
                { questionAnswered && <QuestionResult question={questions[question_id]}/>}
            </div>
        </div>
    );
}

export default Poll;
