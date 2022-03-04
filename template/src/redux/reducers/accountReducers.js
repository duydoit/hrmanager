import { SET_ACCOUNT, ADD_ACCOUNT, DETAIL_ACCOUNT, DELETE_ACCOUNT, } from '../actions/types'

const initialState = {
    detail: null,
    list: [],
}

export default function accountReducer(state = initialState, action) {
    switch (action.type) {
        case SET_ACCOUNT: {
            const newList = [...action.payload]
            return {
                ...state,
                list: newList,
            };
        }
        case ADD_ACCOUNT: {
            const newList = [...state.list];
            newList.push(action.payload)
            return {
                ...state,
                list: newList,
            }
        }
        case DETAIL_ACCOUNT:
            return {
                ...state,
                detail: action.payload,
            };
        case DELETE_ACCOUNT: {
            const newList = [...state.list]
            return {
                ...state,
                list: newList.filter(item => { return item.id !== action.payload })
            }
        }
        default:
            return state;
    }

}