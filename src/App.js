import React, { Component } from 'react';

import Page1 from './components/Page1';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      route: 'page1',
      component: ''
    }
  }

  onRouteChange = (route) => {
    //No code splitting
    // this.setState({route})

    //With code splitting
    if (route === 'page1')
      this.setState({ route });
    else if (route === 'page2')
      import('./components/Page2').then((Page2) => this.setState({ route: route, component: Page2.default }));
    else
      import('./components/Page3').then((Page3) => this.setState({ route: route, component: Page3.default }));

  }

  render() {
    if (this.state.route === 'page1')
      return <Page1 onRouteChange={this.onRouteChange} />;
    else 
      return <this.state.component onRouteChange={this.onRouteChange} />;
    
  }
}

export default App;
