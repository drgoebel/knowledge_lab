import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Nav from "../components/nav";
import { Container, Row, Col } from "react-bootstrap";
import "../components/gridder.css";
import Trianges from "../images/triangles.svg";
import James from "../images/james-evans.png";
import Jacy from "../images/jacy-reese.jpg";
import Jake from "../images/jake-buchard.png";
import Likun from "../images/likun-cao.png";
import Person from "../images/person.jpg"

const sampleTeams = [
  {
    name: "James A. Evans",
    title:
      "Director, Knowledge Lab; Professor, Sociology, University of Chicago; Faculty Director, Masters Program in Computational Social Sciences; External Professor, Santa Fe Institute",
    url: "page-2",
    bioLink: "this",
    bioImg: James,
    size: "full",
  },
  {
    name: "Jacy Reese Anthis",
    title: "Graduate Student, University of Chicago",
    url: "page-2",
    bioLink: "this",
    bioImg: Jacy,
    size: "half",
  },
  {
    name: "Jake Burchard",
    title: "Graduate RA, University of Chicago",
    url: "page-2",
    bioLink: "this",
    bioImg: Jake,
    bio: "Jake Burchard is a PhD student in the department of sociology at the University of Chicago interested in political economy, financialization, class analysis, networks, and general social theory. He also holds a BA in mathematics from Cornell University. His work has been published in Social Networks and The Journal of Mathematical Sociology.",
    size: "half",
  },
  {
    name: "Likun Cao",
    title: "Graduate Student, University of Chicago",
    url: "page-2",
    bioLink: "this",
    bioImg: Likun,
    bio: "I am currently a first-year Ph.D. student in the sociology department at the University of Chicago. My research interests are sociology of knowledge and organizational study, and I use computational tools to explore those fields. Specifically, I am interested in the interaction between the economic structures and the human knowledge system. How are technological and cultural knowledge produced in modern capitalism? And how does this knowledge reshape the institutional background where it comes from? In my research, I try to trace the social processes and mechanisms of this interaction. Before coming to Chicago, I received a B.A. and an M.A. in sociology from Tsinghua University, China. My previous work concerns the social network of venture capital firms in China and the dynamics of its evolution. Currently, at knowledge lab, I apply word embedding techniques on data about business strategies of start-ups in the U.S., trying to figure out how the business landscape is formed and transformed by technological innovation, and how this social process on the macro level shapes social lives and division of labor of millions of employers and employees.",
    size: "half",
  },
  {
    bioImg: Person,
    name: "Ziwen Chen",
    title: "Ph.D. student of Organizational Behavior at the Standford University Graduate School of Business",
    bio: "Ziwen is currently a Ph.D. student of Organizational Behavior at the Standford University Graduate School of Business and previously received her MA in the Computational Social Science program at UChicago. She has a broad interest in data science for social good. Specifically, she is interested in identifying dynamics of human knowledge and behaviors using advanced computing techniques (social network, NLP and Machine learning), especially under urban or geographical contexts. At Knowledge Lab, she is working on the Social MIND project which utilizes AI models to explain, predict and influence a simulated urban world. Before coming to UChicago, she received her B.S. in Geographical Information Science at Wuhan University, China. Her previous works include using social network analysis to predict food crisis response, and exploring regional variation of human values and Machiavellianism culture based on online crowd-sourcing data.",
    size: "half"
  },
  {
    bioImg: Person,
    name: "Haochuan Cui",
    title: "Graduate Student, Bejing Normal University",
    bio: "Haochuan is a Ph.D. student in the School of Systems Science at Beijing Normal University. He has been visiting the Knowledge Lab since September 2019. His research topics are Science of Science and evolution of complex systems. Using complex network analysis, he hopes to quantify the evolution process of the science system and to find out how to keep sustainable development for emerging disciplines. He is also interested in the representation of learning on the multi-layer network and predicting the performance of collaboration with deep learning tools. He also works as the TA for the AI & Society workshop at Nanjing University and the TA of Graph Neural Network Paper Club at SwarmAI. He now leads an online nestedness network research group to understand organizational structure and the fate of the organization.",
    size: "half"
  },
  {
    bioImg: Person,
    name: "Chris Esposito",
    title: "Knowledge Lab and Mansueto Institute Postdoctoral Fellow, University of Chicago",
    bio: "Chris researches technological disruption and its impacts on inventors, teams, and cities. His current research uses large historical datasets to study how the rate of technological disruption changed across U.S. history, to identify strategies for inventors and organizations to avert knowledge obsolescence, and to analyze the ability for inventors to create novel technologies when they collaborate remotely. In prior research, Chris showed how disruptive innovation leads to the emergence of new geographical centers of innovation and increases the spatial inequality of innovative activity.",
    size: "half"
  },
  {
    bioImg: Person,
    name: "Stefan de Jong",
    title: "Marie Curie Fellow, University of Chicago",
    bio: "Stefan de Jong is a Marie Curie Fellow at the Knowledge Lab and an assistant professor at the Department of Organization Studies of Tilburg University in the Netherlands. He is interested in how science and broader society influence each other. The European Commission sponsors his current project ‘Invisible Forces’, which aims to understand the contribution of professional staff of universities to academic knowledge development. To this end Stefan combines network analysis with ethnographic research. More information about this project and other ongoing work is available on his personal website. He has written about the societal impact and evaluation of academic research and about attitudes toward science. Stefan has published in scientific journals such as Research Policy, Research Evaluation and Public Understanding of Science. He regularly hosts national and international workshops on societal impact strategies for academics and professional staff. Stefan has previously worked as a post-doctoral researcher at the Manchester Institute of Innovation Research of The University of Manchester in the UK. The Dutch Research Council funded his project ‘Professional Practices’. The project unraveled the influence of university strategies on societal impact practices of academics. Prior to that, he was a researcher at the Rathenau Institute of the Royal Netherlands Academy of Arts and Sciences. He completed his doctoral research at the Centre for Science and Technology Studies of Leiden University in the Netherlands in 2015. Stefan has a master’s degree in innovation studies (Utrecht University) and a bachelor’s degree in biology (Wageningen University).",
    size: "half"
  },
  {
    bioImg: Person,
    name: "Eamon Duede",
    title: "Department of Philosophy, Committee on the Conceptual and Historical Studies of Science, Knowledge Lab, University of Chicago",
    bio: "Eamon’s work is broadly at the intersection of the philosophy of science and the computational science of science. In the philosophy of science, he focuses on formal aspects of artificial intelligence and machine learning in scientific knowledge. In the computational science of science, his focus is on the contribution of epistemic commitments to the dynamics of knowledge production.",
    size: "half"
  },
  {
    bioImg: Person,
    name: "Donghyun Kang",
    title: "Graduate Student, University of Chicago",
    bio: "Donghyun Kang is a Ph.D. candidate at the University of Chicago Sociology Department, affiliated with Knowledge Lab. His academic interest centers on understanding social conditions and processes that lead to robust scientific progress and dissemination of ideas. Donghyun aspires to extend insights from science studies and the history of sciences with natural language processing and network embedding models. Before Chicago, he received a B.A. in Business Administration and M.A. in Sociology at Seoul National University.",
    size: "half"
  },
  {
    bioImg: Person,
    name: "Junsol Kim",
    title: "Graduate Student, University of Chicago",
    bio: "I am a third-year Ph.D. student in Sociology at the University of Chicago. My research intersects computational social science, large language models (LLMs), social media, and causal inference. My recent work focuses on fine-tuning LLMs using social survey data, aiming to predict unmeasured public opinions. Additionally, I have applied quasi-experimental, causal inference methods to large-scale social media data to study how misinformation moderation could unintentionally reinforce echo chambers. My works have been published in Proceedings of the National Academy of Sciences (PNAS) and other venues. You can find my CV here.",
    size: "half"
  },
  {
    bioImg: Person,
    name: "Austin Kozlowski",
    title: "Graduate RA, University of Chicago",
    bio: "I am a doctoral candidate in the Chicago sociology department. My research focuses on the questions of how belief systems are structured and why certain ideas “go together.” By applying state-of-the-art computational methods, I attempt to shed new light on these age-old questions from the sociology of knowledge and culture. At Knowledge Lab, I have developed ways to use word embedding models to discover cultural categories and associations in text. This work has culminated in a recent article, co-authored with James Evans and Matt Taddy, published in the American Sociological Review. I am now engaged in a project with James Evans and Hyunku Kwon that explores how AI can be harnessed for social scientific analysis. Before coming to the University of Chicago, I earned my BA in Sociology at the University of Michigan and worked as a research associate with the Chitwan Valley Family Study at the UM Institute for Social Research. During my time at Michigan, I conducted research on the effects of agricultural technology adoption among subsistence farm households in Nepal.",
    size: "half"
  },
  {
    bioImg: Person,
    name: "Hyunku Kwon",
    title: "Graduate RA, University of Chicago",
    bio: "Hyunku Kwon is a PhD student in sociology at the University of Chicago. His work applies computational, archival, and statistical methods to study American political history, the state and the market, social networks, and political polarization. He is particularly interested in the relationship between social structures and political beliefs (especially those pertaining to nativism, populism, and racism). He is a member of three research groups at the University of Chicago: Culture and Action Network, Knowledge Lab, and Committee on Quantitative Methods in Social, Behavioral, and Health Science. Prior to coming to the University of Chicago, he received a B.A. in Public Administration and Political Science at Yonsei University.",
    size: "half"
  },
  {
    bioImg: Person,
    name: "Jeff Lockhart",
    title: "James S. McDonnell Postdoctoral Fellow, University of Chicago",
    bio: "Jeff Lockhart is a James S. McDonnell Postdoctoral Fellow in Sociology and the Knowledge Lab at the University of Chicago. He received his PhD in sociology from the University of Michigan, as well as masters degrees in gender studies and computer science from the University of Cambridge and Fordham University. He works on a variety of projects related to the co-construction of knowledge and identities using both computational and qualitative methods. His latest project examines how the scientific production of sex and race, once tightly entwined, came to be separate fields with stark differences in institutional support.",
    size: "half"
  },
  {
    bioImg: Person,
    name: "Adarsh Mathew",
    title: "Masters student, University of Chicago",
    bio: "I’m a computational social scientist working to straddle the worlds of sociology, network science, and machine learning. I’m interested in exploring the relationship between networked identities and the propagation of knowledge: how individuals and communities work to form and evaluate epistemological practices; the role their networks and identities play in this process; the effect of hierarchies and narrative structures in this dialectical process. At the Knowledge Lab, I work on projects that examine ideology and conflict in online communities, using networks and language processing methods to describe user and community behaviour, especially in contentious and radical political communities. My research interests also span the philosophy of science and computing, formal network epistemology, and the interplay between algorithmic decision-making and the structural imperatives that make data collection possible. I’m currently pursuing an MA in Computational Social Science at the University of Chicago. Before my time at the University of Chicago, I worked for a tech firm based in the Bay Area, and as an international development consultant. I have a Masters’ and Bachelors’ degree in Industrial & Systems Engineering from IIT Kharagpur, which served as my introduction to statistical learning, and optimization & heuristic methods. I call Hyderabad home, and have a soft corner for speculative science fiction (Ted Chiang & Ken Liu) and high fantasy, along with general soccer nerdiness.",
    size: "half"
  },
  {
    bioImg: Person,
    name: "Jeremiah Milbauer",
    title: "Graduate Student, Carnegie Mellon University",
    bio: "I am an artificial intelligence researcher, software engineer, and occasional writer. I am interested in exploring the relationships between language, knowledge, and society. At Knowledge Lab, I work on projects that use machine learning and natural language processing techniques to discover concept structures and worldviews across a variety of data sources. Before joining Knowledge Lab, I spent time as a research assistant with John Lafferty, Ben Zhao, and John Goldsmith working on a variety of natural language processing projects. On the engineering side, I did an internship at Alphabet’s autonomous vehicle division Waymo (at Google X), and was the machine learning lead at Simmer (a YCombinator-backed startup). My writing has been featured by the Berkman-Klein Center for Internet & Society, and The Economist. I grew up in New York City (where, as a matter of survival, I quickly learned my way around both gallery openings and giant rats). I graduated from the University of Chicago in 2019 with degrees in Computer Science and Philosophy.",
    size: "half"
  },
  {
    bioImg: Person,
    name: "Peter Muhlberger",
    title: "Research Scientist, University of Chicago",
    bio: "Peter Muhlberger is a Research Scientist at University of Chicago’s Knowledge Lab, where his interests include public understanding of science, misinformation, and the application of neural natural language understanding. Previously, he was a National Science Foundation (NSF) Program Director for data-intensive research and political science. He also served as a senior analyst for NSF’s National Center for Science and Engineering Statistics. Dr. Muhlberger designed and directed research on Carnegie Mellon University’s Virtual Agora Project, a NSF-funded project investigating the political, social, and psychological effects of computer-mediated political engagement. He was also principal investigator on the Deliberative E-Rulemaking Project, a NSF-funded project applying multi-level deliberation to federal agency online rulemaking. Dr. Muhlberger received his Ph.D. in political science from the University of Michigan. He has published in such journals as Political Psychology, Political Communication, the Journal of Information Technology and Politics, and Information Polity.",
    size: "half"
  },
  {
    bioImg: Person,
    name: "Jamshid Sourati",
    title: "Postdoctoral Scholar, University of Chicago",
    bio: "My research interest revolves around machine learning and its applications in discovering underlying patterns in real-world data. At the Knowledge lab, my goal is to apply computational tools for processing enormous textual data sets and to develop novel learning models that give better insights into how humans think and interact collectively. I received my doctorate in Electrical and Computer Engineering at Northeastern University. During the course of my Ph.D., my focus was primarily on generic analysis of learning models in theoretical levels. Prior to joining Knowledge lab, as a post-doctoral researcher in Harvard medical school, I conducted research in development and rigorous analysis of machine learning algorithms for automatic medical image processing.",
    size: "half"
  },
  {
    bioImg: Person,
    name: "Simon Schachter",
    title: "Graduate student, University of Chicago",
    bio: "Simon Yamawaki Shachter is a Ph.D. student at the University of Chicago Sociology Department. He is interested in philanthropy and the nonprofit sector, especially how public and private systems of funding alter field-level outcomes. He utilizes historical, statistical, and computational tools to understand how public and private efforts to serve the public good influence each other. He is particularly drawn to research that exposes when these, often well-intentioned, efforts work to perpetuate certain forms of inequality while seeking to alleviate others. Prior to coming to the University of Chicago, Simon received a B.S. in Computer Science at Stanford University. In the Bay Area he worked for several private philanthropic foundations and founded YCore, a San Francisco-based non-profit that brings young professionals together to support equity-building work in their local communities.",
    size: "half"
  },
  {
    bioImg: Person,
    name: "Nak Won Rim",
    title: "Masters student, University of Chicago",
    bio: "Nak Won is a MA student in the Computational Social Science program at the University of Chicago. He is broadly interested in how the human mind incorporates new knowledge into their thought systems and how humans make inferences and decisions based on their priors. At the Knowledge Lab, he is focusing on using high-throughput virtual lab experiments to research how people work together as groups. Before coming to the University of Chicago, Nak Won received a B.A. degree in Psychology and a B.S. degree in Brain Cognitive Science at Korea University, Republic of Korea. His undergraduate works focused on the cognitive control of humans using classical distractor tasks such as the Simon task.",
    size: "half"
  },
  {
    bioImg: Person,
    name: "Fengli Xu",
    title: "Postdoctoral Scholar, University of Chicago",
    bio: "My research interests include data science, machine learning and computational social science. My current research focuses on modeling and understanding the dynamics of scientific development. My long-term research goal is to harness the power of increasingly available behavioral big data to facilitate advanced human-centric computing. My personal website is : fenglixu.com",
    size: "half"
  },
  {
    bioImg: Person,
    name: "Haizi Yu",
    title: "Postdoctoral Scholar, University of Chicago",
    bio: "Haizi has a Ph.D. in Computer Science. His research interests include interpretable AI and machine learning, automatic knowledge discovery, and music intelligence. He received his doctoral degree from the University of Illinois at Urbana-Champaign. He received his M.S. degree in Computer Science from Stanford University, and his B.S. degree from the Department of Automation at Tsinghua University.",
    size: "half"
  }
];

const Team = () => (
  <Layout>
    <Nav />

    <Container fluid id="team-header">
      <div className="background"></div>
      <Container>
        <Row>
          <Col xs={12} sm={9}>
            <h1>Knowledge Lab Team</h1>
            <p>
              As Knowledge Lab and the Metaknowledge Research Network crank out
              results, those results will populate this space. Our goal is to
              present citations (and links) to published research, as well as
              preprints, articles and prospectives, responses, as well as
              presentations of our work and results formatted for a general
              audience.
            </p>
          </Col>
          <Col sm={3} className="d-none d-sm-block">
            <img src={Trianges} alt="connected triagle shapes" />
          </Col>
        </Row>
      </Container>
    </Container>
    <Container fluid id="team">
      <Container>
        <Row>
          {sampleTeams.map((team) => {
            return (
              <>
                {team.size === "full" ? (
                  <Row>
                    <Col xs={12} md={3}>
                      <img src={team.bioImg} alt={team.name} />
                    </Col>
                    <Col xs={12} md={9}>
                      <h2>{team.name}</h2>
                      <p>{team.title}</p>
                      <Link to={team.url}>
                        <button>Read Bio</button>
                      </Link>
                    </Col>
                  </Row>
                ) : (
                  <>
                    <Col xs={12} md={2}>
                      <img src={team.bioImg} alt={team.name} />
                    </Col>
                    <Col xs={12} md={4}>
                      <h2>{team.name}</h2>
                      <p>{team.title}</p>
                      <Link to={team.url}>
                        Read bio
                      </Link>
                    </Col>
                  </>
                )}
              </>
            );
          })}
        </Row>
      </Container>
    </Container>
  </Layout>
);

export const Head = () => <Seo title="Page two" />;

export default Team;
