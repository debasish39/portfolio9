import React from "react";
import Tilt from "react-parallax-tilt";
import { Card, Button } from "react-bootstrap";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import "./ProjectCard.css";

const ProjectCard = ({
  title,
  description,
  imageUrl,
  projectUrl,
  githubUrl,
}) => {
  return (
    <Tilt
      tiltMaxAngleX={1}
      tiltMaxAngleY={10}
      scale={1.01}
      transitionSpeed={150}
    >
      <Card className="mb-5 project-card">
        {imageUrl && (
          <a
            href={projectUrl || githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card.Img
              variant="top"
              src={imageUrl}
              alt={title}
              className="clickable-image"
            />
          </a>
        )}
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>

<div className="d-flex flex-row justify-content-around align-items-center responsive-gap gap-2 mt-2" style={{flexWrap: "nowrap"}}>
  {projectUrl && (
    <Button
      variant="outline-warning"
      href={projectUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",gap:'9px',
        whiteSpace: "nowrap",
      }}
    >
      Live Demo <BsBoxArrowUpRight />
    </Button>
  )}
  {githubUrl && (
    <Button
      variant="outline-dark"
      href={githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "8px",
        whiteSpace: "nowrap", 
      }}
    >
      Code <FaGithub />
    </Button>
  )}
</div>

        </Card.Body>
      </Card>
    </Tilt>
  );
};

export default ProjectCard;
