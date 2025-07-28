import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import ViewArt from './components/ViewArt';
import ChatBot from './components/ChatBot';
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

          <Route path="/contact-me">
            <ContactMe />
          </Route>

          <Route path="/chat-bot">
            <ChatBot />
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
