import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import reduxStore from './reduxStore';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Index from './pages/Index';

class App extends PureComponent {
  render() {
    return (
      <Provider store={ reduxStore }>
        <div className="App">
          <Router>
            <div>
              <Route exact path="/" component={ Index } />
            </div>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
