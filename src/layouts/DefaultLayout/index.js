import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'

// i18n
import {IntlProvider} from "react-intl";
import messages_fr from "./i18n/fr.json";
import messages_en from "./i18n/en.json";

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Index from '../../pages/Index';
import {ROUTES} from '../../constants'
import './style.css';

const messages = {
  'fr': messages_fr,
  'en': messages_en
};

class DefaultLayout extends Component {
  render() {

    const {lang} = this.props;

    return (
      <div className="default-layout">
        <Header />
        <div className="container">
          <Switch>
            <IntlProvider locale={lang} messages={messages[lang]}>
                <Route exact path={ROUTES.INDEX} component={Index}/>
            </IntlProvider>
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

DefaultLayout.propTypes = {
  lang: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => {
  return {
      lang: state.LangServiceReducer.lang
  };
}

export default connect(mapStateToProps)(DefaultLayout);
