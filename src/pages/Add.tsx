import React from "react";
import {useSelector} from "react-redux";
import {State} from "../interfaces";
import {Redirect} from 'react-router-dom';

function Add() {

    const loggedUser = useSelector((state: State) => state.auth);

    if (!loggedUser) {
        return <Redirect to="/login"/>
    }

    return (
        <div>
            Add
        </div>
    );
}

export default Add;
