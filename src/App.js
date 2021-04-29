// Imports
import './App.scss';
import React from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';


// Components
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

// Pages 
import Home from './pages/Home';
import Events from './pages/Events';
import Event from './pages/Event';

function App() {
    return (
      <>
      <Router>
        <Header/>
          <Main>
            <Route exact path="/" component={Home}/>
            <Route path="/events" component={Events}/>
            <Route path="/event/:id" component={Event} />
          </Main>
        <Footer/>
      </Router>

      </>
    )
  }

export default App;