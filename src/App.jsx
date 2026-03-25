import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import ViewArt from './components/ViewArt';
import { HashRouter as Router, Route, Routes, useLocation} from 'react-router-dom';

// app content handles the page structure eg navbar, footer
const AppContent = () => {
  const location = useLocation();  // gives access to the current url path

  // Paths where Footer should not show
  const hideFooterPaths = ['/chat-bot', '/contact-me'];
  const shouldHideFooter =
    location.pathname.startsWith('/view-art') || hideFooterPaths.includes(location.pathname);

  return (
    <div className="app-wrapper">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/contact-me" element={<ContactMe />} />

        <Route path="/view-art/:id" element={<ViewArt />} />

      </Routes>


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
