import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Projekt from './components/pages/projekt'

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
        <div className='n' />
        <div className='n n1' />
        <div className='n n2' />
        <div className='n n3' />
        <div className='n n4' />
        <Projekt />

      </Router>
    </>
  )
}

export default App
