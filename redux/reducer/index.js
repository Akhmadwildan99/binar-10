import {PRO_LOADING} from './typeAction';

const userInfo = {
    isLoading : false
}

const reducUser = (state = userInfo, action) => {
    if(action.type === PRO_LOADING) {
        return {
            ...state,
            isLoading: action.value
        }
    }
    return state
}

export default reducUser;

