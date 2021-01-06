import Navbar from 'react-bootstrap/Navbar';
import {SignedInLinks} from './SignedInLinks';
import {SignedOutLinks} from './SignedOutLinks';
import logo from '../../img/logo.png'
import { Nav , Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

const NavBar = (props) => {
    const {isAuthenticated} = props;
    return(
    <Navbar collapseOnSelect expand='md' bg='dark' variant='dark' fixed="top" className="sticky-nav">
        <LinkContainer to="/">
            <Navbar.Brand>
                <img
                    alt=""
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                Donate Blood
            </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
                {isAuthenticated ? <SignedInLinks {...props}/> : <SignedOutLinks/>}
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)}

export default NavBar