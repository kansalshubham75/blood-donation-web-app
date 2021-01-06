import {REGISTER_USER_SUCCESS,
        REGISTER_USER_FAIL,
        LOAD_USER_SUCCESS,
        LOAD_USER_FAIL, 
        SET_TOKEN} from '../actions/types'

const initialState = {
    isAuthenticated: false,
    user : {},
    loading : true,
    token : localStorage.getItem('token'),
    err : ""
}

export const userReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case REGISTER_USER_SUCCESS:
        case SET_TOKEN: 
                                return {
                                    ...state,
                                    loading : false,
                                    isAuthenticated : false,
                                    token : payload.token,
                                    err : ''
                                }
        case LOAD_USER_SUCCESS : 
                                return {
                                    ...state,
                                    isAuthenticated:true,
                                    loading : false,
                                    user : payload.user,
                                    err : ''
                                }
        case REGISTER_USER_FAIL : 
        case LOAD_USER_FAIL:
                                return {
                                    ...state,
                                    loading : false,
                                    isAuthenticated : false,
                                    token : null,
                                    err : payload.msg
                                }
        default: return state;
    }
}