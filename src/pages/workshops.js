import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Nav from "../components/nav";
import Seo from "../components/seo";
import { Container, Row, Col } from "react-bootstrap";
import "../components/gridder.css";
import Trianges from "../images/triangles.svg";
import icssi from "../images/icssi.png"
import mcsscw from "../images/mcsscw.png"

const workshops = [
    
        {
          title: "8th International Conference on Computational Social Science (IC2S2)",
          description: "UChicago Hosts International Computational Social Science Conference, Emphasizing Collaboration and Public Impact",
          link: "https://icssi.org",
          logo: icssi,
          date: "July 1 - 3, 2024",
          
        },
        {
          title: "Computational Workshop",
          description: "The Workshop gives you a chance to see emergent computational work in the social sciences, to learn new methodological tools, to meet leading computational researchers from around the world, and to forge connections with faculty and students across campus.",
          link: "https://macss.uchicago.edu/current-student-resources/computational-workshop",
          logo: mcsscw,
          date: "tba"


        },
        
        
      
      
];

const Workshops = () => (
  <Layout>
    <Nav />

    <Container fluid id="workshops-header">
      <div className="background"></div>
      <Container>
        <Row>
          <Col xs={12} sm={9}>
            <h1>Workshops and Conferences</h1>
            <p>
            Knowledge Lab participates in the vibrant A.I. community which is dedicated to pushing the boundaries of computational social science. Our aim is foster collaboration, ignite innovation, and facilitate the exchange of groundbreaking ideas that propel our understanding of informational ecosystems. Our involvement is crucial in helping advance the Knowledge Lab mission to understand complex patterns and build effective strategies for managing knowledge. 
            </p>
          </Col>
          <Col sm={3} className="d-none d-sm-block">
            <img src={Trianges} alt="connected triagle shapes" />
          </Col>
        </Row>
      </Container>
    </Container>
    <Container fluid id="news">
      <Container>
      {workshops.map((work) => {
            return (
        <Row>
          
              <>
                <Col sm={2} className="d-none d-sm-block morph">
                  <img src={work.logo}/>
                </Col>
                <Col xs={7}>
                  <h2>{work.title}</h2>
                  <p>{work.description}</p>
                  <p>{work.date}</p>
                  <p>{work.link}</p>
                  
                </Col>
              </>
            
        </Row>
        );
    })}
      </Container>
    </Container>
  </Layout>
);

export const Head = () => <Seo title="Page two" />;

export default Workshops;
