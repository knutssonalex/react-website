import React from 'react';
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Projekt from './components/pages/projekt';

function App () {
  return (
    <>
      <Router>
        <Navbar>
          <Switch>
            <Route path='/' exact />
            <Route path='/projekt' component={Projekt} />
          </Switch>
        </Navbar>
        <Projekt />

      </Router>
    </>
  )
}

export default App
