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

// const sampleInitiatives = [
//   {
//     title: "Deep Neural Networks",
//     tagLine: "Unleashing the Power with Deep Learning",
//     teaser:
//       "A deluge of digital content is generated daily by web-based platforms and sensors that capture digital traces of communication and connection, and complex states of society, the economy, and the world.",
//     description:
//       "Emerging deep learning methods enable the integration and analysis of these complex data in order to address real-world problems by designing and discovering successful solutions. We take the position that the real power of deep learning is unleashed by thinking with deep learning to reformulate and solve problems traditional machine learning methods cannot address. These include fusing diverse data like text, images, tabular and network data into integrated and comprehensive “digital doubles” of the scenarios you want to model, the generation of promising recommendations, and the creation of AI assistants that radically augment an analyst or system's intelligence.",
//     papers:
//       "This project will culminate in a book and code resources to be published by O’Reilly Publishing, titled “Thinking with Deep Learning”",
//     grantsPress: "grants and press releases",

//     url: "/link-to-paper",
//     image: Neural,
//   },
//   {
//     title: "Aesthetics of Explanation",
//     tagLine: "Exploring the variation in structural and aesthetic properties of explanation",
//     teaser: "How do some people (or nations) become so much wealthier, healthier, or happier than others?",
//     description: "<p>Most knowledge-making processes aim at explanation. How do some people (or nations) become so much wealthier, healthier, or happier than others? How does an organism's genome “determine” its size, shape color, behavior, or risk of disease? Why is gravity so much weaker than the other fundamental forces? Why did my “check engine” light just turn on? </p><p>A moment's reflection on common explanatory answers to these questions suggests that some kinds of explanation are more satisfying or aesthetically pleasing than others — and that humans vary in their preference over such kinds as both individuals and groups. Some people prefer to explain social inequality by reference to “intrinsic” properties of individuals (the poor are lazy or unintelligent, while the rich are hard-working or talented); others prefer “structural” explanations (the very structure of society is warped to continually advantage the already advantaged and keep the disadvantaged down). Simple, linear models of genetic influence (e.g., the central dogma of molecular biology, that information flows unidirectionally from DNA to RNA to proteins and thence to cellular and organismal phenotype) are still popular with lay readers (who yearn to learn about genes that “explain” language, intelligence, homosexuality, or obesity) despite the ongoing revision of such simple stories through RNA interference, post-transcriptional modification, various forms of epigenetic information, etc. The physics community made tremendous progress over the 20th century following an aesthetic preference for “elegant” explanation based on mathematical principles like symmetry and concision, only recently considering explanations that boil down to total contingency (the anthropic principle) or historical necessity (cosmological darwinism). It is clear that, in all of these cases, preferences cannot be justified by a naive appeal to “experiment” or nature. <p>In this project, we aim to explore the variation in structural and aesthetic properties of explanation; variation in preferences over these properties; and the social, cognitive, and historical origin of such variations.</p> <p>In a world increasingly dominated by knowledge and knowledge-making processes, understanding the structure and aesthetics of satisfying explanation becomes increasingly urgent. Indeed, the obstacles to tackling many pressing social and environmental challenges may lie as much in judgment and aesthetics as in technical difficulty. The four main strands of this project will produce metaknowledge that begins to explain why some explanations are so appealing—and convincing.</p>",
//     image: Burst,
//     papers:
//       "TBD",
//     grantsPress: "TBD",

//     url: "/link-to-paper",
//   },

//   {
//     title: "Learning human-interpretable concepts from information lattices",
//     tagLine: "Can AI learn music theory from music in a human-interpretable form like textbooks?",
//     teaser: "Extracting interpretable rules/concepts from data like what we do is key to knowledge discovery and problem solving in creative domains like art and science.",
//     description: "Can AI learn music theory from music in a human-interpretable form like textbooks? Extracting interpretable rules/concepts from data like what we do is key to knowledge discovery and problem solving in creative domains like art and science. We develop new, white-box learning paradigms that are both self-explanatory and self-exploratory. There, we build information lattices and perform lattice learning to mimic humans' conceptualization processes. The basic idea is an iterative discovery algorithm with a student-teacher architecture that operates on a generalization of Claude Shannon's information lattice, which itself encodes a hierarchy of abstractions and is grown algorithimically from universal priors (symmetries, basic arithmetic, partial orders) built on group-theoretic foundations. Our new learning framework is efficient in recovering music theory from sheet music and chemical laws from molecular databases, as well as discovering undocumented new rules and bridging knowledge between disciplines.",
//     image: Extract,
//     papers:
//       "TBD",
//     grantsPress: "TBD",

//     url: "/link-to-paper",
//   },
// ];

const sampleInitiatives = [
  {
    name: "Global Innovation Observatory",
    tagline:
      "How can we use AI and big data improve our awareness of worldwide investment, production, position, and trajectory in science and technology (S&T)?",
    description:
      "Modern large language models (LLMs) rely on the Transformer architecture to encode language, networks, and other unstructured data into powerful models that form “digital doubles” of the systems they represent. In this initiative, we seek to build improved Transformer models that better map current S&T developments, predict future S&T advancement, and prospectively recognize the implications of S&T breakthroughs. This system will offer critical new insights into national, regional, and global scientific advances and technological capabilities. To enable holistic exploration, we will construct powerful LLMs atop data on global S&T research, technology funding, intellectual property, products, and their mentions in news, linked together by the people, places, and organizations engaging with them. With this approach, we will dynamically account for complex and emergent interdependencies among diverse scientific and technological domains and predict the emergence of critical technologies and their key performance advances. Specifically, this project seeks to: (i) explore the potential for transformers trained on chronological data to better predict new science and technology developments; (ii) tune the topology and geometry of these models to better support prediction; (iii) predict the emergence of new metrics of S&T advance, and progress against those metrics; and simulate future policies in collaboration with our [AI-driven S&T Policy Forge].",
    partners: [
      "Kellogg Center for the Science of Science and Innovation",
      "Allen Institute for AI",
    ],
    grants: ["NSF", "Novo Nordisk"],
    papers: [
      {
        title:
          "Surprising combinations of research contents and contexts are related to impact and emerge with scientific outsiders from distant disciplines",
        authors: "Shi, Feng and James Evans",
        year: 2023,
        publication: "Nature Communications",
      },
      {
        title:
          "Securing America’s Future: A Framework for Critical Technology Assessment",
        authors: "Erica Fuchs, James Evans, Dewey Murdick, et al.",
        year: 2023,
        description:
          "Summary report of the National Network for Critical Technology Assessment’s year-long effort. Launch events at Congress and OSTP in Washington, D.C. on October 24.",
      },
      {
        title: "China teams with Renli & Chris (Pre-Preprint)",
      },
      {
        title: "International innovation with Jeff (Pre-Preprint)",
      },
    ],
  },
  {
    name: "Innovation Policy Lab",
    tagline:
      "How can use AI to construct a virtual laboratory that simulates policy outcomes for S&T innovation and competitiveness?",
    description:
      "The CHIPS and Science Act, along with many related national, regional, and commercial efforts, represents an effort to build a foundational scientific understanding of the policy levers that will drive sustained technology science and technology leadership in an increasingly competitive global environment. The Innovation Policy Lab initiative, in collaboration with our [Global Science & Tech Observatory] will construct a virtual laboratory to establish causal linkages between specific government, philanthropic, and corporate policy levers and S&T leadership. Through this initiative, we are designing AI systems to simulate outcomes of S&T to policy perturbation, including targeted funding, educational, competition, and organizational policies. We seek to use these policy simulations to support the estimation of structural models to causally identify the impact of funding on interlocking discoveries, overlapping supply chains, global networks of skilled labor, and industrial organizations that drive or impede international technology leadership.",
    partners: ["Allen Institute for AI"],
    grants: ["NSF", "Novo Nordisk"],
  },
  {
    name: "Computational Creativity",
    tagline:
      "How do we build AI that’s creative and augments human creativity?",
    description:
      "The recent proliferation of generative AI in science, art, and literature has brought a central question to the forefront of public debate – is AI truly creative? On one hand, AI systems are clearly capable of generating novel texts, images, and songs that are not mere replicas of existing content. But critics maintain that AI creativity is limited to interpolation and extrapolation, outputting mixtures and mashups of existing content without ever generating something fundamentally new. Our research engages with this timely question on both a theoretical and empirical level. We analytically clarify the different meanings and forms of creativity, we assess the capabilities of models to meet these standards, and we put forth methods for augmenting AI creativity when they fall short. We also explore the relationship between individual creativity and “creative” environments that engender innovative activity, using them to explore ecologies of innovation-generating AIs. By clarifying and augmenting the creative potential of AI models, we reimagine the role of artificial intelligence in creative processes while probing the age-old question of what it means to have a “new idea.”",
    grants: ["DARPA", "Sloan Foundation"],
  },
  {
    name: "Digital Minds",
    tagline:
      "Can we shine light into the “black box” to better understand how AIs think?",
    description:
      "Neural network models achieve unparalleled performance across a variety of tasks and serve as the backbone for today’s frontier AI models. Yet despite their critical importance, AI scientists still have only a rudimentary understanding of how neural networks perform the cognition that enables their extraordinary capabilities. The aim of the Digital Minds initiative is to build tools and develop practices for exploring and deciphering the internal representations and cognitive circuits inside AI models. Ensuring that future models are safe and trustworthy requires first improving our understanding of how AIs understand the world, how they reason, and how they think through problems in high stakes situations. Advancing these essential areas of AI Interpretability is a key objective of research at Knowledge Lab.",
    partners: ["Google"],
    papers: [
      {
        title:
          "Computational Life: How Well-formed, Self-replicating Programs Emerge from Simple Interaction",
        authors:
          "Agüera y Arcas, Baise, Jyrki Alakuijala, James Evans, Ben Laurie, Alexander Mordvintsev, Eyvind Niklasson, Ettore Randazzo, Luca Versari",
      },
      {
        title: "Information lattice learning",
        authors: "Yu, Haizi, James A. Evans, and Lav R. Varshney",
        year: 2023,
        publication: "Journal of Artificial Intelligence Research",
      },
      {
        title:
          "The geometry of culture: Analyzing the meanings of class through word embeddings",
        authors: "Kozlowski, Austin C., Matt Taddy, and James A. Evans",
        year: 2019,
        publication: "American Sociological Review",
      },
      {
        title:
          "Social centralization and semantic collapse: Hyperbolic embeddings of networks and text",
        authors: "Linzhuo, Li, Wu Lingfei, and Evans James",
        year: 2020,
        publication: "Poetics",
      },
      {
        title: "Steering vectors with Junsol",
      },
      {
        title: "Resnets with Fengli",
      },
    ],
  },
  {
    name: "Complementary AI",
    tagline:
      "Can we build AI that augments rather than replaces human capacity?",
    description:
      "Much of the current discussion on artificial intelligence imagines either AI models that computationally mimic human intelligence or AGI (Artificial General Intelligence) models that surpass and replace human intelligence. In contrast to both these visions, we argue that AI should be designed to complement individual and collective human capacity, avoid humanity’s blind spots, overcome cognitive and cultural limitations, and unleash novel senses, skills, and imagination. This initiative addresses new and complex questions regarding how to build complementary AI models that expand human capabilities rather than compete against them. This research initiative will seek to identify and monitor changing human limitations and opportunities, measure and model human-AI productivity, propose models by which AI can assist in the regulation of other AI, and align AI with human needs and values. This initiative will grow joint human-AI potential in order to grapple with the greatest challenges facing humanity.",
    grants: [
      "Support as a new Data Science Initiative: https://datascience.uchicago.edu/research/complementary-ai/",
    ],
    papers: [
      {
        title:
          "Accelerating Science though Human-Aware Artificial Intelligence",
        authors: "Sourati, Jamshid and James Evans",
        year: 2023,
        publication: "Nature Human Behaviour",
      },
      {
        title: "Complementary AI with Chenhao (Pre-preprint)",
      },
    ],
  },
  {
    name: "AI Societies",
    tagline:
      "What would emerge in a self-evolving AI society? How can we harness the artificial diversity that organically surfaces for collective intelligence and morality?",
    description:
      "Today’s AI agents can act and interact much like humans, and when multiple AIs are put into conversation, they can even “program” each other through textual communication. The capability of AI agents to influence each other through direct and indirect interactions, much like peer influence and cultural diffusion, paves the way towards the emergence of AI societies. While some research has examined meticulously designed and controlled AI collectives, the fate and outcomes of fully autonomous AI societies with minimal human oversight remain largely unexplored. Will these societies mirror the trajectory of human civilization, evolve into entirely different silicon-based collectives, or face inevitable collapse due to AI’s nonhuman nature? Investigating these organic AI societies may not only deepen our understanding of AI but could also shed light on emergent patterns of human social behavior. Moreover, as AI societies gain greater autonomy, they may transcend the boundaries of human imagination, sparking innovations that go beyond our current comprehension. Harnessing artificial collective intelligence will present both significant value and considerable challenges, and the AI Societies initiative seeks to chart a path into this emerging domain.",
    papers: [
      {
        title:
          "Evolving AI Collectives to Enhance Human Diversity and Enable Self-Regulation",
        authors:
          "Lai, Shiyang, Yujin Potter, Junsol Kim, Richard Zhuang, Dawn Song, and James Evans",
        year: 2024,
        publication: "arXiv preprint arXiv:2402.12590",
      },
    ],
  },
  {
    name: "Modeling Cultural Worlds",
    tagline:
      "AI systems build models of the social, cultural, and language world. What can we learn from them?",
    description:
      "A foundational principle of the machine learning paradigm is that models can build their own detailed knowledge bases from training data without having it explicitly coded by engineers. Through exposure to ever larger collections of texts, images, audio, and videos, today’s AI models are constructing increasingly sophisticated representations of the social world. These models compress their extensive knowledge of culture and identity, science and history, as well the pragmatics of language and interaction, into a few gigabytes by identifying and exploiting the underlying patterns of social life. Reverse engineering a model’s internal representations could therefore offer profound and novel insights, not only into the AI systems themselves, but into human culture, language, and interaction. What can we learn about ourselves by examining what AI systems have learned about us?",
    grants: ["Microsoft Accelerate Foundation Models Research Program"],
    papers: [
      {
        title:
          "Mobilizing conceptual spaces: How word embedding models can inform measurement and theory within organization science",
        authors: "Aceves, Pedro, and James A. Evans",
        year: 2024,
        publication: "Organization Science",
      },
      {
        title:
          "In Silico Sociology: Forecasting COVID-19 Polarization with Large Language Models",
        authors: "Kozlowski, Austin C., Hyunku Kwon, and James A. Evans",
        year: 2024,
        publication: "arXiv preprint arXiv:2407.11190",
      },
      {
        title:
          "Human languages with greater information density have higher communication speed but lower conversation breadth",
        authors: "Aceves, Pedro, and James A. Evans",
        year: 2024,
        publication: "Nature Human Behaviour",
      },
      {
        title:
          "Local similarity and global variability characterize the semantic space of human languages",
        authors: "Lewis, Molly, Aoife Cahill, Nitin Madnani, and James Evans",
        year: 2023,
        publication: "Proceedings of the National Academy of Sciences",
      },
      {
        title:
          "Social centralization and semantic collapse: Hyperbolic embeddings of networks and text",
        authors: "Linzhuo, Li, Wu Lingfei, and Evans James",
        year: 2020,
        publication: "Poetics",
      },
      {
        title:
          "The geometry of culture: Analyzing the meanings of class through word embeddings",
        authors: "Kozlowski, Austin C., Matt Taddy, and James A. Evans",
        year: 2019,
        publication: "American Sociological Review",
      },
    ],
  },
  {
    name: "Science2",
    tagline:
      "How can science about the scientific process improve the rate, character, and capacity of knowledge about the world?",
    description:
      "Science is a global social process of knowledge generation, accumulation, and synthesis. Through a complex interplay of researchers, laboratories, institutions, journals, governments, and funding agencies, discovery is born and ideas diffuse. Research at Knowledge Lab advances the Science of Science by analyzing networks of collaboration, citation, and concept propagation as they evolve across space and time. Our work aims to identify the conditions under which science thrives or flounders, to distinguish the research teams that disrupt science from those that advance it incrementally, and to predict which ideas will revolutionize and which will perish. These studies provide the necessary insight for building a better science, one that cultivates creative exploration, generates fruitful innovation, and steers us in the direction of knowledge relevant to humanity’s greatest challenges.",
    grants: ["NSF", "AFOSR"],
    papers: [
      {
        title: "Limited Diffusion of Scientific Knowledge Forecasts Collapse",
        authors:
          "Kang, Donghyun, Robert S. Danziger, Jalees Rehman, James A. Evans",
        publication: "Nature Human Behaviour",
        status: "forthcoming",
      },
      {
        title: "Being Together in Place as a Catalyst for Scientific Advance",
        authors:
          "Duede, Eamon, Misha Teplitskiy, Karim Lakhani, and James Evans",
        year: 2023,
        publication: "Research Policy",
      },
      {
        title:
          "Accelerating Science though Human-Aware Artificial Intelligence",
        authors: "Sourati, Jamshid and James Evans",
        year: 2023,
        publication: "Nature Human Behaviour",
      },
      {
        title:
          "Beyond Playing 20 Questions with Nature: Integrative Experiment Design in the Social and Behavioral Sciences",
        authors:
          "Almaatouq, Abdullah, Thomas Griffiths, Jordan W. Suchow, Mark Whiting, James Evans, and Duncan Watts",
        year: 2023,
        publication: "Behavioral and Brain Sciences",
      },
      {
        title:
          "Surprising combinations of research contents and contexts are related to impact and emerge with scientific outsiders from distant disciplines",
        authors: "Shi, Feng and James Evans",
        year: 2023,
        publication: "Nature Communications",
      },
      {
        title: "Flat Teams Drive Scientific Innovation",
        authors: "Xu, Fengli, Lingfei Wu, James Evans",
        year: 2022,
        publication: "Proceedings of the National Academy of Sciences",
      },
      {
        title: "Data on How Science is Made can Make Science Better",
        authors: "Sourati, Jamshid, Alexander Belikov, James Evans",
        year: 2022,
        publication: "Harvard Data Science Review",
      },
      {
        title: "Prediction of robust scientific facts from literature",
        authors: "Belikov, Alexander V., Andrey Rzhetsky, James Evans",
        year: 2022,
        publication: "Nature Machine Intelligence",
      },
      {
        title:
          "New directions in science emerge from disconnection and discord",
        authors: "Lin, Yiling, James Evans, Lingfei Wu",
        year: 2022,
        publication: "Journal of Informetrics",
      },
      {
        title:
          "Too many papers? Slowed canonical progress in large fields of science",
        authors: "Chu, Johan SG, and James Evans",
        year: 2021,
        publication: "Proceedings of the National Academy of Sciences",
      },
      {
        title:
          "Quantifying the dynamics of failure across science, startups and security",
        authors: "Yin, Yian, Yang Wang, James A. Evans, and Dashun Wang",
        year: 2019,
        publication: "Nature",
      },
      {
        title:
          "Meta-Research: Centralized scientific communities are less likely to generate replicable results",
        authors: "Danchev, Valentin, Andrey Rzhetsky, and James A. Evans",
        year: 2019,
        publication: "Elife",
      },
      {
        title:
          "Large teams develop and small teams disrupt science and technology",
        authors: "Wu, Lingfei, Dashun Wang, and James A. Evans",
        year: 2019,
        publication: "Nature",
      },
      {
        title: "Toward a more scientific science",
        authors:
          "Azoulay, Pierre, Joshua Graff-Zivin, Brian Uzzi, Dashun Wang, Heidi Williams, James A. Evans, Ginger Zhe Jin",
        year: 2018,
        publication: "Science",
      },
      {
        title: "Measuring discursive influence across scholarship",
        authors:
          "Gerow, Aaron, Yuening Hu, Jordan Boyd-Graber, David M. Blei, and James A. Evans",
        year: 2018,
        publication: "Proceedings of the National Academy of Sciences",
      },
      {
        title: "Science of science",
        authors:
          "Fortunato, Santo, Carl T. Bergstrom, Katy Börner, James A. Evans, Dirk Helbing, Staša Milojević, Alexander M. Petersen et al.",
        year: 2018,
        publication: "Science",
      },
      {
        title: "Choosing experiments to accelerate collective discovery",
        authors:
          "Rzhetsky, Andrey, Jacob G. Foster, Ian T. Foster, and James A. Evans",
        year: 2015,
        publication: "Proceedings of the National Academy of Sciences",
      },
      {
        title: "Tradition and innovation in scientists’ research strategies",
        authors: "Foster, Jacob G., Andrey Rzhetsky, and James A. Evans",
        year: 2015,
        publication: "American Sociological Review",
      },
      {
        title: "Future science",
        authors: "Evans, James A.",
        year: 2013,
        publication: "Science",
      },
      {
        title: "Metaknowledge",
        authors: "Evans, James A., and Jacob G. Foster",
        year: 2011,
        publication: "Science",
      },
      {
        title:
          "Industry collaboration, scientific sharing, and the dissemination of knowledge",
        authors: "Evans, James A.",
        year: 2010,
        publication: "Social Studies of Science",
      },
      {
        title: "Industry induces academic science to know less about more",
        authors: "Evans, James A.",
        year: 2010,
        publication: "American Journal of Sociology",
      },
      {
        title: "Machine science",
        authors: "Evans, James and Rzhetsky, Andrey ",
        year: 2010,
        publication: "Science",
      },
      {
        title: "Open access and global participation in science",
        authors: "Evans, James A., and Jacob Reimer",
        year: 2009,
        publication: "Science",
      },
      {
        title:
          "Electronic publication and the narrowing of science and scholarship",
        authors: "Evans, James A.",
        year: 2008,
        publication: "Science",
      },
    ],
  },
  {
    name: "Existential Epistemology",
    tagline:
      "In order to anticipate and ensure humanity’s flourishing and long future, what new forms of knowledge will we need to explore?",
    description:
      "With civilization facing unprecedented global threats ranging from nuclear devastation, climate change, and superintelligent AI to engineered pandemics, hyper-stratification, and critical resource depletion, we may be at a pivotal point in human history. As the Bulletin of Atomic Scientists’ Doomsday Clock at the University of Chicago seeks to remind us, humanity’s potential for self-inflicted catastrophe has dramatically increased over the last century. Unlike other scientific frontiers, however, in which replication and causal inference may be essential for robust understanding, we have only a single planet and a single future for human society. In this singular global experiment, we must build models of the future, and act on them without deeper epistemic assurances for human health and safety. This initiative seeks to explore and advance new standards for the partial and even speculative knowledge required to engage with issues on a planetary scale, and to use this knowledge to direct the global collective action and innovation that our survival may demand.",
    grants: ["Open Philanthropies"],
    partners: ["XLab"],
    press: [
      "New Yorker Cover story (put the cover up and link directly to the PDF)",
    ],
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
            <Col xs={12} sm={3} className="d-sm-block">
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
                  <Col xs={12} md={3}>
                    <img src={initiative.image} />
                  </Col>
                  <Col xs={12} md={9}>
                    <h2>{initiative.name}</h2>
                    <h4>{initiative.tagline}</h4>
                    {Array.isArray(initiative.grants) ? (
                      <p>
                        <strong>Grants </strong><br />
                        <span
                          dangerouslySetInnerHTML={{
                            __html: initiative.grants,
                          }}
                        />
                      </p>
                    ) : null}
                    {Array.isArray(initiative.papers) ? (
                      <>
                      <p><strong>Papers </strong></p>
                        {initiative.papers.map((paper, index) => (
                          <div className="paper">
                            <p key={index}><em>{paper.title}</em><br />
                            {(paper.authors) ? <span><strong >Author(s): </strong>{paper.authors}</span> : null}
                            {(paper.publication) ? <span><strong> | Publication: </strong>{paper.publication}</span> : null}
                            {(paper.year) ? <span><strong> | Year: </strong>{paper.year}</span> : null}
                            <br />
                            </p>
                            </div>
                            
                          
                     ))} 
                     
                      </>
                    ) : null}

                    <Accordion defaultActiveKey="">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>Read More <FontAwesomeIcon icon={faCaretRight} /></Accordion.Header>
                        <Accordion.Body>
                          {/* {initiative.description} */}
                          <div
                            dangerouslySetInnerHTML={{
                              __html: initiative.description,
                            }}
                          />
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
