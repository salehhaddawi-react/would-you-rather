import React from "react";
import {useSelector} from "react-redux";
import {State} from "../interfaces";
import {Redirect} from 'react-router-dom';
import Tabs from "../components/Tabs";
import Question from "../components/Question";

function Home() {

    const loggedUser = useSelector((state: State) => state.auth);
    const questions  = useSelector((state: State) => state.questions);

    if (!loggedUser) {
        return <Redirect to="/login"/>
    }

    const unansweredQ = Object.keys(questions).filter(qId =>
        !questions[qId].optionOne.votes.includes(loggedUser.id) &&
        !questions[qId].optionTwo.votes.includes(loggedUser.id)
    );

    const answeredQ = Object.keys(questions).filter(qId =>
        questions[qId].optionOne.votes.includes(loggedUser.id) ||
        questions[qId].optionTwo.votes.includes(loggedUser.id)
    );

    return (
        <div className="flex w-full justify-center mt-10">
            <Tabs tabs={
                [
                    {title: 'Unanswered Questions', content: unansweredQ.map((qId) => (
                        <Question question={questions[qId]} key={qId}/>
                    ))},
                    {title: 'Answered Questions', content: answeredQ.map((qId) => (
                            <Question question={questions[qId]} key={qId}/>
                        ))}
                ]} />
        </div>
    );
}

export default Home;
