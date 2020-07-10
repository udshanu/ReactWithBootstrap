import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createProject } from '../../store/actions/projectActions';
import { Redirect } from 'react-router-dom';
import { USER_ROLE_TYPES } from '../../enums/UserRoles';

class CreateProject extends Component {
    state = {
        title: '',
        content: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault(); 
        //console.log(this.state);
        this.props.createProject(this.state)
    }

    render() {
        const { auth, userRole } = this.props;
        if (!auth) return <Redirect to='/signin' />
        console.log('UserRole from Create Componenet ', userRole)
        // if  (userRole != 'Admin') return <Redirect to='/forbidden' />
        if  (userRole != USER_ROLE_TYPES.ADMIN) return <Redirect to='/forbidden' />

        return (
            <div className="container">
            <form onSubmit={this.handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Create new project</h5>
                <div className="input-field">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" onChange={this.handleChange} />
                </div>
                <div className="input-field">
                    <label htmlFor="content">Project Content</label>
                    <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Create</button>
                </div>
            </form>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: localStorage.getItem('token'),
        userRole: state.auth.userRole
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject : (project) => dispatch(createProject(project))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)
