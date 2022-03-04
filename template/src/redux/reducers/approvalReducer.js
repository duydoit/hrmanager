import {
    SET_APPROVED,
    ADD_APPROVED,
    PUT_APPROVED
} from '../actions/types'

const initialState = {
    details: null,
    list: [],
}
export default function approvalReducer(state = initialState, action) {
    switch (action.type) {
        case SET_APPROVED: {
            const newList = [...action.payload]
            return {
                ...state,
                list: newList,
            };
        }
        case ADD_APPROVED: {
            const newList = [...state.list];
            newList.push(action.payload)
            return {
                ...state,
                list: newList,
            }
        }
        case PUT_APPROVED: {
            let list = [...state.list]
            let index = list.findIndex(value => value.id === action.payload.id)
            list.splice(index, 1, action.payload);
            return {
                ...state,
                list: list
            }
        }

        default:
            return state
    }
}