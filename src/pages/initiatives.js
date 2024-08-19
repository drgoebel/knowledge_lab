import React, { useState } from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Nav from "../components/nav";
import Seo from "../components/seo";
import { Container, Row, Col, Accordion, Card, Button } from "react-bootstrap";
import "../components/gridder.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import Neural from "../images/neural.webp";
import Burst from "../images/burst.jpg";
import Extract from "../images/extract.png";

const sampleInitiatives = [
  {
    title: "Deep Neural Networks",
    tagLine: "Unleashing the Power with Deep Learning",
    teaser:
      "A deluge of digital content is generated daily by web-based platforms and sensors that capture digital traces of communication and connection, and complex states of society, the economy, and the world.",
    description:
      "Emerging deep learning methods enable the integration and analysis of these complex data in order to address real-world problems by designing and discovering successful solutions. We take the position that the real power of deep learning is unleashed by thinking with deep learning to reformulate and solve problems traditional machine learning methods cannot address. These include fusing diverse data like text, images, tabular and network data into integrated and comprehensive “digital doubles” of the scenarios you want to model, the generation of promising recommendations, and the creation of AI assistants that radically augment an analyst or system's intelligence.",
    papers:
      "This project will culminate in a book and code resources to be published by O’Reilly Publishing, titled “Thinking with Deep Learning”",
    grantsPress: "grants and press releases",

    url: "/link-to-paper",
    image: Neural,
  },
  {
    title: "Aesthetics of Explanation",
    tagLine: "Exploring the variation in structural and aesthetic properties of explanation",
    teaser: "How do some people (or nations) become so much wealthier, healthier, or happier than others?",
    description: "<p>Most knowledge-making processes aim at explanation. How do some people (or nations) become so much wealthier, healthier, or happier than others? How does an organism's genome “determine” its size, shape color, behavior, or risk of disease? Why is gravity so much weaker than the other fundamental forces? Why did my “check engine” light just turn on? </p><p>A moment's reflection on common explanatory answers to these questions suggests that some kinds of explanation are more satisfying or aesthetically pleasing than others — and that humans vary in their preference over such kinds as both individuals and groups. Some people prefer to explain social inequality by reference to “intrinsic” properties of individuals (the poor are lazy or unintelligent, while the rich are hard-working or talented); others prefer “structural” explanations (the very structure of society is warped to continually advantage the already advantaged and keep the disadvantaged down). Simple, linear models of genetic influence (e.g., the central dogma of molecular biology, that information flows unidirectionally from DNA to RNA to proteins and thence to cellular and organismal phenotype) are still popular with lay readers (who yearn to learn about genes that “explain” language, intelligence, homosexuality, or obesity) despite the ongoing revision of such simple stories through RNA interference, post-transcriptional modification, various forms of epigenetic information, etc. The physics community made tremendous progress over the 20th century following an aesthetic preference for “elegant” explanation based on mathematical principles like symmetry and concision, only recently considering explanations that boil down to total contingency (the anthropic principle) or historical necessity (cosmological darwinism). It is clear that, in all of these cases, preferences cannot be justified by a naive appeal to “experiment” or nature. <p>In this project, we aim to explore the variation in structural and aesthetic properties of explanation; variation in preferences over these properties; and the social, cognitive, and historical origin of such variations.</p> <p>In a world increasingly dominated by knowledge and knowledge-making processes, understanding the structure and aesthetics of satisfying explanation becomes increasingly urgent. Indeed, the obstacles to tackling many pressing social and environmental challenges may lie as much in judgment and aesthetics as in technical difficulty. The four main strands of this project will produce metaknowledge that begins to explain why some explanations are so appealing—and convincing.</p>",
    image: Burst,
    papers:
      "TBD",
    grantsPress: "TBD",

    url: "/link-to-paper",
  },

  {
    title: "Learning human-interpretable concepts from information lattices",
    tagLine: "Can AI learn music theory from music in a human-interpretable form like textbooks?",
    teaser: "Extracting interpretable rules/concepts from data like what we do is key to knowledge discovery and problem solving in creative domains like art and science.",
    description: "Can AI learn music theory from music in a human-interpretable form like textbooks? Extracting interpretable rules/concepts from data like what we do is key to knowledge discovery and problem solving in creative domains like art and science. We develop new, white-box learning paradigms that are both self-explanatory and self-exploratory. There, we build information lattices and perform lattice learning to mimic humans' conceptualization processes. The basic idea is an iterative discovery algorithm with a student-teacher architecture that operates on a generalization of Claude Shannon's information lattice, which itself encodes a hierarchy of abstractions and is grown algorithimically from universal priors (symmetries, basic arithmetic, partial orders) built on group-theoretic foundations. Our new learning framework is efficient in recovering music theory from sheet music and chemical laws from molecular databases, as well as discovering undocumented new rules and bridging knowledge between disciplines.",
    image: Extract,
    papers:
      "TBD",
    grantsPress: "TBD",

    url: "/link-to-paper",
  },
];

const Initiatives = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
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
                unravel complex scientific and societal problems, bridging the
                gap between data-driven insights and real-world applications.
                This innovative group collaborates with interdisciplinary
                experts to develop AI tools and methodologies that advance our
                understanding of knowledge creation and dissemination.
              </p>
            </Col>
            <Col sm={3} className="d-none d-sm-block">
              <img src="https://placeholder.com/300x200" />
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
                    <img src={initiative.image} />
                  </Col>
                  <Col xs={8}>
                    <h2>{initiative.title}</h2>
                    <h4>{initiative.tagLine}</h4>
                    <p>{initiative.teaser}</p>
                    <p>
                      <strong>Grants:</strong> {initiative.grantsPress}
                    </p>
                    <p>
                      <strong>Papers</strong> {initiative.papers}
                    </p>
                    <Accordion defaultActiveKey="">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>Read More</Accordion.Header>
                        <Accordion.Body>
                          {/* {initiative.description} */}
                          <div dangerouslySetInnerHTML={ {__html: initiative.description} } />
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Col>
                </>
              );
            })}
          </Row>
        </Container>
      </Container>
    </Layout>
  );
};

export const Head = () => <Seo title="Page two" />;

export default Initiatives;
