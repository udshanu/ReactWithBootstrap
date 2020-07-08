import React from 'react'
import { connect } from 'react-redux';

const ProjectDetails = (props) => {
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">{props.project.title}</span>
                    <p>{props.project.content}</p>
                </div>
                <div className="card-action gret lighten-4 grey-text">
                    <div>Posted by The Net Ninja</div>
                    <div>2nd September, 2am</div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    
    const id = ownProps.match.params.id;
    return {
        ...state,
        project: state.project.projects[id - 1]
    }
}

export default connect(mapStateToProps)(ProjectDetails)