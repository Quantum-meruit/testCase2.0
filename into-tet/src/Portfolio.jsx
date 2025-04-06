import { useState } from 'react';
import TodoApp from './TodoApp.jsx';
import './Portfolio.css';

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`portfolio-container ${darkMode ? 'dark' : ''}`}>
      <header className="portfolio-header">
        <h1>My Portfolio</h1>
        <button 
          onClick={() => setDarkMode(!darkMode)}
          className="theme-toggle"
        >
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </header>

      <main className="portfolio-content">
        <section className="featured-project">
          <h2>DYNAMIC LIST MANAGER</h2>
          <div className="project-description">
            <p>A responsive todo application with real-time updates</p>
          </div>
          <TodoApp />
        </section>

        <section className="portfolio-grid">
          <div className="portfolio-item">
            <h3>MY DAILY TO DO LIST</h3>
            <p>Update by Quantum-Meruit</p>
          </div>
          <div className="portfolio-item">
            <h3>COURTESY</h3>
            <p>THE IYF INTERNATIONAL YOUTH CENTER</p>
          </div>
        </section>
      </main>

      <footer className="portfolio-footer">
        <p>© {new Date().getFullYear()} My Portfolio</p>
      </footer>
    </div>
  );
};

export default Portfolio;