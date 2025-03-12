import React from 'react';

function Interests() {
  const interests = [
    {
      name: "Chinese Go (Board Game)",
      icon: "fas fa-chess-board",
      color: "bg-yellow-500"
    },
    {
      name: "Calligraphy",
      icon: "fas fa-pen-fancy",
      color: "bg-green-500"
    },
    {
      name: "E-Sports",
      icon: "fas fa-gamepad",
      color: "bg-purple-500"
    },
    {
      name: "Pop Music",
      icon: "fas fa-music",
      color: "bg-pink-500"
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Interests</h2>
      
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {interests.map((interest, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow"
          >
            <div className={`${interest.color} text-white w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4`}>
              <i className={`${interest.icon} text-2xl`}></i>
            </div>
            <h3 className="font-medium text-lg">{interest.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Interests;