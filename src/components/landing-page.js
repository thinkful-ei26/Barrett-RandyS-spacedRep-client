import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import {Navbar} from './navbar';
import '../stylesheets/landing-page.css';

export function LandingPage(props) {
    // If we are logged in redirect straight to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <main>
            <div className="home">
            <Navbar />
                <section className='welcome'>
                    <header>
                        <h1>LearnFrench</h1>
                    </header>
                    <Link to="/register">Register</Link>
                </section>
            </div>
        </main>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
