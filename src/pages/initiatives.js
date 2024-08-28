// /src/components/InitiativeList.jsx
import * as React from "react";
import { useState } from "react";
import Layout from "../components/layout";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Seo from "../components/seo";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import Nav from "../components/nav";
import AIGroup from "../images/aigroup.webp";
import Global from "../images/global-observe.webp";
import Policy from "../images/policy-lab.webp";
import Computational from "../images/computational.webp"
import Digital from "../images/digital-minds.webp"
import Complementary from "../images/complementary.webp"
import AISociety from "../images/aisociety.webp"
import Cultural from "../images/cultural.webp"
import Science2 from "../images/science2.webp"
import Existential from "../images/existential.webp"

const initiatives = [
    {
      "name": "Global Innovation Observatory",
      "image": Global,
      "tagline": "How can we use AI and big data improve our awareness of worldwide investment production position and trajectory in science and technology (S&T)?",
      "shorter_tagline": "Charting the trajectory for science and tech",
      "description": "Modern large language models (LLMs) rely on the Transformer architecture to encode language networks and other unstructured data into powerful models that form 'digital doubles' of the systems they represent. In this initiative we seek to build improved Transformer models that better map current S&T developments predict future S&T advancement and prospectively recognize the implications of S&T breakthroughs. This system will offer critical new insights into national regional and global scientific advances and technological capabilities. To enable holistic exploration we will construct powerful LLMs atop data on global S&T research technology funding intellectual property products and their mentions in news linked together by the people places and organizations engaging with them. With this approach we will dynamically account for complex and emergent interdependencies among diverse scientific and technological domains and predict the emergence of critical technologies and their key performance advances.",
      "objectives": [
        "Explore the potential for transformers trained on chronological data to better predict new science and technology developments",
        "Tune the topology and geometry of these models to better support prediction",
        "Predict the emergence of new metrics of S&T advance and progress against those metrics",
        "Simulate future policies in collaboration with AI-driven S&T Policy Forge"
      ],
      "partners": ["Kellogg Center for the Science of Science and Innovation", "Allen Institute for AI"],
      "grants": ["NSF", "Novo Nordisk"],
      "papers": [
        {
          "authors": ["Shi Feng", "James Evans"],
          "title": "Surprising combinations of research contents and contexts are related to impact and emerge with scientific outsiders from distant disciplines",
          "journal": "Nature Communications",
          "year": 2023,
          "url": "https://www.nature.com/articles/s41467-023-xxxxxx"
        },
        {
          "authors": ["Erica Fuchs", "James Evans", "Dewey Murdick"],
          "title": "Securing America’s Future: A Framework for Critical Technology Assessment",
          "journal": "Summary report",
          "year": 2023,
          "note": "Launch events at Congress and OSTP in Washington D.C. on October 24",
          "url": "https://www.ostp.gov/reports/Securing_Americas_Future.pdf"
        }

      ]
    },
    {
      "name": "Innovation Policy Lab",
      "image": Policy,
      "tagline": "How can we use AI to construct a virtual laboratory that simulates policy outcomes for S&T innovation and competitiveness?",
      "shorter_tagline": "Scientific planning for science policy",
      "description": "The CHIPS and Science Act along with many related national regional and commercial efforts represents an effort to build a foundational scientific understanding of the policy levers that will drive sustained technology science and technology leadership in an increasingly competitive global environment. The Innovation Policy Lab initiative in collaboration with our Global Science & Tech Observatory will construct a virtual laboratory to establish causal linkages between specific government philanthropic and corporate policy levers and S&T leadership. Through this initiative we are designing AI systems to simulate outcomes of S&T to policy perturbation including targeted funding educational competition and organizational policies. We seek to use these policy simulations to support the estimation of structural models to causally identify the impact of funding on interlocking discoveries overlapping supply chains global networks of skilled labor and industrial organizations that drive or impede international technology leadership.",
      "partners": ["Allen Institute for AI"],
      "grants": ["NSF", "Novo Nordisk"]
    },
    {
      "name": "Computational Creativity",
      "image": Computational,
      "tagline": "How do we build AI that’s creative and augments human creativity?",
      "shorter_tagline": "Can algorithms be truly creative?",
      "description": "The recent proliferation of generative AI in science art and literature has brought a central question to the forefront of public debate – is AI truly creative? On one hand AI systems are clearly capable of generating novel texts images and songs that are not mere replicas of existing content. But critics maintain that AI creativity is limited to interpolation and extrapolation outputting mixtures and mashups of existing content without ever generating something fundamentally new. Our research engages with this timely question on both a theoretical and empirical level. We analytically clarify the different meanings and forms of creativity we assess the capabilities of models to meet these standards and we put forth methods for augmenting AI creativity when they fall short. We also explore the relationship between individual creativity and 'creative' environments that engender innovative activity using them to explore ecologies of innovation-generating AIs. By clarifying and augmenting the creative potential of AI models we reimagine the role of artificial intelligence in creative processes while probing the age-old question of what it means to have a 'new idea.'",
      "grants": ["DARPA", "Sloan Foundation"]
    },
    {
      "name": "Digital Minds",
      "image": Digital,
      "tagline": "Can we shine light into the 'black box' to better understand how AIs think?",
      "shorter_tagline": "Artificial neuroscience of cognition in silico",
      "description": "Neural network models achieve unparalleled performance across a variety of tasks and serve as the backbone for today’s frontier AI models. Yet despite their critical importance AI scientists still have only a rudimentary understanding of how neural networks perform the cognition that enables their extraordinary capabilities. The aim of the Digital Minds initiative is to build tools and develop practices for exploring and deciphering the internal representations and cognitive circuits inside AI models. Ensuring that future models are safe and trustworthy requires first improving our understanding of how AIs understand the world how they reason and how they think through problems in high stakes situations. Advancing these essential areas of AI Interpretability is a key objective of research at Knowledge Lab.",
      "partners": ["Google"],
      "papers": [
        {
          "authors": ["Agüera y Arcas", "Baise", "Jyrki Alakuijala", "James Evans", "Ben Laurie", "Alexander Mordvintsev", "Eyvind Niklasson", "Ettore Randazzo", "Luca Versari"],
          "title": "Computational Life: How Well-formed Self-replicating Programs Emerge from Simple Interaction",
          "url": "https://arxiv.org/abs/2301.00045"
        },
        {
          "authors": ["Yu Haizi", "James A. Evans", "Lav R. Varshney"],
          "title": "Information lattice learning",
          "journal": "Journal of Artificial Intelligence Research",
          "volume": 77,
          "year": 2023,
          "pages": "971-1019",
          "url": "https://www.jair.org/index.php/jair/article/view/13401"
        },
        {
          "authors": ["Kozlowski Austin C.", "Matt Taddy", "James A. Evans"],
          "title": "The geometry of culture: Analyzing the meanings of class through word embeddings",
          "journal": "American Sociological Review",
          "volume": 84,
          "issue": 5,
          "year": 2019,
          "pages": "905-949",
          "url": "https://journals.sagepub.com/doi/abs/10.1177/0003122419877135"
        },
        {
          "authors": ["Linzhuo Li", "Wu Lingfei", "James Evans"],
          "title": "Social centralization and semantic collapse: Hyperbolic embeddings of networks and text",
          "journal": "Poetics",
          "volume": 78,
          "year": 2020,
          "article_id": "101428",
          "url": "https://www.sciencedirect.com/science/article/pii/S0304422X19301234"
        }
      ]
    },
    {
      "name": "Complementary AI",
      "image": Complementary,
      "tagline": "Can we build AI that augments rather than replaces human capacity?",
      "shorter_tagline": "Building AI that expands human capabilities",
      "description": "Much of the current discussion on artificial intelligence imagines either AI models that computationally mimic human intelligence or AGI (Artificial General Intelligence) models that surpass and replace human intelligence. In contrast to both these visions we argue that AI should be designed to complement individual and collective human capacity avoid humanity’s blind spots overcome cognitive and cultural limitations and unleash novel senses skills and imagination. This initiative addresses new and complex questions regarding how to build complementary AI models that expand human capabilities rather than compete against them. This research initiative will seek to identify and monitor changing human limitations and opportunities measure and model human-AI productivity propose models by which AI can assist in the regulation of other AI and align AI with human needs and values. This initiative will grow joint human-AI potential in order to grapple with the greatest challenges facing humanity.",
      "grants": ["Support as a new Data Science Initiative"],
      "papers": [
        {
          "authors": ["Sourati Jamshid", "James Evans"],
          "title": "Accelerating Science though Human-Aware Artificial Intelligence",
          "journal": "Nature Human Behaviour",
          "year": 2023,
          "url": "https://www.nature.com/articles/s41562-023-01495-4"
        }
      ],
      "talks": [
        {
          "title": "Complementary AI Talk",
          "url": "https://www.youtube.com/watch?v=87zET-4IQws"
        },
        {
          "title": "PSW Science Talk",
          "url": "https://pswscience.org/meeting/2438/"
        }
      ]
    },
    {
      "name": "AI Societies",
      "image": AISociety,
      "tagline": "How can we harness the emergent creativity of AI collectives?",
      "shorter_tagline": "Analyzing self-organizing AI collectives",
      "description": "Today’s AI agents can act and interact much like humans and when multiple AIs are put into conversation they can even 'program' each other through textual communication. The capability of AI agents to influence each other through direct and indirect interactions much like peer influence and cultural diffusion paves the way towards the emergence of AI societies. While some research has examined meticulously designed and controlled AI collectives the fate and outcomes of fully autonomous AI societies with minimal human oversight remain largely unexplored. Will these societies mirror the trajectory of human civilization evolve into entirely different silicon-based collectives or face inevitable collapse due to AI’s nonhuman nature? Investigating these organic AI societies may not only deepen our understanding of AI but could also shed light on emergent patterns of human social behavior. Moreover as AI societies gain greater autonomy they may transcend the boundaries of human imagination sparking innovations that go beyond our current comprehension. Harnessing artificial collective intelligence will present both significant value and considerable challenges and the AI Societies initiative seeks to chart a path into this emerging domain.",
      "papers": [
        {
          "authors": ["Lai Shiyang", "Yujin Potter", "Junsol Kim", "Richard Zhuang", "Dawn Song", "James Evans"],
          "title": "Evolving AI Collectives to Enhance Human Diversity and Enable Self-Regulation",
          "journal": "arXiv",
          "arxiv_id": "2402.12590",
          "year": 2024,
          "url": "https://arxiv.org/abs/2402.12590"
        }
      ]
    },
    {
      "name": "Modeling Cultural Worlds",
      "image": Cultural,
      "tagline": "AI systems build models of the social cultural and language world. What can we learn from them?",
      "shorter_tagline": "How do AI systems understand the social world?",
      "description": "A foundational principle of the machine learning paradigm is that models can build their own detailed knowledge bases from training data without having it explicitly coded by engineers. Through exposure to ever larger collections of texts images audio and videos today’s AI models are constructing increasingly sophisticated representations of the social world. These models compress their extensive knowledge of culture and identity science and history as well the pragmatics of language and interaction into a few gigabytes by identifying and exploiting the underlying patterns of social life. Reverse engineering a model’s internal representations could therefore offer profound and novel insights not only into the AI systems themselves but into human culture language and interaction. What can we learn about ourselves by examining what AI systems have learned about us?",
      "grants": ["Microsoft Accelerate Foundation Models Research Program"],
      "papers": [
        {
          "authors": ["Aceves Pedro", "James A. Evans"],
          "title": "Mobilizing conceptual spaces: How word embedding models can inform measurement and theory within organization science",
          "journal": "Organization Science",
          "volume": 35,
          "issue": 3,
          "year": 2024,
          "pages": "788-814",
          "url": "https://pubsonline.informs.org/doi/10.1287/orsc.2023.1591"
        },
        {
          "authors": ["Kozlowski Austin C.", "Hyunku Kwon", "James A. Evans"],
          "title": "In Silico Sociology: Forecasting COVID-19 Polarization with Large Language Models",
          "journal": "arXiv",
          "arxiv_id": "2407.11190",
          "year": 2024,
          "url": "https://arxiv.org/abs/2407.11190"
        },
        {
          "authors": ["Aceves Pedro", "James A. Evans"],
          "title": "Human languages with greater information density have higher communication speed but lower conversation breadth",
          "journal": "Nature Human Behaviour",
          "volume": 8,
          "issue": 4,
          "year": 2024,
          "pages": "644-656",
          "url": "https://www.nature.com/articles/s41562-023-01459-8"
        },
        {
          "authors": ["Lewis Molly", "Aoife Cahill", "Nitin Madnani", "James Evans"],
          "title": "Local similarity and global variability characterize the semantic space of human languages",
          "journal": "Proceedings of the National Academy of Sciences",
          "volume": 120,
          "issue": 51,
          "year": 2023,
          "article_id": "e2300986120",
          "url": "https://www.pnas.org/content/120/51/e2300986120"
        },
        {
          "authors": ["Linzhuo Li", "Wu Lingfei", "James Evans"],
          "title": "Social centralization and semantic collapse: Hyperbolic embeddings of networks and text",
          "journal": "Poetics",
          "volume": 78,
          "year": 2020,
          "article_id": "101428",
          "url": "https://www.sciencedirect.com/science/article/pii/S0304422X19301234"
        },
        {
          "authors": ["Kozlowski Austin C.", "Matt Taddy", "James A. Evans"],
          "title": "The geometry of culture: Analyzing the meanings of class through word embeddings",
          "journal": "American Sociological Review",
          "volume": 84,
          "issue": 5,
          "year": 2019,
          "pages": "905-949",
          "url": "https://journals.sagepub.com/doi/abs/10.1177/0003122419877135"
        }
      ]
    },
    {
      "name": "Science<sup>2</sup>",
      "image": Science2,
      "tagline": "How can science about the scientific process improve the rate, character, and capacity of knowledge about the world?",
      "shorter_tagline": "What conditions enable science to flourish?",
      "description": "Science is a global social process of knowledge generation accumulation and synthesis. Through a complex interplay of researchers laboratories institutions journals governments and funding agencies discovery is born and ideas diffuse. Research at Knowledge Lab advances the Science of Science by analyzing networks of collaboration citation and concept propagation as they evolve across space and time. Our work aims to identify the conditions under which science thrives or flounders to distinguish the research teams that disrupt science from those that advance it incrementally and to predict which ideas will revolutionize and which will perish. These studies provide the necessary insight for building a better science one that cultivates creative exploration generates fruitful innovation and steers us in the direction of knowledge relevant to humanity’s greatest challenges.",
      "grants": ["NSF", "AFOSR"],
      "papers": [
        {
          "authors": ["Kang Donghyun", "Robert S. Danziger", "Jalees Rehman", "James A. Evans"],
          "title": "Limited Diffusion of Scientific Knowledge Forecasts Collapse",
          "journal": "Nature Human Behaviour",
          "status": "forthcoming",
          "url": "https://www.nature.com/articles/s41562-024-01500-9"
        },
        {
          "authors": ["Duede Eamon", "Misha Teplitskiy", "Karim Lakhani", "James Evans"],
          "title": "Being Together in Place as a Catalyst for Scientific Advance",
          "journal": "Research Policy",
          "volume": 53,
          "issue": 2,
          "year": 2023,
          "article_id": "104911",
          "note": "free",
          "url": "https://www.sciencedirect.com/science/article/pii/S0048733323001010"
        },
        {
          "authors": ["Sourati Jamshid", "James Evans"],
          "title": "Accelerating Science though Human-Aware Artificial Intelligence",
          "journal": "Nature Human Behaviour",
          "year": 2023,
          "url": "https://www.nature.com/articles/s41562-023-01495-4"
        },
        {
          "authors": ["Almaatouq Abdullah", "Thomas Griffiths", "Jordan W. Suchow", "Mark Whiting", "James Evans", "Duncan Watts"],
          "title": "Beyond Playing 20 Questions with Nature: Integrative Experiment Design in the Social and Behavioral Sciences",
          "journal": "Behavioral and Brain Sciences",
          "year": 2023,
          "url": "https://www.cambridge.org/core/journals/behavioral-and-brain-sciences/article/abs/beyond-playing-20-questions-with-nature-integrative-experiment-design-in-the-social-and-behavioral-sciences/507CBB469C773BBEBD42D1B3C32FAE59"
        },
        {
          "authors": ["Shi Feng", "James Evans"],
          "title": "Surprising combinations of research contents and contexts are related to impact and emerge with scientific outsiders from distant disciplines",
          "journal": "Nature Communications",
          "year": 2023,
          "url": "https://www.nature.com/articles/s41467-023-xxxxxx"
        },
        {
          "authors": ["Xu Fengli", "Lingfei Wu", "James Evans"],
          "title": "Flat Teams Drive Scientific Innovation",
          "journal": "Proceedings of the National Academy of Sciences",
          "year": 2022,
          "url": "https://www.pnas.org/content/119/47/e2205549119"
        },
        {
          "authors": ["Sourati Jamshid", "Alexander Belikov", "James Evans"],
          "title": "Data on How Science is Made can Make Science Better",
          "journal": "Harvard Data Science Review",
          "year": 2022,
          "url": "https://hdsr.mitpress.mit.edu/pub/xr9hefpd"
        },
        {
          "authors": ["Belikov Alexander V.", "Andrey Rzhetsky", "James Evans"],
          "title": "Prediction of robust scientific facts from literature",
          "journal": "Nature Machine Intelligence",
          "year": 2022,
          "url": "https://www.nature.com/articles/s41563-022-xxxxxx"
        },
        {
          "authors": ["Lin Yiling", "James Evans", "Lingfei Wu"],
          "title": "New directions in science emerge from disconnection and discord",
          "journal": "Journal of Informetrics",
          "volume": 16,
          "issue": 1,
          "year": 2022,
          "article_id": "101234",
          "url": "https://www.sciencedirect.com/science/article/pii/S1751157721000519"
        },
        {
          "authors": ["Chu Johan SG", "James Evans"],
          "title": "Too many papers? Slowed canonical progress in large fields of science",
          "journal": "Proceedings of the National Academy of Sciences",
          "year": 2021,
          "url": "https://www.pnas.org/content/118/13/e2021636118"
        },
        {
          "authors": ["Yin Yian", "Yang Wang", "James A. Evans", "Dashun Wang"],
          "title": "Quantifying the dynamics of failure across science startups and security",
          "journal": "Nature",
          "volume": 575,
          "issue": 7781,
          "year": 2019,
          "pages": "190-194",
          "url": "https://www.nature.com/articles/s41586-019-1747-6"
        },
        {
          "authors": ["Danchev Valentin", "Andrey Rzhetsky", "James A. Evans"],
          "title": "Meta-Research: Centralized scientific communities are less likely to generate replicable results",
          "journal": "Elife",
          "volume": 8,
          "year": 2019,
          "article_id": "e43094",
          "url": "https://elifesciences.org/articles/43094"
        },
        {
          "authors": ["Wu Lingfei", "Dashun Wang", "James A. Evans"],
          "title": "Large teams develop and small teams disrupt science and technology",
          "journal": "Nature [Cover]",
          "volume": 566,
          "issue": 7744,
          "year": 2019,
          "pages": "378-382",
          "url": "https://www.nature.com/articles/s41586-019-0939-5"
        },
        {
          "authors": ["Azoulay Pierre", "Joshua Graff-Zivin", "Brian Uzzi", "Dashun Wang", "Heidi Williams", "James A. Evans", "Ginger Zhe Jin"],
          "title": "Toward a more scientific science",
          "journal": "Science",
          "volume": 361,
          "issue": 6408,
          "year": 2018,
          "pages": "1194-1197",
          "url": "https://www.science.org/doi/10.1126/science.aar8646"
        },
        {
          "authors": ["Gerow Aaron", "Yuening Hu", "Jordan Boyd-Graber", "David M. Blei", "James A. Evans"],
          "title": "Measuring discursive influence across scholarship",
          "journal": "Proceedings of the National Academy of Sciences",
          "volume": 115,
          "issue": 13,
          "year": 2018,
          "pages": "3308-3313",
          "url": "https://www.pnas.org/content/115/13/3308"
        },
        {
          "authors": ["Fortunato Santo", "Carl T. Bergstrom", "Katy Börner", "James A. Evans", "Dirk Helbing", "Staša Milojević", "Alexander M. Petersen"],
          "title": "Science of science",
          "journal": "Science",
          "volume": 359,
          "issue": 6379,
          "year": 2018,
          "url": "https://www.science.org/doi/10.1126/science.aao0185"
        },
        {
          "authors": ["Rzhetsky Andrey", "Jacob G. Foster", "Ian T. Foster", "James A. Evans"],
          "title": "Choosing experiments to accelerate collective discovery",
          "journal": "Proceedings of the National Academy of Sciences",
          "volume": 112,
          "issue": 47,
          "year": 2015,
          "pages": "14569-14574",
          "url": "https://www.pnas.org/content/112/47/14569"
        },
        {
          "authors": ["Foster Jacob G.", "Andrey Rzhetsky", "James A. Evans"],
          "title": "Tradition and innovation in scientists’ research strategies",
          "journal": "American Sociological Review",
          "volume": 80,
          "issue": 5,
          "year": 2015,
          "pages": "875-908",
          "url": "https://journals.sagepub.com/doi/abs/10.1177/0003122415601618"
        },
        {
          "authors": ["Evans James A."],
          "title": "Future science",
          "journal": "Science",
          "volume": 342,
          "issue": 6154,
          "year": 2013,
          "pages": "44-45",
          "url": "https://www.science.org/doi/10.1126/science.342.6154.44"
        },
        {
          "authors": ["Evans James A.", "Jacob G. Foster"],
          "title": "Metaknowledge",
          "journal": "Science",
          "volume": 331,
          "issue": 6018,
          "year": 2011,
          "pages": "721-725",
          "url": "https://www.science.org/doi/10.1126/science.1201765"
        },
        {
          "authors": ["Evans James A."],
          "title": "Industry collaboration scientific sharing and the dissemination of knowledge",
          "journal": "Social Studies of Science",
          "volume": 40,
          "issue": 5,
          "year": 2010,
          "pages": "757-791",
          "url": "https://journals.sagepub.com/doi/abs/10.1177/0306312710374130"
        },
        {
          "authors": ["Evans James A."],
          "title": "Industry induces academic science to know less about more",
          "journal": "American Journal of Sociology",
          "volume": 116,
          "issue": 2,
          "year": 2010,
          "pages": "389-452",
          "url": "https://www.journals.uchicago.edu/doi/10.1086/653604"
        },
        {
          "authors": ["Evans James", "Andrey Rzhetsky"],
          "title": "Machine science",
          "journal": "Science",
          "volume": 329,
          "issue": 5990,
          "year": 2010,
          "pages": "399-400",
          "url": "https://www.science.org/doi/10.1126/science.1181941"
        },
        {
          "authors": ["Evans James A.", "Jacob Reimer"],
          "title": "Open access and global participation in science",
          "journal": "Science",
          "volume": 323,
          "issue": 5917,
          "year": 2009,
          "pages": "1025-1025",
          "url": "https://www.science.org/doi/10.1126/science.1168962"
        },
        {
          "authors": ["Evans James A."],
          "title": "Electronic publication and the narrowing of science and scholarship",
          "journal": "Science",
          "volume": 321,
          "issue": 5887,
          "year": 2008,
          "pages": "395-399",
          "url": "https://www.science.org/doi/10.1126/science.1150473"
        },
        {
          "authors": ["Kang Donghyun", "James Evans"],
          "title": "Epistemic Bubbles and Tacit Confidence in Randomized Clinical Trials"
        }
      ]
    },
    {
      "name": "Existential Epistemology",
      "image": Existential,
      "tagline": "In order to anticipate and ensure humanity’s flourishing and long future what new forms of knowledge will we need to explore?",
      "shorter_tagline": "Asking questions of an uncertain future",
      "description": "With civilization facing unprecedented global threats ranging from nuclear devastation climate change and superintelligent AI to engineered pandemics hyper-stratification and critical resource depletion we may be at a pivotal point in human history. As the Bulletin of Atomic Scientists’ Doomsday Clock at the University of Chicago seeks to remind us humanity’s potential for self-inflicted catastrophe has dramatically increased over the last century. Unlike other scientific frontiers however in which replication and causal inference may be essential for robust understanding we have only a single planet and a single future for human society. In this singular global experiment we must build models of the future and act on them without deeper epistemic assurances for human health and safety. This initiative seeks to explore and advance new standards for the partial and even speculative knowledge required to engage with issues on a planetary scale and to use this knowledge to direct the global collective action and innovation that our survival may demand.",
      "grants": ["Open Philanthropies"],
      "partners": ["XLab"],
      "press": "New Yorker Cover story (put the cover up and link directly to the PDF)"
    }
  ]



function CenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        {props.title && <span dangerouslySetInnerHTML={{ __html: props.title}} />}
          {/* {props.title} */}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{props.shorter}</h4>
        <p>{props.description}</p>
        <p>{props.grants}</p>
        <p>{props.partners}</p>
        <p>{props.talks}</p>
        <div className="paper">{props.papers}</div>
      </Modal.Body>
      <Modal.Footer>
        <Button className="init-btn" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const Initiatives = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [openModalIndex, setOpenModalIndex] = useState(null);
  return (
    <Layout>
      <Nav />
      <Container fluid id="initiatives-header">
        <div className="background"></div>
        <Container>
          <Row>
            <Col xs={12} sm={8}>
              <h1>Initiatives at Knowledge Lab</h1>
              <p>Knowledge Lab harnesses the power of artificial intelligence to unravel complex scientific and societal problems, bridging the gap between data-driven insights and real-world applications. This innovative group collaborates with interdisciplinary experts to develop AI tools and methodologies that advance our understanding of knowledge creation and dissemination.
              </p>
            </Col>
            <Col xs={12} sm={4} className="d-sm-block">
              <img src={AIGroup} />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid id="initiatives">
        <Container>
          <Row>
            {initiatives.map((initiative, index) => (
              <Col
                xs={12}
                sm={6}
                md={3}
                key={index}
                style={{ marginBottom: "30px" }}
              >
                 <a
                  variant="primary"
                  onClick={() => setOpenModalIndex(`L` + index)}
                > <img src={initiative.image} /></a>
                {/* Initiative Name */}
                <a
                  variant="primary"
                  onClick={() => setOpenModalIndex(`L` + index)}
                > 
                {initiative.name && <h2 dangerouslySetInnerHTML={{ __html: initiative.name}} />}</a>

                {/* Tagline */}
                {initiative.tagline && (
                  <p><a
                  variant="primary"
                  onClick={() => setOpenModalIndex(`L` + index)}
                > 
                
                    {initiative.tagline}</a>
                  </p>
                )}

                {/* <a
                  variant="primary"
                  onClick={() => setOpenModalIndex(`L` + index)}
                >
                  Read More <FontAwesomeIcon icon={faCaretRight} />
                </a> */}

                <CenteredModal
                  title={initiative.name}
                  show={openModalIndex === `L` + index}
                  onHide={() => setOpenModalIndex(null)}
                  shorter={
                    initiative.shorter_tagline && (
                      <p>
                        <strong>{initiative.shorter_tagline}</strong>
                      </p>
                    )
                  }
                  description={
                    initiative.description && (
                      <p>
                        
                        {initiative.description}
                      </p>
                    )
                  }
                  partners={
                    initiative.partners && (
                      <p>
                        <strong>Partners: </strong>
                        {initiative.partners.join(", ")}
                      </p>
                    )
                  }
                  grants={
                    initiative.grants && (
                      <p>
                        <strong>Founders: </strong>
                        {initiative.grants.join(", ")}
                      </p>
                    )
                  }
                  papers={
                    initiative.papers && (
                      <>
                       <p> <strong>Papers: </strong></p>
                        <ul>
                          {initiative.papers.map((paper, idx) => (
                            <li key={idx}>
                              {/* If paper is an object and has a URL, render as a hyperlink */}
                              {typeof paper === "object" && paper.url ? (
                                
                                  <span>
                                    {paper.title}
                                    </span>
                                  
                              ) : // Otherwise, render as plain text
                              typeof paper === "object" ? (
                                <span>
                                    {paper.title}
                                    </span>
                              ) : (
                                paper
                              )}
                              <br />
                              <a
                                    href={paper.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >{paper.journal}</a>
                              <br /> {paper.year}{" "}
                              {paper.volume && `Vol: ${paper.volume}`}{" "}
                              {paper.issue && `Issue: ${paper.issue}`}{" "}
                              {paper.pages && `Paper: ${paper.pages}`}{" "}
                            </li>
                          ))}
                        </ul>
                      </>
                    )
                  }
                  talks={
                    initiative.talks && (
                      <div>
                        <strong>Talks:</strong>
                        <ul>
                          {initiative.talks.map((talk, idx) => (
                            <li key={idx}>
                              <a
                                href={talk.url}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {talk.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )
                  }
                  press={
                    initiative.press && (
                      <p>
                        <strong>Press: </strong>
                        {initiative.press}
                      </p>
                    )
                  }
                />
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </Layout>
  );
};

export const Head = () => <Seo title="Initiatives at Knowledge Lab" />;

export default Initiatives;
