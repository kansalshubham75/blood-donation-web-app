import { SET_ALERT, REMOVE_ALERT } from '../actions/types';

const initialState = {
    err: []
}

export const alertReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case SET_ALERT:
            return {
                ...state,
                err: [...state.err,
                {
                    msg: payload.msg,
                    id: payload.id,
                    type: payload.alertType
                }]
            }
        case REMOVE_ALERT:
            return {
                ...state,
                err: state.err.filter(e => e.id !== payload)
            }
        default: return state;
    }
}