import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Nav from "../components/nav";
import Seo from "../components/seo";
import { Container, Row, Col } from "react-bootstrap";
import "../components/gridder.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import Trianges from "../images/triangles.svg";
import icssi from "../images/icssi.png";
import mcsscw from "../images/mcsscw.png";
import ic2s2 from "../images/ic2s2.webp";

const events = [
  {
    title:
      "10th International Conference on Computational Social Science",
    description:
      "UChicago Hosts International Computational Social Science Conference, Emphasizing Collaboration and Public Impact",
    link: "https://icssi.org",
    logo: ic2s2,
    date: "Philadelphia - July 17-20, 2024",
  },
  {
    title:
      "8th International Conference on Computational Social Science (IC2S2)",
    description:
      "UChicago Hosts International Computational Social Science Conference, Emphasizing Collaboration and Public Impact",
    link: "https://icssi.org",
    logo: icssi,
    date: "Washington D.C. - July 1 - 3, 2024",
  },
  {
    title: "Computational Workshop",
    description:
      "The Workshop gives you a chance to see emergent computational work in the social sciences, to learn new methodological tools, to meet leading computational researchers from around the world, and to forge connections with faculty and students across campus.",
    link:
      "https://macss.uchicago.edu/current-student-resources/computational-workshop",
    logo: mcsscw,
    date: "TBA",
  },
];

const Events = () => (
  <Layout>
    <Nav />

    <Container fluid id="workshops-header">
      <div className="background"></div>
      <Container>
        <Row>
          <Col xs={12} sm={9}>
            <h1>Workshops and Conferences</h1>
            <p>
            Knowledge Lab participates in a vibrant intellectual community at the intersection of artificial intelligence and social science. Our team hosts everything from small convenings to major conferences to kindle collaboration and foster intellectual exchange across disciplinary lines. Knowledge Lab scholars also present original research at conferences in computer science, sociology, computational linguistics, and psychology at venues around the world.
            </p>
          </Col>
          <Col sm={3} className="d-none d-sm-block">
            <img src={Trianges} alt="connected triagle shapes" />
          </Col>
        </Row>
      </Container>
    </Container>
    <Container fluid id="workshops">
      <Container>
        {events.map((work) => {
          return (
            <Row>
              <>
                <Col sm={3} className="d-none d-sm-block morph">
                  <img src={work.logo} />
                </Col>
                <Col xs={12} sm={8}>
                  <h2>{work.title}</h2>
                  <p>{work.description}</p>
                  <p>
                   {work.date}
                  </p>
                  <p>
                    <a href={work.link} target="_blank">
                      Visit Website <FontAwesomeIcon icon={faCaretRight} />
                    </a>
                  </p>
                </Col>
              </>
            </Row>
          );
        })}
      </Container>
    </Container>
  </Layout>
);

export const Head = () => <Seo title="Events at Knowledge Lab" />;

export default Events;
