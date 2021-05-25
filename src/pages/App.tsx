import React, {useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import handleInitialDataAction from "../actions/shared";
import { useDispatch} from "react-redux";
import Login from "./Login";
import Home from "./Home";
import Nav from '../components/Nav';
import Add from "./Add";
import LeaderBoard from "./Leaderboard";
import Poll from "./Poll";
import PageNotFound from "./Errors/PageNotFound";


function App() {
    const dispatch = useDispatch();

    // componentDidMount => fire handleInitialData action
    useEffect(() => {
        dispatch(handleInitialDataAction());
    }, [dispatch]);

    return (
        <Router>
            <Nav />

            <Switch>
                <Route path="/login" exact component={Login}/>
                <Route path="/" exact component={Home}/>
                <Route path="/add" exact component={Add}/>
                <Route path="/leaderboard" exact component={LeaderBoard}/>
                <Route path="/questions/:question_id" exact component={Poll}/>

                <Route path="*">
                    <PageNotFound/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
