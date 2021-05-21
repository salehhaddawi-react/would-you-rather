import React, {useEffect, useReducer} from 'react';
import {connect} from "react-redux";
import {getInitialData} from "../utils/api";
import {receiveUsers} from "../actions/users";
import users from "../reducers/users";

function App() {

    const [state, dispatch] = useReducer(users, {}); // get users from store

    // onComponentDidMount
    useEffect(() => {
        getInitialData().then(data => {
            dispatch(receiveUsers(data.users));
        })
    }, []);

    return (
        <div className={"flex w-full"}>
            <div className={"flex flex-col h-1/2 m-auto shadow-lg text-center w-1/2"}>
                <h1>Welcome To Would You Rather</h1>
                <span className={"text-gray-400 text-sm"}>Please Sign in to continue</span>
                <img
                    src={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"}
                    alt={"logo"}/>
                <select className={"bg-white border-2 border-gray-300 border-solid m-2 p-4 rounded text-center"}>
                    {state && Object.keys(state).map(id => (<option key={state[id].id} value={state[id].id}>{state[id].name}</option>))}
                </select>
                <button type="button" className="m-2 p-4 bg-blue-300 hover:bg-blue-400 rounded text-white font-bold text-lg">Sign In</button>
            </div>
        </div>
    );
}

export default connect()(App);
