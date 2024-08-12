import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Nav from "../components/nav";
import Seo from "../components/seo";
import { Container, Row, Col } from "react-bootstrap";
import "../components/gridder.css";
import Trianges from "../images/triangles.svg";
import Neural from "../images/neural.webp"

const sampleInitiatives = [
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

const moreLinks = [
  { text: "Join us on Discord", url: "https://gatsby.dev/discord" },
  {
    text: "Documentation",
    url: "https://gatsbyjs.com/docs/",
  },
  {
    text: "Starters",
    url: "https://gatsbyjs.com/starters/",
  },
  {
    text: "Showcase",
    url: "https://gatsbyjs.com/showcase/",
  },
  {
    text: "Contributing",
    url: "https://www.gatsbyjs.com/contributing/",
  },
  { text: "Issues", url: "https://github.com/gatsbyjs/gatsby/issues" },
];

const SecondPage = () => (
  <Layout>
    <Nav />

    <Container fluid id="initiatives-header">
      <div className="background"></div>
      <Container>
        <Row>
          <Col xs={12} sm={9}>
            <h1>Initiatives at Knowledge Lab</h1>
            <p>
              Knowledge Lab harnesses the power of artificial intelligence to
              unravel complex scientific and societal problems, bridging the gap
              between data-driven insights and real-world applications. This
              innovative group collaborates with interdisciplinary experts to
              develop AI tools and methodologies that advance our understanding
              of knowledge creation and dissemination.
            </p>
          </Col>
          <Col sm={3} className="d-none d-sm-block">
            <img src={Trianges} alt="connected triagle shapes" />
          </Col>
        </Row>
      </Container>
    </Container>
    <Container fluid id="initiatives">
      <Container>
        <Row>
          {sampleInitiatives.map((initiative) => {
            return (
              <>
                <Col sm={3} className="d-none d-sm-block morph">
                  <img src={Neural} />
                </Col>
                <Col xs={9}>
                  <h2>{initiative.title}</h2>
                  <h4>{initiative.tagLine}</h4>
                  <p>{initiative.description}</p>
                  <p>{initiative.grantsPress}</p>
                  <p>{initiative.papers}</p>
                  <Link to={initiative.url}>
                    <button>Learn More and Apply</button>
                  </Link>
                </Col>
              </>
            );
          })}
        </Row>
      </Container>
    </Container>
  </Layout>
);

export const Head = () => <Seo title="Page two" />;

export default SecondPage;
