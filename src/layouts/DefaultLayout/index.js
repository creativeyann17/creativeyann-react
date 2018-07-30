import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import axios from 'axios';

// i18n
import {IntlProvider} from "react-intl";
import messages_fr from "./i18n/fr.json";
import messages_en from "./i18n/en.json";

import {fetchArticles} from '../../services/ArticlesService/actions';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Index from '../../pages/Index';
import {ROUTES,ARTICLES} from '../../constants'
import './style.css';

const messages = {
  'fr': messages_fr,
  'en': messages_en
};

class DefaultLayout extends Component {

  componentWillMount () {
    axios.get(ARTICLES).then((response) => {
      this.props.articlesInit(response.data);
    });
  }

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
  articlesInit: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) => {
  return {
      articlesInit: (articles) => dispatch(fetchArticles(articles)),
  }
}

const mapStateToProps = (state) => {
  return {
      lang: state.LangServiceReducer.lang
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(DefaultLayout);
