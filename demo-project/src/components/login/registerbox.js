import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Styles } from '../styled/login/loginbox';

export const RegisterBox = () => {
    return (
        <Styles>
            <Container>
            <div className="header">Register</div>
            <Form noValidate validated={validated} onSubmit={handleSubmit} >
                    <Form.Group controlId="formBasicUsername">
                        <Form.Control type="text" placeholder="Username" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit" block>Submit</Button>
                </Form>
            </Container>
        </Styles>
    )
}

export default registerbox
