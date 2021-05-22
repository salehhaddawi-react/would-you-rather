import {Middleware, MiddlewareAPI, Dispatch} from "redux";

const logger: Middleware = ({getState}: MiddlewareAPI) => (next: Dispatch) => action => {
    console.group(action.type);
    console.log('the action is:', action);
    const returnVal = next(action);
    console.log('the new state:', getState());
    console.groupEnd()
    return returnVal;
}

export default logger;
