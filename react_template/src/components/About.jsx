import React from 'react';

function About() {
  return (
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Me</h2>
        
        <div className="prose prose-lg max-w-none">
          <p className="mb-4">
            👋 Hello! I'm currently a sophomore pursuing multiple STEM majors at the <a href="https://www.sydney.edu.au/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">University of Sydney</a>, and am presently visiting <a href="https://www.gsm.pku.edu.cn/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Peking University</a> to study innovation and entrepreneurship.
          </p>
          
          <p className="mb-4">
            I serve as a Product Innovator at <a href="https://kimi.moonshot.cn/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Moonshot AI (Kimi)</a>, led by Dr. <a href="https://scholar.google.com.hk/citations?user=7qXxyJkAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Zhilin Yang</a>, and concurrently work as a Research Intern at <a href="https://www.shlab.org.cn/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Shanghai AI Laboratory</a>, supervised by Prof. <a href="https://scholar.google.com/citations?user=pw_0Z_UAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Wanli Ouyang</a> and Dr. <a href="https://shuyuehu.github.io/index.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Shuyue Hu</a>. Additionally, I am an Algorithm Specialist with <a href="https://www.tencentgames.com/about.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Tencent Games</a>' Research Elite Talent Program.
          </p>
          
          <p className="mb-4">
            Previously, I was a Research Assistant at Tsinghua University's NLP Group (<a href="https://nlp.csai.tsinghua.edu.cn/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">THUNLP</a>), under the guidance of Prof. <a href="https://scholar.google.com/citations?user=dT0v5u0AAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Zhiyuan Liu</a> and Prof. <a href="https://qianc62.github.io/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">Chen Qian</a>. I'm deeply grateful for all the mentorship and support I've received throughout these experiences.
          </p>
          
          <p className="mb-4">
            Beyond my technical pursuits, I also have practical experience in entrepreneurship and investment research.
          </p>
          
          <p className="text-lg font-medium">
            🌟 I warmly welcome people from all industries to connect with me as we explore this promising AI era together.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;