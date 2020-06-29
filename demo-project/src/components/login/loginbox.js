import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Styles } from '../styled/login/loginbox';

export const LoginBox = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <Styles>
            <div className="root-container">
                <div className="box-container">
                <Container>
                <div className="header">Login</div>
                <Form noValidate validated={validated} onSubmit={handleSubmit} >
                    <Form.Group controlId="formBasicUsername">
                        <Form.Control type="text" placeholder="Username" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit" block>Submit</Button>
                </Form>
            </Container>
                </div>
            </div>
        </Styles>
    )
}

