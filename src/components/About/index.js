import React from 'react';
import {FormattedMessage} from 'react-intl';
import './style.css';
import Profil from './profil.jpg';

const About = () => {
    return (
        <div className="about">
            <h4><FormattedMessage id="about.title"/></h4>
            <img src={Profil} alt="about.profil"/>
            <p><FormattedMessage id="about.message"/></p>
        </div>
    );
};

export default About;
