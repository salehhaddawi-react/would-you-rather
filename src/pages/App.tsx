import React, {useEffect} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import handleInitialDataAction from "../actions/shared";
import { useDispatch} from "react-redux";
import Login from "./Login";


function App() {
    const dispatch = useDispatch();

    // componentDidMount => fire handleInitialData action
    useEffect(() => {
        dispatch(handleInitialDataAction());
    }, [dispatch]);

    return (
        <Router>
            <Route path="/login" exact component={Login}/>
        </Router>
    );
}

export default App;
