import { Fragment } from "react";
import { Nav , Button} from 'react-bootstrap';

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
                    <Nav.Item key={index}>
                        <Nav.Link href={item.url} style={style}>
                            {item.title}
                        </Nav.Link>
                    </Nav.Item>
                )
            })}
            <Button href="/sign-up" variant="outline-light" style={style}>Sign Up</Button>
        </Fragment>
    )
}