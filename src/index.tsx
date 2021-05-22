import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import {Provider} from "react-redux";
import {compose, createStore} from "redux";
import reducers from './reducers';
import middlewares from './middlewares';
import {BrowserRouter as Router} from "react-router-dom";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(middlewares));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>,
    document.getElementById('root')
);
