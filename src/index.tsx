import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './pages/App';
import Login from "./pages/Login";
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducers from './reducers';
import middlewares from './middlewares';

const store = createStore(reducers, middlewares);

ReactDOM.render(
    <Provider store={store}>
        <Login/>
    </Provider>,
    document.getElementById('root')
);
