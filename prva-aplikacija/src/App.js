import React from 'react'
import './App.css'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'
import Home from './components/Home.js'
import Songs from './components/Songs.js'
import Albums from './components/Albums.js'
import Artists from './components/Artists.js'
import AboutUs from './components/AboutUs.js'
import Menu from './components/Menu.js'
import Login from './components/Login.js'

class App extends React.Component {

  render = () => {
    return (
      <BrowserRouter>
        <Menu />
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          
          <Route path='/songs'>
            <Songs />
          </Route>

          <Route path='/albums'>
            <Albums />
          </Route>

          <Route path='/artists'>
            <Artists />
          </Route>

          <Route path='/contact'>
            <AboutUs />
          </Route>

          <Route exact path='/'>
            <Home />
          </Route>

          {/* when no matches are found for the browser route */}
          <Route path='*'>
            <NotFound />
          </Route>

        </Switch>
      </BrowserRouter>
    )
  }
}

const NotFound = () => {
  return <div>Error 404!</div>
}

export default App