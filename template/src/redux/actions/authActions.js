import {
    USER_LOADED,
    USER_LOADING,
    GET_ALERT,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
} from './types'

import userAPI from '../../api/userApi'
import jwtDecode from 'jwt-decode'
//signUp
export const loginUser = (user) => (dispatch) => {
    userAPI.login(user).then(
        response => {
            localStorage.setItem("access_token", response['jwt_token'])
            dispatch({
                type: LOGIN_SUCCESS,
                payload: response
            });
            dispatch({
                type: GET_ALERT,
                payload: { msg: "Welcome to HRManager !" }
            })
        }
    ).catch(error => {
        dispatch({
            type: GET_ALERT,
            payload: { msg: "Vui lòng thử lại username/password !" }
        })
    })
}

export const loadUser = () => (dispatch, getState) => {
    const token = getState().auth.token
    if (token) {
        const user = jwtDecode(token)
        dispatch({
            type: USER_LOADED,
            payload: { token, user }
        })
    } else {
        dispatch({
            type: USER_LOADING,
            payload: null,
        })
    }

}

export const signOut = () => (dispatch) => {
    dispatch({
        type: LOGOUT_SUCCESS,
        payload: null,
    })
}