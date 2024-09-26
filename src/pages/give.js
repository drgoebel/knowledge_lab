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
            In an era of rapid social and technological change, it is essential that we understand the forces shaping our world and the new trajectories that we are charting. Donations to Knowledge Lab play a crucial role in fostering research that interprets the current state of global science and anticipates fruitful pathways toward new discovery. Your investment in Knowledge Lab helps bring about a future where data-driven research delivers tangible benefits to society at large, informing public policy and accelerating scientific progress.
            </p>
          </Col>
          <Col xs={12} sm={4}>
            <div className="give-div"><a href="https://giving.uchicago.edu/site/Donation2?idb=1156375306&1838.donation=form1&df_id=1838&mfc_pref=T&1838_donation=form1&set.Designee=2622" target="_blank"><span>Give to</span><h3>Knowledge Lab</h3>
            </a></div>
            
          </Col>
        </Row>
      </Container>
    </Container>
    <Container fluid id="give">
      <Container><Row><Col><p>Integral to the Knowledge Lab are student fellowships and awards, faculty research, and special initiatives, all of which can be boosted and sustained through philanthropy. Learn about opportunities to make a substantial Knowledge Lab impact by contacting Yasmin Omer, Associate Dean and Director of Development for the Division of the Social Sciences at <a href="mailto:yasminomer@uchicago.edu">yasminomer@uchicago.edu</a>.</p></Col></Row></Container>

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
