import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap';
import { Styles } from '../styled/login/loginbox';
import { Formik, Field, ErrorMessage, Form } from 'formik';
import * as Yup from 'yup';
import TextError from '../texterror/TextError';
import * as actions from '../../actions/RegisterAction';
import { store } from '../../actions/store';
import { connect } from 'react-redux';

const initialValues = {
    Email: '',
    Password: '',
    RememberMe: false
}

const onSubmit = values => {
    console.log('Login Data: ', values)
    console.log('Login Data JSON: ',JSON.stringify(values));
    store.dispatch(actions.Login(values, (res) => {
            if (res.data.succeeded) {
                
            }
        }))
}

const validationSchema = Yup.object({
    Email: Yup.string().email('Invalid email format.').required('Email is required.'),
    Password: Yup.string().min(6).required('Password is required.')
})

const Loginbox = () => {
    return (
        <Styles>
            <div className="root-container">
                <div className="box-container">
                <Container>
                <div className="header">Login</div>
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    {
                        formik =>{
                            return(
                                <Form>
                                    <Field type="email" id="Email" name="Email" placeholder="Email" />
                                    <ErrorMessage name="Email" component={TextError} />

                                    <Field type="password" id="Password" name="Password" placeholder="Password" />
                                    <ErrorMessage name="Password" component={TextError} />

                                    <Field type="checkbox" id="RememberMe" name="RememberMe" />
                                    <label htmlFor="RememberMe">Remember Me</label>

                                    <div className="form-group">
                                        <button type="submit">Submit</button>
                                    </div>
                                </Form>
                            )
                        }
                    }
                </Formik>
                {/* <Form noValidate validated={validated} onSubmit={handleSubmit} >
                    <Form.Group controlId="formBasicUsername">
                        <Form.Control type="text" placeholder="Username" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>
                    <Button variant="primary" type="submit" block>Submit</Button>
                </Form> */}
            </Container>
                </div>
            </div>
        </Styles>
    )
}

const mapStateToProps = state => ({
    registerList: state.registerReducer.loginData
})

const mapDispatchToProps = dispatch => {
    return {
        login : () => dispatch(actions.Login)
        //createEmployee : (actions.create)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Loginbox)
