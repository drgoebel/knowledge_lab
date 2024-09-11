import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Nav from "../components/nav";
import Seo from "../components/seo";
import { Container, Row, Col } from "react-bootstrap";
import "../components/gridder.css";
import Trianges from "../images/triangles.svg";
import Neural from "../images/neural.webp";

const give = [
  {
    title: "General Postdoctoral Scholar Positions at the Knowledge Lab",
    tagLine: "this is the tagline",
    papers: "papers",
    grantsPress: "grants and press releases",
    description:
      "A deluge of digital content is generated daily by web-based platforms and sensors that capture digital traces of communication and connection, and complex states of society, the economy, and the world. Emerging deep learning methods enable the integration and analysis of these complex data in order to address real-world problems by designing and discovering successful solutions. We take the position that the real power of deep learning is unleashed by thinking with deep learning to reformulate and solve problems traditional machine learning methods cannot address. These include fusing diverse data like text, images, tabular and network data into integrated and comprehensive “digital doubles” of the scenarios you want to model, the generation of promising recommendations, and the creation of AI assistants that radically augment an analyst or system's intelligence.",
    url: "/link-to-paper",
    image: "Initiative image",
  },
  
];

const Give = () => (
  <Layout>
    <Nav />

    <Container fluid id="give-header">
      <div className="background"></div>
      <Container>
        <Row>
          <Col xs={12} sm={8}>
            <h1>Give to Knowledge Lab</h1>
            <p>
              Knowledge Lab stands at the intersection of transformative
              technology and pioneering research, driven to decode complex
              social and biological phenomena. Our commitment to advancing
              Artificial Intelligence (AI), particularly within Big Data,
              machine learning, and crowd-sourcing, underscores our mission to
              harness the vast potential of these tools for societal benefit.
              Your support is crucial as we expand our capabilities in tackling
              large-scale data analysis and develop innovative models that
              inform policy, improve health outcomes, and accelerate scientific
              discovery. By investing in our work, institutional and individual
              donors play a pivotal role in propelling forward the frontiers of
              knowledge and technology.
            </p>

            <p>
              In an era where data is omnipresent and growing exponentially, the
              role of sophisticated AI methodologies in making sense of this
              data cannot be overstated. At Knowledge Lab, we leverage
              cutting-edge AI research to refine and innovate crowd-sourcing
              techniques and machine learning models that not only enhance our
              understanding of data patterns but also foster collaborations
              across diverse fields. Your donations will empower us to continue
              developing robust analytical tools and solutions that address
              critical challenges and lead to actionable insights. Join us in
              shaping a future where data-driven research translates into
              real-world applications, creating a profound impact on our global
              community.
            </p>
          </Col>
          <Col xs={12} sm={4}>
            <div className="give-div"><a href="https://giving.uchicago.edu/site/Donation2?idb=1156375306&1838.donation=form1&df_id=1838&mfc_pref=T&1838_donation=form1&set.Designee=2622" target="_blank"><span>Give to</span><h3>Knowledge Lab</h3>
            </a></div>
            
          </Col>
        </Row>
      </Container>
    </Container>
    {/* <Container fluid id="give">
      <Container>
        <Row>
          {give.map((ab) => {
            return (
              <>
                <Col sm={3} className="d-none d-sm-block morph">
                  <img src={Neural} />
                </Col>
                <Col xs={9}>
                  <h2>{ab.title}</h2>
                  <h4>{ab.tagLine}</h4>
                  <p>{ab.description}</p>
                  <p>{ab.grantsPress}</p>
                  <p>{ab.papers}</p>
                  <Link to={ab.url}>
                    <button>Learn More and Apply</button>
                  </Link>
                </Col>
              </>
            );
          })}
        </Row>
      </Container>
    </Container> */}
  </Layout>
);

export const Head = () => <Seo title="Give to Knowledge Lab" />;

export default Give;
