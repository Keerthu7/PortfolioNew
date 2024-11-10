import React from 'react';
import './internships.css';

const Internships = () => {
  const internships = [
    {
      title: "MERN Stack Development Intern at Hitshoppers (Ongoing, 2024)",
      description: "Actively contributing to the development of dynamic web applications using MongoDB, Express.js, React.js, and Node.js. ",
      icon: "📊", // you can replace this with actual icons or images
    },
   
    {
      title: "SAE internship on Web Development",
      description: "SAE internship in web development provides hands-on experience in designing and building websites, focusing on skills like HTML, CSS, and JavaScript.",
      icon: "📈",
    },
  ];

  return (
    <div className="internships-container">
      <h2>Internships</h2>
      <div className="internships-grid">
        {internships.map((internship, index) => (
          <div className="internship-card" key={index}>
            <div className="icon">{internship.icon}</div>
            <h3>{internship.title}</h3>
            <p>{internship.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Internships;
