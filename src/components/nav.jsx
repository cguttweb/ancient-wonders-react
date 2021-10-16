import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Zeus from '../Zeus'

const nav = () => {
  return (
    <Router>
        <nav>
          <ul>
          <Link to="/">Home</Link> {'| '}
          <Link to="/alexandria">Alexandria</Link>{' | '}
          <Link to="/artemis">Artemis</Link>{' | '} 
          <Link to="/babylon">Babylon</Link>{' | '}
          <Link to="/pyramid">Great Pyramid</Link>{' | '}  
          <Link to="/halicarnassus">Halicarnassus</Link>{' | '}
          <Link to="/rhodes">Rhodes</Link>{' | '} 
          <Link to="/zeus">Zeus</Link>
          </ul>
        </nav>
        <Switch>
          <Route path="/zeus">
            <Zeus/>
          </Route>
          <Route to="/">
          </Route>
        </Switch>
    </Router>
  )
}

export default nav
