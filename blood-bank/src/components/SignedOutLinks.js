import React from 'react';
import {Link} from 'react-router-dom'

const SignedOutLinks=(props)=>{
    
    return (
        <div>
            <ul className="right hide-on-med-and-down">
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/signup'>Signup</Link></li>
                <li><Link to='/login'>Login</Link></li>
            </ul>
        </div>
    )
}
export default SignedOutLinks;