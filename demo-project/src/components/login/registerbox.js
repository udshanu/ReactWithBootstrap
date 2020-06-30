import React, {useState} from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Styles } from '../styled/login/loginbox';
import useForm from '../useform/useForm';
import { useFormik } from 'formik';
import '../../css/register.css';

const initialFieldValues = {
    email : '',
    password : '',
    confirmPassword : ''
}

export const RegisterBox = () => {

    const formik = useFormik({
        initialValues: {
            email:'',
            password:'',
            confirmPassword: ''
        },
        onSubmit: values => {
            console.log('Form Data: ', values)
        }
    })

    const validate = () => {

    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange
    } = useForm(initialFieldValues)

    const handleSubmit = e => {
        e.preventDefault()
        console.log(values)
    }

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
                    <input type="email" id="email" name="email" placeholder="Email" onChange={formik.handleChange} value={formik.values.email}/>
                    <input type="password" id="password" name="password" placeholder="Password" onChange={formik.handleChange} value={formik.values.password}/>
                    <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" onChange={formik.handleChange} value={formik.values.confirmPassword}/>
                    <button type="submit">Submit</button>
                </form>
            </Container>
                </div>
            </div>
        </Styles>
    )
}
