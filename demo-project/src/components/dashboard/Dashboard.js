import React, { Component, useEffect } from 'react'
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'
import { connect } from 'react-redux';
//import * as actions from '../../store/actions/projectActions'
import { getAllProjects } from '../../store/actions/projectActions';
import { Redirect } from 'react-router-dom';

export class Dashboard extends Component {
    componentDidMount(){
        this.props.getAllProjects();
    }

    // componentDidUpdate(){
    //     this.props.getAllProjects();
    // }

    render() {
        console.log(this.props);
        const { projects, auth } = this.props;
        if (!auth) return <Redirect to='/signin' />
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects={projects} />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.project.projects,
        auth: state.auth.succeeded
    }
}

// const mapDispatchToProps = {
//     getAllProjects: () => dispatch(getAllProjects())
// }

const mapDispatchToProps = (dispatch) => {
    return {
        getAllProjects : () => dispatch(getAllProjects())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
