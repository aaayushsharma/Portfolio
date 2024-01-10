import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import kickstart from "../assets/projects/kickstart.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="ShopVista"
              description="Developed a platform empowers users to seamlessly browse, shop, and checkout, while providing store owners with the flexibility to customize site pages and manage product listings effortlessly through an intuitive admin dashboard. Implemented a robust checkout system powered by PayPal, ensuring secure and hassle-free transactions for users while maintaining the highest standards of payment security."
              ghLink="https://github.com/aaayushsharma/shopvista"
              demoLink="https://ayush-shopvista.onrender.com/"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="News-app"
              description=" Developed a news platform that provides daily updates across diverse sectors, including Entertainment, Business, Health, Science, Sports, and Technology. Implemented seamless data integration from the News API to ensure real-time and up-to-date information. Proficient in utilizing React JS to enhance user experience and engagement on the platform. Passionate about delivering reliable and comprehensive news content to users in an accessible and user-friendly format."
              ghLink="https://github.com/aaayushsharma/NewsScope"
              demoLink="https://aayushh-newsscope.netlify.app/"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="Chat-app"
              description=" Developed a real-time messaging platform that revolutionizes communication by leveraging the power of Socket.IO for seamless, bidirectional data exchange."
              ghLink="https://github.com/aaayushsharma/chatapp"
{/*               demoLink="https://ayush-ecommerce.onrender.com/" */}
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="Text-utils"
              description="Designed and implemented a suite of text manipulation tools, empowering users to perform tasks such as text case conversion, character count, word count, and more with efficiency and precision."
              ghLink="https://github.com/aaayushsharma/textutil"
              demoLink="https://ayushsharma-textutils.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects
