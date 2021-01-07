import {Form,Button} from 'react-bootstrap';
import {useState} from 'react'
export const SignIn = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) =>{
        e.preventDefault();
    }

    return(
        <div className="jumbotron justify-content-center container form-style">
            <Form onSubmit={handleSubmit}>
                <Form.Group as='h1'>Sign In</Form.Group>
                <Form.Group controlId="Email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email"
                        placeholder="Enter email"
                        onChange={(e) => { setEmail(e.target.value) }} />
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"
                        placeholder="Password"
                        onChange={(e) => { setPassword(e.target.value) }} />
                </Form.Group>
                <Button type="submit" variant="outline-success" size='lg'>Sign In</Button>{' '}
            </Form>
        </div>
    )
}