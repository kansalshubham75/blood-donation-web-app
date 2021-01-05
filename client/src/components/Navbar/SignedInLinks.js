import { Fragment } from "react";
import { Nav , Button} from 'react-bootstrap';

export const SignedInLinks = () =>{
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
                        <Nav.Item key={index}>
                            <Nav.Link href={item.url} style={style}>
                                {item.title}
                            </Nav.Link>
                        </Nav.Item>
                    )
                })}
                <Button href="/logout" variant="outline-danger" style={style}>Logout</Button>
        </Fragment>
    )
}
