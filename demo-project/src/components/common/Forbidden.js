import React from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const forbidden = (props) => {
    const { auth } = props;
        if (!auth) return <Redirect to='/signin' />
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">403 - ACCESS DENIED</span>
                    <p>You don't have the permission to access this resource.</p>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: localStorage.getItem('token')
    }
}

export default connect(mapStateToProps)(forbidden)
