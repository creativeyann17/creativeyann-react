import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Index from '../../pages/index';
import './style.css';

class App extends Component {
  render() {
    return (
      <div className="default-layout">
        <Header />
        <Switch>
            <Route exact path='/' component={Index}/>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
