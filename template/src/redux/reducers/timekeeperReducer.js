import { SET_TIMEKEEPER } from '../actions/types'

const initialState = {
    text: "timekeeper",
    list: [],
};

export default function timekeeperReducer(state = initialState, action) {
    switch (action.type) {
        case SET_TIMEKEEPER: {
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