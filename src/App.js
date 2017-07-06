import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import reduxStore from './reduxStore';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Index from './pages/Index';
import ToDo from './pages/ToDo';

class App extends PureComponent {
  render() {
    return (
      <Provider store={ reduxStore }>
        <div className="App">
          <Router>
            <div>
              <Route exact path="/" component={ Index } />
              <Route path="/:id" component={ ToDo } />
            </div>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
