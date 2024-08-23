import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../components/layout";
import Seo from "../components/seo";
import "../components/index.module.css";
import "../components/oval.css";
import "../components/gridder.css";
import Rings from "../images/rings.svg";
import UsScience from "../images/us-science-found.png";
import Nih from "../images/nih.webp";
import Afosr from "../images/afosr.webp";
import Darpa from "../images/darpa.webp"
import Novo from "../images/novo.webp"
import Templeton from "../images/templeton.png";
import Sloan from "../images/sloan.webp";
import Microsoft from "../images/microsoft.webp";
import Meta from "../images/meta.webp";
import Dsi from "../images/data-science-inst.webp";
import Cfaai from "../images/center-for-applied.webp";
import SantaFe from "../images/santafe.png"
import Computational from "../images/uchicago-computational.webp";
import Complexity from "../images/complexity.webp";
import AniNav from "../components/animatedNav";


const IndexPage = () => {
  const researchStyle = {
    backgroundImage: `url(${Rings}), linear-gradient(-22deg, #B9529F  -10%, #B9529F 32%,  #3953A4 100%)`,
    backgroundSize: "initial", // Adjust this as needed to control the size of the SVG
    backgroundPosition: "120% 40%",
    backgroundRepeat: "no-repeat", // Prevent the SVG from repeating
    paddingTop: "clamp(var(--space-5),var(--space-7), var(--space-7))",
    paddingBottom: "clamp(var(--space-5),var(--space-7), var(--space-7))",
    color: "white",
    zIndex: 1,
    position: `relative`,
    clipPath: `polygon(0% 0%, 1000% 0%, 100% 90%, 0% 100%)`,
  };

  const featureStyle = {
    zIndex: 2,
  };


  return (
    <>
      <Layout>
     
       
      <div className="grid-gradient"></div>
        <Container>
          <Row>
            <StaticImage
              src="../images/klab-logo.svg"
              loading="eager"
              quality={100}
              formats={["auto", "webp"]}
              alt="Knowledge Lab"
              placeholder="blurred"
              layout="fullWidth"
              style={{
                marginBottom: `0`,
                marginTop: `var(--space-5)`,
                marginLeft: `auto`,
                marginRight: `auto`,
                display: "block",
                color: "white",
                backgroundColor: "white",
                width: "50%",
                zIndex: "100",
                padding: "0",
              }}
            />
          </Row>
        </Container>

        <Container>
          <Row style={{justifyContent: 'center'}}>
          <AniNav />
            
          </Row>
        </Container>

        <Container id="initiatives">
          <Row>
            <Col xs={12}>
              <h2>Initiatives at Knowledge Lab</h2>
              <p>
                See what we've been working on to change the world and blah and
                stuff and things.
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={3} style={featureStyle}>
              <img src="https://placeholder.com/340x200" />
              <h4>Tile of Initiative</h4>
              <p>Small Text on initiative</p>
            </Col>
            <Col xs={6} md={3} style={featureStyle}>
              <img src="https://placeholder.com/340x200" />
              <h4>Tile of Initiative</h4>
              <p>Small Text on initiative</p>
            </Col>
            <Col xs={6} md={3} style={featureStyle}>
              <img src="https://placeholder.com/340x200" />
              <h4>Tile of Initiative</h4>
              <p>Small Text on initiative</p>
            </Col>
          </Row>
          <Row>
            <Col xs={{ offset: 2, span: 3 }} style={featureStyle}>
              <img src="https://placeholder.com/340x200" />
              <h4>Tile of Initiative</h4>
              <p>Small Text on initiative</p>
            </Col>
            <Col xs={6} md={3} style={featureStyle}>
              <img src="https://placeholder.com/340x200" />
              <h4>Tile of Initiative</h4>
              <p>Small Text on initiative</p>
            </Col>
            <Col xs={6} md={3} style={featureStyle}>
              <img src="https://placeholder.com/340x200" />
              <h4>Tile of Initiative</h4>
              <p>Small Text on initiative</p>
            </Col>
          </Row>
        </Container>
        <Container id="numbers">
          <Row>
            <Col xs={6} md={3}>
              <h2>$20M</h2>
              <p>
                Knowledge Lab was recently awarded $20 million by NSF Assessing
                and Predicting Technology Outcomes (APTO) to further our work
              </p>
            </Col>
            <Col xs={6} md={3}>
              <h2>100+</h2>
              <p>
                To date, Knowlege Lab has published over 50 papers in various
                publications
              </p>
            </Col>
            <Col xs={6} md={3}>
              <h2>10,000+</h2>
              <p>
              To date, more than 10k citations have been made to Knowledge Lab publications
              </p>
            </Col>
            <Col xs={6} md={3}>
              <h2>20+</h2>
              <p>
              More than 20 research affilaties contribute directly to the research conducted at Knowledge Lab
              </p>
            </Col>
          </Row>
        </Container>
        <Container fluid id={`research`} style={researchStyle}>
          <Container id="research">
            <Row>
              <Col xs={12} sm={8}>
                <h2>Research at Knowledge Lab and Metaknowledge</h2>
                <p>
                  As Knowledge Lab and the Metaknowledge Research Network crank
                  out results, those results will populate this space. Our goal
                  is to present citations (and links) to published research, as
                  well as preprints, articles and prospectives, responses, as
                  well as presentations of our work and results formatted for a
                  general audience.
                </p>
                <button>Learn More</button>
              </Col>
              <Col></Col>
            </Row>
          </Container>
        </Container>
        
        <Container fluid id="partners">
          <Container>
          <Row>
            <Col xs={12}>
              <h2>Supported By</h2>
              {/* <p>
                We couldn't have done it without the generous support of these
                institutions.
              </p> */}
            </Col>
          </Row>
          <Row className="justify-content-center">
          <Col xs={6} md={3}>
              <img src={UsScience} alt="US Science Foundation" />
            </Col>
            <Col xs={6} md={3}>
              <img src={Nih} alt="National Insitute of Health" />
            </Col>
            
            <Col xs={6} md={3}>
              <img src={Afosr} alt="Air Force Office of Scientific Research" />
            </Col>
            <Col xs={6} md={3}>
              <img src={Darpa} alt="DARPA" />
            </Col>
            <Col xs={6} md={3}>
              <img src={Novo} alt="Novo Nordisk Foundation" />
            </Col>
            <Col xs={6} md={3}>
              <img src={Templeton} alt="John Templeton Foundation" />
            </Col>
            <Col xs={6} md={3}>
              <img src={Sloan} alt="Alfred P. Sloan Foundation" />
            </Col>
            <Col xs={6} md={3}>
              <img src={Microsoft} alt="Microsoft" />
            </Col>
            <Col xs={6} md={3}>
              <img src={Meta} alt="Meta" />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <h2>Partners</h2>
              {/* <p>
                We couldn't have done it without the generous support of these
                institutions.
              </p> */}
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={6} md={3}>
              <img src={Dsi} alt="Data Science Institute" />
            </Col>
            <Col xs={6} md={3}>
              <img src={Cfaai} alt="Center for Applied AI" />
            </Col>
            <Col xs={6} md={3}>
              <img src={SantaFe} alt="Santa Fe Institute" />
            </Col>
            <Col xs={6} md={3}>
              <img src={Complexity} alt="Complexity" />
            </Col>
            <Col xs={6} md={3}>
              <img src={Computational} alt="UChicago Computational Social Science" />
            </Col>
            
            
          </Row>
          </Container>
        </Container>
        
      </Layout>
    </>
  );
};

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />;

export default IndexPage;
