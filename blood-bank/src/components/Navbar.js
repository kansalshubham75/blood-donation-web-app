import React from 'react';
import { Link } from "react-router-dom";
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from "./SignedOutLinks";
const Navbar = (props) => {
    return (
        <nav className="nav-wrapper grey darken-4">
            {/* <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a> */}
            <div className="container">
                <Link to='/' className="brand-logo white-text "><i className="large material-icons red-text text-darken-3 ">invert_colors</i>BloodFinder</Link>  
            </div>
            {props.isLoggedIn ? <SignedInLinks/> : <SignedOutLinks/>}
        </nav>
    )
}

export default Navbar