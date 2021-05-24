import React, {useEffect} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import handleInitialDataAction from "../actions/shared";
import { useDispatch} from "react-redux";
import Login from "./Login";
import Home from "./Home";
import Nav from '../components/Nav';
import Add from "./Add";
import LeaderBoard from "./Leaderboard";


function App() {
    const dispatch = useDispatch();

    // componentDidMount => fire handleInitialData action
    useEffect(() => {
        dispatch(handleInitialDataAction());
    }, [dispatch]);

    return (
        <Router>
            <Nav />
            <Route path="/login" exact component={Login}/>
            <Route path="/" exact component={Home}/>
            <Route path="/add" exact component={Add}/>
            <Route path="/leaderboard" exact component={LeaderBoard}/>
        </Router>
    );
}

export default App;
