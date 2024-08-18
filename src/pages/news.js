import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Nav from "../components/nav";
import Seo from "../components/seo";
import { Container, Row, Col } from "react-bootstrap";
import "../components/gridder.css";
import Trianges from "../images/triangles.svg";
import Neural from "../images/neural.webp"

const newsItems = [
  {
    title: "The case for alien AI | James Evans | TEDxChicago",
    description: "James Evans asks a critical question as we ponder our AI-driven future: “What AI do we deserve?” He then takes us on a journey making the case that alien intelligence and thus alien AI that we grow and care for will be the most impactful on us as a human society.",
    link: "https://youtu.be/87zET-4IQws",
    image: "Initiative image",
    cta: "Watch Now"
  },
  {
    title: "Culture by Design Podcast: Surfing the Boundaries of Order and Chaos with James Evans",
    description: "This week on Culture by Design, Timothy R. Clark is joined by James Evans, Director of Knowledge Lab at the University of Chicago. They talk about how to activate diversity, how to harness collective intelligence, and the paradoxical interplay between innovation and execution.",
    link: "https://open.spotify.com/episode/3PG6RFSjmyyNquiZYEeyS9",
    image: "Initiative image",
    cta: "Listen Now"
  },

  {
    title: "James Evans on Social Computing and Diversity by Design",
    description: "Join Michael Garfield, the host of Complexity, the official podcast of the Santa Fe Institute for a conversation with Prof. James Evans about his new work in, and journal of, social computing — how AI transforms the practice of scientific study and the study of scientific practice; what his research reveals about the importance of diversity in team-building and innovation; and what it means to accept our place beside machines in the pursuit of not just novel scientific insight, but true wisdom.",
    link: "https://complexity.simplecast.com/episodes/55?fbclid=IwAR3bM4LFqKWXbxn3S7R1cHvbi-dGNO_ctXswvD0OWalGnrgMSz6C8XzMd8s",
    image: "Initiative image",
    cta: "Listen Now"
  },
  {
    title: "Knowledge Lab team wins the IRIS Researcher Award",
    description: "Prof. James Evans (pictured on the right), postdoctoral scholar, Brendan Chambers (pictured on the left) and PhD student, Donghyun Kang (pictured in the center), were awarded the IRIS Researcher Award for their project, titled, “Impact of strategic funding on research type and content”.",
    link: "https://www.knowledgelab.org/sample-page-2/knowledge-lab-team-wins-the-iris-researcher-award/",
    image: "Initiative image",
    cta: "Learn More"
  },

  {
    title: "Analysis of Wikipedia finds politically polarized teams produce better work",
    description: "Academic ecologies need a diverse set of research programs: programs that receive few citations, but publish important research with long-term effects; that publish anchoring paradigmatic work, or conversely, disruptive innovative work; programs driving interdisciplinary exchange. All of these qualities are important, even if sometimes at the cost of a lower H‐index or less immediate exposure. Simplified scalar measures fail to capture these multidimensional cultures of success.",
    link: "https://www.knowledgelab.org/sample-page-2/analysis-of-wikipedia-finds-politically-polarized-teams-produce-better-work/",
    image: "Initiative image",
    cta: "Learn More"
  },
  {
    title: "Bigger teams aren’t always better in science and tech",
    description: "Communication and transportation technologies have facilitated the emergence of large and persistent teams in the development of science and technology. How does team size contstraint the search for ideas and impact the future? We analyzed teamwork from more than 65 million papers, patents and software products over 100 years ahd showed that small teams are more likely to disrupt existing scientific and technological paradigms, whereas large teams tend to develop them. We also showed that small teams tend to search out and build on older and less prevalent ideas, while larger teams tend to develop more popular, recent ideas.",
    link: "https://news.uchicago.edu/story/bigger-teams-arent-always-better-science-and-tech",
    image: "Initiative image",
    cta: "Learn More"
  },
  

 
 

];

const News = () => (
  <Layout>
    <Nav />

    <Container fluid id="give-header">
      <div className="background"></div>
      <Container>
        <Row>
          <Col xs={12} sm={9}>
            <h1>Recent News on Knowledge Lab</h1>
            <p>
              Knowledge Litem.harnesses the power of artificial intelligence to
              unravel complex scientific and societal problems, bridging the gap
              between data-driven insights and real-world applications. This
              innovative group collitem.rates with interdisciplinary experts to
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
    <Container fluid id="news">
      <Container>
        <Row>
          {newsItems.map((item) => {
            return (
              <>
              <Col sm={6}>
                <Col sm={12} className="d-none d-sm-block morph">
                  <img src={item.image} />
                </Col>
                <Col xs={12}>
                  <h2>{item.title}</h2>
                  <h4>{item.tagLine}</h4>
                  <p>{item.description}</p>
                  <Link to={item.url}>
                    <button>{item.cta}</button>
                  </Link>
                </Col>
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

export default News;
