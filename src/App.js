import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import LandingPage from './components/LandingPage';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage} />
      </Router>
    </div>
  );
}

export default App;
