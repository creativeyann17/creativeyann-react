import React from 'react';
import './style.css';
import github from './github.png';
import linkedin from './linkedin.png';
import {ROUTES} from '../../constants';

const ExternalLinks = () => {
    return (
        <div className="external-links">
               <a target="_blank" href={ROUTES.EXTERNALS.GITHUB}>
                    <img className="external-link" src={github} alt='external-links-github' />
                </a>
                <a target="_blank" href={ROUTES.EXTERNALS.LINKEDIN}>
                    <img className="external-link" src={linkedin} alt='external-links-linkedi' />
                </a>
        </div>
    );
};

export default ExternalLinks;
