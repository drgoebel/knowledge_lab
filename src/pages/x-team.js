import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Nav from "../components/nav";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import "../components/gridder.css";
import Trianges from "../images/triangles.svg";
import James from "../images/james-evans.png";
import Jacy from "../images/jacy-reese.jpg";
import Jake from "../images/jake-buchard.png";
import Likun from "../images/likun-cao.png";
import Person from "../images/person.jpg";

const klabLeadership = [
  {
    name: "James A. Evans",
    title:
      "Director, Knowledge Lab; Professor, Sociology, University of Chicago; Faculty Director, Masters Program in Computational Social Sciences; External Professor, Santa Fe Institute",
    bio:
      "James Evans is Director of Knowledge Lab, Professor of Sociology, Faculty Director of the Computational Social Science program, and member of the Committee on Conceptual and Historical Studies of Science at the University of Chicago. I am also an External Professor at the Santa Fe Institute. His research focuses on the collective system of thinking and knowing, ranging from the distribution of attention and intuition, the origin of ideas and shared habits of reasoning to processes of agreement (and dispute), accumulation of certainty (and doubt), and the texture–novelty, ambiguity, topology–of human understanding. He is especially interested in innovation–how new ideas and technologies emerge–and the role that social and technical institutions (e.g., the Internet, markets, collaborations) play in collective cognition and discovery. Much of his work has focused on areas of modern science and technology, but he is also interested in other domains of knowledge–news, law, religion, gossip, hunches and historical modes of thinking and knowing. He supports the creation of novel observatories for human understanding and action through crowd sourcing, information extraction from text and images, and the use of distributed sensors (e.g., RFID tags, cell phones). He uses machine learning, generative modeling, social and semantic network representations to explore knowledge processes, scale up interpretive and field-methods, and create alternatives to current discovery regimes. His research is funded by the National Science Foundation, the National Institutes of Health, DARPA, Facebook, IBM, the Sloan Foundation, Jump! Trading and other sources, and has been published in Science, PNAS, Nature Human Behavior, Nature Biotech, American Journal of Sociology, American Sociological Review, Social Studies of Science, Administrative Science Quarterly, PLoS Computational Biology and other journals. His work has been featured in Nature, the Economist, Atlantic Monthly, Wired, NPR, BBC, El País, CNN and many other outlets.",
    url: "page-2",
    bioLink: "this",
    bioImg: James,
    size: "full",
  },
  {
    bioImg: Person,
    name: "Austin Kozlowski",
    title: "Graduate RA, University of Chicago",
    bio:
      "I am a doctoral candidate in the Chicago sociology department. My research focuses on the questions of how belief systems are structured and why certain ideas “go together.” By applying state-of-the-art computational methods, I attempt to shed new light on these age-old questions from the sociology of knowledge and culture. At Knowledge Lab, I have developed ways to use word embedding models to discover cultural categories and associations in text. This work has culminated in a recent article, co-authored with James Evans and Matt Taddy, published in the American Sociological Review. I am now engaged in a project with James Evans and Hyunku Kwon that explores how AI can be harnessed for social scientific analysis. Before coming to the University of Chicago, I earned my BA in Sociology at the University of Michigan and worked as a research associate with the Chitwan Valley Family Study at the UM Institute for Social Research. During my time at Michigan, I conducted research on the effects of agricultural technology adoption among subsistence farm households in Nepal.",
    size: "half",
  },
  {
    name: "Alexis Puzon",
    title: "D",
    bio:
      "James Evans is Director of Knowledge Lab, Professor of Sociology, Faculty Director of the Computational Social Science program, and member of the Committee on Conceptual and Historical Studies of Science at the University of Chicago. I am also an External Professor at the Santa Fe Institute. His research focuses on the collective system of thinking and knowing, ranging from the distribution of attention and intuition, the origin of ideas and shared habits of reasoning to processes of agreement (and dispute), accumulation of certainty (and doubt), and the texture–novelty, ambiguity, topology–of human understanding. He is especially interested in innovation–how new ideas and technologies emerge–and the role that social and technical institutions (e.g., the Internet, markets, collaborations) play in collective cognition and discovery. Much of his work has focused on areas of modern science and technology, but he is also interested in other domains of knowledge–news, law, religion, gossip, hunches and historical modes of thinking and knowing. He supports the creation of novel observatories for human understanding and action through crowd sourcing, information extraction from text and images, and the use of distributed sensors (e.g., RFID tags, cell phones). He uses machine learning, generative modeling, social and semantic network representations to explore knowledge processes, scale up interpretive and field-methods, and create alternatives to current discovery regimes. His research is funded by the National Science Foundation, the National Institutes of Health, DARPA, Facebook, IBM, the Sloan Foundation, Jump! Trading and other sources, and has been published in Science, PNAS, Nature Human Behavior, Nature Biotech, American Journal of Sociology, American Sociological Review, Social Studies of Science, Administrative Science Quarterly, PLoS Computational Biology and other journals. His work has been featured in Nature, the Economist, Atlantic Monthly, Wired, NPR, BBC, El País, CNN and many other outlets.",
    url: "page-2",
    bioLink: "this",
    bioImg: Person,
    size: "full",
  },
];

const klabResearchPost = [
  {
    name: "Jacy Reese Anthis",
    title: "Graduate Student, University of Chicago",
    url: "page-2",
    bio:
      "Jacy Reese Anthis is a joint PhD student with the Sociology department and the Econometrics & Statistics group at the Booth School of Business. He is the co-founder of the Sentience Institute, a nonprofit interdisciplinary think tank focused on social and technological change. His 2018 book, The End of Animal Farming, analyzes the emergence of food technologies such as cell-cultured meat. Anthis’ current projects focus on the technical and social dimensions of artificial intelligence. His research has been featured in The Guardian, Vox, Forbes, and other global media outlets, and he has presented at conferences and seminars in over 20 countries.",
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
    bio:
      "Jake Burchard is a PhD student in the department of sociology at the University of Chicago interested in political economy, financialization, class analysis, networks, and general social theory. He also holds a BA in mathematics from Cornell University. His work has been published in Social Networks and The Journal of Mathematical Sociology.",
    size: "half",
  },
  {
    name: "Likun Cao",
    title: "Graduate Student, University of Chicago",
    url: "page-2",
    bioLink: "this",
    bioImg: Likun,
    bio:
      "I am currently a first-year Ph.D. student in the sociology department at the University of Chicago. My research interests are sociology of knowledge and organizational study, and I use computational tools to explore those fields. Specifically, I am interested in the interaction between the economic structures and the human knowledge system. How are technological and cultural knowledge produced in modern capitalism? And how does this knowledge reshape the institutional background where it comes from? In my research, I try to trace the social processes and mechanisms of this interaction. Before coming to Chicago, I received a B.A. and an M.A. in sociology from Tsinghua University, China. My previous work concerns the social network of venture capital firms in China and the dynamics of its evolution. Currently, at knowledge lab, I apply word embedding techniques on data about business strategies of start-ups in the U.S., trying to figure out how the business landscape is formed and transformed by technological innovation, and how this social process on the macro level shapes social lives and division of labor of millions of employers and employees.",
    size: "half",
  },
  {
    bioImg: Person,
    name: "Ziwen Chen",
    title:
      "Ph.D. student of Organizational Behavior at the Standford University Graduate School of Business",
    bio:
      "Ziwen is currently a Ph.D. student of Organizational Behavior at the Standford University Graduate School of Business and previously received her MA in the Computational Social Science program at UChicago. She has a broad interest in data science for social good. Specifically, she is interested in identifying dynamics of human knowledge and behaviors using advanced computing techniques (social network, NLP and Machine learning), especially under urban or geographical contexts. At Knowledge Lab, she is working on the Social MIND project which utilizes AI models to explain, predict and influence a simulated urban world. Before coming to UChicago, she received her B.S. in Geographical Information Science at Wuhan University, China. Her previous works include using social network analysis to predict food crisis response, and exploring regional variation of human values and Machiavellianism culture based on online crowd-sourcing data.",
    size: "half",
  },
  {
    bioImg: Person,
    name: "Haochuan Cui",
    title: "Graduate Student, Bejing Normal University",
    bio:
      "Haochuan is a Ph.D. student in the School of Systems Science at Beijing Normal University. He has been visiting the Knowledge Lab since September 2019. His research topics are Science of Science and evolution of complex systems. Using complex network analysis, he hopes to quantify the evolution process of the science system and to find out how to keep sustainable development for emerging disciplines. He is also interested in the representation of learning on the multi-layer network and predicting the performance of collaboration with deep learning tools. He also works as the TA for the AI & Society workshop at Nanjing University and the TA of Graph Neural Network Paper Club at SwarmAI. He now leads an online nestedness network research group to understand organizational structure and the fate of the organization.",
    size: "half",
  },
  {
    bioImg: Person,
    name: "Chris Esposito",
    title:
      "Knowledge Lab and Mansueto Institute Postdoctoral Fellow, University of Chicago",
    bio:
      "Chris researches technological disruption and its impacts on inventors, teams, and cities. His current research uses large historical datasets to study how the rate of technological disruption changed across U.S. history, to identify strategies for inventors and organizations to avert knowledge obsolescence, and to analyze the ability for inventors to create novel technologies when they collaborate remotely. In prior research, Chris showed how disruptive innovation leads to the emergence of new geographical centers of innovation and increases the spatial inequality of innovative activity.",
    size: "half",
  },
  {
    bioImg: Person,
    name: "Stefan de Jong",
    title: "Marie Curie Fellow, University of Chicago",
    bio:
      "Stefan de Jong is a Marie Curie Fellow at the Knowledge Lab and an assistant professor at the Department of Organization Studies of Tilburg University in the Netherlands. He is interested in how science and broader society influence each other. The European Commission sponsors his current project ‘Invisible Forces', which aims to understand the contribution of professional staff of universities to academic knowledge development. To this end Stefan combines network analysis with ethnographic research. More information about this project and other ongoing work is available on his personal website. He has written about the societal impact and evaluation of academic research and about attitudes toward science. Stefan has published in scientific journals such as Research Policy, Research Evaluation and Public Understanding of Science. He regularly hosts national and international workshops on societal impact strategies for academics and professional staff. Stefan has previously worked as a post-doctoral researcher at the Manchester Institute of Innovation Research of The University of Manchester in the UK. The Dutch Research Council funded his project ‘Professional Practices'. The project unraveled the influence of university strategies on societal impact practices of academics. Prior to that, he was a researcher at the Rathenau Institute of the Royal Netherlands Academy of Arts and Sciences. He completed his doctoral research at the Centre for Science and Technology Studies of Leiden University in the Netherlands in 2015. Stefan has a master's degree in innovation studies (Utrecht University) and a bachelor's degree in biology (Wageningen University).",
    size: "half",
  },
  {
    bioImg: Person,
    name: "Eamon Duede",
    title:
      "Department of Philosophy, Committee on the Conceptual and Historical Studies of Science, Knowledge Lab, University of Chicago",
    bio:
      "Eamon's work is broadly at the intersection of the philosophy of science and the computational science of science. In the philosophy of science, he focuses on formal aspects of artificial intelligence and machine learning in scientific knowledge. In the computational science of science, his focus is on the contribution of epistemic commitments to the dynamics of knowledge production.",
    size: "half",
  },
  {
    bioImg: Person,
    name: "Donghyun Kang",
    title: "Graduate Student, University of Chicago",
    bio:
      "Donghyun Kang is a Ph.D. candidate at the University of Chicago Sociology Department, affiliated with Knowledge Lab. His academic interest centers on understanding social conditions and processes that lead to robust scientific progress and dissemination of ideas. Donghyun aspires to extend insights from science studies and the history of sciences with natural language processing and network embedding models. Before Chicago, he received a B.A. in Business Administration and M.A. in Sociology at Seoul National University.",
    size: "half",
  },
  {
    bioImg: Person,
    name: "Junsol Kim",
    title: "Graduate Student, University of Chicago",
    bio:
      "I am a third-year Ph.D. student in Sociology at the University of Chicago. My research intersects computational social science, large language models (LLMs), social media, and causal inference. My recent work focuses on fine-tuning LLMs using social survey data, aiming to predict unmeasured public opinions. Additionally, I have applied quasi-experimental, causal inference methods to large-scale social media data to study how misinformation moderation could unintentionally reinforce echo chambers. My works have been published in Proceedings of the National Academy of Sciences (PNAS) and other venues. You can find my CV here.",
    size: "half",
  },
  {
    bioImg: Person,
    name: "Hyunku Kwon",
    title: "Graduate RA, University of Chicago",
    bio:
      "Hyunku Kwon is a PhD student in sociology at the University of Chicago. His work applies computational, archival, and statistical methods to study American political history, the state and the market, social networks, and political polarization. He is particularly interested in the relationship between social structures and political beliefs (especially those pertaining to nativism, populism, and racism). He is a member of three research groups at the University of Chicago: Culture and Action Network, Knowledge Lab, and Committee on Quantitative Methods in Social, Behavioral, and Health Science. Prior to coming to the University of Chicago, he received a B.A. in Public Administration and Political Science at Yonsei University.",
    size: "half",
  },
  {
    bioImg: Person,
    name: "Jeff Lockhart",
    title: "James S. McDonnell Postdoctoral Fellow, University of Chicago",
    bio:
      "Jeff Lockhart is a James S. McDonnell Postdoctoral Fellow in Sociology and the Knowledge Lab at the University of Chicago. He received his PhD in sociology from the University of Michigan, as well as masters degrees in gender studies and computer science from the University of Cambridge and Fordham University. He works on a variety of projects related to the co-construction of knowledge and identities using both computational and qualitative methods. His latest project examines how the scientific production of sex and race, once tightly entwined, came to be separate fields with stark differences in institutional support.",
    size: "half",
  },
  {
    bioImg: Person,
    name: "Adarsh Mathew",
    title: "Masters student, University of Chicago",
    bio:
      "I'm a computational social scientist working to straddle the worlds of sociology, network science, and machine learning. I'm interested in exploring the relationship between networked identities and the propagation of knowledge: how individuals and communities work to form and evaluate epistemological practices; the role their networks and identities play in this process; the effect of hierarchies and narrative structures in this dialectical process. At the Knowledge Lab, I work on projects that examine ideology and conflict in online communities, using networks and language processing methods to describe user and community behaviour, especially in contentious and radical political communities. My research interests also span the philosophy of science and computing, formal network epistemology, and the interplay between algorithmic decision-making and the structural imperatives that make data collection possible. I'm currently pursuing an MA in Computational Social Science at the University of Chicago. Before my time at the University of Chicago, I worked for a tech firm based in the Bay Area, and as an international development consultant. I have a Masters' and Bachelors' degree in Industrial & Systems Engineering from IIT Kharagpur, which served as my introduction to statistical learning, and optimization & heuristic methods. I call Hyderabad home, and have a soft corner for speculative science fiction (Ted Chiang & Ken Liu) and high fantasy, along with general soccer nerdiness.",
    size: "half",
  },
  {
    bioImg: Person,
    name: "Jeremiah Milbauer",
    title: "Graduate Student, Carnegie Mellon University",
    bio:
      "I am an artificial intelligence researcher, software engineer, and occasional writer. I am interested in exploring the relationships between language, knowledge, and society. At Knowledge Lab, I work on projects that use machine learning and natural language processing techniques to discover concept structures and worldviews across a variety of data sources. Before joining Knowledge Lab, I spent time as a research assistant with John Lafferty, Ben Zhao, and John Goldsmith working on a variety of natural language processing projects. On the engineering side, I did an internship at Alphabet's autonomous vehicle division Waymo (at Google X), and was the machine learning lead at Simmer (a YCombinator-backed startup). My writing has been featured by the Berkman-Klein Center for Internet & Society, and The Economist. I grew up in New York City (where, as a matter of survival, I quickly learned my way around both gallery openings and giant rats). I graduated from the University of Chicago in 2019 with degrees in Computer Science and Philosophy.",
    size: "half",
  },
  {
    bioImg: Person,
    name: "Peter Muhlberger",
    title: "Research Scientist, University of Chicago",
    bio:
      "Peter Muhlberger is a Research Scientist at University of Chicago's Knowledge Lab, where his interests include public understanding of science, misinformation, and the application of neural natural language understanding. Previously, he was a National Science Foundation (NSF) Program Director for data-intensive research and political science. He also served as a senior analyst for NSF's National Center for Science and Engineering Statistics. Dr. Muhlberger designed and directed research on Carnegie Mellon University's Virtual Agora Project, a NSF-funded project investigating the political, social, and psychological effects of computer-mediated political engagement. He was also principal investigator on the Deliberative E-Rulemaking Project, a NSF-funded project applying multi-level deliberation to federal agency online rulemaking. Dr. Muhlberger received his Ph.D. in political science from the University of Michigan. He has published in such journals as Political Psychology, Political Communication, the Journal of Information Technology and Politics, and Information Polity.",
    size: "half",
  },
  {
    bioImg: Person,
    name: "Jamshid Sourati",
    title: "Postdoctoral Scholar, University of Chicago",
    bio:
      "My research interest revolves around machine learning and its applications in discovering underlying patterns in real-world data. At the Knowledge lab, my goal is to apply computational tools for processing enormous textual data sets and to develop novel learning models that give better insights into how humans think and interact collectively. I received my doctorate in Electrical and Computer Engineering at Northeastern University. During the course of my Ph.D., my focus was primarily on generic analysis of learning models in theoretical levels. Prior to joining Knowledge lab, as a post-doctoral researcher in Harvard medical school, I conducted research in development and rigorous analysis of machine learning algorithms for automatic medical image processing.",
    size: "half",
  },
  {
    bioImg: Person,
    name: "Simon Schachter",
    title: "Graduate student, University of Chicago",
    bio:
      "Simon Yamawaki Shachter is a Ph.D. student at the University of Chicago Sociology Department. He is interested in philanthropy and the nonprofit sector, especially how public and private systems of funding alter field-level outcomes. He utilizes historical, statistical, and computational tools to understand how public and private efforts to serve the public good influence each other. He is particularly drawn to research that exposes when these, often well-intentioned, efforts work to perpetuate certain forms of inequality while seeking to alleviate others. Prior to coming to the University of Chicago, Simon received a B.S. in Computer Science at Stanford University. In the Bay Area he worked for several private philanthropic foundations and founded YCore, a San Francisco-based non-profit that brings young professionals together to support equity-building work in their local communities.",
    size: "half",
  },
  {
    bioImg: Person,
    name: "Nak Won Rim",
    title: "Masters student, University of Chicago",
    bio:
      "Nak Won is a MA student in the Computational Social Science program at the University of Chicago. He is broadly interested in how the human mind incorporates new knowledge into their thought systems and how humans make inferences and decisions based on their priors. At the Knowledge Lab, he is focusing on using high-throughput virtual lab experiments to research how people work together as groups. Before coming to the University of Chicago, Nak Won received a B.A. degree in Psychology and a B.S. degree in Brain Cognitive Science at Korea University, Republic of Korea. His undergraduate works focused on the cognitive control of humans using classical distractor tasks such as the Simon task.",
    size: "half",
  },
  {
    bioImg: Person,
    name: "Fengli Xu",
    title: "Postdoctoral Scholar, University of Chicago",
    bio:
      "My research interests include data science, machine learning and computational social science. My current research focuses on modeling and understanding the dynamics of scientific development. My long-term research goal is to harness the power of increasingly available behavioral big data to facilitate advanced human-centric computing. My personal website is : fenglixu.com",
    size: "half",
  },
  {
    bioImg: Person,
    name: "Haizi Yu",
    title: "Postdoctoral Scholar, University of Chicago",
    bio:
      "Haizi has a Ph.D. in Computer Science. His research interests include interpretable AI and machine learning, automatic knowledge discovery, and music intelligence. He received his doctoral degree from the University of Illinois at Urbana-Champaign. He received his M.S. degree in Computer Science from Stanford University, and his B.S. degree from the Department of Automation at Tsinghua University.",
    size: "half",
  },
];

const klabAlumni = [
  {
    name: "Aabir Abubaker Kar",
    title: "Graduate student, University of Chicago",
    bio:
      "Aabir is currently pursuing an MA in Computational Social Science at The University of Chicago expected May 2021). At the Knowledge Lab, he is using NLP and embedding methods to analyze textual data on job advertisements to better understand up-skilling, labor markets, and teams. He has a BE in Engineering and an MSc in Physics from BITS Pilani, Goa Campus in India - as well as a Minor Certificate in Philosophy, Economics and Politics. He has previously worked on research at the New England Complex Systems Institute and the International Centre for Theoretical Sciences, Bangalore. His research interests are in complex socioeconomic systems - social stratification, information propagation, economic flows amongst them. Methodologically, he works with machine learning, networks, statistics, physics - and enjoys exploring their applications to other disciplines.",
    size: "half",
  },
  {
    name: "Shahab Asoodeh",
    title: "Postdoctoral Scholar, University of Chicago",
    bio:
      "I am interested in the applications of discrete (differential) geometry and information theory in machine learning and network science. In particular, my main research at the Knowledge Lab focuses on the following two broad questions: 1) How to quantify geometry of graphs, simplicial complexes, and more generally, hypergraphs and to interpret them in real-world networks? And 2) How to use geometry and information theory to define and quantify fairness and privacy in machine learning and data mining? I am fortunate to work with James Evans at the Knowledge Lab and Ishanu Chattopadhyay at the Institute of Genomics and System Biology (IGSB). I received my PhD and MSc both in applied mathematics from Queen's University, Canada, in 2017 and 2011 and a MSc in Electrical Engineering from ETH Zurich and TU Delft in 2010.",
    size: "half",
  },
  {
    name: "Megan Barnes",
    title: "Student, University of Chicago",
    bio:
      "I graduated from the University of Chicago, studying linguistics and computer science. I am interested in language processing as well as data processing techniques, like machine learning, that help us better understand humans. At Knowledge Lab, I worked on a project to create maps of research activity in key topical areas of interest to research funding agencies. The maps could reveal and help funders analyze a) levels of research activity, b) who is participating, c) and in which topics. Also, I love music, Twitter, comedy, and the Pacific Northwest. I am currently working for an early stage startup in New York City.",
    size: "half",
  },
  {
    name: "Alexander Belikov",
    title: "Postdoctoral Scholar, University of Chicago",
    bio:
      "Alexander Belikov is interested in applications of machine learning and natural language processing to social phenomena and texts. Of particular interest to him are the relation extraction and the convergence of social consensus, which can be studied in conjunction. Alexander received his B.S. and M.S. from the Moscow Institute of Physics and Technology and his PhD in physics from the University of Chicago. Prior to joining the Knowledge Lab, he held a two-year postdoc at the Institut d'Astrophysique de Paris. He also worked as a quantitative researcher in wholesale risk modeling at JP Morgan Chase and later at the exotic equity derivatives desk at Barclays Capital in New York.",
    size: "half",
  },
  {
    name: "Cody Braun",
    title: "IMB",
    bio:
      "Cody is a masters student in computer science, a veteran of several tech startups, and a University of North Carolina alumnus. Though he is currently studying high-performance computing, machine learning, and data analysis, his wide range of past experiences include jobs at small-town Southern newspapers, Portuguese olive farms, and Australian construction companies. Among other projects, he is currently working on a browser plugin designed to detect phishing, a bound ePaper book dynamically populated by a web crawler, and a handful of Arduino-based gadgets.",
    size: "half",
  },
  {
    name: "William Catino",
    title: "Principal Software Engineer, University of Chicago",
    bio:
      "William earned a PhD in Electrical and Computer Engineering at the Illinois Institute of Technology in 1997, under the guidance of Joseph L. LoCicero and Henry Stark. His research topic was Constrained Optimization Algorithms for Image Processing, applied to Hologram design. In addition to working at several technology companies, he spent a large portion of his career as an independent consultant. His work has spanned, and often integrated, a variety of areas, including: Adaptive Stochastic Signal Processing, applied to Telecommunications, Efficient / High-Performance Software Implementation, Video Games and Computer Graphics, Simulation and Modeling of Physical and Virtual Systems, Optimization Algorithms, Pattern Recognition, Artificial Intelligence. William currently serves as a Principal Software Engineer for the Knowledge Lab at the University of Chicago, focusing on Database Design and Programming, Machine Learning and Natural Language Processing.",
    size: "half",
  },
  {
    name: "Brendan Chambers",
    title: "Postdoctoral Scholar, University of Chicago",
    bio:
      "Brendan is a creative data scientist specializing in complex interconnected systems. He performed his PhD research in the MacLean Laboratory for Cortical Circuits and Network Neuroscience, studying emergent activity patterns in the neurons of neocortex. His current work is situated at the intersection between machine learning, communication networks, and the sociology of science. Brendan has been recognized as an NSF S-STEM Fellow in Computation & Modeling and an NSF IGERT Fellow in the Neural Control of Movement. His work in collaboration with Dr. Jason MacLean was nominated for a Hot Topic Award by the Society for Neuroscience and distinguished as a Top 50 Most-Downloaded Article by PLOS Computational Biology. Brendan grew up in Iowa and studied computer science at Oberlin College. He is a hobbyist electronic musician and climber. You can find him on Twitter via @societyoftrees.",
    size: "half",
  },
  {
    name: "Yo Hoong “YJ” Choe",
    title: "PhD Student, Machine Learning, Carnegie Mellon",
    bio:
      "I am a PhD student studying Machine Learning at Carnegie Mellon. I was born and raised in Seoul, South Korea. I am broadly interested in the theory of machine learning as well as its applications to social models.",
    size: "half",
  },
  {
    name: "Valentin Danchev",
    title: "Postdoctoral Scholar, University of Chicago",
    bio:
      "Valentin Danchev is a computational sociologist. He uses network analysis, computational models, text analysis, and large-scale databases to study how patterns of connectivity in social, spatial, and semantic networks influence differences in outcomes, such as replicable discoveries, innovation, mobility opportunities, and inequality. At Knowledge Lab, Valentin conducts a large-scale evaluation of the robustness and replicability of tens of thousands of research results published in the biomedical literature and examines what network structures of scientific communities contribute to robust, replicable discoveries. He also examines the interplay of social, biological, and organizational mechanisms inducing robust innovations in oncology research. Valentin holds a DPhil (PhD) in Development Studies from the University of Oxford, where he was also affiliated with the networks research group at the Mathematical Institute. Prior to that, he received his MA from the University of Essex and his BA from the University of Sofia, both in Sociology.",
    size: "half",
  },
  {
    name: "Alexander Dunlap",
    title: "PhD Student, Mathematics, Stanford University",
    bio:
      "Mathematics PhD student at Stanford. I am interested in machine learning and, more generally, using quantitative ideas to understand complex problems. In my free time I enjoy bicycling and baking.",
    size: "half",
  },
  {
    name: "Aaron Gerow",
    title: "Post-doctoral Scholar, Knowledge Lab",
    bio:
      "I grew up in and around Chicago, went to college in Tacoma at Pacific Lutheran University studying computer science and philosophy, liberal arts style. I received my masters degree from University College Dublin in cognitive science and I began my PhD at Trinity in the Fall of 2010. In September, 2013, I submitted my PhD in computational linguistics and started work at the Knowledge Lab as a post-doctoral scholar. My interests have clustered around novel and large-scale natural language processing and figurative language, both with a distinct slant toward cognitive and social sciences. I'm interested, specifically, in how large data-sets of structured linguistic information relate to patterns of information use. One example is tracking how people's description of stock-markets relate to the markets themselves, or tracking trends in the grammatical context of key terms in a corpus. As part of the Knowledge Lab, I hope to explore the how emergent properties of text and information influence the dynamics of knowledge creation and use.",
    size: "half",
  },
  {
    name: "Anuraag Girdhar",
    title:
      "First-year student in the MA program in Computational Social Science",
    bio:
      "While conferring with Professor Mark Granovetter at Stanford, he spent the past year studying how the structure of social networks affects opinion polarization. He is more broadly interested in operationalizing notions of objective truth and theory of mind on social networks. He is also interested in extending these ideas to designing social networks that optimize social good. Anuraag has an A.B. in Mathematics and Economics from Dartmouth College. Prior to arriving at the University of Chicago, he spent four years in private industry working as a pharmaceutical statistician at Gilead Sciences, and as an economic research associate at Bridgewater Associates.",
    size: "half",
  },
  {
    name: "Clara del Junco",
    title: "Postdoctoral Scholar, University of Chicago",
    bio:
      "My research interests include characterizing and promoting diversity in scientific research, and the importance of language and social context in science-how concepts flow and meaning changes between scientific fields and popular discourse. Before joining the Knowledge Lab in autumn 2020, I did a PhD in theoretical chemistry at the Vaikuntanathan lab at the University of Chicago. My thesis explored how consuming energy allows biological and physical systems to adapt and operate robustly in noisy environments. Personal website: https://cdeljunco.github.io/me/",
    size: "half",
  },
  {
    name: "Molly Lewis",
    title: "Special Faculty, Carnegie Mellon University",
    bio:
      "My research focuses on understanding how linguistic meaning-semantic space-is acquired in cognitive development, changes over historical time, and varies cross-linguistically. I am also interested in issues related to scientific replicability and reproducibility. I received my PhD in Developmental Psychology from Stanford University, where I worked with Michael Frank. Before that, I received a BA in Linguistics from Reed College. At the Knowledge Lab, my work examined cross-linguistic variability in the alignment of linguistic meaning using large scale corpora. I was co-advised by James Evans at the Knowledge Lab and Gary Lupyan in the Psychology Department at the University of Wisconsin-Madison. I am currently a faculty member in the Department of Psychology and Social and Decision sciences at Carnegie Mellon University. My personal website: http://www.andrew.cmu.edu/user/mollylew/",
    size: "half",
  },
  {
    name: "Linzhou Li",
    title: "Graduate student, University of Chicago",
    bio:
      "I am a PhD student in Chicago Sociology Department. My research interest is mostly related to economic and cultural change. More specifically, I made efforts in understanding questions such as the substitution and generalization of social, cultural and ideological values; reasoning based upon (and constrained by) the cultural system; and the self-organization of local financial and economic behaviors. I employ intensively state-of-the-art computational methods as well as traditional ethnographic tools to guide my research. A most recent project of mine applies a new embedding technique to embed words and tags into hyperbolic space to uncover the hidden hierarchical structure of 21st century physics. I am also collaborating with my colleague Shilin Jia to uncover cultural and ideological autonomy using China's newspaper People's Daily from 1946 to 2003. Before coming to Chicago, I received my BA and MA degree from Tsinghua University.",
    size: "half",
  },
  {
    name: "Bowen Lou",
    title: "PhD Student, University of Pennsylvania, Wharton",
    bio:
      "Completed my masters study in computer science from University of Chicago and am currently a PhD Student at Wharton. I am a data enthusiast, and passionate about using large amounts of data to solve real world problems. I'm specifically interested in applying or proposing solutions from statistical, natural language processing, and network science in order to understand latent patterns under large-scale texts about individuals and organizations from social media, digital publications and the World Wide Web.",
    size: "half",
  },
  {
    name: "Grace Lu",
    title: "Student, Uber",
    bio:
      "Grace works on self-driving cars at Uber. Grace graduated from the college double majoring in Computer Science and Economics from northeast Ohio. She is interested in big data, data analytics, social media trends, language processing, and using technology to create applications in a variety of different fields. At the Knowledge Lab, she worked on a project to map Wikipedia to understand how past revision history can lead to the creation of new pages. In her free time, she enjoys playing tennis, music, and traveling.",
    size: "half",
  },
  {
    name: "Reid Mcllroy-Young",
    title: "Researcher at Knowledge Lab",
    bio:
      "I have a Masters in Computational Social Science from the University of Chicago and was a researcher at Knowledge Lab. My current research is on developing new machine learning techniques that are useful in the social sciences. What insights into human nature are present in the mass behavior of people? I have primarily worked with collections of source code and bibliographic sources to examine these, but as my PhD progresses I hope to expand the domain. At Knowledge Lab I primarily participated in two projects. First, a collection of Jupyter Notebooks to help with James Evans' Content Analysis class, these are detailed examples working through problems relevant to many social scientists, such as entity extraction, auto-encoders or model selection. Secondly, I was the main researcher on quarter million Sloan grant to study how programming languages impact science and thought with James Evans and Gary Lupyan.",
    size: "half",
  },
  {
    name: "Deblina Mukherjee",
    title: "Undergraduate student, University of Chicago",
    bio:
      "I'm a fourth year in the College at UChicago, majoring in Sociology and minoring in Computer Science and Statistics. I am interested broadly in computational and applied math, both as method and as a field of inquiry in the tradition of science studies. At the Knowledge Lab, I'm working on Genesweep (which is a thesis project investigating the relationship between scientists and games), and with Jerimiah Milbauer and Yutao Chen on the Sloan Languages Project (which is investigating how programming languages shape thought). Personal website: https://deblina.net",
    size: "half",
  },
  {
    name: "Prateeti Mohapatra",
    title: "Research Engineer - Modeling and Simulation, Knowledge Lab",
    bio:
      "My background is in Statistical Modeling and Analysis, System Dynamics, Speech Processing and Software Engineering. I have also worked in the areas of Parallel Programming, Numerical Methods, Requirements Engineering, Life-cycle Cost Modeling, and Global Software Development at Research Centers (Central Research Laboratory, India, ABB Corporate Research Center, India, and Flash Center for Computational Science, UChicago, USA) and Software Industries (The Mathworks). My current work focuses on developing reliable and scalable data warehouse systems for data contained in different repositories in both structured and unstructured format. I am also currently working on feature identification/extraction from text objects as well as their classification using various machine learning approaches.",
    size: "half",
  },
  {
    name: "Chris Natoli",
    title: "PhD student in Mathematics at CUNY Graduate Center",
    bio:
      "I like learning about and using machine learning and probabilistic methods to rigorously study problems in the social sciences. I care a lot about the left, history, and New York City.",
    size: "half",
  },
  {
    name: "Nate Sauder",
    title: "Develop deep learning algorithms for medical image diagnosis",
    bio: "",
    size: "half",
  },
  {
    name: "Nandana Sengupta",
    title: "Postdoctoral Scholar, University of Chicago",
    bio:
      "My research revolves around improving the predictive performance of traditional Econometric models using modern Statistics and Machine Learning. I'm very interested in developing these techniques with a special focus on Public Policy applications. I am currently a doctoral candidate of Economics at the Tepper School of Business, Carnegie Mellon University. I also hold a Bachelor's degree in Physics from St. Stephen's College (New Delhi, India) and a Master's degree in Development Economics from Indira Gandhi Institute of Development Research (Mumbai, India). I've had the opportunity to participate in a number of interdisciplinary research groups including the Machine Learning in Social Sciences group at Carnegie Mellon University and the Computational Social Science Workshop at the Santa Fe Institute. I'm looking forward to continuing this line of work at the Knowledge Lab, where my projects will include developing computational tools to more deeply engage user input as well as developing new techniques to assess and predict the impact of academic research.",
    size: "half",
  },
  {
    name: "Feng “Bill” Shi",
    title: "Applied Mathematics Researcher",
    bio:
      "My background is in applied mathematics, and complex networks in particular. I have been working on various interacting particle systems such as the evolving voter model, percolation of nanocomposites, and virus-antibody interactions. My work currently focuses on understanding the processes that generate and shape the knowledge in scientific systems, for example, the beliefs, preferences, biases, and strategies that guide scientists in their exploration of the natural world. This research is embedded in a large interdisciplinary collaboration to understand the creation, dissemination, and limit of human knowledge.",
    size: "half",
  },
  {
    name: "Taweewat “Champ” Somboonpanyakul",
    title: "PhD student in Physics at MIT",
    bio:
      "I am originally from Thailand. I have some experience in Astrophysics, specifically gravitational lensing and exoplanets, but I am also interested in social parts of science, and, in particular, how humans gather new knowledge in science.",
    size: "half",
  },
  {
    name: "Jamshid Sourati",
    title: "Postdoctoral Scholar, University of Chicago",
    bio:
      "My research interest revolves around machine learning and its applications in discovering underlying patterns in real-world data. At the Knowledge lab, my goal is to apply computational tools for processing enormous textual data sets and to develop novel learning models that give better insights into how humans think and interact collectively. I received my doctorate in Electrical and Computer Engineering at Northeastern University. During the course of my Ph.D., my focus was primarily on generic analysis of learning models in theoretical levels. Prior to joining Knowledge lab, as a post-doctoral researcher in Harvard medical school, I conducted research in development and rigorous analysis of machine learning algorithms for automatic medical image processing.",
    size: "half",
  },
  {
    name: "Bhargav Srinivasa Desikan",
    title: "Ph.D. Candidate in Computer Science at EPFL",
    bio:
      "Bhargav is a Research Fellow at the Knowledge Lab, currently working with Prof. Evans on a book titled 'Thinking with Deep Learning', where they are trying to work towards a sophisticated deep learning powered approach to representations of social objects. He previously received an MA in Computational Social Science from the University of Chicago, and his research interests lie in the intersection of AI and the social sciences: using computational tools to probe questions of social behavior, as well as critically examining the effects which the information age has had on our species and planet. He has previously co-authored publications in the Journal of Machine Learning Research, the proceedings of the International Conference on Computational Linguistics, and Cognition, and has authored a book on NLP and Computational Linguistics with Python.",
    size: "half",
  },
  {
    name: "Misha Teplitsky",
    title: "Ph.D. in Sociology from the University of Chicago",
    bio:
      "I was a Graduate Research Fellow at KnowledgeLab. My research focuses on academic publishing, particularly on how scientists evaluate the work of others. How do scientists decide if a finding is worthy of publication, and how valid are these judgments? To answer these questions I examine the peer review files of academic journals using a variety of machine learning and text processing techniques. I am also engaged in a variety of collaborative projects. In a KnowledgeLab project with James Evans, we test the robustness of a large sample of claims published in social science journals by testing them on out-of-sample data and 'perturbing' the model specifications. In another KnowledgeLab project with Eamon Duede and Grace Lu, we study which scientific findings move from the scientific literature to Wikipedia.",
    size: "half",
  },
  {
    name: "Di Tong",
    title: "Graduate Student, University of Chicago",
    bio:
      "I'm a student in the Computational Social Science Master's program with a concentration in sociology. My major research interest lies in stratification and inequality, political sociology as well as computational text analysis. Specifically, I'm interested in studying political discourse, cultural norms, public perceptions and attitudes regarding distributive justice; the causes and consequences of economic disparities and the social conditions that mediate and moderate these processes. Currently, at the Knowledge lab, I'm applying word embedding techniques on massive-scale job ads data to examine the underlying geometry of skill coordination that shapes social lives centered at the labor division. I'm also working on a project that examines the relationship between perceived inequality and political trust in East Asian societies. My previous work utilizes topic modeling to trace the transforming biopolitics in China from 1956-2003 through the lens of the changing official discourse on the birth planning policy. Before coming to Chicago, I completed my undergraduate degree at Tsinghua University majoring in English Language and Literature.",
    size: "half",
  },
  {
    name: "Lingfei Wu",
    title: "Postdoctoral Scholar, University of Chicago",
    bio:
      "My research interest is the sciences of collaboration and innovation. I apply mathematical models and machine learning techniques to analyze collective knowledge production systems, including Web of Science, U.S. patents, Stack Exchange, GitHub. My works were published in journals including Nature, Physical Review E, Scientific Reports, PloS ONE, and also generated broad interest among diverse audiences in New Scientists and Science Daily. I got my PhD in Communication from the City University of Hong Kong in 2013. Overlapping with the PhD program I spent a year in Baidu as an algorithm engineer (internship). I joined Knowledge Lab in 2016 after working two years in the Center for Behavior, Institutions and the Environment at Arizona State University as a post-doc researcher. I am a core member of Swarma Club, a research network in Beijing with a vision to bridge academia, industry, and government.",
  }
];

const klabAffiliated = [
  {
    name: "James A. Evans",
    title:
      "Director, Knowledge Lab; Professor, Sociology, University of Chicago; Faculty Director, Masters Program in Computational Social Sciences; External Professor, Santa Fe Institute",
    bio:
      "James Evans is Director of Knowledge Lab, Professor of Sociology, Faculty Director of the Computational Social Science program, and member of the Committee on Conceptual and Historical Studies of Science at the University of Chicago. I am also an External Professor at the Santa Fe Institute. His research focuses on the collective system of thinking and knowing, ranging from the distribution of attention and intuition, the origin of ideas and shared habits of reasoning to processes of agreement (and dispute), accumulation of certainty (and doubt), and the texture-novelty, ambiguity, topology-of human understanding. He is especially interested in innovation-how new ideas and technologies emerge-and the role that social and technical institutions (e.g., the Internet, markets, collaborations) play in collective cognition and discovery. Much of his work has focused on areas of modern science and technology, but he is also interested in other domains of knowledge-news, law, religion, gossip, hunches and historical modes of thinking and knowing. He supports the creation of novel observatories for human understanding and action through crowd sourcing, information extraction from text and images, and the use of distributed sensors (e.g., RFID tags, cell phones). He uses machine learning, generative modeling, social and semantic network representations to explore knowledge processes, scale up interpretive and field-methods, and create alternatives to current discovery regimes. His research is funded by the National Science Foundation, the National Institutes of Health, DARPA, Facebook, IBM, the Sloan Foundation, Jump! Trading and other sources, and has been published in Science, PNAS, Nature Human Behavior, Nature Biotech, American Journal of Sociology, American Sociological Review, Social Studies of Science, Administrative Science Quarterly, PLoS Computational Biology and other journals. His work has been featured in Nature, the Economist, Atlantic Monthly, Wired, NPR, BBC, El País, CNN and many other outlets.",
    bioImg: James,

    size: "half",
  },
  {
    name: "Jacob G. Foster",
    title: "Assistant Professor, Sociology, UCLA",
    bio:
      "I was originally trained as a statistical physicist. Like many physicists, I was drawn to the study of complex systems because it licensed me (after a fashion) to work on all sorts of systems that physicists aren't “supposed” to—complex networks, evolutionary dynamics, etc. As a graduate student (in physics), I took a spectacular seminar on classical social theory (Marx, Weber, Durkheim, Parsons, Merton, Elias, etc.). I was instantly converted by rich theoretical and empirical resources of the sociological tradition. Markets, manners, state formation, systems of cultural and scientific production — now here were complex systems! Sociology also looked like it would give me the intellectual space to weave together my quantitative training with long-term passions for the history of ideas, cultural and biological evolution, and interpretive modes of scholarship. After a postdoc in the sociology department at the University of Chicago, I joined the sociology department at UCLA as an assistant professor in 2013. I am interested in the evolution and population dynamics of ideas (broadly construed). How are new ideas born? Why do some spread? What role do ideas play in organizing social structures? And how do social structures affect the genesis, diffusion, and ultimate extinction of ideas? Currently, I work on a particular subset of the world of ideas: the beliefs, practices, and theories that make up scientific knowledge. By fitting rich computational models of discovery and impact to data extracted from articles and patents, I infer the preferences and social processes that give scientific knowledge its particular shape and trajectory. Broadly speaking, I aim to generate new knowledge about the process of knowledge-making; to identify and understand the heuristics, strategies, and institutions that guide scientists as they make sense of the natural world.",

    size: "half",
  },
  {
    name: "Luís Amaral",
    title:
      "Professor, Chemical and Biological Engineering Professor, Medicine; HHMI Early Career Scientist, Northwestern University",
    bio:
      "Professor Amaral, a native of Portugal, conducts and directs research that provides insight into the emergence, evolution, and stability of complex social and biological systems. His research aims to address some of the most pressing challenges facing human societies and the world's ecosystems, including the mitigation of errors in healthcare settings, the characterization of the conditions fostering innovation and creativity, or the growth limits imposed by sustainability. Recently, Amaral proposed the development of cartographic methods for the representation of complex biological networks. These methods will enable researchers to accomplish something similar to what travelers now can easily accomplish with, for example, Google Maps, that is, to glean the important information on a given system at the scale of interest to the researcher. These tools hold the promise to enable biomedical researcher to design or re-engineer biological systems for therapeutic purposes.",

    size: "half",
  },
  {
    name: "David Blei",
    title: "Professor, Statistics and Computer Science, Columbia University",
    bio:
      "I am a professor of Statistics and Computer Science at Columbia University. I am also a member of the Institute for Data Sciences and Engineering. I work in the fields of machine learning and Bayesian statistics. David's Ph.D. advisor was Michael Jordan at U.C. Berkeley Computer Science. David was a postdoctoral researcher with John Lafferty at CMU in the Machine Learning department. His research interests include: Probabilistic graphical models and approximate posterior inference; Topic models, information retrieval, and text processing; Bayesian nonparametric statistics.",

    size: "half",
  },
  {
    name: "Ian Foster",
    title:
      "Director, Computation Institute; Senior Scientist, Mathematics and Computer Science (MCS) at Argonne National Laboratory; Executive Advisory Committee Member and Senior Fellow, Institute for Genomics and Systems Biology (IGSB); Professor, Computer Science, University of Chicago; Professor, Physical Sciences, University of Chicago; Distinguished Fellow, Argonne National Laboratory, University of Chicago",
    bio:
      "Ian Foster is Director of the Computation Institute, a joint institute of the University of Chicago and Argonne National Laboratory. He is also an Argonne Senior Scientist and Distinguished Fellow and the Arthur Holly Compton Distinguished Service Professor of Computer Science. Ian received a BSc (Hons I) degree from the University of Canterbury, New Zealand, and a PhD from Imperial College, United Kingdom, both in computer science. His research deals with distributed, parallel, and data-intensive computing technologies, and innovative applications of those technologies to scientific problems in such domains as climate change and biomedicine. Methods and software developed under his leadership underpin many large national and international cyberinfrastructures.",

    size: "half",
  },

  {
    name: "John P. Ioannidis",
    title:
      "C. F. Rehnborg Professor in Disease Prevention, Medicine; Professor, Health Research & Policy; Professor (By courtesy), Statistics, Stanford University",
    bio:
      "I have worked in the fields of evidence-based medicine, clinical investigation, clinical and molecular epidemiology, clinical research methodology, empirical research methods, statistics, and genomics. I have a strong interest in large-scale evidence (in particular randomized trials and meta-analyses) and in appraisal and control of diverse biases in biomedical research. I am interested in developing and applying new research methods, and in the interdisciplinary enhancement of existing research methods for study design and analysis in biomedicine. Some of my most influential papers in terms of citations are those addressing issues of replication validity of genetic association studies, biases in biomedical research, research synthesis methods, extensions of meta-analysis, genome-wide association studies and agnostic evaluation of associations, and validity of randomized trials and observational research. I have also designed, steered and participated in influential randomized trials (in particular, the major trials that changed decisively the management and outcome of HIV infection, but also trials in nephrology, and in antibiotic use in the community), and large international consortia that have helped transform the efficiency of research in diverse fields of genomic, molecular and clinical epidemiology. I enjoy working with a diverse array of colleagues from very diverse disciplines and to have an opportunity to learn from both senior and junior investigators, and particularly students at all levels.",

    size: "half",
  },
  {
    name: "David Krakauer",
    title:
      "Director, Wisconsin Institute for Discovery; Co-Director, Center for Complexity and Collective Computation; Professor, Genetics, University of Wisconsin, Madison",
    bio:
      "A graduate of the University of London, where he went on to earn a master's degree in computer science and mathematics, David Krakauer received his D.Phil. in evolutionary theory from Oxford University in 1995. He remained at Oxford as a postdoctoral research fellow and two years later was named a Wellcome Research Fellow in mathematical biology and lecturer at Pembroke College. In 1999, he accepted an appointment to the Institute for Advanced Study at Princeton University and served as visiting professor of evolution. He moved on to the Santa Fe Institute as a professor three years later and was made faculty chair in 2009. Krakauer has been a visiting fellow at the Genomics Frontiers Institute at the University of Pennsylvania and a Sage Fellow at the Sage Center for the Study of the Mind at the University of California, Santa Barbara. Krakauer's research focuses on the evolutionary history of information processing mechanisms in biology and culture. This includes genetic, neural, linguistic and cultural mechanisms. The research spans multiple levels of organization, seeking analogous patterns and principles in genetics, cell biology, microbiology and in organismal behavior and society. At the cellular level, Krakauer has been interested in molecular processes, which rely on volatile, error-prone, asynchronous, mechanisms, which can be used as a basis for decision making and patterning. He also investigates how signaling interactions at higher levels, including microbial and organismal, are used to coordinate complex life cycles and social systems, and under what conditions we observe the emergence of proto-grammars. Much of this work is motivated by the search for ‘noisy-design' principles in biology and culture emerging through evolutionary dynamics that span hierarchical structures.",

    size: "half",
  },
  {
    name: "Andrey Rzhetsky",
    title:
      "Professor, Department of Medicine; Professor, Department of Human Genetics; Senior Fellow, Computation Institute; Senior Fellow, Institute for Genomics and Systems Biology, University of Chicago",
    bio:
      "My main interest is in gaining an (asymptotic) understanding how phenotypes, such as human healthy diversity and maladies, are implemented at the level of genes and networks of interacting molecules. To harvest as much information about known molecular interactions as possible, my group runs a large-scale text-mining effort aiming at analysis of a vast corpus of biomedical publications. Currently we can extract from text automatically about 500 distinct flavors of relations among biomedical entities (such as bind, activate, merystilate, and transport). To sharpen our text-mining axes, we are actively designing related models and computational applications. Furthermore, in cooperation with our experimentally talented colleagues, we are striving to use text-mined networks to understand, interpret and refine high- or low-throughput experimental data. We are also computationally generating biological hypotheses that our generous collaborators are attempting to test experimentally. My older passion is in developing and applying computational methods related to phylogenetics and evolutionary biology.",

    size: "half",
  },
  {
    name: "Michael Alfaro",
    title:
      "Associate Professor, Department of Ecology and Evolutionary Biology & Institute for Society and Genetics, UCLA",
    bio:
      "ISG Fellow Dr. Michael Alfaro is an Associate Professor in the Ecology and Evolutionary Biology department where he and ISG Associate Director Dr. Jessica Lynch Alfaro run the UCLA Alfaro Lab. The goal of his research is to understand the factors that govern the evolutionary dynamics of organismal diversification. Why are some groups morphologically diverse? Are there general laws or themes that can be used to explain the uneven distribution of diversity in physiological traits across lineages? Does morphological diversity always signal mechanical, functional, or ecological diversity? To address these questions, Alfaro works largely on marine fishes. His research approach is interdisciplinary and quantitative and crosses traditional boundaries among evolutionary morphology, molecular phylogenetics, and theoretical evolution. He identifies and quantifies organismal diversity using morphological and functional morphological techniques; constructs evolutionary trees and tests evolutionary hypotheses using phylogenetic statistical methods; and uses models of trait evolution to explore form-function dynamics.",

    size: "half",
  },
  {
    name: "Carl Bergstrom",
    title: "Professor, Biology, University of Washington",
    bio:
      "Carl is a professor in the Department of Biology at the University of Washington and a member of the External Faculty at the Santa Fe Institute. He received his bachelor's degree from Harvard University in 1993, where he worked with Naomi Pierce and David Haig. Carl did his Ph.D. work in Biological Sciences at Stanford University with Marc Feldman. processes. After leaving Stanford, he did two years of postdoctoral work at Emory University with Bruce Levin.",

    size: "half",
  },
  {
    name: "Edward Boyden",
    title:
      "Associate Professor, MIT Media Lab and McGovern Institute for Brain Research at MIT, MIT",
    bio:
      "Professor Boyden leads the MIT Media Lab's Synthetic Neurobiology research group, which develops tools for mapping, controlling, observing, and building dynamic circuits of the brain, and uses these neurotechnologies to understand how cognition and emotion arise from brain network operation, as well as to enable systematic repair of intractable brain disorders such as epilepsy, Parkinson's disease, and post-traumatic stress disorder. His research group has invented a suite of “optogenetic” tools that are now in use by thousands of research groups around the world for activating and silencing neurons with light. Boyden was named to the “Top 35 Innovators Under the Age of 35” by Technology Review in 2006, and to the “Top 20 Brains Under Age 40” by Discover magazine in 2008. He has received the Gabbay Award, National Institutes of Health (NIH) Director's Pioneer Award and Transformative Research Award, the Society for Neuroscience Research Award for Innovation in Neuroscience, the NSF CAREER Award, the Paul Allen Distinguished Investigator Award, and the New York Stem Cell Robertson Investigator Award. In 2010, his work was recognized as the “Method of the Year” by the journal Nature Methods. Most recently he shared the 2013 Grete Lundbeck European Brain Research Prize for outstanding contributions to European neuroscience-the largest neuroscience prize in the world.",

    size: "half",
  },
  {
    name: "Stephen V. David",
    title:
      "Assistant Professor, Oregon Hearing Research Center, Oregon Health and Science University",
    bio:
      "Neuroscience is a new but rapidly growing field, drawing ideas and methodologies from many other fields, including biology, psychology, physics, mathematics and philosophy. Each neuroscientist brings a unique perspective into their work that reflects this diversity. We are studying how academic mentorship, the hands-on training received at the doctoral and postdoctoral level, influences the work of individuals and permits the synthesis of new experimental approaches. Neurotree is a collaborative, open-access website that tracks and visualizes the academic genealogy. After nine years of growth driven by user-generated content, the site has captured information about the mentorship of over 45,000 neuroscientists. It has become a unique tool for a community of primary researchers, students, journal editors, and the press. The database allows us to explore the evolution of new ideas and how mentorship has contributed their development. We are exploring new ways to improve the quality of the existing data and ways to link Neurotree to other datasets, such as publication and grant databases. Inspired by Neurotree's example, genealogies have been launched for a number of other fields under auspices of the Academic Family Tree, which aims to build a single genealogy across all academic fields.",

    size: "half",
  },
  {
    name: "Jessica Flack",
    title:
      "Co-Director, Center for Complexity and Collective Computation, University of Wisconsin-Madison",
    bio:
      "Jessica's research focuses on uncertainty reduction, coarse-graining and collective computation in nature and their role in the origins of biological space-time—that is, the evolution and development of hierarchical structure with multiple, functionally significant time and space scales. Jessica and her colleagues study a wide range of collectives, from group of cells forming neural tissue, to groups of macaques forming animal societies, to groups of online gamers forming virtual societies. Jessica received her BA with honors from Cornell University in 1996, studying anthropology, evolutionary theory, and biology. She received her PhD from Emory University in 2004, studying animal behavior, cognitive science, and evolutionary theory. For the next eight years she was in residence at the Santa Fe Institute, first as a Postdoctoral Fellow and then as Research Professor, and finally as Professor. She moved to the University of Wisconsin, Madison in 2011. Jessica's research has empirical and theoretical components and sits at the interface of evolutionary theory, pattern formation, behavior, cognitive science, computer science, information theory, and statistical mechanics. Although most of her work now is of a computational nature, she has spent thousands of hours collecting large behavioral data sets, including highly resolved time-series, from animal societies, and she conducted the first behavioral knockout study on social systems. In that study, she designed an experiment to disable a critical conflict management function—policing—to quantify its role in social system robustness in an animal society.",

    size: "half",
  },
  {
    name: "Mark Green",
    title: "Professor Emeritus, Mathematics, UCLA",
    bio: "",

    size: "half",
  },
  {
    name: "César A. Hidalgo",
    title: "Assistant Professor, Media Arts and Sciences, MIT Media Lab",
    bio:
      "César A. Hidalgo heads the Macro Connections group at The MIT Media Lab and is also the ABC Career Development Professor of Media Arts and Sciences at MIT. Hidalgo's work focuses on understanding the evolution of information in natural, social, and economic systems, and on the development of big data visualization engines designed to make available unwieldy volumes of data. Hidalgo's academic publications have been cited more than 4,500 times and his visualization engines have received more than 5 million visits. He is the author of Why Information Grows (Penguin UK, Basic Books US, Forthcoming June 2, 2015) and the co-author of The Atlas of Economic Complexity (MIT Press).",

    size: "half",
  },
  {
    name: "Konrad Kording",
    title:
      "Associate Professor, Physical Medicine and Rehabilitation/Physiology, Northwestern University",
    bio:
      "The research of the Bayesian Behavior group shows that movement and movement learning can be understood in terms of statistical principles. Our Sensors (Eyes, Ears, Skin etc) are not perfect but are noisy. Moreover, our muscles are noisy and if we try to do the same movement over and over it will be different each time. This means that if we make a movement, say swing a golf club, we will have uncertainty in the potential movement outcomes. Our group studies how people make movement decisions in the presence of such uncertainty. Our research has four main thrusts: We advance big Data approaches to neuroscience. We study experimentally how people move and how their movements are affected by uncertainty. We build computational models using Bayesian statistics to calculate how people could move optimally or learn to move optimally. We build Bayesian Algorithms to solve problems that we find interesting. For example we analyze how neurons are connected in the nervous system. The main thrust of our current research is to allow for better rehabilitation procedures through an understanding of motor learning. Our lab is part of Northwestern University, Departments Physiology and PM&R. It is associated with Northwestern Department of applied math. Our laboratory is part of the rehabilitation institute of Chicago.",

    size: "half",
  },
  {
    name: "Hannah Landecker",
    title: "Associate Professor, Sociology, UCLA",
    bio:
      "My work takes place at the intersection of the life and social sciences. In general, the social and historical study of biotechnology and life science, from 1900 to now, is my area of specialization. I am currently writing a book called “American Metabolism,” which looks at transformations to the metabolic sciences wrought by the rise of epigenetics, microbiomics, cell signaling and hormone biology. A related project concerns the history of metabolic hormones after 1960 and the rise of the cellular “signal” as a central category of thought and practice in the life sciences.",

    size: "half",
  },
  {
    name: "Christopher Lee",
    title:
      "Professor, Department of Computer Science; Professor, Department of Chemistry & Biochemistry, UCLA",
    bio:
      "Prof. Lee has been a Faculty member in the Department of Chemistry and Biochemistry since 1998. His training provided an unusual combination of experimental cell biology, biophysics, and algorithm development, which he has applied at UCLA to bioinformatics analysis of genome evolution. He has led efforts to establish a bioinformatics Ph.D. program at UCLA. He has served on the Board of Scientific Counselors, NIH National Center for Biotechnology Information, and serves on the editorial board of Biology Direct. His current research focuses on alternative splicing and its role in genome evolution. Research Interest: Bioinformatics: alternative splicing and genome evolution: genome-wide analysis of the types and functions of alternative splicing, and its apparent role in evolution of mammalian genomes. Alternative splicing appears to have greatly accelerated major evolutionary events such as exon creation, and now is an exciting new area of research in genome evolution protein evolutionary pathways. Using a massive dataset of clinical HIV sequences, we have developed new methods to decode the evolutionary pathways by which HIV evolves drug resistance. We have just shown that our methods can measure the detailed “fitness landscape” describing how HIV proteins can evolve, as a kinetic network showing the actual rate of evolution along every possible evolutionary pathway graph databases for bioinformatics and genomics. We have developed a general framework for working with genomic data as an abstract graph database, for fundamental problems such as multiple genome alignment query and protein interaction network analysis.",

    size: "half",
  },
  {
    name: "Hod Lipson",
    title:
      "Associate Professor, Department of Mechanical and Aerospace Engineering, Cornell University",
    bio:
      "Hod Lipson is a professor of engineering at Cornell University in Ithaca, New York, and a co-author of the recent book “Fabricated: The New World of 3D printing”. His work on self-aware and self-replicating robots, food printing, and bio-printing has received widespread media coverage including The New York Times, The Wall Street Journal, Newsweek, Time, CNN, and the National Public Radio. Lipson has co-authored over 200 technical papers and speaks frequently at high-profile venues such as TED and the US National Academies. Hod directs the Creative Machines Lab, which pioneers new ways to make machines that create, and machines that are creative. Research Interests: My relatively broad spectrum of research projects focus on what I consider to be two “grand challenges” of engineering: (a) Can we design machines that can design other machines, and (b) Can we make machines that can make other machines. Both of these questions lie at the crux of understanding the engineering process itself, and progress on these fronts can offer huge leverage in our ability to design, make and maintain increasingly complex systems in the future. Biological life has answered these challenges in ways that dwarf the best teams of human engineers; I therefore use primarily biologically-inspired approaches, as they bring new ideas to engineering and new engineering insight into biology.",

    size: "half",
  },
  {
    name: "Hyot Long",
    title:
      "Associate Professor, Japanese Literature, East Asian Languages and Civilizations; Co-Director, Text Lab, University of Chicago",
    bio:
      "Hoyt comes to Metaknowledge with an interest in how social network analysis, corpus analysis, and other computational methods can facilitate large-scale comparative inquiries into the social dynamics of cultural production. Specifically, he is interested in what these methods can tell us about the diffusion of artistic style and form, the role of formal and informal social ties in shaping such processes, and the emergence of system-level dynamics across linguistic and political boundaries. Along these lines, he Directs a collaborative initiative with Richard Jean So called ‘Text Lab', which applies these methods to the study of global modernism in the early 20th century. Hoyt's research and teaching center on modern Japan, with particular interests in regional literature, publishing history, media and communication, and environmental history. He also has an interest in the application of social-scientific methods to the study of how texts and ideas emerge and circulate within social and material systems. In a current book project, Hoyt joins this sociological interest with his interest in the history of communication in Japan. Specifically, Hoyt looks at how developments in communications technology at the turn of the last century impacted practices of writing, patterns of social association, and ideas of communication itself. Utilizing a variety of materials (epistolary fiction, letter-writing manuals, correspondence magazines), he uncovers emerging fantasies and beliefs about the meaning of connection in a postal age, particularly as they related to changing notions about handwriting, voice, memory, and brevity.",

    size: "half",
  },
  {
    name: "Gary Lupyan",
    title: "Assistant Professor, Psychology, University of Wisconsin Madison",
    bio:
      "Language is one of the defining traits of our species. It, of course, allows for the accumulation and communication of knowledge. But in addition to its uses in communication, the acquisition and use of language appears to augment the human brain in important ways. The aim of my primary line of research is to investigate and delineate these extra-communicative functions of language: How is our ability to place objects into categories altered by language? Does language literally change what we see? How does naming an object affect visual representations? How does using language change our memories? Do people who speak different languages see and remember things differently? Are there ideas that are unthinkable without language? In addition, I have investigated the relationship between grammatical structure and social structure (Lupyan & Dale, 2010) and have a continued interest in the ways that the communicative (and cognitive) needs of a population shape the grammatical structure of languages. I also have a broad interest in the dynamics of neural coding and the way in which perceptual and conceptual representations are dynamically shaped by an individual's goals, expectations, and task context. I have employed a wide range of experimental paradigms and tools to address the questions that interest me. These have included behavioral experiments, neural network modeling, large-scale corpus analysis, eye-tracking, neuroimaging (fMRI), transcranial magnetic stimulation (TMS), and transcranial direct current stimulation (tDCS).",

    size: "half",
  },
  {
    name: "Hoifung Poon",
    title: "Researcher, Microsoft Research",
    bio:
      "I am a researcher at Microsoft Research in Redmond, WA. My research interest is in advancing machine learning and natural language processing to automate discovery in genomics and precision medicine. My most recent work focuses on scaling semantic parsing to Pubmed for extracting biological pathways, and on developing probabilistic methods to incorporate pathways with high-throughput genomics data in cancer system biology. I have received Best Paper Awards in NAACL, EMNLP, and UAI.",

    size: "half",
  },
  {
    name: "Daniel Lord Small",
    title: "Professor, History, Harvard University",
    bio:
      "I am a student of early human history; in my teaching and research, I cover a span of time from humanity's deep history in Africa to Mediterranean Europe in the later middle ages. The overarching intellectual project of my work in recent years has been to identify and develop new frames or narratives for binding human history together into a seamless whole. I work under the assumption that history is not a political science designed to explain the present. It is an anthropological science designed to help us understand humanity. In everything I do, I hope to show how the intellectual projects that drive transnational and global histories work equally well across time, and to offer the deep past as the new intellectual frontier of historical research and historical framing in the twenty-first century.",

    size: "half",
  },
  {
    name: "Richard Jean So",
    title:
      "Assistant Professor, English; Co-Director, Text Lab, University of Chicago",
    bio:
      "Broadly speaking, Richard's teaching and research interests center on modern American literature in a transnational context. Within this area, he is interested in theories of cultural transnationalism, the history of media and communications, and the “Pacific” (which includes U.S., Asian American, and East Asian cultures) as a coherent area of study. Richard also does substantial work in the digital humanities. In particular, he is interested in the use of new computational and social scientific methods, such as text mining, to model a form of textual criticism that mediates between distant and close reading approaches.",

    size: "half",
  },
  {
    name: "Rebecca C. Steorts",
    title: "Assistant Professor of Statistical Science, Duke University",
    bio:
      "Rebecca C. Steorts is an Assistant Professor of Statistical Science at Duke University with affiliations in the information initiative at Duke (iid) and the Social Science Research Institute (SSRI). She received her B.S. in Mathematics in 2005 from Davidson College, her MS in Mathematical Sciences in 2007 from Clemson University, and her PhD in 2012 from the Department of Statistics at the University of Florida under the supervision of Malay Ghosh. She is currently a Visiting Assistant Professor in the Statistics Department at Carnegie Mellon University. Rebecca is a recipient of the Graduate Alumni Fellowship Award (2007-2010) from the University of Florida and the U.S. Census Bureau Dissertation Fellowship Award (2010-2011). In 2011, she was awarded the UF Innovation through Institutional Integration Program (I-Cubed) and NSF for development of an introductory Bayesian course for undergraduates. She has also been awarded Finalist for the 2012 Leonard J. Savage Thesis Award in Applied Methodology. She is interested in scalable computational methods for social science applications. Her current works focuses on recovering high dimensional objects from degraded data and determining how to recover the underlying structure. Methods used for this are entity resolution, small area estimation, locality sensitive hashing, and privacy-preserving record linkage as applied to medical studies, fmri studies, human rights violations, and estimation of poverty rates in hard to reach domains. Her research was on record linkage and sparse clustering was recently funded by the John Templeton Foundation, MetaKnowledge Network Grants Awarded, November 2014. Also, her work on privacy and record linkage was just funded by the National Science Foundation. She was recently named to MIT Technology Review's 35 Innovators Under 35 for 2015 as a humantarian in the field of software. Her work will be profiled in the September/October issue of MIT Technology Review and she will be recognized at a special ceremony along with an invited talk at EmTech in November 2015.",

    size: "half",
  },
  {
    name: "Tim Weininger",
    title:
      "Assistant Professor, Department of Computer Science and Engineering, University of Notre Dame",
    bio:
      "I'm an assistant professor in the College of Engineering at the University of Notre Dame, with appointments in the Interdisciplinary Center for Network Science and Applications (iCeNSA) and the Department of Computer Science and Engineering. I joined the faculty in August 2013, after completing my Ph.D. in Computer Science at the University of Illinois Urbana-Champaign. I work in network science, with a particular focus on multimodal/heterogeneous information networks. My research lies at the intersection of machine learning and databases and information retrieval.",

    size: "half",
  },
  {
    name: "Jevin D. West",
    title: "Assistant Professor, Information School, University of Washington",
    bio:
      "I am an assistant professor in the Information School at the University of Washington. We like maps and information. The research I do aims to map large networks in order to understand the flow of information. I co-founded Eigenfactor.org. This research project aims to rank and map science, in hopes of building better tools for navigating the ever expanding scholarly literature. I have been lucky in my research journal so far. I have had the best graduate and post-doctoral mentors a graduate. I have worked in departments and universities that encourage the type of interdisciplinary work I enjoy doing, and I have pursued questions that keep me thinking inside and outside the lab. I grew up in the small town of Ammon, Idaho. It doesn't house any great scientists, but it does offer close proximity to skiing and the outdoors—something I enjoy very much. I attended Utah Sate University, originally to play tennis and to enjoy some of the best snow on earth. After finishing a bachelor's degree in biology, I took a two year tennis-pro hiatus and traveled. I returned to USU and completed a Masters degree with Keith Mott and David Peak. The research I did with them explored a topic at the cross section of physics, biology and computer science. I looked at how stomatal networks on the surface of a leaf perform a distributed computation. This work hooked my interests to the field of complexity—an area of science that is ambiguous, messy and full of questions that will take generations to sort out. In the fall of 2004, I visited the University of Washington and met with Carl Bergstrom in the Department of Biology. After a three-day conversation in three hours about the role of information in biology, I knew I had found the right place. During my PhD, I was introduced to citation networks as a model system for studying information flow in social and biological systems. It is also ignited my passion for improving scholarly communication and led to the Eigenfactor Project. The project continues to grow and now includes research in mapping, information visualization, gender research, economics of scholarly publishing, and recommendation For my post-doc, I was fortunate to continue working in the area of networks and mapping while working with Martin Rosvall at Umea University (Sweden).",

    size: "half",
  },
  {
    name: "Lynne G. Zucker",
    title:
      "Professor, Department of Sociology; Director, Center for International Science, Technology, and Cultural Policy, UCLA",
    bio:
      "My training is in organizational sociology, institutional theory, economic sociology, and social psychology. My current major interests are on processes and impact of knowledge transmission from basic science to commercial use, especially impact on economic performance of firms, creation of new organizational populations (some of which become new industries), and on productivity growth. I share with Michael Darby an interest in identifying the major mechanisms of knowledge transfer and the institutional infrastructure that cause metamorphic industry change and rapid economic growth. Within the context of basic scientific breakthroughs that are commercially applicable, we are exploring other measures of success such as IPO returns and examining the impact of other means of knowledge transfer such as joint ventures. We are now studying many of the same processes in nanoscience, a newly emerging basic research area with significant commercial potential. To identify institutional infrastructure effects, we are completing a comparative study of biotech in Japan and the U.S. and embarking on a set of major international analyses of the transmission of scientific breakthroughs to commercial use in nanotechnology.",

    size: "half",
  },
];

const klabStudents = [
  {
    name: "Jacob G. Foster",
    title: "Assistant Professor, Sociology, UCLA",
    bio:
      "I was originally trained as a statistical physicist. Like many physicists, I was drawn to the study of complex systems because it licensed me (after a fashion) to work on all sorts of systems that physicists aren't “supposed” to—complex networks, evolutionary dynamics, etc. As a graduate student (in physics), I took a spectacular seminar on classical social theory (Marx, Weber, Durkheim, Parsons, Merton, Elias, etc.). I was instantly converted by rich theoretical and empirical resources of the sociological tradition. Markets, manners, state formation, systems of cultural and scientific production — now here were complex systems! Sociology also looked like it would give me the intellectual space to weave together my quantitative training with long-term passions for the history of ideas, cultural and biological evolution, and interpretive modes of scholarship. After a postdoc in the sociology department at the University of Chicago, I joined the sociology department at UCLA as an assistant professor in 2013. I am interested in the evolution and population dynamics of ideas (broadly construed). How are new ideas born? Why do some spread? What role do ideas play in organizing social structures? And how do social structures affect the genesis, diffusion, and ultimate extinction of ideas? Currently, I work on a particular subset of the world of ideas: the beliefs, practices, and theories that make up scientific knowledge. By fitting rich computational models of discovery and impact to data extracted from articles and patents, I infer the preferences and social processes that give scientific knowledge its particular shape and trajectory. Broadly speaking, I aim to generate new knowledge about the process of knowledge-making; to identify and understand the heuristics, strategies, and institutions that guide scientists as they make sense of the natural world.",

    size: "half",
  },
  {
    name: "Luís Amaral",
    title:
      "Professor, Chemical and Biological Engineering Professor, Medicine; HHMI Early Career Scientist, Northwestern University",
    bio:
      "Professor Amaral, a native of Portugal, conducts and directs research that provides insight into the emergence, evolution, and stability of complex social and biological systems. His research aims to address some of the most pressing challenges facing human societies and the world's ecosystems, including the mitigation of errors in healthcare settings, the characterization of the conditions fostering innovation and creativity, or the growth limits imposed by sustainability. Recently, Amaral proposed the development of cartographic methods for the representation of complex biological networks. These methods will enable researchers to accomplish something similar to what travelers now can easily accomplish with, for example, Google Maps, that is, to glean the important information on a given system at the scale of interest to the researcher. These tools hold the promise to enable biomedical researcher to design or re-engineer biological systems for therapeutic purposes.",

    size: "half",
  },
  {
    name: "David Blei",
    title: "Professor, Statistics and Computer Science, Columbia University",
    bio:
      "I am a professor of Statistics and Computer Science at Columbia University. I am also a member of the Institute for Data Sciences and Engineering. I work in the fields of machine learning and Bayesian statistics. David's Ph.D. advisor was Michael Jordan at U.C. Berkeley Computer Science. David was a postdoctoral researcher with John Lafferty at CMU in the Machine Learning department. His research interests include: Probabilistic graphical models and approximate posterior inference; Topic models, information retrieval, and text processing; Bayesian nonparametric statistics.",

    size: "half",
  },
  {
    name: "Ian Foster",
    title:
      "Director, Computation Institute; Senior Scientist, Mathematics and Computer Science (MCS) at Argonne National Laboratory; Executive Advisory Committee Member and Senior Fellow, Institute for Genomics and Systems Biology (IGSB); Professor, Computer Science, University of Chicago; Professor, Physical Sciences, University of Chicago; Distinguished Fellow, Argonne National Laboratory, University of Chicago",
    bio:
      "Ian Foster is Director of the Computation Institute, a joint institute of the University of Chicago and Argonne National Laboratory. He is also an Argonne Senior Scientist and Distinguished Fellow and the Arthur Holly Compton Distinguished Service Professor of Computer Science. Ian received a BSc (Hons I) degree from the University of Canterbury, New Zealand, and a PhD from Imperial College, United Kingdom, both in computer science. His research deals with distributed, parallel, and data-intensive computing technologies, and innovative applications of those technologies to scientific problems in such domains as climate change and biomedicine. Methods and software developed under his leadership underpin many large national and international cyberinfrastructures.",

    size: "half",
  },

  {
    name: "John P. Ioannidis",
    title:
      "C. F. Rehnborg Professor in Disease Prevention, Medicine; Professor, Health Research & Policy; Professor (By courtesy), Statistics, Stanford University",
    bio:
      "I have worked in the fields of evidence-based medicine, clinical investigation, clinical and molecular epidemiology, clinical research methodology, empirical research methods, statistics, and genomics. I have a strong interest in large-scale evidence (in particular randomized trials and meta-analyses) and in appraisal and control of diverse biases in biomedical research. I am interested in developing and applying new research methods, and in the interdisciplinary enhancement of existing research methods for study design and analysis in biomedicine. Some of my most influential papers in terms of citations are those addressing issues of replication validity of genetic association studies, biases in biomedical research, research synthesis methods, extensions of meta-analysis, genome-wide association studies and agnostic evaluation of associations, and validity of randomized trials and observational research. I have also designed, steered and participated in influential randomized trials (in particular, the major trials that changed decisively the management and outcome of HIV infection, but also trials in nephrology, and in antibiotic use in the community), and large international consortia that have helped transform the efficiency of research in diverse fields of genomic, molecular and clinical epidemiology. I enjoy working with a diverse array of colleagues from very diverse disciplines and to have an opportunity to learn from both senior and junior investigators, and particularly students at all levels.",

    size: "half",
  },
  {
    name: "David Krakauer",
    title:
      "Director, Wisconsin Institute for Discovery; Co-Director, Center for Complexity and Collective Computation; Professor, Genetics, University of Wisconsin, Madison",
    bio:
      "A graduate of the University of London, where he went on to earn a master's degree in computer science and mathematics, David Krakauer received his D.Phil. in evolutionary theory from Oxford University in 1995. He remained at Oxford as a postdoctoral research fellow and two years later was named a Wellcome Research Fellow in mathematical biology and lecturer at Pembroke College. In 1999, he accepted an appointment to the Institute for Advanced Study at Princeton University and served as visiting professor of evolution. He moved on to the Santa Fe Institute as a professor three years later and was made faculty chair in 2009. Krakauer has been a visiting fellow at the Genomics Frontiers Institute at the University of Pennsylvania and a Sage Fellow at the Sage Center for the Study of the Mind at the University of California, Santa Barbara. Krakauer's research focuses on the evolutionary history of information processing mechanisms in biology and culture. This includes genetic, neural, linguistic and cultural mechanisms. The research spans multiple levels of organization, seeking analogous patterns and principles in genetics, cell biology, microbiology and in organismal behavior and society. At the cellular level, Krakauer has been interested in molecular processes, which rely on volatile, error-prone, asynchronous, mechanisms, which can be used as a basis for decision making and patterning. He also investigates how signaling interactions at higher levels, including microbial and organismal, are used to coordinate complex life cycles and social systems, and under what conditions we observe the emergence of proto-grammars. Much of this work is motivated by the search for ‘noisy-design' principles in biology and culture emerging through evolutionary dynamics that span hierarchical structures.",

    size: "half",
  },
  {
    name: "Andrey Rzhetsky",
    title:
      "Professor, Department of Medicine; Professor, Department of Human Genetics; Senior Fellow, Computation Institute; Senior Fellow, Institute for Genomics and Systems Biology, University of Chicago",
    bio:
      "My main interest is in gaining an (asymptotic) understanding how phenotypes, such as human healthy diversity and maladies, are implemented at the level of genes and networks of interacting molecules. To harvest as much information about known molecular interactions as possible, my group runs a large-scale text-mining effort aiming at analysis of a vast corpus of biomedical publications. Currently we can extract from text automatically about 500 distinct flavors of relations among biomedical entities (such as bind, activate, merystilate, and transport). To sharpen our text-mining axes, we are actively designing related models and computational applications. Furthermore, in cooperation with our experimentally talented colleagues, we are striving to use text-mined networks to understand, interpret and refine high- or low-throughput experimental data. We are also computationally generating biological hypotheses that our generous collaborators are attempting to test experimentally. My older passion is in developing and applying computational methods related to phylogenetics and evolutionary biology.",

    size: "half",
  },
  {
    name: "Michael Alfaro",
    title:
      "Associate Professor, Department of Ecology and Evolutionary Biology & Institute for Society and Genetics, UCLA",
    bio:
      "ISG Fellow Dr. Michael Alfaro is an Associate Professor in the Ecology and Evolutionary Biology department where he and ISG Associate Director Dr. Jessica Lynch Alfaro run the UCLA Alfaro Lab. The goal of his research is to understand the factors that govern the evolutionary dynamics of organismal diversification. Why are some groups morphologically diverse? Are there general laws or themes that can be used to explain the uneven distribution of diversity in physiological traits across lineages? Does morphological diversity always signal mechanical, functional, or ecological diversity? To address these questions, Alfaro works largely on marine fishes. His research approach is interdisciplinary and quantitative and crosses traditional boundaries among evolutionary morphology, molecular phylogenetics, and theoretical evolution. He identifies and quantifies organismal diversity using morphological and functional morphological techniques; constructs evolutionary trees and tests evolutionary hypotheses using phylogenetic statistical methods; and uses models of trait evolution to explore form-function dynamics.",

    size: "half",
  },
  {
    name: "Carl Bergstrom",
    title: "Professor, Biology, University of Washington",
    bio:
      "Carl is a professor in the Department of Biology at the University of Washington and a member of the External Faculty at the Santa Fe Institute. He received his bachelor's degree from Harvard University in 1993, where he worked with Naomi Pierce and David Haig. Carl did his Ph.D. work in Biological Sciences at Stanford University with Marc Feldman. processes. After leaving Stanford, he did two years of postdoctoral work at Emory University with Bruce Levin.",

    size: "half",
  },
  {
    name: "Edward Boyden",
    title:
      "Associate Professor, MIT Media Lab and McGovern Institute for Brain Research at MIT, MIT",
    bio:
      "Professor Boyden leads the MIT Media Lab's Synthetic Neurobiology research group, which develops tools for mapping, controlling, observing, and building dynamic circuits of the brain, and uses these neurotechnologies to understand how cognition and emotion arise from brain network operation, as well as to enable systematic repair of intractable brain disorders such as epilepsy, Parkinson's disease, and post-traumatic stress disorder. His research group has invented a suite of “optogenetic” tools that are now in use by thousands of research groups around the world for activating and silencing neurons with light. Boyden was named to the “Top 35 Innovators Under the Age of 35” by Technology Review in 2006, and to the “Top 20 Brains Under Age 40” by Discover magazine in 2008. He has received the Gabbay Award, National Institutes of Health (NIH) Director's Pioneer Award and Transformative Research Award, the Society for Neuroscience Research Award for Innovation in Neuroscience, the NSF CAREER Award, the Paul Allen Distinguished Investigator Award, and the New York Stem Cell Robertson Investigator Award. In 2010, his work was recognized as the “Method of the Year” by the journal Nature Methods. Most recently he shared the 2013 Grete Lundbeck European Brain Research Prize for outstanding contributions to European neuroscience-the largest neuroscience prize in the world.",

    size: "half",
  },
  {
    name: "Stephen V. David",
    title:
      "Assistant Professor, Oregon Hearing Research Center, Oregon Health and Science University",
    bio:
      "Neuroscience is a new but rapidly growing field, drawing ideas and methodologies from many other fields, including biology, psychology, physics, mathematics and philosophy. Each neuroscientist brings a unique perspective into their work that reflects this diversity. We are studying how academic mentorship, the hands-on training received at the doctoral and postdoctoral level, influences the work of individuals and permits the synthesis of new experimental approaches. Neurotree is a collaborative, open-access website that tracks and visualizes the academic genealogy. After nine years of growth driven by user-generated content, the site has captured information about the mentorship of over 45,000 neuroscientists. It has become a unique tool for a community of primary researchers, students, journal editors, and the press. The database allows us to explore the evolution of new ideas and how mentorship has contributed their development. We are exploring new ways to improve the quality of the existing data and ways to link Neurotree to other datasets, such as publication and grant databases. Inspired by Neurotree's example, genealogies have been launched for a number of other fields under auspices of the Academic Family Tree, which aims to build a single genealogy across all academic fields.",

    size: "half",
  },
  {
    name: "Jessica Flack",
    title:
      "Co-Director, Center for Complexity and Collective Computation, University of Wisconsin-Madison",
    bio:
      "Jessica's research focuses on uncertainty reduction, coarse-graining and collective computation in nature and their role in the origins of biological space-time—that is, the evolution and development of hierarchical structure with multiple, functionally significant time and space scales. Jessica and her colleagues study a wide range of collectives, from group of cells forming neural tissue, to groups of macaques forming animal societies, to groups of online gamers forming virtual societies. Jessica received her BA with honors from Cornell University in 1996, studying anthropology, evolutionary theory, and biology. She received her PhD from Emory University in 2004, studying animal behavior, cognitive science, and evolutionary theory. For the next eight years she was in residence at the Santa Fe Institute, first as a Postdoctoral Fellow and then as Research Professor, and finally as Professor. She moved to the University of Wisconsin, Madison in 2011. Jessica's research has empirical and theoretical components and sits at the interface of evolutionary theory, pattern formation, behavior, cognitive science, computer science, information theory, and statistical mechanics. Although most of her work now is of a computational nature, she has spent thousands of hours collecting large behavioral data sets, including highly resolved time-series, from animal societies, and she conducted the first behavioral knockout study on social systems. In that study, she designed an experiment to disable a critical conflict management function—policing—to quantify its role in social system robustness in an animal society.",

    size: "half",
  },
  {
    name: "Mark Green",
    title: "Professor Emeritus, Mathematics, UCLA",
    bio: "",

    size: "half",
  },
  {
    name: "César A. Hidalgo",
    title: "Assistant Professor, Media Arts and Sciences, MIT Media Lab",
    bio:
      "César A. Hidalgo heads the Macro Connections group at The MIT Media Lab and is also the ABC Career Development Professor of Media Arts and Sciences at MIT. Hidalgo's work focuses on understanding the evolution of information in natural, social, and economic systems, and on the development of big data visualization engines designed to make available unwieldy volumes of data. Hidalgo's academic publications have been cited more than 4,500 times and his visualization engines have received more than 5 million visits. He is the author of Why Information Grows (Penguin UK, Basic Books US, Forthcoming June 2, 2015) and the co-author of The Atlas of Economic Complexity (MIT Press).",

    size: "half",
  },
  {
    name: "Konrad Kording",
    title:
      "Associate Professor, Physical Medicine and Rehabilitation/Physiology, Northwestern University",
    bio:
      "The research of the Bayesian Behavior group shows that movement and movement learning can be understood in terms of statistical principles. Our Sensors (Eyes, Ears, Skin etc) are not perfect but are noisy. Moreover, our muscles are noisy and if we try to do the same movement over and over it will be different each time. This means that if we make a movement, say swing a golf club, we will have uncertainty in the potential movement outcomes. Our group studies how people make movement decisions in the presence of such uncertainty. Our research has four main thrusts: We advance big Data approaches to neuroscience. We study experimentally how people move and how their movements are affected by uncertainty. We build computational models using Bayesian statistics to calculate how people could move optimally or learn to move optimally. We build Bayesian Algorithms to solve problems that we find interesting. For example we analyze how neurons are connected in the nervous system. The main thrust of our current research is to allow for better rehabilitation procedures through an understanding of motor learning. Our lab is part of Northwestern University, Departments Physiology and PM&R. It is associated with Northwestern Department of applied math. Our laboratory is part of the rehabilitation institute of Chicago.",

    size: "half",
  },
  {
    name: "Hannah Landecker",
    title: "Associate Professor, Sociology, UCLA",
    bio:
      "My work takes place at the intersection of the life and social sciences. In general, the social and historical study of biotechnology and life science, from 1900 to now, is my area of specialization. I am currently writing a book called “American Metabolism,” which looks at transformations to the metabolic sciences wrought by the rise of epigenetics, microbiomics, cell signaling and hormone biology. A related project concerns the history of metabolic hormones after 1960 and the rise of the cellular “signal” as a central category of thought and practice in the life sciences.",

    size: "half",
  },
  {
    name: "Christopher Lee",
    title:
      "Professor, Department of Computer Science; Professor, Department of Chemistry & Biochemistry, UCLA",
    bio:
      "Prof. Lee has been a Faculty member in the Department of Chemistry and Biochemistry since 1998. His training provided an unusual combination of experimental cell biology, biophysics, and algorithm development, which he has applied at UCLA to bioinformatics analysis of genome evolution. He has led efforts to establish a bioinformatics Ph.D. program at UCLA. He has served on the Board of Scientific Counselors, NIH National Center for Biotechnology Information, and serves on the editorial board of Biology Direct. His current research focuses on alternative splicing and its role in genome evolution. Research Interest: Bioinformatics: alternative splicing and genome evolution: genome-wide analysis of the types and functions of alternative splicing, and its apparent role in evolution of mammalian genomes. Alternative splicing appears to have greatly accelerated major evolutionary events such as exon creation, and now is an exciting new area of research in genome evolution protein evolutionary pathways. Using a massive dataset of clinical HIV sequences, we have developed new methods to decode the evolutionary pathways by which HIV evolves drug resistance. We have just shown that our methods can measure the detailed “fitness landscape” describing how HIV proteins can evolve, as a kinetic network showing the actual rate of evolution along every possible evolutionary pathway graph databases for bioinformatics and genomics. We have developed a general framework for working with genomic data as an abstract graph database, for fundamental problems such as multiple genome alignment query and protein interaction network analysis.",

    size: "half",
  },
  {
    name: "Hod Lipson",
    title:
      "Associate Professor, Department of Mechanical and Aerospace Engineering, Cornell University",
    bio:
      "Hod Lipson is a professor of engineering at Cornell University in Ithaca, New York, and a co-author of the recent book “Fabricated: The New World of 3D printing”. His work on self-aware and self-replicating robots, food printing, and bio-printing has received widespread media coverage including The New York Times, The Wall Street Journal, Newsweek, Time, CNN, and the National Public Radio. Lipson has co-authored over 200 technical papers and speaks frequently at high-profile venues such as TED and the US National Academies. Hod directs the Creative Machines Lab, which pioneers new ways to make machines that create, and machines that are creative. Research Interests: My relatively broad spectrum of research projects focus on what I consider to be two “grand challenges” of engineering: (a) Can we design machines that can design other machines, and (b) Can we make machines that can make other machines. Both of these questions lie at the crux of understanding the engineering process itself, and progress on these fronts can offer huge leverage in our ability to design, make and maintain increasingly complex systems in the future. Biological life has answered these challenges in ways that dwarf the best teams of human engineers; I therefore use primarily biologically-inspired approaches, as they bring new ideas to engineering and new engineering insight into biology.",

    size: "half",
  },
  {
    name: "Hyot Long",
    title:
      "Associate Professor, Japanese Literature, East Asian Languages and Civilizations; Co-Director, Text Lab, University of Chicago",
    bio:
      "Hoyt comes to Metaknowledge with an interest in how social network analysis, corpus analysis, and other computational methods can facilitate large-scale comparative inquiries into the social dynamics of cultural production. Specifically, he is interested in what these methods can tell us about the diffusion of artistic style and form, the role of formal and informal social ties in shaping such processes, and the emergence of system-level dynamics across linguistic and political boundaries. Along these lines, he Directs a collaborative initiative with Richard Jean So called ‘Text Lab', which applies these methods to the study of global modernism in the early 20th century. Hoyt's research and teaching center on modern Japan, with particular interests in regional literature, publishing history, media and communication, and environmental history. He also has an interest in the application of social-scientific methods to the study of how texts and ideas emerge and circulate within social and material systems. In a current book project, Hoyt joins this sociological interest with his interest in the history of communication in Japan. Specifically, Hoyt looks at how developments in communications technology at the turn of the last century impacted practices of writing, patterns of social association, and ideas of communication itself. Utilizing a variety of materials (epistolary fiction, letter-writing manuals, correspondence magazines), he uncovers emerging fantasies and beliefs about the meaning of connection in a postal age, particularly as they related to changing notions about handwriting, voice, memory, and brevity.",

    size: "half",
  },
  {
    name: "Gary Lupyan",
    title: "Assistant Professor, Psychology, University of Wisconsin Madison",
    bio:
      "Language is one of the defining traits of our species. It, of course, allows for the accumulation and communication of knowledge. But in addition to its uses in communication, the acquisition and use of language appears to augment the human brain in important ways. The aim of my primary line of research is to investigate and delineate these extra-communicative functions of language: How is our ability to place objects into categories altered by language? Does language literally change what we see? How does naming an object affect visual representations? How does using language change our memories? Do people who speak different languages see and remember things differently? Are there ideas that are unthinkable without language? In addition, I have investigated the relationship between grammatical structure and social structure (Lupyan & Dale, 2010) and have a continued interest in the ways that the communicative (and cognitive) needs of a population shape the grammatical structure of languages. I also have a broad interest in the dynamics of neural coding and the way in which perceptual and conceptual representations are dynamically shaped by an individual's goals, expectations, and task context. I have employed a wide range of experimental paradigms and tools to address the questions that interest me. These have included behavioral experiments, neural network modeling, large-scale corpus analysis, eye-tracking, neuroimaging (fMRI), transcranial magnetic stimulation (TMS), and transcranial direct current stimulation (tDCS).",

    size: "half",
  },
  {
    name: "Hoifung Poon",
    title: "Researcher, Microsoft Research",
    bio:
      "I am a researcher at Microsoft Research in Redmond, WA. My research interest is in advancing machine learning and natural language processing to automate discovery in genomics and precision medicine. My most recent work focuses on scaling semantic parsing to Pubmed for extracting biological pathways, and on developing probabilistic methods to incorporate pathways with high-throughput genomics data in cancer system biology. I have received Best Paper Awards in NAACL, EMNLP, and UAI.",

    size: "half",
  },
  {
    name: "Daniel Lord Small",
    title: "Professor, History, Harvard University",
    bio:
      "I am a student of early human history; in my teaching and research, I cover a span of time from humanity's deep history in Africa to Mediterranean Europe in the later middle ages. The overarching intellectual project of my work in recent years has been to identify and develop new frames or narratives for binding human history together into a seamless whole. I work under the assumption that history is not a political science designed to explain the present. It is an anthropological science designed to help us understand humanity. In everything I do, I hope to show how the intellectual projects that drive transnational and global histories work equally well across time, and to offer the deep past as the new intellectual frontier of historical research and historical framing in the twenty-first century.",

    size: "half",
  },
];

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
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>{props.bio}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const TabsComponent = () => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState("Affiliated Faculty");
  const [modalShow, setModalShow] = React.useState(false);
  const [openModalIndex, setOpenModalIndex] = useState(null);

  // Function to handle tab click
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            <h2>Leadership</h2>
          </Col>
        </Row>

        <Row>
          {klabLeadership.map((team, index) => {
            return (
              <>
                <Col xs={6} md={2} key={`L${index}`}>
                  <img src={team.bioImg} alt={team.name} />
                </Col>
                <Col xs={6} md={4}>
                  <h2>{team.name}</h2>
                  <p>{team.title}</p>
                  {/* <Link to={team.url}>
                        <button>Read Bio</button>
                      </Link> */}

                  <Button
                    variant="primary"
                    onClick={() => setOpenModalIndex(`L` + index)}
                  >
                    Read Bio <FontAwesomeIcon icon={faCaretRight} />
                  </Button>

                  <CenteredModal
                    show={openModalIndex === `L` + index}
                    onHide={() => setOpenModalIndex(null)}
                    bio={team.bio}
                  />
                </Col>
              </>
            );
          })}
        </Row>
      </Container>
      <Container id="tabs">
        <Row className="team-tabber">
          <Col
            xs={3}
            onClick={() => handleTabClick("Affiliated Faculty")}
            className={activeTab === "Affiliated Faculty" ? "active" : ""}
            style={{ cursor: "pointer" }}
          >
            Affiliated Faculty
          </Col>
          <Col
            xs={3}
            onClick={() => handleTabClick("Researchers and Postdocs")}
            className={activeTab === "Researchers and Postdocs" ? "active" : ""}
            style={{ cursor: "pointer" }}
          >
            Researchers and Postdocs
          </Col>
          <Col
            xs={3}
            onClick={() => handleTabClick("Students")}
            className={activeTab === "Students" ? "active" : ""}
            style={{ cursor: "pointer" }}
          >
            Students
          </Col>
          <Col
            xs={3}
            onClick={() => handleTabClick("Alumni")}
            className={activeTab === "Aluni" ? "active" : ""}
            style={{ cursor: "pointer" }}
          >
            Alumni
          </Col>
        </Row>

        {/* Conditionally render content based on active tab */}
        {activeTab === "Affiliated Faculty" && (
          <Row>
            {klabAffiliated.map((team, index) => {
              return (
                <>
                  <Col
                    xs={team.size === "full" ? 12 : 4}
                    md={team.size === "full" ? 3 : 2}
                    key={`A${index}`}
                  >
                    <img src={team.bioImg} alt={team.name} />
                  </Col>
                  <Col
                    xs={team.size === "full" ? 12 : 8}
                    md={team.size === "full" ? 9 : 4}
                  >
                    <h2>{team.name}</h2>
                    <p>{team.title}</p>
                    {/* <Link to={team.url}>
                        <button>Read Bio</button>
                      </Link> */}

                    <Button
                      variant="primary"
                      onClick={() => setOpenModalIndex(`A` + index)}
                    >
                      Read Bio <FontAwesomeIcon icon={faCaretRight} />
                    </Button>

                    <CenteredModal
                      show={openModalIndex === `A` + index}
                      onHide={() => setOpenModalIndex(null)}
                      bio={team.bio}
                    />
                  </Col>
                </>
              );
            })}
          </Row>
        )}
        {activeTab === "Researchers and Postdocs" && (
          <Row>
            {klabResearchPost.map((team, index) => {
              return (
                <>
                  {team.size === "full" ? (
                    <Row>
                      <Col xs={12} md={3} key={`R${index}`}>
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

                        <Button
                          variant="primary"
                          onClick={() => setOpenModalIndex(`R` + index)}
                        >
                          Read Bio <FontAwesomeIcon icon={faCaretRight} />
                        </Button>

                        <CenteredModal
                          show={openModalIndex === `R` + index}
                          onHide={() => setOpenModalIndex(null)}
                          bio={team.bio}
                        />
                      </Col>
                    </>
                  )}
                </>
              );
            })}
          </Row>
        )}
        {activeTab === "Alumni" && (
          <Row>
            {klabAlumni.map((team, index) => {
              return (
                <>
                  {team.size === "full" ? (
                    <Row>
                      <Col xs={12} md={3} key={`A${index}`}>
                        <img src={team.bioImg} alt={team.name} />
                      </Col>
                      <Col xs={12} md={9}>
                        <h2>{team.name}</h2>
                        <p>{team.title}</p>
                        <Button
                          variant="primary"
                          onClick={() => setOpenModalIndex(`A` + index)}
                        >
                          Read Bio <FontAwesomeIcon icon={faCaretRight} />
                        </Button>

                        <CenteredModal
                          show={openModalIndex === `A` + index}
                          onHide={() => setOpenModalIndex(null)}
                          bio={team.bio}
                        />

                      </Col>
                    </Row>
                  ) : (
                    <>
                      <Col xs={12} md={2}>
                        <img
                          src={team.bioImg}
                          alt={team.name}
                          key={`A${index}`}
                        />
                      </Col>
                      <Col xs={12} md={4}>
                        <h2>{team.name}</h2>
                        <p>{team.title}</p>

                        <Button
                          variant="primary"
                          onClick={() => setOpenModalIndex(`A` + index)}
                        >
                          Read Bio <FontAwesomeIcon icon={faCaretRight} />
                        </Button>

                        <CenteredModal
                          show={openModalIndex === `A` + index}
                          onHide={() => setOpenModalIndex(null)}
                          bio={team.bio}
                        />
                      </Col>
                    </>
                  )}
                </>
              );
            })}
          </Row>
        )}
        {activeTab === "Students" && (
          <Row>
            {klabStudents.map((team, index) => {
              return (
                <>
                  {team.size === "full" ? (
                    <Row>
                      <Col xs={12} md={3}>
                        <img src={team.bioImg} alt={team.name} key={`S${index}`}/>
                      </Col>
                      <Col xs={12} md={9}>
                        <h2>{team.name}</h2>
                        <p>{team.title}</p>
                        <Button
                          variant="primary"
                          onClick={() => setOpenModalIndex(`S` + index)}
                        >
                          Read Bio <FontAwesomeIcon icon={faCaretRight} />
                        </Button>

                        <CenteredModal
                          show={openModalIndex === `S` + index}
                          onHide={() => setOpenModalIndex(null)}
                          bio={team.bio}
                        />
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
                        <Button
                          variant="primary"
                          onClick={() => setOpenModalIndex(`S`+index)}
                        >
                          Read Bio <FontAwesomeIcon icon={faCaretRight} />
                        </Button>

                        <CenteredModal
                          show={openModalIndex === `S`+index}
                          onHide={() => setOpenModalIndex(null)}
                          bio={team.bio}
                        />
                      </Col>
                    </>
                  )}
                </>
              );
            })}
          </Row>
        )}
      </Container>
    </>
  );
};

const Team = () => {
  return (
    <Layout>
      <Nav />

      <Container fluid id="team-header">
        <div className="background"></div>
        <Container>
          <Row>
            <Col xs={12} sm={9}>
              <h1>Knowledge Lab Team</h1>
              <p>
                Our multidisciplinary teams are at the center of everything we
                do. Comprising experts from diverse fields such as data science,
                social sciences, computational modeling, and artificial
                intelligence, we collaborate to push the boundaries of research
                and innovation. Working in partnership with universities,
                industry leaders, and government organizations, we tackle some
                of the most pressing challenges of our time. By blending
                academic rigor with cutting-edge technology, our teams are
                dedicated to generating impactful insights that drive meaningful
                change across sectors.
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
            {" "}
            <TabsComponent />
          </Row>
        </Container>
      </Container>
    </Layout>
  );
};

export const Head = () => <Seo title="Knowledge Lab Team" />;

export default Team;
