import React from "react";
import {useSelector} from "react-redux";
import {State} from "../interfaces";
import {Redirect} from 'react-router-dom';
import Tabs from "../components/Tabs";
import QuestionPreview from "../components/QuestionPreview";

function Home() {

    const user = useSelector((state: State) => state.auth).user;
    const questions  = useSelector((state: State) => state.questions);

    if (user === null) {
        return <Redirect to="/login"/>
    }

    const unansweredQ = Object.keys(questions).filter(qId =>
        !questions[qId].optionOne.votes.includes(user.id) &&
        !questions[qId].optionTwo.votes.includes(user.id)
    ).sort(((a, b) => questions[b].timestamp - questions[a].timestamp));

    const answeredQ = Object.keys(questions).filter(qId =>
        questions[qId].optionOne.votes.includes(user.id) ||
        questions[qId].optionTwo.votes.includes(user.id)
    ).sort(((a, b) => questions[b].timestamp - questions[a].timestamp));

    return (
        <div className="flex w-full justify-center mt-10">
            <Tabs tabs={
                [
                    {title: 'Unanswered Questions', content: unansweredQ.map((qId) => (
                        <QuestionPreview question={questions[qId]} key={qId}/>
                    ))},
                    {title: 'Answered Questions', content: answeredQ.map((qId) => (
                        <QuestionPreview question={questions[qId]} key={qId}/>
                    ))}
                ]} />
        </div>
    );
}

export default Home;
