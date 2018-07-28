import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Index from '../../pages/Index';
import {ROUTES} from '../../constants'
import './style.css';

class App extends Component {
  render() {
    return (
      <div className="default-layout">
        <Header />
        <Switch>
            <Route exact path={ROUTES.INDEX} component={Index}/>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
