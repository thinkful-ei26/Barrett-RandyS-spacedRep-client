import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import InfoModal from './info-modal';
import Navbar from './navbar';
import '../stylesheets/landing-page.css';

export class LandingPage extends React.Component {
    // If we are logged in redirect straight to the user's dashboard

    //how to get this Redirect working?
    onClick() {
        console.log('clicked')
        return <Redirect to="/register" />
    }

    render() {
        if (this.props.loggedIn) {
            return <Redirect to="/dashboard" />;
        }

        let infoModal = ''
        if (this.props.showModal) {
            infoModal = <InfoModal /> 
        }

        return (
            <main>
                {infoModal}
                <div className="home">
                <Navbar />
                    <section className='welcome'>
                        <header>
                            <h1>LearnFrench</h1>
                        </header>
                        
                        <button onClick={() => this.onClick()}><Link to="/register">Register now!</Link></button>
                        
                    </section>
                </div>
            </main>
        );
    }

}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    showModal: state.game.showModal
});

export default connect(mapStateToProps)(LandingPage);
