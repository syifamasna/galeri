import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Image1.jpg";
import projImg2 from "../assets/img/Image2.jpg";
import projImg3 from "../assets/img/Image3.jpg";
import projImg4 from "../assets/img/Image4.jpg";
import projImg5 from "../assets/img/Image5.jpg";
import projImg6 from "../assets/img/Image6.jpg";
import projImg7 from "../assets/img/Image7.jpg";
import projImg8 from "../assets/img/Image8.jpg";
import projImg9 from "../assets/img/Image9.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Juara Lomba Fashion Show",
      description: "18 Agustus 2022",
      imgUrl: projImg1,
    },
    {
      title: "Perpisahan Evelyn",
      description: "23 September 2022",
      imgUrl: projImg2,
    },
    {
      title: "Projek P5",
      description: "3 Oktober 2022",
      imgUrl: projImg3,
    },
    {
      title: "Latihan Upacara",
      description: "15 Oktober 2022",
      imgUrl: projImg4,
    },
    {
      title: "Praktek Matematika",
      description: "24 Oktober 2022",
      imgUrl: projImg5,
    },
    {
      title: "Peringatan Hari Guru",
      description: "25 November 2022",
      imgUrl: projImg6,
    },
    {
      title: "Ultah Bu Gita",
      description: "22 Februari 2023",
      imgUrl: projImg7,
    },
    {
      title: "Kedatangan Habib Palestina",
      description: "30 Maret 2023",
      imgUrl: projImg8,
    },
    {
      title: "Bukber 10 PPLG 1",
      description: "6 April 2023",
      imgUrl: projImg9,
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
                <h2>Galeri</h2>
                <p>Galeri ini berisikan momen-momen tak terlupakan dan penuh semangat hingga keceriaan dalam perjalanan pendidikan kami.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
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
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
 