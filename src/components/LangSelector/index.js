import React from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import keys from 'lodash/keys';
import {langServiceChangLang} from '../../services/LangService/actions';
import {LANG} from '../../constants';

import './style.css';

const LangSelector = (props) => {

    const {lang, changeLang} = props;

    return (
        <div className="lang-selector">
           <ul>
            {keys(LANG).map(function(key){
                const value = LANG[key];
                return <li key={value} className={(value === lang ? 'active' : '')} onClick={() => changeLang(value)}>{value}</li>;
            })}
            </ul>   
        </div>
    );
};

LangSelector.propTypes = {
    lang: PropTypes.string.isRequired,
    changeLang: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeLang: (lang) => dispatch(langServiceChangLang(lang))
    }
}

const mapStateToProps = (state) => {
    return {
        lang: state.LangServiceReducer.lang
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(LangSelector);