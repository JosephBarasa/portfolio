import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import ViewArt from './components/ViewArt';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/view-art/:id">
            <ViewArt />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
