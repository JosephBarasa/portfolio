import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
