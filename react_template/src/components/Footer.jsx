import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold text-white mb-2">Hongzhang (Alpha) Liu</h3>
              <p className="text-gray-400">Undergraduate Researcher | Future Entrepreneur</p>
            </div>
            
            <div className="flex space-x-6">
              <a href="mailto:alpha.hz.liu@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                <i className="fas fa-envelope text-xl"></i>
              </a>
              <a href="https://www.linkedin.com/in/alpha4agi/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a href="https://scholar.google.com/citations?hl=en&user=VUGiv-EAAAAJ" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <i className="fas fa-graduation-cap text-xl"></i>
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
            <p>&copy; {currentYear} Hongzhang (Alpha) Liu. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;