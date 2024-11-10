import React from 'react';
import './miniProject.css';

const MiniProject = () => {
  const projects = [
    {
      title: "Stock Trend Predictor ",
      description: "Collected and preprocessed historical stock market data.",
      icon: "📊",
       // Replace with an actual icon or image if desired
    },
    {
      title: "Library management system in Java ",
      description: " Prepared technical documentation for system  maintenance and user training.",
      icon: "💬",
    },
    {
      title: "IOT based theft and motion detection ",
      description: " Integrated wireless communication for alert notifications.Build and tested a functional system prototype. ",
      icon: "🌦️",
    },
    
    {
      title: "IOT based under ground cable fault detector ",
      description: "Utilized IoT sensors for real-time underground cable fault detection. ",
      icon: "🛒",
    },
  ];

  return (
    <div className="projects-container">
      <h2>Mini Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="icon">{project.icon}</div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MiniProject;
