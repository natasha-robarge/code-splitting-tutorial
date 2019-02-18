import React, { Component } from 'react';
import logo from './logo.svg';

import { Page1, Page2, Page3 } from './components';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      route: 'page1'
    }
  }

  onRouteChange = (route) => {
    this.setState({route})
  }

  render() {
    if (this.state.route === 'page1')
      return <Page1 onRouteChange={this.onRouteChange} />;
    else if (this.state.route === 'page2')
      return <Page2 onRouteChange={this.onRouteChange} />;
    else 
      return <Page3 onRouteChange={this.onRouteChange} />;
    
  }
}

export default App;
