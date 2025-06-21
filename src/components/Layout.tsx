import React, { useState, useEffect } from 'react';
import { Outlet, NavLink, Link } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Mail, FileText } from 'lucide-react';
import Footer from './Footer';

const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'header-scrolled py-3' : 'py-5 bg-transparent'
        }`}
      >
        <div className="container flex justify-between items-center">
          <Link to="/" className="font-bold text-2xl text-blue-900">
            ISR Portfolio
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <NavLink to="/" className="nav-link" end>
              Home
            </NavLink>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
            <NavLink to="/projects" className="nav-link">
              Projects
            </NavLink>
            <NavLink to="/skills" className="nav-link">
              Skills
            </NavLink>
            <NavLink to="/resume" className="nav-link">
              Resume
            </NavLink>
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-96' : 'max-h-0'
          }`}
        >
          <div className="container py-4 flex flex-col space-y-4">
            <NavLink
              to="/"
              className="px-4 py-2 hover:bg-gray-100 rounded"
              onClick={toggleMenu}
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="px-4 py-2 hover:bg-gray-100 rounded"
              onClick={toggleMenu}
            >
              About
            </NavLink>
            <NavLink
              to="/projects"
              className="px-4 py-2 hover:bg-gray-100 rounded"
              onClick={toggleMenu}
            >
              Projects
            </NavLink>
            <NavLink
              to="/skills"
              className="px-4 py-2 hover:bg-gray-100 rounded"
              onClick={toggleMenu}
            >
              Skills
            </NavLink>
            <NavLink
              to="/resume"
              className="px-4 py-2 hover:bg-gray-100 rounded"
              onClick={toggleMenu}
            >
              Resume
            </NavLink>
            <NavLink
              to="/contact"
              className="px-4 py-2 hover:bg-gray-100 rounded"
              onClick={toggleMenu}
            >
              Contact
            </NavLink>

            <div className="flex space-x-4 pt-2 border-t border-gray-200">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-blue-900 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-blue-900 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:example@email.com"
                className="p-2 text-gray-600 hover:text-blue-900 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow pt-20">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;