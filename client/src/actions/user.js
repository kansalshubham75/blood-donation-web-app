import {REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    SET_TOKEN} from './types';
import axios from 'axios'

export const registerUser = (user,history) => dispatch =>{
    axios.post('/api/user',user)
        .then((res)=>{
            dispatch({
                type : REGISTER_USER_SUCCESS,
                payload : res.data
            })
            localStorage.setItem('token',res.data.token);
            history.push('/sign-in')
        })
        .catch((err)=>{
            dispatch({
                type : REGISTER_USER_FAIL,
                payload : err.response.data
            })
        })
}