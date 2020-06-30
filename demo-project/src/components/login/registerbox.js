import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Styles } from '../styled/login/loginbox';
import useForm from '../useform/useForm';
import { useFormik } from 'formik';
import '../../css/register.css';

const initialValues = {
    email: '',
    password: '',
    confirmPassword: ''
}

const onSubmit = values => {
    console.log('Form Data: ', values)
}

const validate = values => {
    let errors = {}

    if (!values.email) {
        errors.email = 'Email is required.';
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email format.';
    }

    if (!values.password) {
        errors.password = 'Password is required.';
    }

    if (!values.confirmPassword) {
        errors.confirmPassword = 'Confirmation password is required.';
    }

    return errors;
}

export const RegisterBox = () => {

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })

    console.log('Errors: ', formik.errors)

    return (
        <Styles>
            <div className="root-container">
                <div className="box-container">
                    <Container>
                        <div className="header">Register</div>
                        {/* <Form noValidate validated={validated} onSubmit={handleSubmit} > */}
                        {/* <Form noValidate onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="email" name="email" placeholder="Email" value={values.email} onChange={handleInputChange} required/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="password" name="password" placeholder="Password" value={values.password} onChange={handleInputChange}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicConfirmPassword">
                        <Form.Control type="password" name="confirmPassword" placeholder="Confirm Password" value={values.confirmPassword} onChange={handleInputChange}/>
                    </Form.Group>
                    <Button variant="primary" type="submit" block>Register</Button>
                </Form> */}
                        <form onSubmit={formik.handleSubmit}>
                                <input type="email" id="email" name="email" placeholder="Email" onChange={formik.handleChange} value={formik.values.email} />
                                {formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}

                                <input type="password" id="password" name="password" placeholder="Password" onChange={formik.handleChange} value={formik.values.password} />
                                {formik.errors.password ? <div className="error">{formik.errors.password}</div> : null}

                                <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" onChange={formik.handleChange} value={formik.values.confirmPassword} />
                                {formik.errors.confirmPassword ? <div className="error">{formik.errors.confirmPassword}</div> : null}

                            <button type="submit">Submit</button>
                        </form>
                    </Container>
                </div>
            </div>
        </Styles>
    )
}
