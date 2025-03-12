import React from 'react';

function Experience() {
  const experiences = [
    {
      company: "Moonshot AI",
      period: "2025.02-present",
      role: "Product Manager & Infra Developer",
      description: "Responsible for productizing state-of-the-art AI agent technologies.",
      link: "https://kimi.moonshot.cn/"
    },
    {
      company: "Tencent",
      period: "2025.01-present",
      role: "AI Algorithm Specialist (IEG Research Elite Talent Program)",
      description: "Focus on VLM-powered NPC Agents",
      link: "https://www.tencent.com.cn/"
    },
    {
      company: "Shanghai AI Laboratory",
      period: "2024.08-present",
      role: "Research Intern",
      description: "Focus on LLM-powered Collective Intelligence",
      link: "https://www.shlab.org.cn/"
    },
    {
      company: "MiraclePlus (Formly Y Combinator China)",
      period: "2024.01-2024.03",
      role: "Founders Relationship",
      description: "Deal Sourcing for LLM/VLM Products",
      link: "https://www.miracleplus.com/en/about/"
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Work Experience</h2>
      
      <div className="max-w-5xl mx-auto">
        <div className="relative border-l-2 border-blue-600 pl-8 ml-4">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-16 last:mb-0 relative">
              <div className="absolute -left-12 w-8 h-8 bg-blue-600 rounded-full border-4 border-white"></div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex flex-wrap justify-between items-center mb-4">
                  <h3 className="text-xl font-bold">{exp.company}</h3>
                  <span className="text-blue-700 font-medium">{exp.period}</span>
                </div>
                
                <h4 className="text-lg font-semibold text-gray-700 mb-2">{exp.role}</h4>
                <p className="text-gray-600 mb-4">{exp.description}</p>
                
                <a 
                  href={exp.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  Visit Website
                  <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;