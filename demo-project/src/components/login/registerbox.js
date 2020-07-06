import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Styles } from '../styled/login/loginbox';
import useForm from '../useform/useForm';
import { Formik, Field, ErrorMessage, Form } from 'formik';
import * as Yup from 'yup';
import '../../css/register.css';
import TextError from '../texterror/TextError';
import { connect } from 'react-redux';
//import * as actions from '../../actions/register';
import * as actions from '../../actions/RegisterAction';
import { store } from '../../actions/store';

const initialValues = {
    Email: '',
    Password: '',
    ConfirmPassword: ''
}

const onSubmit = values => {
    console.log('Form Data: ', values)
    console.log('Form Data JSON: ',JSON.stringify(values));
    store.dispatch(actions.create(values, () => {window.alert('Inserted')}))
    //actions.create(values, () => {window.alert('Inserted')})

    // setTimeout(() => {
    //     console.log({ mode: props });
    //     alert(JSON.stringify(values, null, 2));
    //     setSubmitting(false);
    //   }, 1000);
    
    //createEmployee(values, () => {window.alert('Inserted')})
    //props.createEmployee(values, () => {window.alert('Inserted')})
    //props.createEmployee(values, () => {window.alert('Insert.')})
}

const validationSchema = Yup.object({
    Email: Yup.string().email('Invalid email format.').required('Email is required.'),
    Password: Yup.string().min(6).required('Password is required.'),
    ConfirmPassword: Yup.string().oneOf([Yup.ref('Password')], 'Passwords must match.').required('Confirmation password is required.')
})

const RegisterBox = () => {
    //console.log('props: --- : ', props)
    return (
        <Styles>
            <div className="root-container">
                <div className="box-container">
                    <Container>
                        <div className="header">Register</div>
                        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                            {
                                formik => {
                                    // console.log('Formik data: ', formik);
                                    // console.log('Formik propssss: ', props);
                                    return (
                                        <Form>
                                            <Field type="email" id="Email" name="Email" placeholder="Email" />
                                            <ErrorMessage name="Email" component={TextError} />

                                            <Field type="password" id="Password" name="Password" placeholder="Password" />
                                            <ErrorMessage name="Password" component={TextError} />

                                            <Field type="password" id="ConfirmPassword" name="ConfirmPassword" placeholder="Confirm Password" />
                                            <ErrorMessage name="ConfirmPassword" component={TextError} />

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

const mapStateToProps = state => ({
    registerList: state.registerReducer.employeelist
})

const mapDispatchToProps = dispatch => {
    return {
        createEmployee : () => dispatch(actions.create)
        //createEmployee : (actions.create)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterBox)
//export default RegisterBox

