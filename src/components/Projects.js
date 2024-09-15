import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.jpeg";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.jpg";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "LinkedIn website",
      description: "Create a account and start posing,commenting & hit like to the post's",
      imgUrl: projImg1,
      link:'https://linkedin-clone-lovat-one.vercel.app/',
    },
    {
      title: "ClearTrip",
      description: "Start booking you ticket for Flights,buses and cabs",
      imgUrl: projImg2,
      link:'https://clear-trip-clone-project.vercel.app/',
    },
    {
      title: "Pokemon cards",
      description: "Check your favorite pokemon stats..",
      imgUrl: projImg3,
      link:'https://pokemon-card-seven.vercel.app/',
    },
    {
      title: "Movies deck",
      description: "Upcoming project",
      imgUrl: projImg4,
      link:'#',
    },
    {
      title: "Music Player",
      description: "Upcoming project",
      imgUrl: projImg6,
      link:'#',
    },
    {
      title: "Code editor",
      description: "Upcoming project",
      imgUrl: projImg5,
      link:'#',
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Over the course of my career, I've developed a diverse range of projects showcasing my skills in full stack development. My portfolio includes:</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>
                      Exciting new developments are on the way! This section will soon feature cutting-edge
                       projects currently in the planning or early stages of development. [Tab 2]
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>
                      Exciting new developments are on the way! This section will soon feature cutting-edge
                      projects currently in the planning or early stages of development. [Tab 3]
                      </p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
