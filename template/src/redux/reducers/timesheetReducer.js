import { SET_TIMESHEET } from '../actions/types'

const initialState = {
    text: "timesheet",
    list: [],
};

export default function timesheetReducer(state = initialState, action) {
    switch (action.type) {
        case SET_TIMESHEET: {
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