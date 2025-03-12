import React, { useState } from 'react';

function Header() {
  const [showQRCode, setShowQRCode] = useState(false);
  
  return (
    <>
      <div className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white min-h-screen flex items-center">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fadeIn">Hongzhang (Alpha) Liu</h1>
            <h2 className="text-2xl md:text-3xl font-light mb-8 text-blue-100">Undergraduate Researcher | Future Entrepreneur</h2>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a 
                href="#about" 
                className="bg-white text-blue-800 hover:bg-blue-100 transition-colors px-6 py-3 rounded-full font-medium"
              >
                About Me
              </a>
              <a 
                href="#contact" 
                className="bg-transparent hover:bg-white/10 border border-white text-white transition-colors px-6 py-3 rounded-full font-medium"
              >
                Get In Touch
              </a>
            </div>
            
            <div className="flex justify-center space-x-6">
              <a href="mailto:alpha.hz.liu@gmail.com" className="text-white hover:text-blue-200 transition-colors">
                <i className="fas fa-envelope text-2xl"></i>
              </a>
              <button 
                onClick={() => setShowQRCode(true)} 
                className="text-white hover:text-blue-200 transition-colors"
              >
                <i className="fab fa-weixin text-2xl"></i>
              </button>
              <a href="https://www.linkedin.com/in/alpha4agi/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200 transition-colors">
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a href="https://scholar.google.com/citations?hl=en&user=VUGiv-EAAAAJ" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-200 transition-colors">
                <i className="fas fa-graduation-cap text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* WeChat QR Code Modal */}
      {showQRCode && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={() => setShowQRCode(false)}>
          <div className="relative bg-white p-6 rounded-lg shadow-xl max-w-md w-full" onClick={(e) => e.stopPropagation()}>
            <button 
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" 
              onClick={() => setShowQRCode(false)}
            >
              <i className="fas fa-times text-xl"></i>
            </button>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Scan the QR code to add me as a friend</h3>
              <img 
                src="/assets/images/WechatIMG2737.jpg" 
                alt="WeChat QR Code" 
                className="max-w-full h-auto mx-auto rounded-md"
              />
              <p className="mt-4 text-gray-600">WeChat ID: Alpha4AGI</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;