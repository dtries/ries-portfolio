import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import PortoflioPage from './components/PortfolioPage';
import AboutPage from './components/AboutPage';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Route exact path="/" component={LandingPage} />
        <Route path="/Portfolio" component={PortoflioPage} />
        <Route path="/About" component={AboutPage} />
        <div className="content">
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
