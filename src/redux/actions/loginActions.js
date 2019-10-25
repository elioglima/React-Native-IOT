export const login = (payload) => ({
    type: 'LOGIN',
    payload
})

export const loginSuccess = (informations) => ({
    type: 'LOGIN_SUCCESS',
    informations
})

export const loginError = () => ({
    type: 'LOGIN_ERROR'
})

export const loginLogout = () => ({
    type: 'LOGIN_LOGOUT'
})