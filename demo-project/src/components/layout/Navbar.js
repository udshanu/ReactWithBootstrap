import React from 'react'
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';

const Navbar = (props) => {
    const { succeeded } = props;
    const links = succeeded ? <SignedInLinks /> : <SignedOutLinks />;
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-log">Virtuozzo</Link>
                {/* <SignedInLinks />
                <SignedOutLinks /> */}
                {
                    links
                }
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        succeeded: localStorage.getItem('isLoggedIn')
    }
}

export default connect(mapStateToProps)(Navbar)
