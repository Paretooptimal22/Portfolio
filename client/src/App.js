import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact/Contact'
import Nav from './components/Nav'
import NavDrawer from './components/NavDrawer'
import DrawerContext from './utils/DrawerContext'


const App = () => {

  // DRAWERSTATE
  const [drawerState, setDrawerState] = useState({
    isOpen: false
  })

  drawerState.toggleDrawer = open => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }
    setDrawerState({ ...drawerState, isOpen: open })
  }

  return (
    <DrawerContext.Provider value={drawerState}>
      <Router>
        <div>
          <Nav />
          <NavDrawer />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
      </Router>
    </DrawerContext.Provider>
    
  )
}

export default App
