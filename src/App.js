import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation
} from 'react-router-dom';

const AppContent = () => {
  const location = useLocation();

  // Paths where Footer should not show
  const hideFooterPaths = ['/chat-bot', '/contact-me'];
  const shouldHideFooter =
    location.pathname.startsWith('/view-art') || hideFooterPaths.includes(location.pathname);

  return (
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
        
      </Switch>

      {/* Show footer conditionally */}
      {!shouldHideFooter && <Footer />}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
