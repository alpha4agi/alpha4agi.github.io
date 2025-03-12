import React, { useState } from 'react';

function Contact() {
  const [showQRCode, setShowQRCode] = useState(false);
  const [showRedNoteQRCode, setShowRedNoteQRCode] = useState(false);
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Get In Touch</h2>
      
      <div className="max-w-3xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <i className="fab fa-weixin text-blue-600"></i>
                </div>
                <div>
                  <div className="text-sm text-gray-500">WeChat</div>
                  <button 
                    onClick={() => setShowQRCode(true)} 
                    className="text-blue-600 hover:underline cursor-pointer"
                  >
                    Alpha4AGI
                  </button>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <i className="fas fa-envelope text-blue-600"></i>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Email</div>
                  <a href="mailto:alpha.hz.liu@gmail.com" className="text-blue-600 hover:underline">alpha.hz.liu@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <i className="fab fa-linkedin text-blue-600"></i>
                </div>
                <div>
                  <div className="text-sm text-gray-500">LinkedIn</div>
                  <a href="https://www.linkedin.com/in/alpha4agi/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">alpha4agi</a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <i className="fas fa-graduation-cap text-blue-600"></i>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Google Scholar</div>
                  <a href="https://scholar.google.com/citations?hl=en&user=VUGiv-EAAAAJ" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">VUGiv-EAAAAJ</a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <i className="fab fa-github text-blue-600"></i>
                </div>
                <div>
                  <div className="text-sm text-gray-500">GitHub</div>
                  <a href="https://github.com/Alphamasterliu" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Alphamasterliu</a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <i className="fas fa-book text-blue-600"></i>
                </div>
                <div>
                  <div className="text-sm text-gray-500">RedNote (小红书)</div>
                  <button 
                    onClick={() => setShowRedNoteQRCode(true)} 
                    className="text-blue-600 hover:underline cursor-pointer"
                  >
                    alpha4ai_041231
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">Send Me a Message</h3>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Email"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-1">Message</label>
                <textarea 
                  id="message" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                  placeholder="Your Message"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md transition-colors"
              >
                Send Message
              </button>
            </form>
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
      
      {/* RedNote QR Code Modal */}
      {showRedNoteQRCode && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={() => setShowRedNoteQRCode(false)}>
          <div className="relative bg-white p-6 rounded-lg shadow-xl max-w-md w-full" onClick={(e) => e.stopPropagation()}>
            <button 
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" 
              onClick={() => setShowRedNoteQRCode(false)}
            >
              <i className="fas fa-times text-xl"></i>
            </button>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Scan the QR code to find me on RedNote</h3>
              <img 
                src="/assets/images/WechatIMG2738.jpg" 
                alt="RedNote QR Code" 
                className="max-w-full h-auto mx-auto rounded-md"
              />
              <p className="mt-4 text-gray-600">RedNote ID: alpha4ai_041231</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;