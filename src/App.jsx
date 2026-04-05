import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <div>
<nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
  <div className="container">
    <Link className="navbar-brand" to="/">Samadhan Radye</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item"><Link className="nav-link gradient-hover" to="/">Home</Link></li>
        <li className="nav-item"><Link className="nav-link gradient-hover" to="/projects">Projects</Link></li>
        <li className="nav-item"><Link className="nav-link gradient-hover" to="/contact">Contact</Link></li>
      </ul>
    </div>
  </div>
</nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;