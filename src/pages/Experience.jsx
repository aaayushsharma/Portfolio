import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ExperienceCard from "../components/Projects/ExperienceCard";
import Particle from "../components/Particle";


const Experience = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Experiences <strong className="yellow">I possess </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={12} className="project-card">
            <ExperienceCard
              imgPath="https://images-platform.99static.com/ROc_T-C-z7AXEf4L-HO8DpIy7Jo=/0x0:1086x1086/500x500/top/smart/99designs-contests-attachments/72/72063/attachment_72063237"
              date="May 2023-July 2023"
              title="Web Developer Intern"
              description="Implemented cloud-based authentication and authorization protocols using JSON Web Tokens (JWT) and RESTful API
              endpoints for secure user access, data management, and efficient communication between the front-end and back-end
              systems.
              • Leveraged continuous integration techniques with Jenkins to automate testing and deployment processes, ensuring
              website stability and reliability."
            />

</Col> 
        </Row>
      </Container>
    </Container>
  )
}

export default Experience;