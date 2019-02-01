import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import  Navbar from './navbar';
import Score from './score';
import Question from './question';
import Feedback from './feedback';

import '../stylesheets/dashboard.css'


export class Dashboard extends React.Component {

    render() {
        let feedBack; 
        if (this.props.userAnswer) {
            feedBack = <Feedback />
        }

        return (
            <section className="dashboard">
                <Navbar />
                <section className='game'>
                    <Score />
                    <Question />
                    {feedBack}
                </section>
            </section>
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        userAnswer: state.game.userAnswer,
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        protectedData: state.protectedData.data
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
