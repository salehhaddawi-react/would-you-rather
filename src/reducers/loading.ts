import {SHOW_LOADING, HIDE_LOADING, LoadingAction} from "../actions/loading";

export default function loading(state: boolean = false, action: LoadingAction): boolean {
    switch (action.type) {
        case SHOW_LOADING:
        case HIDE_LOADING:
            return action.loading;
        default:
            return state;
    }
}
