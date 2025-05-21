import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './ProjectCard.css'; // Optional custom CSS for glowing effects

const ProjectCard = ({ title, description, imageUrl, projectUrl }) => {
  return (
    <Card className="mb-5 project-card">
      {imageUrl && projectUrl && (
        <a href={projectUrl} target="_blank" rel="noopener noreferrer">
          <Card.Img variant="top" src={imageUrl} alt={title} className="clickable-image" />
        </a>
      )}
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        {projectUrl && (
          <Button variant="primary" href={projectUrl} target="_blank" rel="noopener noreferrer">
            View Project
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
