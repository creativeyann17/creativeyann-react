import React from 'react';
import './style.css';
import Profil from './profil.jpg';

const About = () => {
    return (
        <div className="about">
            <h4>About</h4>
            <img src={Profil} />
            <p>Hello I'm Yann, French Software developer. Until today I have worked on severals professionnal 
            projects using various kind of applications: desktop, embedded and web. Differents technolgies were used like JAVA, 
            C#, C++ and C. I'm currently working abroad at Montreal.</p>
        </div>
    );
};

export default About;
