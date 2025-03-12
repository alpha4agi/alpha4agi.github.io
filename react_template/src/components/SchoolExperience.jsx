import React from 'react';

function SchoolExperience() {
  const schoolExperiences = [
    {
      school: "Peking University",
      period: "2025-present",
      role: "Semester Visiting",
      description: "Study Artificial Intelligence and Business Administration"
    },
    {
      school: "University of Sydney",
      period: "2024-2026",
      role: "Bachelor with Dalyell Scholar",
      description: "Majors in Computer Science, Financial Mathematics and Statistics"
    },
    {
      school: "Tsinghua University",
      period: "2023-2024",
      role: "Research Assistant",
      description: "Focus on LLM-based Multi-Agent Systems"
    },
    {
      school: "Shenzhen Senior High School",
      period: "2020-2023",
      role: "High School Diploma",
      description: ""
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">School Experience</h2>
      
      <div className="max-w-5xl mx-auto">
        {schoolExperiences.map((experience, index) => (
          <div 
            key={index} 
            className="mb-10 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex flex-col md:flex-row justify-between mb-2">
              <h3 className="text-xl font-bold text-blue-700">{experience.school}</h3>
              <div className="text-gray-600 font-medium">{experience.period}</div>
            </div>
            
            <div className="text-lg font-medium mt-2">{experience.role}</div>
            {experience.description && (
              <p className="text-gray-600 mt-3">{experience.description}</p>
            )}
            
            {index < schoolExperiences.length - 1 && (
              <div className="mt-6 border-b border-gray-200"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SchoolExperience;