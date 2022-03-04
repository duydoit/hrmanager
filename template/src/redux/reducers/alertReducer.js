import { GET_ALERT } from '../actions/types'

const initialState = {
    msg: null,
    title: null,
}

export default function alertReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALERT:
            return {
                msg: action.payload.msg,
                title: action.payload.title,
            }
        default:
            return state;
    }

}