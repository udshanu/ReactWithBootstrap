import React, { Component } from 'react'
import { signUp } from '../../store/actions/authActions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        confirmPassword: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault(); 
        console.log(this.state);
        this.props.signup(this.state)
    }

    render() {
        const { auth } = this.props
        if (auth) return <Redirect to='/' />

        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" id="confirmPassword" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Sign up</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: localStorage.getItem('token')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signup : (signup) => dispatch(signUp(signup))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
