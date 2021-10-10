import {PRO_LOADING, PRO_LOGIN, CHANGE_USER} from './typeAction';

const userInfo = {
    isLoading : false,
    isLogin: false,
    user: {}
}

const reducUser = (state = userInfo, action) => {
    if(action.type === PRO_LOADING) {
        return {
            ...state,
            isLoading: action.value
        }
    }

    if(action.type === PRO_LOGIN) {
        return {
            ...state,
            isLogin: action.value
        }
    }

    if(action.type === CHANGE_USER) {
        return {
            ...state,
            user: action.value
        }
    }
    return state
}

export default reducUser;

