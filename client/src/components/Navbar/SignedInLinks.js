import { Fragment } from "react";
import { Nav , Button} from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
// import { Link } from "react-router-dom";

export const SignedInLinks = () =>{
    const handleLogout = () => {
        
    }
    const links = [
        {
            title : "Profile",
            url : "/profile"
        },
        {
            title : "Requests",
            url : "/requests"
        },
        {
            title : "History",
            url : "/history"
        }
    ]
    const style={margin:"5px"}
    return (
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
                <LinkContainer to="/logout" onClick={handleLogout} style={style}><Button variant="outline-danger">Logout</Button></LinkContainer>
        </Fragment>
    )
}
