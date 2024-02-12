// components/LoginForm.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'; // Importing useSelector
import { Form, Button, Card } from 'react-bootstrap';
import { fetchUser } from '../actions/userActions';

const LoginForm = () => {
    const error = useSelector(state => state.error); // Using useSelector to access error state
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email.trim() !== '') {
            dispatch(fetchUser(email));
        } else {
            alert('Please enter your email address.');
        }
    };

    return (
        <div style={{ backgroundColor: '#6a62d2', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Card style={{ backgroundColor: 'white', width: '400px', padding: '20px' }}>
                <Card.Body>
                    <Card.Title className="text-center">Sign In to your account</Card.Title>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={email} onChange={handleEmailChange} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Keep me signed in" />
                        </Form.Group>

                        {/* Display error if exists */}
                        {error && <p style={{ color: 'red' }}>{error}</p>}

                        <Button variant="primary" type="submit" style={{ backgroundColor: '#6a62d2' }}>
                            Sign in
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default LoginForm;
