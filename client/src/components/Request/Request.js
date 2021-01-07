import { Form, Col, Button } from 'react-bootstrap';
import { useState } from 'react';
import {connect} from 'react-redux';
import {setAlert} from '../../actions/alert';


const Request = (props) => {
    const [bloodGroup, setBloodGroup] = useState('A+');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');

    const handleSubmit = async (e) =>{
        e.preventDefault();
    }
    
    
    return (
        <div className="jumbotron justify-content-center container form-style">
            <Form onSubmit={handleSubmit}>
                <Form.Group as='h1'>Sign Up</Form.Group>
                <Form.Group controlId="Name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text"
                        placeholder="Enter Name"
                        onChange={(e) => { setName(e.target.value) }} />
                </Form.Group>

                <Form.Group controlId="Email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email"
                        placeholder="Enter email"
                        onChange={(e) => { setEmail(e.target.value) }} />
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} controlId="BloodGroup" >
                        <Form.Label>Blood Group</Form.Label>
                        <Form.Control as="select"
                            defaultValue={bloodGroup}
                            onChange={(e) => { setBloodGroup(e.target.value) }}>
                            <option>A+</option>
                            <option>B+</option>
                            <option>O+</option>
                            <option>A-</option>
                            <option>B-</option>
                            <option>O-</option>
                            <option>AB+</option>
                            <option>AB-</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} controlId="contact">
                        <Form.Label>Contact Number</Form.Label>
                        <Form.Control type="text"
                            placeholder="Contact"
                            onChange={(e) => { setContact(e.target.value) }} />
                    </Form.Group>
                </Form.Row>
                <Button type="submit" variant="outline-success" size='lg'>Sign Up</Button>{' '}
            </Form>
        </div>
    )
}


export default connect(null,{setAlert})(Request)