export const SHOW_LOADING = 'SHOW_LOADING';
export const HIDE_LOADING = 'HIDE_LOADING';

export interface LoadingAction {
    type: string,
    loading: boolean
}

export function showLoading() {
    return {
        type: SHOW_LOADING,
        loading: true
    }
}

export function hideLoading() {
    return {
        type: HIDE_LOADING,
        loading: false
    }
}
