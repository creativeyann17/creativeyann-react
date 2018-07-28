import React from 'react';
import { Link } from 'react-router-dom'
import './style.css';
import logo from './logo.png';
import LangSelector from '../LangSelector';
// import Navbar from '../Navbar';

import {ROUTES} from '../../constants';

const Header = () => {
    return (
        <header>
            <div className="header-top">
                <div className="header-left">
                    <Link to={ROUTES.INDEX}>
                        <img className="header-logo" src={logo} alt='creative-yann-logo' />
                    </Link>
                </div>
                <div className="header-right">
                    <LangSelector />
                </div>
            </div>
            <div className="header-bottom">
                {/*<Navbar />*/}
            </div>
        </header>
    );
};

export default Header;