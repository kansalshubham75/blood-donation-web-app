import {
    REGISTER_USER_FAIL,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    SET_TOKEN,
    SET_ALERT} from './types';
import axios from 'axios'
import { setAlert } from './alert';

export const loginUser = (email,password) => dispatch => {
    axios.post('/api/auth/login',{email,password})
        .then((res)=>{
            dispatch(setToken(res.data.token));
            localStorage.setItem('token',res.data.token);
        })
        .catch((err)=>{
            console.log(err)
            setAlert(err.response.data.msg,'danger');
        })
}

export const registerUser = (user) => dispatch =>{
    axios.post('/api/user',user)
        .then((res)=>{
            dispatch(setToken(res.data.token))
            localStorage.setItem('token',res.data.token);
        })
        .catch((err)=>{
            dispatch({
                type : REGISTER_USER_FAIL
            })
            setAlert(err.response.data.msg,'danger');
        })
}

export const loadUser = () => dispatch =>{
    console.log('load called')
    axios.get('/api/auth')
        .then((res)=>{
            console.log(res)
            dispatch({
                type:LOAD_USER_SUCCESS,
                payload:res.data
            })
        })
        .catch((err)=>{
            dispatch({
                type : SET_ALERT,
                payload : err.response.data.msg
            })
        })
}
export const setToken=(token) =>{
    return {
        type:SET_TOKEN,
        payload:token
    }
}
