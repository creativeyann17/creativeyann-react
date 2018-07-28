import React from 'react';
import './style.css';
import logo from './logo.png';
import LangSelector from '../LangSelector';

const Header = () => {
    return (
        <header>
            <img className="header-logo" src={logo} alt='creative-yann-logo'/>
            <LangSelector />
        </header>
    );
};

export default Header;