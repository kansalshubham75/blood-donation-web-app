import React from 'react';
import {NavLink,Link} from 'react-router-dom'

const SignedInLinks=(props)=>{
    // const Links=[];
    // if(props.)
    return (
        <div>
            <ul className="right hide-on-med-and-down">
                <li><NavLink to='/dashboard'>DashBoard</NavLink></li>
                <li><Link to='/requests'>Requests</Link></li>
                <li><Link to='/history'>History</Link></li>
                <li><Link to='/logout'>Logout</Link></li>
                <li><Link to='/' className="btn-floating btn-large waves-effect waves-light red">Initials</Link></li>
            </ul>
        </div>
    )
}
export default SignedInLinks;