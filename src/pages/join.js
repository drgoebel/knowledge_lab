import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Nav from "../components/nav";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import "../components/gridder.css";
import Trianges from "../images/triangles.svg";

const sampleCareers = [
  {
    title: "General Postdoctoral Scholar Positions at the Knowledge Lab",
    text:
      "The University of Chicago is seeking exceptional candidates for multiple post-doctoral fellow positions in the Knowledge Lab, directed by Prof. James Evans, Max Palevsky professor of Sociology and Data Science at UChicago and the Santa Fe Institute. We have a broadly defined research agenda, exploring diverse topics related to the science of science, technology, and innovation; computational social science; AI — large language and multi-modal models, novel AI paradigms and designs, AI interpretability and world models, complementary and “alien” AI; automated social and natural science; network science and data science informed by the geometry and topology of data. Many projects will involve and design research collaborations with scientists around the world to solve the most challenging problems and seek out new opportunities.",
    url: "page-2",
    badge: false,
    description:
      "A simple example of linking to another page within a Gatsby site",
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
    
    <Container fluid id="careers-header">
      <div className="background"></div>
      <Container>
        <Row>
          <Col xs={12} sm={9}>
            <h1>Join Knowledge Lab</h1>
            <p>
              Become part of the research and innovation at Knowledge Lab. Apply
              Now for New Postdoctoral Scholar Positions at the Knowledge Lab at
              the University of Chicago
            </p>
          </Col>
          <Col sm={3} className="d-none d-sm-block">
            <div className="apply-now"><a href="#">Apply to Knowledge Lab</a></div>
          </Col>
        </Row>
      </Container>
    </Container>
    <Container fluid id="careers">
      <Container>
        <Row>
          <Col xs={12} md={8}>
            {/* <p>Welcome to page 2</p>
        <Link to="/">Go back to the homepage</Link> */}
            {sampleCareers.map((career) => {
              return (
                <>
                  <h2>{career.title}</h2>
                  <p>{career.text}</p>
                  <Link to={career.url}>
                    <button>Learn More and Apply <FontAwesomeIcon icon={faCaretRight}/></button>
                  </Link>
                </>
              );
            })}
          </Col>
          <Col xs={12} md={4} className="sidebar">
            <div>
              <h3>Application Instructions for All Applicants</h3>
              <ol>
                <li>
                  Cover letter, describing your interest in and qualifications
                  for pursuing interdisciplinary research
                </li>
                <li>Curriculum vitae (including publications list)</li>
                <li>
                  Two published papers or equivalent writing samples that best
                  demonstrate your expertise and fit for the position
                </li>
                <li>
                  Research statement (2-4 pages) that outlines your research
                  achievements and agenda, as well as your service and outreach
                  activities (optional)
                </li>
                <li>
                  Contact information for three or more scholars who know your
                  work and are willing to write letters of reference
                </li>
                <li>
                  An example (e.g., GitHub links or code in any language) of
                  working software you have written (optional) Link to a
                  professional webpage and Google Scholar page (optional)
                </li>
                <li>
                  Link to a professional webpage and Google Scholar page
                  (optional)
                </li>
              </ol>
            </div>
            <div>
              <h3>University Information</h3>
              <ol>
                <li>
                  All University departments and institutes are charged with
                  building a faculty from a diversity of backgrounds and with
                  diverse viewpoints; with cultivating an inclusive community
                  that values freedom of expression; and with welcoming and
                  supporting all their members. We seek a diverse pool of
                  applicants who wish to join an academic community that places
                  the highest value on rigorous inquiry and encourages diverse
                  perspectives, experiences, groups of individuals, and ideas to
                  inform and stimulate intellectual challenge, engagement, and
                  exchange. The University’s Statements on Diversity are at
                  https://provost.uchicago.edu/statements-diversity.
                </li>
                <li>
                  The University of Chicago is an Affirmative Action/Equal
                  Opportunity/Disabled/Veterans Employer and does not
                  discriminate on the basis of race, color, religion, sex,
                  sexual orientation, gender, gender identity, national or
                  ethnic origin, age, status as an individual with a disability,
                  military or veteran status, genetic information, or other
                  protected classes under the law. For additional information
                  please see the University’s Notice of Nondiscrimination. Job
                  seekers in need of a reasonable accommodation to complete the
                  application process should call 773-834- 3988 or
                  email equalopportunity@uchicago.edu with their request.”
                </li>
              </ol>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  </Layout>
);

export const Head = () => <Seo title="Page two" />;

export default SecondPage;
