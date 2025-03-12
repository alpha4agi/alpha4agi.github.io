import React from 'react';

function Education() {
  const education = [
    {
      school: "Peking University",
      period: "2025-present",
      role: "Semester Visiting",
      description: "Study Artificial Intelligence and Business Administration",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/98/Peking_University_logo.svg/1200px-Peking_University_logo.svg.png"
    },
    {
      school: "University of Sydney",
      period: "2024-2026",
      role: "Bachelor with Dalyell Scholar",
      description: "Majors in Computer Science, Financial Mathematics and Statistics",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/38/University_of_Sydney_logo.svg/1200px-University_of_Sydney_logo.svg.png"
    },
    {
      school: "Tsinghua University",
      period: "2023-2024",
      role: "Research Assistant",
      description: "Focus on LLM-based Multi-Agent Systems",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/Tsinghua_University_Logo.svg/1200px-Tsinghua_University_Logo.svg.png"
    },
    {
      school: "Shenzhen Senior High School",
      period: "2020-2023",
      role: "High School Diploma",
      description: "",
      logo: ""
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Education</h2>
      
      <div className="max-w-5xl mx-auto">
        {education.map((edu, index) => (
          <div 
            key={index} 
            className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-12 last:mb-0"
          >
            <div className="w-24 h-24 flex-shrink-0 bg-white rounded-full flex items-center justify-center shadow-md overflow-hidden">
              {edu.logo ? (
                <img src={edu.logo} alt={edu.school} className="max-w-full max-h-full p-2" />
              ) : (
                <div className="w-full h-full bg-gray-100 flex items-center justify-center text-lg font-semibold text-gray-500">
                  {edu.school.substring(0, 2)}
                </div>
              )}
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-bold">{edu.school}</h3>
              <div className="text-blue-700 font-medium">{edu.period}</div>
              <div className="text-lg mt-2">{edu.role}</div>
              <p className="text-gray-600 mt-1">{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;