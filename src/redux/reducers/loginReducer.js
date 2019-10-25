const INITIAL_STATE = {
    loading: false,
    loaded: true,
    error: false,
    logged: true,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOGIN': {
            return {
                ...state,
                ...action.payload && action.payload,
                logged: false,
                loading: true,
                loaded: false,
                error: false,
            }
        }
        case 'LOGIN_SUCCESS': {
            return {
                ...state,
                ...action.payload && action.payload,
                loading: false,
                loaded: true,
                error: false,
                logged: true,
            }
        }
        case 'LOGIN_ERROR': {
            return {
                ...state,
                ...action.payload && action.payload,
                loading: false,
                loaded: true,
                error: true,
            }
        }
        default:
            return state
    }
}