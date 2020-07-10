import React from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
    const { userName } = props;
    return (
        <ul className="right">
            <li><NavLink to='/create'>New Project</NavLink></li>
            <li><a onClick={props.signOut}>Log Out</a></li>
    <li><NavLink to='/' className='btn  pink lighten-1'>{userName}</NavLink></li>
        </ul>
    )
}

const mapStateToProps = (state) => {
    return {
        userName: state.auth.UserName
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut : () => dispatch(signOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks)
