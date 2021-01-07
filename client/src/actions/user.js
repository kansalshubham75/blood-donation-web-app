import {REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    SET_TOKEN} from './types';
import axios from 'axios'
import { setAlert } from './alert';

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
                type : REGISTER_USER_FAIL
            })
            setAlert(err.response.data.msg,'danger');
        })
}

export const loginUser = (email,password) => dispatch =>{
    axios.post('/api/auth/login',{email,password})
        .then((res)=>{
            
        })
        .catch((err)=>{

        })
}