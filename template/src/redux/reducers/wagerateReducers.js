import { SET_WAGERATE } from '../actions/types'

const initialState = {
    text: "wagerate",
    list: [],
};

export default function wagerateReducer(state = initialState, action) {
    switch (action.type) {
        case SET_WAGERATE: {
            const newList = [...action.payload]
            return {
                ...state,
                list: newList,
            };
        }
        default:
            return state
    }
}