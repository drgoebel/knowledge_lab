import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Nav from "../components/nav";
import Seo from "../components/seo";
import { Container, Row, Col } from "react-bootstrap";
import "../components/gridder.css";
import Trianges from "../images/triangles.svg";
import Neural from "../images/neural.webp"

const about = [
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
  {
    title: "Postdoctoral Scholar Positions in Science and Technology Policy",
    text:
      "We seek outstanding candidates for government and philanthropically funded postdoctoral positions to explore the dynamics of science, technology, and product innovation, examine the global science and technology ecosystem, and explore novel approaches to predict and causally identify the impact of innovation policies. Specifically, postdocs will participate in a broader team of researchers to develop large-scale models to (1) observe the global system of science and technology at scale; (2) predict future science and technology; and (3) experimentally explore alternative futures and how to configure the world to achieve them. Postdocs will work at the interface of the science of science and innovation. They will also interact with researchers on how to wrangle/build data-driven and AI-powered approaches that assist this goal Candidates will work in the Knowledge Lab, directed by Max Palevsky Prof. of Sociology James Evans, and engage with a number of social scientists and scholars across the collaborative project in the social sciences (e.g., economics and sociology), complex systems (e.g., network science, physics, ecology), and computer science.",
    url: "using-typescript",
  },

  {
    title:
      "Postdoctoral Scholar Positions on AI, Science & Technology Prediction",
    text:
      "We seek outstanding candidates for government and philanthropically funded postdoctoral positions developing large language models (LLMs) and associated AI systems to (1) observe the global system of science and technology at scale; (2) predict future science and technology; and (3) experimentally explore alternative futures and how to configure the world to achieve them. Postdoctoral Scholars will work at the interface of AI research on transformers and novel deep learning designs and realized large-scale systems in collaboration with the Allen Institute for Artificial Intelligence (e.g., its AI-powered Semantic Scholar and Open Language Model, OLMo) and the U.S. Department of Energy's Trillion Parameter Consortium. This work will be in collaboration with computational social scientists (e.g., economists, sociologists, physicists) furthering the science of science and innovation in order to guide U.S. and global strategic investments in science and technology.",
    url: "using-ssr",
  },
  {
    title: "Postdoctoral Scholar Positions in Complementary AI",
    text:
      "We seek outstanding candidates for a funded postdoctoral position at the University of Chicago exploring complementary artificial intelligence. Under the supervision of James A. Evans and Chenhao Tan in the Data Science Institute at UChicago, postdocs will work at the interface of machine learning (e.g., generative models, large text and multi-model models), human-computer interaction (HCI), and the social and behavioral sciences to engage in empirical research that advances the theory and evidence-base for complementary AI. By this, we mean novel and powerful AI designed not to match and substitute for human capacity, but to compensate for and complement it. The notion of “Artificial Intelligence” as a mimicry of human intelligence has dominated computational intelligence designs for more than half a century and inspired growing interest and concern regarding artificial general intelligence (AGI).",
    url: "using-dsg",
  },
];



const About = () => (
  <Layout>
    <Nav />

    <Container fluid id="about-header">
      <div className="background"></div>
      <Container>
        <Row>
          <Col xs={12} sm={9}>
            <h1>About Knowledge Lab</h1>
            <p>
            Knowledge Lab at the University of Chicago focuses on using Big Data, machine learning, and crowd-sourcing techniques to analyze how knowledge is generated, used, and forgotten. By studying the dynamics of information across various fields, the lab seeks to enhance knowledge management, representation, and innovation. It emphasizes interdisciplinary research to explore the mechanisms behind human understanding and discovery, aiming to improve the creation and application of knowledge in various contexts. 
            </p>
          </Col>
          <Col sm={3} className="d-none d-sm-block">
            <img src={Trianges} alt="connected triagle shapes" />
          </Col>
        </Row>
      </Container>
    </Container>
    <Container fluid id="about">
      <Container>
        <Row>
          {about.map((ab) => {
            return (
              <>
                {/* <Col sm={3} className="d-none d-sm-block morph">
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
                </Col> */}
              </>
            );
          })}
        </Row>
      </Container>
    </Container>
  </Layout>
);

export const Head = () => <Seo title="About Page" />;

export default About;
