import { Fragment } from "react";
import { Nav , Button} from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
// import {Link} from 'react-router-dom'

export const SignedOutLinks = () =>{
    const links = [
        {
            title : "Make a request",
            url : "/make-a-request"
        },
        {
            title : "Sign In",
            url : "/sign-in"
        }
    ]
    const style={margin:"5px"}
    return(
        <Fragment>
            {links.map((item,index)=>{
                return(
                        <Nav.Item key={index} style={style}>
                            <LinkContainer to={item.url}>
                                <Nav.Link>
                                    {item.title}
                                </Nav.Link>
                            </LinkContainer>
                        </Nav.Item>
                )
            })}
            <LinkContainer style={style} to="/sign-up"><Button variant="outline-light" >Sign Up</Button></LinkContainer>
        </Fragment>
    )
}