import React, { useState, useEffect } from 'react';

function Navbar({ activeSection }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function for smooth scrolling when clicking navigation links
  const smoothScrollTo = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      // Close mobile menu if open
      setIsMobileMenuOpen(false);
      // Smooth scroll to element
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  
  const links = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "School", href: "#education", id: "education" },
    { name: "Work", href: "#experience", id: "experience" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Interests", href: "#interests", id: "interests" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];
  
  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <a 
            href="#home" 
            onClick={(e) => {
              e.preventDefault();
              smoothScrollTo('home');
            }}
            className="font-bold text-xl text-blue-700 transition-all duration-300 hover:text-blue-800"
          >
            Alpha Liu
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollTo(link.id);
                }}
                className={`${
                  activeSection === link.href.substring(1)
                    ? 'text-blue-700 font-medium'
                    : 'text-gray-600 hover:text-blue-700'
                } transition-colors transition-all duration-300 hover:scale-105`}
              >
                {link.name}
              </a>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button onClick={toggleMobileMenu} className="md:hidden text-gray-600 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollTo(link.id);
                }}
                className={`${
                  activeSection === link.href.substring(1)
                    ? 'text-blue-700 font-medium'
                    : 'text-gray-600'
                } block py-2 transition-colors transition-all duration-300`}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;