import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Styles } from '../styled/login/loginbox';
import useForm from '../useform/useForm';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import '../../css/register.css';

const initialValues = {
    email: '',
    password: '',
    confirmPassword: ''
}

const onSubmit = values => {
    console.log('Form Data: ', values)
}

const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format.').required('Email is required.'),
    password: Yup.string().required('Password is required.'),
    confirmPassword: Yup.string().required('Confirmation password is required.')
})

export const RegisterBox = () => {

    // const formik = useFormik({
    //     initialValues,
    //     onSubmit,
    //     validationSchema
    // })

    //console.log('Touched: ', formik.touched)

    return (
        <Styles>
            <div className="root-container">
                <div className="box-container">
                    <Container initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                        <div className="header">Register</div>
                        <Formik>
                            <Form>
                                <input type="email" id="email" name="email" placeholder="Email" {...formik.getFieldProps('email')} />
                                {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}

                                <input type="password" id="password" name="password" placeholder="Password" {...formik.getFieldProps('password')} />
                                {formik.touched.password && formik.errors.password ? <div className="error">{formik.errors.password}</div> : null}

                                <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" {...formik.getFieldProps('confirmPassword')} />
                                {formik.touched.confirmPassword && formik.errors.confirmPassword ? <div className="error">{formik.errors.confirmPassword}</div> : null}

                                <button type="submit">Submit</button>
                            </Form>
                        </Formik>
                    </Container>
                </div>
            </div>
        </Styles>
    )
}
