import React from "react";
import {useSelector} from "react-redux";
import {Store} from "../interfaces";
import {Redirect} from 'react-router-dom';

function Home() {

    const loggedUser = useSelector((state: Store) => state.auth);

    if (!loggedUser) {
        return <Redirect to="/login"/>
    }

    return (
        <div className="flex w-full">
            Home
        </div>
    );
}

export default Home;
