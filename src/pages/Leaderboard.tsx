import React from "react";
import {useSelector} from "react-redux";
import {Store} from "../interfaces";
import {Redirect} from 'react-router-dom';

function LeaderBoard() {

    const loggedUser = useSelector((state: Store) => state.auth);

    if (!loggedUser) {
        return <Redirect to="/login"/>
    }

    return (
        <div>
            LeaderBoard
        </div>
    );
}

export default LeaderBoard;
