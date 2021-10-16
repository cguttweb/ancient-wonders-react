import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import './index.css'
import Home from './Home'
import Alexandria from './Alexandria'
import Artemis from './Artemis'
import Babylon from './Babylon'
import Pyramid from './Pyramid'
import Halicarnassus from './Halicarnassus'
import Rhodes from './Rhodes'
import Zeus from './Zeus'
import Footer from './components/footer'

function App() {
  return (
    <div>
      <Router>
        <nav>
          <Link to="/">Home</Link> {'| '}
          <Link to="/alexandria">Alexandria</Link>{' | '}
          <Link to="/artemis">Artemis</Link>{' | '} 
          <Link to="/babylon">Babylon</Link>{' | '}
          <Link to="/pyramid">Great Pyramid</Link>{' | '}  
          <Link to="/halicarnassus">Halicarnassus</Link>{' | '}
          <Link to="/rhodes">Rhodes</Link>{' | '} 
          <Link to="/zeus">Zeus</Link>
        </nav>

      <Switch>
        <Route path="/alexandria">
            <Alexandria />
          </Route>
          <Route path="/artemis">
            <Artemis />
          </Route>
          <Route path="/babylon">
            <Babylon />
          </Route>
          <Route path="/pyramid">
            <Pyramid />
          </Route>
          <Route path="/halicarnassus">
            <Halicarnassus />
          </Route>
          <Route path="/rhodes">
            <Rhodes />
          </Route>
          <Route path="/zeus">
            <Zeus />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>

        <Footer/>
    </div>
  )
}

export default App
