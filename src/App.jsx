import { Routes, Route, Link, Navigate, useLocation } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import './App.css';

const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));
const Project1 = lazy(() => import('./projects/Project1'));
const Project2 = lazy(() => import('./projects/Project2'));
const Project3 = lazy(() => import('./projects/Project3'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const pageLoaderStyle = {
  minHeight: '60vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#888',
  fontFamily: "'DM Sans', sans-serif",
};

function App() {
  return (
    <div>
      <ScrollToTop />
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          <Link className="navbar-brand" to="/">Samadhan Radye</Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link gradient-hover" to="/">Home</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link gradient-hover" to="/projects">Projects</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link gradient-hover" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Suspense fallback={<div style={pageLoaderStyle}>Loading…</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />

          {/* ✅ PROJECT ROUTES */}
          <Route path="/projects/project1" element={<Project1 />} />
          <Route path="/projects/project2" element={<Project2 />} />
          <Route path="/projects/project3" element={<Project3 />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;