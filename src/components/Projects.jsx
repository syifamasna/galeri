import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Image1.jpg";
import projImg2 from "../assets/img/Image3.jpg";
import projImg3 from "../assets/img/Image6.jpg";
import projImg4 from "../assets/img/Image8.jpg";
import projImg5 from "../assets/img/Image9.jpg";
import projImg6 from "../assets/img/Image11.jpg";
import projImg7 from "../assets/img/Image13.jpg";
import projImg8 from "../assets/img/Image15.jpg";
import projImg9 from "../assets/img/Image18.jpg";
import projImg10 from "../assets/img/Image17.jpg";
import projImg11 from "../assets/img/Image19.jpg";
import projImg12 from "../assets/img/Image20.jpg";
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
      title: "Projek P5",
      description: "3 Oktober 2022",
      imgUrl: projImg2,
    },
    {
      title: "Peringatan Hari Guru",
      description: "25 November 2022",
      imgUrl: projImg3,
    },
    {
      title: "Kedatangan Habib Palestina",
      description: "30 Maret 2023",
      imgUrl: projImg4,
    },
    {
      title: "Bukber 10 PPLG 1",
      description: "6 April 2023",
      imgUrl: projImg5,
    },
    {
      title: "Pembagian Rapot 10 PPLG 1",
      description: "26 Juni 2023",
      imgUrl: projImg6,
    },
    {
      title: "Upacara 17 Agustus",
      description: "17 Agustus 2023",
      imgUrl: projImg7,
    },
    {
      title: "Lomba Fashion Show",
      description: "18 Agustus 2023",
      imgUrl: projImg8,
    },
    {
      title: "Cucurak 11 PPLG 1",
      description: "17 Oktober 2023",
      imgUrl: projImg9,
    },
    {
      title: "Peringatan Hari Santri",
      description: "23 Oktober 2023",
      imgUrl: projImg10,
    },
    {
      title: "Penutupan Kegiatan di Bogor Creative Center",
      description: "23 November 2023",
      imgUrl: projImg11,
    },
    {
      title: "Lomba Hias Tumpeng Skanic 11 PPLG 1",
      description: "18 Desember 2023",
      imgUrl: projImg12,
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
 