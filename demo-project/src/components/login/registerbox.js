import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Styles } from '../styled/login/loginbox';
import useForm from '../useform/useForm';
import { Formik, Field, ErrorMessage, Form } from 'formik';
import * as Yup from 'yup';
import '../../css/register.css';
import TextError from '../texterror/TextError';

const initialValues = {
    email: '',
    password: '',
    confirmPassword: ''
}

const onSubmit = (values) => {
    console.log('Form Data: ', values)
}

const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format.').required('Email is required.'),
    password: Yup.string().min(6).required('Password is required.'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Passwords must match.').required('Confirmation password is required.')
})

export const RegisterBox = () => {
    return (
        <Styles>
            <div className="root-container">
                <div className="box-container">
                    <Container>
                        <div className="header">Register</div>
                        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                            {
                                formik => {
                                    console.log('Formik data: ', formik);
                                    return (
                                        <Form>
                                            <Field type="email" id="email" name="email" placeholder="Email" />
                                            <ErrorMessage name="email" component={TextError} />

                                            <Field type="password" id="password" name="password" placeholder="Password" />
                                            <ErrorMessage name="password" component={TextError} />

                                            <Field type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" />
                                            <ErrorMessage name="confirmPassword" component={TextError} />

                                            <button type="submit">Submit</button>
                                        </Form>
                                    )
                                }
                            }

                        </Formik>
                    </Container>
                </div>
            </div>
        </Styles>
    )
}
