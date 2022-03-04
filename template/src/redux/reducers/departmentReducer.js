import {
    SET_DEPARTMENT,
    REMOVE_DEPARTMENT,
    DETAIL_DEPARTMENT,
    EDIT_DEPARTMENT,
    ADD_DEPARTMENT,
} from '../actions/types'
const initialState = {
    detail: null,
    list: [],
};

export default function departmentReducer(state = initialState, action) {
    switch (action.type) {
        case SET_DEPARTMENT: {
            const newList = [...action.payload]
            return {
                ...state,
                list: newList,
            };
        }
        case ADD_DEPARTMENT: {
            const newList = [...state.list];
            newList.push(action.payload)
            return {
                ...state,
                list: newList,
            }
        }
        case REMOVE_DEPARTMENT:
            return {
                ...state,
            }
        case DETAIL_DEPARTMENT:
            return {
                ...state,
                detail: action.payload,
            };
        case EDIT_DEPARTMENT:
            return {
                ...state,
                detail: action.payload,
            };
        default:
            return state
    }
}