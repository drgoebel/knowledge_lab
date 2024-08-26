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
import Austin from "../images/austink.webp";
import Alexis from "../images/alexisp.webp";
import Person from "../images/person.jpg";
import Eamon from "../images/eamon.webp";
import Bowen from "../images/bowenlou.webp"
import Jar from "../images/lou.webp"
import Qixin from "../images/qixin.webp"
import XYang from "../images/xyang.webp"
import Biliotti from "../images/biliotti.webp"
import NWRim from "../images/nwrim.webp"
import Wenxuan from "../images/wenxuan.webp"
import Tong from "../images/tong.webp"
import Yuanyi from "../images/yuanyi.webp"
import Renwu from "../images/renwu.webp"
import Chenlin from "../images/chenlin.webp"

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
    bioImg: Austin,
    bio:
      "I am a doctoral candidate in the Chicago sociology department. My research focuses on the questions of how belief systems are structured and why certain ideas “go together.” By applying state-of-the-art computational methods, I attempt to shed new light on these age-old questions from the sociology of knowledge and culture. At Knowledge Lab, I have developed ways to use word embedding models to discover cultural categories and associations in text. This work has culminated in a recent article, co-authored with James Evans and Matt Taddy, published in the American Sociological Review. I am now engaged in a project with James Evans and Hyunku Kwon that explores how AI can be harnessed for social scientific analysis. Before coming to the University of Chicago, I earned my BA in Sociology at the University of Michigan and worked as a research associate with the Chitwan Valley Family Study at the UM Institute for Social Research. During my time at Michigan, I conducted research on the effects of agricultural technology adoption among subsistence farm households in Nepal.",
    size: "half",
  },
  {
    name: "Alexis Puzon",
    title: "Program Manager at Social Sciences Research Center",
    bio:
      "Experienced Business Administrator with a demonstrated history of working in the higher education industry. Skilled in Human Resources, Office Management, Operations, Recruitment, HRIS, and Campaign Finance. Strong administrative professional with a Master’s Degree (in progress) focused in Liberal Arts and History from Northwestern University.",
    url: "page-2",
    bioLink: "this",
    bioImg: Alexis,
    size: "full",
  },
];

const klabAffiliated = [
  {
    "name": "Eamon Duede",
    "email": "eduede@purdue.edu",
    "affiliation": "Purdue University",
    "bio": "Eamon is an epistemologist of science focusing on three streams of research. His theoretical work in the philosophy of science focuses on the epistemology of emerging technologies, principally artificial intelligence (AI). His empirical work investigates and evaluates roles and capabilities of AI in enhancing the effectiveness and scalability of innovative, data-driven, and algorithm-assisted operational frameworks for scientific discovery.\n\nBefore joining Purdue, Eamon was a Postdoctoral Fellow at Harvard University, affiliated with the Digital Data Design Institute at Harvard Business School and the Embedded EthiCS program in the Philosophy and Computer Science departments. He earned a joint Ph.D. in Philosophy and Conceptual and Historical Studies of Science from the University of Chicago, where he was also an NSF-funded Fellow at the Pritzker School of Molecular Engineering.",
    "website": "https://www.eamonduede.com",
    "publications": [
      {
        "title": "Deep learning opacity in scientific discovery.",
        "journal": "Philosophy of Science",
        "volume": 90,
        "issue": 5,
        "year": 2023,
        "pages": "1089-1099"
      },
      {
        "title": "Instruments, agents, and artificial intelligence: novel epistemic categories of reliability.",
        "journal": "Synthese",
        "volume": 200,
        "issue": 6,
        "year": 2022,
        "pages": "491"
      },
      {
        "title": "Apriori Knowledge in an Era of Computational Opacity: The Role of AI in Mathematical Discovery.",
        "journal": "Philosophy of Science",
        "status": "Forthcoming"
      },
      {
        "title": "Confabulation: The Surprising Value of Large Language Model Hallucinations.",
        "journal": "Proceedings of the 61st Annual Meeting of the Association for Computational Linguistics",
        "year": 2024,
        "status": "Forthcoming"
      }
    ],
    "role": "Affiliate Faculty",
    "bioImg": Eamon
  },
  {
    "name": "Bowen Lou",
    "email": "bowenlou@usc.edu",
    "affiliation": "USC",
    "bio": "Bowen Lou is an Assistant Professor of Data Sciences and Operations at the Marshall School of Business, University of Southern California. Professor Lou’s research primarily lies in economics of artificial intelligence (AI), innovation and entrepreneurship, and future of work. Broadly, he is extremely passionate about studying emerging technology-enabled phenomena in business and society (including but not limited to topics on AI, big data analytics, digital platform, FinTech, healthcare IT, and social media). He works on the new waves of digitization and technological innovation spanning a wide spectrum of industry sectors, by collaborating with leading analytics companies that track technology, labor and innovation trends. Linking macro patterns to micro activities, his studies leverage a variety of interdisciplinary methodologies (including but not limited to bio/chem-informatics, econometrics, game-theoretical modeling, randomized field experiments, machine learning, and network analysis).",
    "website": "https://bowenlou.org/",
    "publications": [
      {
        "title": "Proposing Ties in a Dense Hypergraph of Academics.",
        "journal": "Social Informatics: 7th International Conference, SocInfo 2015",
        "location": "Beijing, China",
        "year": 2015,
        "pages": "209-226",
        "publisher": "Springer International Publishing"
      },
      {
        "title": "AI on Drugs: Can Artificial Intelligence Accelerate Drug Development? Evidence from a Large-Scale Examination of Bio-Pharma Firms.",
        "journal": "MIS Quarterly",
        "volume": 45,
        "issue": 3,
        "year": 2021,
        "pages": "1451-1482"
      },
      {
        "title": "Innovation Strategy After IPO: How AI Analytics Spurs Innovation After IPO.",
        "journal": "Management Science",
        "year": 2024
      },
      {
        "title": "Unintended Consequences of Advances in Matching Technologies: Information Revelation and Strategic Participation on Gig-economy Platforms.",
        "journal": "Management Science",
        "volume": 70,
        "issue": 3,
        "year": 2024,
        "pages": "1729-1754"
      },
      {
        "title": "Artificial Intelligence, CEO Turnover, and Directional Change in Firm Innovation.",
        "journal": "ICIS 2023 Proceedings",
        "year": 2023
      }
    ],
    "role": "Affiliate Faculty",
    "bioImg": Bowen
  },
  {
    "name": "Jar-Der Luo",
    "email": "jarderluo@126.com",
    "affiliation": "Tsinghua University",
    "bio": "Jar-Der is a Joint Appointed Professor, Social Science School and Public Administration School, Tsinghua University (Beijing), Chief Editor, Journal of Social Computing, and PI, Tsinghua U. Computational Social Sciences & National Governance Lab, Social Sec. He earned his Ph.D degree in Sociology Dept. of State U. of New York at Stony Brook. He researches numerous topics in social network studies, including social capital, trust, social network in big data, network dynamics, emergence of collective intelligence, self-organization process and Chinese indigenous management researches, such as guanxi, guanxi circle, favor exchange, Yin and Yang, and dynamic balance theory.",
    "role": "Affiliate Faculty",
    "bioImg": Jar
  },
  {
    "name": "Iyad Rahwan",
    "email": "rahwan@mpib-berlin.mpg.de",
    "affiliation": "MPG-Berlin",
    "bio": "Iyad Rahwan is director of the Max Planck Institute for Human Development in Berlin, where he founded and directs the Center for Humans & Machines. He is also an honorary professor of Electrical Engineering and Computer Science at the Technical University of Berlin. Prior to moving to Berlin, he was an Associate Professor of Media Arts & Sciences at the Massachusetts Institute of Technology (MIT). A native of Aleppo, Syria, Rahwan holds a PhD from the University of Melbourne, Australia.",
    "website": "https://www.rahwan.me/",
    "publications": [
      {
        "title": "The moral machine experiment.",
        "journal": "Nature",
        "volume": 563,
        "issue": 7729,
        "year": 2018,
        "pages": "59-64"
      },
      {
        "title": "Machine culture.",
        "journal": "Nature Human Behaviour",
        "volume": 7,
        "issue": 11,
        "year": 2023,
        "pages": "1855-1868"
      },
      {
        "title": "Machine behaviour.",
        "journal": "Nature",
        "volume": 568,
        "issue": 7753,
        "year": 2019,
        "pages": "477-486"
      },
      {
        "title": "Time-critical social mobilization.",
        "journal": "Science",
        "volume": 334,
        "issue": 6055,
        "year": 2011,
        "pages": "509-512"
      },
      {
        "title": "Cooperating with machines.",
        "journal": "Nature Communications",
        "volume": 9,
        "issue": 1,
        "year": 2018,
        "pages": "233"
      }
    ],
    "role": "Affiliate Faculty",
    "bioImg": "https://urldefense.com/v3/__https://www.rahwan.me/s/Iyad_Rahwan_3452-cropped.jpg__;!!BpyFHLRN4TMTrA!7yS3nkmD7wSgw2KKC7D7pPMlXFNmSttUjWeHHzAUuRS3c0nC3PS5kt3O4-cLIazGcxr7nMyKlaC5lVmiaQLm_CEwVis$"
  },
  {
    "name": "Lingfei Wu",
    "email": "wlf850927@gmail.com",
    "affiliation": "University of Pittsburgh",
    "bio": "Lingfei Wu is an Assistant Professor of Information Science at the University of Pittsburgh. He leverages big data, complexity sciences, and AI to understand how science and technology can advance through collaborative teamwork, contributing to the field of Team Science and Innovation. His research has been published in Nature and PNAS and featured in The New York Times, The Atlantic, and Scientific American, earning him accolades such as the NSF Career Award and Oxford Martin School Fellowship. Wu also advises organizations like Novo Nordisk Fonden and John Templeton Foundation on research evaluation.",
    "website": "https://lingfeiwu.github.io/",
    "publications": [
      {
        "title": "Flat teams drive scientific innovation.",
        "journal": "Proceedings of the National Academy of Sciences",
        "volume": 119,
        "issue": 23,
        "year": 2022,
        "pages": "e2200927119"
      },
      {
        "title": "Large teams develop and small teams disrupt science and technology.",
        "journal": "Nature",
        "volume": 566,
        "issue": 7744,
        "year": 2019,
        "pages": "378-382"
      },
      {
        "title": "Skill discrepancies between research, education, and jobs reveal the critical need to supply soft skills for the data economy.",
        "journal": "Proceedings of the National Academy of Sciences",
        "volume": 115,
        "issue": 50,
        "year": 2018,
        "pages": "12630-12637"
      }
    ],
    "role": "Affiliate Faculty",
    "bioImg": Person
  },
  {
    "name": "Ufuk Akcigit",
    "email": "uakcigit@uchicago.edu",
    "affiliation": "University of Chicago",
    "role": "Affiliate Faculty",
    "bioImg": Person
  },
  {
    "name": "Yong-Yeol Ahn",
    "email": "yyahn@iu.edu",
    "affiliation": "Indiana University",
    "role": "Affiliate Faculty",
    "bioImg": Person
  },
  {
    "name": "Chenhao Tan",
    "email": "chenhao@uchicago.edu",
    "affiliation": "University of Chicago",
    "role": "Affiliate Faculty",
    "bioImg": Person
  },
  {
    "name": "Ben Blaiszik",
    "email": "blaiszik@uchicago.edu",
    "affiliation": "University of Chicago",
    "role": "Affiliate Faculty",
    "bioImg": Person
  },
  {
    "name": "Lav Varshney",
    "email": "varshney@illinois.edu",
    "affiliation": "University of Illinois",
    "role": "Affiliate Faculty",
    "bioImg": Person
  },
  {
    "name": "Ian Foster",
    "email": "foster@uchicago.edu",
    "affiliation": "University of Chicago",
    "role": "Affiliate Faculty",
    "bioImg": Person
  },
  {
    "name": "Bernard Koch",
    "email": "bernardkoch@uchicago.edu",
    "affiliation": "University of Chicago",
    "bio": "Bernard Koch is an assistant professor in the sociology department. His research develops and deploys mechanistic models to explain the evolution of scientific and cultural fields. Current questions include how AI became dominated by deep learning, why problematic race science persists in psychology, and how music genres develop. He also has eccentric interests in deep learning, causal inference, networks & Bayesian modeling. His work has been published at Sociological Methods and Research, Sociological Methodology, NeurIPS, and WWW, among other venues.",
    "website": "https://bernardjkoch.com",
    "publications": [
      {
        "title": "Deep Learning for Causal Inference.",
        "journal": "Sociological Methods & Research",
        "authors": [
          "Koch BJ",
          "Sainburg T",
          "Geraldo PE",
          "Jiang S",
          "Sun Y",
          "Foster JG"
        ]
      },
      {
        "title": "Reduced, reused and recycled: The life of a machine learning dataset.",
        "journal": "NeurIPS",
        "year": 2021,
        "pages": "1-13",
        "presentation_type": "oral"
      },
      {
        "title": "HINTS: time series prediction via dynamic heterogeneous information network embedding.",
        "journal": "WWW",
        "year": 2021,
        "pages": "3158-3167"
      },
      {
        "title": "Uncovering sociological effect heterogeneity using tree-based machine learning.",
        "journal": "Sociological Methodology",
        "year": 2021,
        "pages": "189-223"
      }
    ],
    "role": "Affiliate Faculty",
    "bioImg": Person
  }
]

const klabResearchPost = [
  {
    "name": "Yujin Potter",
    "email": "yujinyujin9393@gmail.com",
    "institution": "UC Berkeley",
    "bio": "She is currently a postdoc in EECS at UC Berkeley. Her interests span a wide range of topics within AI alignment/ethics, including examining the societal impacts of AI, identifying AI misalignment, studying AI behaviors in multi-agent settings, and addressing AI bias. Previously, she conducted research on decentralization technologies such as blockchain, DeFi, and DAOs. Before joining UC Berkeley, she got a PhD from KAIST.",
    "publications": "Evolving AI Collectives to Enhance Human Diversity and Enable Self-Regulation, ICML 2024",
    "position": "Affiliate Postdoc",
    "bioImg": Person,
  },
  {
    "name": "Shilin Jia",
    "email": "shilinj@stanford.edu",
    "institution": "Stanford University",
    "bio": "Shilin Jia is the 2023-24 Shorenstein Postdoctoral Fellow on Contemporary Asia at Stanford University. His scholarly interest lies in applying computational methods to the study of political culture and organizations, with a special focus on post-reform China. Shilin’s research analyzes job transfers of Communist Party elites in China by using machine learning to code party elites' CVs. His objective is to grasp the evolution of the party-state through the division of labor and circulation of its elite members. He also conducts a computational content analysis of 60 years of the People's Daily, the official mouthpiece of the Communist Party of China, tracking ideological changes. More recently, He has been working on building a hundred years of word-embedding models based on multiple languages of Google N-grams and studying identity formation and international relations across language communities. Shilin received a Ph.D. in sociology from the University of Chicago.",
    "website": "https://shevajia.github.io/",
    "position": "Affiliate Postdoc",
    "bioImg": Person,
  },
  {
    "name": "Haochuan Cui",
    "email": "hcui94@hotmail.com",
    "institution": "Beijing Normal University",
    "bio": "Haochuan earned his PhD in School of System Sciences at Beijing Normal University. He is the Pre-Assistant Professor of School of Information Management at Nanjing University. His interests focus on the complexity of cognitive behavior within scientific discovery and knowledge diffusion. He is currently using big language models and network analysis techniques to study the influence of workforce aging on Science and Technology and the labor division within organizations.",
    "website": "https://hashc.github.io/about/",
    "position": "Affiliate Researcher",
    "bioImg": Person,
    "additionalLink": "https://drive.google.com/file/d/1t1Y_O7Lzb05SEcU62Zw2Xjn3oaKWpmYR/view?usp=drive_link"
  },
  {
    "name": "Chris Esposito",
    "email": "Christopher.Esposito@anderson.ucla.edu",
    "institution": "UCLA",
    "bio": "Chris is the Osborne Postdoctoral Fellow at the UCLA Anderson School of Management. He studies innovation in science and technology using computational and econometric techniques. His dissertation developed centuries of new historical data to uncover the common processes that cities pass through as they emerge as centers for innovation. More recently, he has studied knowledge obsolescence and its impact on the changing structure of the innovative economy. In ongoing collaborations with the Knowledge Lab, he is analyzing the shifting balance of global power in scientific and technological innovation.",
    "website": "http://cresposito.com",
    "publications": [
      "https://academic.oup.com/joeg/article/23/1/209/6646557",
      "https://www.sciencedirect.com/science/article/pii/S004873332300094X",
      "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4444732#:~:text=Linking%20age%20and%20death%20information,inventors%20who%20lose%20mid%2Dcareer",
      "https://arxiv.org/abs/2406.05917"
    ],
    "position": "Affiliate Researcher",
    "bioImg": Person,
    "additionalLink": "https://drive.google.com/file/d/1s8TtY31eFUhMi564UgoLn94trUxo29yf/view?usp=drive_link"
  },
  {
    "name": "Doug Guilbeault",
    "email": "dguilb@stanford.edu",
    "institution": "Stanford University",
    "bio": "Guilbeault received dual bachelor’s degrees in philosophy and rhetoric (with a minor in cognitive science) from the University of Waterloo, an MA in Cognitive Linguistics from the University of British Columbia, and a PhD from the University of Pennsylvania’s Annenberg School for Communication. He is co-director of the Berkeley-Stanford Computational Culture Lab, and a founding member of the theoretical cognitive science and machine learning collective comp-syn (“computational synesthesia”). His work has appeared in a number of top journals, including Nature, Nature Communications, The Proceedings of the National Academy of the Sciences, and Management Science, as well as in popular news outlets, such as The Atlantic, Wired, and The Harvard Business Review. He has received top research awards from The International Conference on Computational Social Science, The Cognitive Science Society, and The International Communication Association.",
    "website": "https://www.gsb.stanford.edu/faculty-research/faculty/douglas-r-guilbeault",
    "publications": [
      "Guilbeault, Douglas, Solene Delecourt, Tasker Hull, Bhargav Srinivasa Desikan, Mark Chu, and Ethan Nadler. 2024. Online Images Amplify Gender Bias. Nature. Best Paper Award, 2022 International Conference on Computational Social Science.",
      "Nadler, Ethan, Elise Darragh-Ford, Bhargav Srinivasa Desikan, Christian Conaway, Mark Chu, Tasker Hull, and Douglas Guilbeault. Divergences in Color Perception between Deep Neural Networks and Humans. Cognition (241): 105621.",
      "Chu, Mark, Bhargav Desikan, Ethan Nadler, Ruggiero Lo Sardo, Elise Dallagh-Ford, Douglas Guilbeault. Signal in Noise: Exploring Meaning Encoded in Random Character Sequences with Character-Aware Language Models. Proceedings of the 60th Annual Meeting of the Association for Computational Linguistics.",
      "Guilbeault, Douglas and Damon Centola. Topological Measures for Identifying and Predicting the Spread of Complex Contagions. Nature Communications 12 (4430).",
      "Guilbeault, Douglas, Andrea Baronchelli, and Damon Centola. Experimental Evidence for Scale Induced Category Convergence across Populations. Nature Communications 12 (327).",
      "Desikan, Bhargav, Tasker Hull, Ethan Nadler, Douglas Guilbeault, Aabir Abubaker, Mark Chu, Ruggiero Lo Sardo. Compsyn: Perceptually Grounded Word Embeddings with Color. Proceedings of the 28th International Conference on Computational Linguistics (COLING @ ACL).",
      "Guilbeault, Douglas, Ethan Nadler, Mark Chu, Ruggiero Lo Sardo, Aabir Abubaker, and Bhargav Desikan. Color Associations in Abstract Semantic Domains. Cognition (201): 104306."
    ],
    "position": "Affiliate Researcher",
    "bioImg": Person,
    "additionalLink": "https://drive.google.com/file/d/1GK7ZiEyYljr0s-Xy6UxfTywoAXJe8zbU/view?usp=drive_link"
  },
  {
    "name": "Partha Kadambi",
    "email": "parthaskadambi@gmail.com",
    "institution": "tbd",
    "bio": "tbd",
    "position": "Affiliate Researcher",
    "bioImg": Person,
  },
  {
    "name": "Alejandro Sarria-Morales",
    "email": "asarria@uchicago.edu",
    "institution": "University of Chicago",
    "bio": "Alejandro is currently pursuing a Masters in Computational Social Science at the University of Chicago. He is interested in computational approaches to Latin American political communication, with a focus on the intersection of emotion, ideology, and populism in political speech. His research aims to uncover how these factors contribute to novel understandings of politics in Latin America. Alejandro’s current work involves analyzing presidential addresses and large-scale corpora using natural language processing to identify emergent political ideological categories. Before coming to Chicago, he earned a B.A. in Psychology with minors in Economics and Comparative Political Science, from the University of the Andes in Bogotá, Colombia.",
    "position": "Affiliate Researcher",
    "bioImg": Person,
    "additionalLink": "https://drive.google.com/file/d/1QMvzkofNbXoTXjSJHpl1iaKsha-V0ZfT/view?usp=drive_link"
  },
  {
    "name": "Bill Shi",
    "email": "fbillshi@gmail.com",
    "institution": "Pond",
    "bio": "Bill has been wearing multiple hats – researcher, engineer, and lately, tech adventurer. Currently, he is the co-founder and CTO of Pond, a startup focused on building the foundation model for crypto AI. Throughout his career, whether in industry (TigerGraph, Amazon) or academia (UNC, UChicago), Bill has been driven by a passion for applying mathematical modeling and machine learning to solve real-world challenges. His work spans a wide range of fields, from graph AI, recommender systems, to computational social science and biomedicine.",
    "website": "https://www.billshi.net/",
    "publications": [
      "Zhang, Yang; Shi, Feng; The micro-foundations of elite politics: conversation networks and elite conflict during China’s reform era,Theory and Society,53,1,193-237,2024",
      "Shi, Feng; Evans, James; Surprising combinations of research contents and contexts are related to impact and emerge with scientific outsiders from distant disciplines,Nature Communications,14,1,1641,2023",
      "Evans, James; Shi, Feng; Sourati, Jamshid; Systems and methods for high-order modeling of predictive hypotheses,,,,,2022",
      "Ke, Zheng Tracy; Shi, Feng; Xia, Dong; Community detection for hypergraph networks via regularized tensor power iteration,arXiv preprint arXiv:1909.06503,,,,2019",
      "Shi, Feng; Teplitskiy, Misha; Duede, Eamon; Evans, James A; The wisdom of polarized crowds,Nature human behaviour,3,4,329-336,2019",
      "Gerow, Aaron; Zhou, Mingyang; Matwin, Stan; Shi, Feng; Reflexive Regular Equivalence for Bipartite Data,Advances in Artificial Intelligence: 30th Canadian Conference on Artificial Intelligence, Canadian AI 2017, Edmonton, AB, Canada, May 16-19, 2017, Proceedings 30,,,71-77,2017",
      "Shi, Feng; Shi, Yongren; Dokshin, Fedor A; Evans, James A; Macy, Michael W; Millions of online book co-purchases reveal partisan differences in the consumption of science,Nature Human Behaviour,1,4,0079,2017",
      "Shi, Feng; Foster, Jacob G; Evans, James A; Weaving the fabric of science: Dynamic network models of science's unfolding structure,Social Networks,43,,73-85,2015"
    ],
    "position": "Affiliate Researcher",
    "bioImg": Person,
    "additionalLink": "https://drive.google.com/file/d/1PVchSEg62x3cK0WyS8BiFFcQ3w8AQtTw/view?usp=drive_link"
  },
  {
    "name": "Nicolás Torres-Echeverry",
    "email": "nte@uchicago.edu",
    "institution": "University of Chicago",
    "bio": "tbd",
    "position": "Affiliate Researcher",
    "bioImg": Person,
  },
  {
    "name": "Dashun Wang",
    "email": "dashun.wang@kellogg.northwestern.edu",
    "institution": "Northwestern University",
    "bio": "Dashun Wang is a Professor of Management and Organizations at the Kellogg School of Management, and the McCormick School of Engineering, at Northwestern University. At Kellogg, he is the Founding Co-Director of the Ryan Institute on Complexity and the Founding Director of the Center for Science of Science and Innovation (CSSI). He is also a core faculty at the Northwestern Institute on Complex Systems (NICO). Dashun is a recipient of multiple awards for his research and teaching, including the AFOSR Young Investigator award, Poets & Quants Best 40 Under 40 Professors, Junior Scientific Award from the Complex Systems Society, the Erdos-Renyi Prize, Thinkers50 Radar 2021, and more.",
    "website": "www.dashunwang.com",
    "publications": "https://www.dashunwang.com/academic-articles.",
    "position": "Affiliate Researcher",
    "bioImg": Person,
    "additionalLink": "https://drive.google.com/file/d/1x54WQ5dPRj955B9_HC_DGNEMf2SMOFwk/view?usp=drive_link"
  },
  {
    "name": "Zhao Wang",
    "email": "zwang13@uchicago.edu",
    "institution": "University of Chicago",
    "bio": "Dr. Wang is an Assistant Instructional Professor in the Masters in Computational Social Science program at The University of Chicago. She is a computer scientist focusing on machine learning, natural language processing, causal inference, and social network analysis. Her research leverages computer science techniques to analyze large-scale online data and explore problems of social importance.",
    "website": "https://zhaowang-uc.github.io/",
    "publications": [
      "Identifying spurious correlations for robust text classification",
      "Robustness to spurious correlations in text classification via automatically generated counterfactuals",
      "Enhancing model robustness and fairness with causality: A regularization approach"
    ],
    "position": "Affiliate Researcher",
    "bioImg": Person,
    "additionalLink": "https://drive.google.com/file/d/1Gp5La4RU6S-2wAh5xS4vlXLGGMej-eUA/view?usp=drive_link"
  },
  {
    "name": "Dan Weld",
    "email": "danw@alllenai.org",
    "institution": "Allen Institute",
    "bio": "Daniel S. Weld is Chief Scientist and General Manager of Semantic Scholar at the Allen Institute of Artificial Intelligence and Professor Emeritus at the University of Washington. After formative education at Phillips Academy, he received bachelor’s degrees in both Computer Science and Biochemistry at Yale University in 1982 and a Ph.D. from the MIT Artificial Intelligence Lab in 1988. Weld received a Presidential Young Investigator’s award and an Office of Naval Research Young Investigator’s award; he is a Fellow of the Association for Artificial Intelligence (AAAI), the American Association for the Advancement of Science (AAAS), and the Association for Computing Machinery (ACM).",
    "website": "https://www.cs.washington.edu/people/faculty/weld/",
    "position": "Affiliate Researcher",
    "bioImg": Person,
    "additionalLink": "https://drive.google.com/file/d/1MEWhzw7k9eyxpNCxz-q2Gd39reIJBZL0/view?usp=drive_link"
  },
  {
    "name": "Haizi Yu",
    "email": "haiziyu@uchicago.edu",
    "institution": "University of Chicago",
    "bio": "Haizi has a Ph.D. in Computer Science. His research interests include white-box AGI, interpretable machine learning, automatic knowledge discovery, and music intelligence. He received his doctoral degree from the University of Illinois at Urbana-Champaign, his M.S. degree in Computer Science from Stanford University, and his B.S. degree from the Department of Automation at Tsinghua University.",
    "position": "Affiliate Researcher",
    "bioImg": Person,
    "additionalLink": "https://drive.google.com/file/d/1LdiAciLoFfQ6BYP3_KlDKptI5eEfli5K/view?usp=drive_link"
  }
]

const klabStudents = [
  {
    "name": "Qixin Lin",
    "email": "qxlin@uchicago.edu",
    "institution": "University of Chicago",
    "bio": "Qixin is a second-year master's student in the Computational Social Science program with a concentration in sociology at the University of Chicago. Leveraging a diverse computational toolkit that includes text analysis, Large Language Models (LLMs) and various modeling techniques, she investigates complex datasets to understand the intricate dynamics of labor markets and knowledge networks. Her research interests lie at the intersections of labor, working skills and employment issues, ambitiously aiming to enhance access to quality jobs and career opportunities while bolstering workers' rights and well-being. Beyond her core research, Qixin is passionate about interdisciplinary approaches and complex systems, actively expanding her expertise in fields such as ecology and physics - a curiosity that extends to all forms of new knowledge, experiences, and food.",
    "website": "https://qixin-lin.github.io/",
    "title": "Masters Student",
    "bioImg": Qixin
  },
  {
    "name": "Xiaodi Yang",
    "email": "xiaodiyang@uchicago.edu",
    "institution": "University of Chicago",
    "bio": "Xiaodi Yang is a master's student in the Social Sciences Program at the University of Chicago. She uses language models to study how people form group cognition and ideologies through social contagion, with a focus on the role of digital media technologies in this process. She is also curious about the transformations in knowledge production brought about by AI technologies. Before joining the University of Chicago, she earned her bachelor's degree in sociology from Xi'an Jiaotong University. Her undergraduate research primarily focused on social network relationships and interpersonal communication.",
    "website": "",
    "title": "Masters Student",
    "bioImg": XYang
  },
  {
    "name": "Carolina Biliotti",
    "email": "carolina.biliotti@imtlucca.it",
    "institution": "IMT School for Advanced Studies Lucca, Italy",
    "bio": "Carolina Biliotti is a fourth-year PhD student in Economics, Networks and Business Analytics (ENBA) at the IMT School for Advanced Studies Lucca, and a visiting student at Knowledge Lab. Her research interests include applications of causal inference, econometrics, and machine learning, focusing on policy evaluation and gender bias in science. At Knowledge Lab, her purpose is to investigate the interplay of gender, recognition, and innovation within the scientific community. She received a Bachelor’s degree in Political Sciences and a Master’s degree in Economics from the University of Florence.",
    "website": "https://www.researchgate.net/profile/Carolina-Biliotti",
    "title": "PhD Student",
    "bioImg": Biliotti
  },
  {
    "name": "Shiyang Lai",
    "email": "shiyanglai@uchicago.edu",
    "institution": "",
    "bio": "I am a Ph.D. student in the Department of Sociology at the University of Chicago. Before this, I held a visiting fellow position at Northwestern University's Kellogg School of Management and received an M.A. in Computational Social Science from the University of Chicago. My current research agenda broadly encompasses societal computing and collective intelligence. In societal computing, I am developing a new computational framework to model social entities and systems, drawing inspiration from quantum physics. This approach aims to introduce a new lens for understanding the social world and to improve inference and predictions of a wide range of social activities, with an initial focus on scientific and technological innovations. In the realm of collective intelligence, my work explores the emergence of the wisdom of crowds and how it can be more effectively harnessed in open environments with minimal regulations from an evolutionary perspective. My scope extends beyond merely human entities to include artificial intelligence, acknowledging their increasing significance in the contemporary landscape of social learning.",
    "website": "https://shiyang-term.com/",
    "title": "PhD Student",
    "bioImg": Person
  },
  {
    "name": "Ningzi Li",
    "email": "ningzi@uchicago.edu",
    "institution": "University of Chicago",
    "bio": "Ningzi is a professional research specialist at the Data Science Institute (DSI) and an adjunct assistant professor at the Booth School of Business at the University of Chicago. She obtained Ph.D. in sociology from Cornell University. Ningzi studies communication and behavior in organizations. She particularly focuses on how firms strategically communicate to influence stakeholder behaviors in the context of earnings calls, venture capital investments, and ESG reports. She also studies how stakeholders' communication influences firm behaviors in the context of employee reviews and product recalls. Her analysis heavily relies on natural experiments and natural language processing tools.",
    "website": "http://ningzili.com",
    "title": "PhD Student",
    "bioImg": Person
  },
  {
    "name": "Chen Lin",
    "email": "lchencu@connect.ust.hk",
    "institution": "Hong Kong University of Science and Technology",
    "bio": "Lin is currently a near-graduating CS PhD candidate at the Hong Kong University of Science and Technology. She visited Knowledge Lab in 2022~2023. Her research interests lie in data-driven understanding of human-place visitation and human-human interaction patterns in complex urban environments, specifically focusing on topics including inequality, segregation, and resilience. She is also exploring using large language models for network learning and Science of Science (collective research attention).",
    "website": "https://linchen-65.github.io/linchen/",
    "publications": [
      "Chen, L., Xu, F., Han, Z., Tang, K., Hui, P., Evans, J. and Li, Y., 2022. Strategic COVID-19 vaccine distribution can simultaneously elevate social utility and equity. Nature Human Behaviour, 6(11), pp.1503-1514.",
      "Zhang, Y., Xu, F., Chen, L., Yuan, Y., Evans, J., Bettencourt, L. and Li, Y., 2024. Counterfactual mobility network embedding reveals prevalent accessibility gaps in US cities. Humanities and Social Sciences Communications, 11(1), pp.1-12."
    ],
    "title": "PhD Student",
    "bioImg": Chenlin
  },
  {
    "name": "Hongkai Mao",
    "email": "hm404@stanford.edu",
    "institution": "Stanford University",
    "bio": "Hongkai Mao is a PhD student in the Organizational Behavior Program at the Graduate School of Business, Stanford University. His research focuses on negative social interactions, such as toxicity, conflicts, and polarization, across both interpersonal and organizational levels. He aims to understand how people perceive their surroundings and how these perceptions can lead to unfavorable behavior in a socio-techno environment. As a potential approach to achieving this, he is interested in leveraging Large Language Models as digital doubles for simulated experiments to explore these complex dynamics.",
    "website": "",
    "title": "PhD Student",
    "bioImg": Person
  },
  {
    "name": "Rui Pan",
    "email": "rui.pan@kellogg.northwestern.edu",
    "institution": "Northwestern University",
    "bio": "tbd",
    "website": "tbd",
    "title": "PhD Student",
    "bioImg": Person
  },
  {
    "name": "Nakwon Rim",
    "email": "nwrim@uchicago.edu",
    "institution": "University of Chicago",
    "bio": "Nakwon is a Ph.D. student in the Department of Psychology at the University of Chicago. He is interested in how people represent and compress information about the complex environment around us and how that information gives rise to innovations, cognitive processes, and/or biases. Before coming to the University of Chicago, he received his bachelor's degree in Psychology and Brain Cognitive Science from Korea University.",
    "website": "https://nwrim.github.io/",
    "title": "PhD Student",
    "bioImg": NWRim
  },
  {
    "name": "Wenxuan Shi",
    "email": "wenxuanshi@whu.edu.cn",
    "institution": "Wuhan University",
    "bio": "Wenxuan Shi is a Ph.D. candidate at the School of Information Management, Wuhan University, China. She has been affiliated with the Knowledge Lab since June 2022. Her research centers on the science of science and scientific evaluation, with a particular focus on the processes of knowledge combination and innovation diffusion, the career trajectories of scientists, and the composition of research teams. Her work aims to provide insights that help scientists better organize and lead teams to foster scientific innovation and breakthroughs.",
    "website": "",
    "publications": [
      "Shi, W., & Wu, R. (2024). Women’s Strength in Science: Exploring the Influence of Female Participation on Research Impact and Innovation. Scientometrics, 129(7), 4529-4551.",
      "Tang, X., Shi, W., Wu, R., & Li, S. (2023). The expansion of team size in library and information science (LIS): Is bigger always better? Journal of Information Science, 01655515231204800."
    ],
    "title": "PhD Student",
    "bioImg": Wenxuan
  },
  {
    "name": "Haohan Shi",
    "email": "haohanshi2028@u.northwestern.edu",
    "institution": "Northwestern University",
    "bio": "Haohan Shi is a Ph.D. student in the Media, Technology, and Society program at Northwestern University. At Northwestern, he collaborates in the Lab on Innovation, Networks, and Knowledge under the guidance of Dr. Agnes Horvat. He is broadly interested in misinformation, the science of science, online democracy, computational social science, and AI for social good. His work focuses on advancing online scholarly communication and promoting the democratization of science through digital science dissemination. He holds an M.A. in Computational Social Science from the University of Chicago and a B.S. in Mathematics/Computer Science and Psychology/Linguistics from Emory University.",
    "website": "https://hshi420.github.io/",
    "title": "PhD Student",
    "bioImg": Person
  },
  {
    "name": "Di Tong",
    "email": "ditong@mit.edu",
    "institution": "MIT",
    "bio": "Di is a PhD candidate at MIT Sloan school of management, affiliated with the Institute for Work and Employment Research. Her research interests include organizational change, sociology of work, inequality, and social activism. She applies computational text analyses to study how firms respond to institutional, social, economic, and technological environments to change the organization of work and workers. She graduated with a M.A. in Computational Social Science from the University of Chicago and a B.A. in English Language and Literature from Tsinghua University.",
    "website": "https://di-tong.github.io/",
    "title": "PhD Student",
    "bioImg": Tong
  },
  {
    "name": "Renli Wu",
    "email": "renly@uchicago.edu",
    "institution": "Wuhan University",
    "bio": "Renli Wu is a Ph.D. candidate at the School of Information Management, Wuhan University. He has been training at the Knowledge Lab for two years, since October 2021. His research primarily focuses on the Science of Science and Information Science, investigating the evolution of disciplines and cross-disciplinary knowledge flows. This encompasses examining the heterogeneity and differentiation in knowledge diffusion across various fields, uncovering hierarchies and biases within disciplinary networks, and studying the emergence and aging of domains. His work aims to provide valuable insights into the occurrence of innovations and the propagation of knowledge across different domains. Additionally, his studies delve into the dynamics of scientific teams and the career trajectories of scientists, exploring aspects such as team leadership, team size, and gender. Moving forward, he aims to explore the potential of leveraging LLMs and AI to discover new perspectives and make predictions about knowledge creation and scientific innovation.",
    "website": "",
    "title": "PhD Student",
    "bioImg": Renwu
  },
  {
    "name": "Yuanyi Zhen",
    "email": "zhenyy21@maills.tsinghua.edu.cn",
    "institution": "Tsinghua University",
    "bio": "Yuanyi Zhen is a Ph.D. candidate in the Sociology Department at Tsinghua University and has been visiting the Knowledge Lab since March 2023. Her academic interests focus on the science of science, computational social science, and the sociology of science. Specifically, she seeks to understand how national culture, values, and norms shape the social relationships between innovators and how they influence disruptive innovation, tracing these social dynamics and mechanisms using network simulations and computational methods such as NLP and machine learning. Yuanyi holds a master's degree in Educational Technology from Beijing Normal University, specializing in Artificial Intelligence in Education (AIED), with a focus on the automatic construction of knowledge graphs in computer-supported collaborative learning and the evaluation of intelligent tools.",
    "website": "https://scholar.google.com/citations?user=tQm_0ZAAAAAJ&hl=zh-CN&oi=ao",
    "title": "PhD Student",
    "bioImg": Yuanyi
  },
  {
    "name": "Hyunku Kwon",
    "email": "hyunkukwon@uchicago.edu",
    "institution": "University of Chicago",
    "bio": "Hyunku Kwon is a PhD candidate in sociology at the University of Chicago. He uses computational and geostatistical methods to study political economy, race, and the environment in the Postbellum US South, with a focus on agricultural land use arrangements, labor contracts and cotton. His dissertation examines the role that Black federal troops played in shaping land use (e.g., plantations, sharecropping, etc.) and crop monoculture in the Postbellum US South. His research has been published or is forthcoming in the American Political Science Review and Sociological Science. Before joining the University of Chicago, he received a BA in Public Administration and Political Science from Yonsei University.",
    "website": "hyunkukwon.com",
    "publications": [
      "“Black Troops, White Rage, and Political Violence in the Postbellum American South,” forthcoming in the American Political Science Review (with Joshua Byun)",
      "“Subjective Political Polarization,” Sociological Science, 2023 (with John Levi Martin)"
    ],
    "title": "PhD Student",
    "bioImg": Person
  },
  {
    "name": "Honglin Bao",
    "email": "honglinbao@uchicago.edu",
    "institution": "University of Chicago",
    "bio": "Honglin Bao (he/him) is a doctoral student in the Knowledge Lab and Data Science Institute at the University of Chicago. His research focuses on uncovering the driving forces behind science and innovation. In his research he uses and develops computational tools, including network analysis, machine learning, and simulation modeling.",
    "website": "www.hbao.info",
    "title": "PhD Student",
    "bioImg": Person
  }
]


const klabAlumni = [
  {
    name: "Aabir Abubaker Kar",
    title: "Graduate student, University of Chicago",
    bio:
      "Aabir is currently pursuing an MA in Computational Social Science at The University of Chicago expected May 2021). At the Knowledge Lab, he is using NLP and embedding methods to analyze textual data on job advertisements to better understand up-skilling, labor markets, and teams. He has a BE in Engineering and an MSc in Physics from BITS Pilani, Goa Campus in India - as well as a Minor Certificate in Philosophy, Economics and Politics. He has previously worked on research at the New England Complex Systems Institute and the International Centre for Theoretical Sciences, Bangalore. His research interests are in complex socioeconomic systems - social stratification, information propagation, economic flows amongst them. Methodologically, he works with machine learning, networks, statistics, physics - and enjoys exploring their applications to other disciplines.",
    size: "half",
    bioImg: Person
  },
  {
    name: "Shahab Asoodeh",
    title: "Postdoctoral Scholar, University of Chicago",
    bio:
      "I am interested in the applications of discrete (differential) geometry and information theory in machine learning and network science. In particular, my main research at the Knowledge Lab focuses on the following two broad questions: 1) How to quantify geometry of graphs, simplicial complexes, and more generally, hypergraphs and to interpret them in real-world networks? And 2) How to use geometry and information theory to define and quantify fairness and privacy in machine learning and data mining? I am fortunate to work with James Evans at the Knowledge Lab and Ishanu Chattopadhyay at the Institute of Genomics and System Biology (IGSB). I received my PhD and MSc both in applied mathematics from Queen's University, Canada, in 2017 and 2011 and a MSc in Electrical Engineering from ETH Zurich and TU Delft in 2010.",
    size: "half",
    bioImg: Person
  },
  {
    name: "Megan Barnes",
    title: "Student, University of Chicago",
    bio:
      "I graduated from the University of Chicago, studying linguistics and computer science. I am interested in language processing as well as data processing techniques, like machine learning, that help us better understand humans. At Knowledge Lab, I worked on a project to create maps of research activity in key topical areas of interest to research funding agencies. The maps could reveal and help funders analyze a) levels of research activity, b) who is participating, c) and in which topics. Also, I love music, Twitter, comedy, and the Pacific Northwest. I am currently working for an early stage startup in New York City.",
    size: "half",
    bioImg: Person
  },
  {
    name: "Alexander Belikov",
    title: "Postdoctoral Scholar, University of Chicago",
    bio:
      "Alexander Belikov is interested in applications of machine learning and natural language processing to social phenomena and texts. Of particular interest to him are the relation extraction and the convergence of social consensus, which can be studied in conjunction. Alexander received his B.S. and M.S. from the Moscow Institute of Physics and Technology and his PhD in physics from the University of Chicago. Prior to joining the Knowledge Lab, he held a two-year postdoc at the Institut d'Astrophysique de Paris. He also worked as a quantitative researcher in wholesale risk modeling at JP Morgan Chase and later at the exotic equity derivatives desk at Barclays Capital in New York.",
    size: "half",
    bioImg: Person
  },
  {
    name: "Cody Braun",
    title: "IMB",
    bio:
      "Cody is a masters student in computer science, a veteran of several tech startups, and a University of North Carolina alumnus. Though he is currently studying high-performance computing, machine learning, and data analysis, his wide range of past experiences include jobs at small-town Southern newspapers, Portuguese olive farms, and Australian construction companies. Among other projects, he is currently working on a browser plugin designed to detect phishing, a bound ePaper book dynamically populated by a web crawler, and a handful of Arduino-based gadgets.",
    size: "half",
    bioImg: Person
  },
  {
    name: "William Catino",
    title: "Principal Software Engineer, University of Chicago",
    bio:
      "William earned a PhD in Electrical and Computer Engineering at the Illinois Institute of Technology in 1997, under the guidance of Joseph L. LoCicero and Henry Stark. His research topic was Constrained Optimization Algorithms for Image Processing, applied to Hologram design. In addition to working at several technology companies, he spent a large portion of his career as an independent consultant. His work has spanned, and often integrated, a variety of areas, including: Adaptive Stochastic Signal Processing, applied to Telecommunications, Efficient / High-Performance Software Implementation, Video Games and Computer Graphics, Simulation and Modeling of Physical and Virtual Systems, Optimization Algorithms, Pattern Recognition, Artificial Intelligence. William currently serves as a Principal Software Engineer for the Knowledge Lab at the University of Chicago, focusing on Database Design and Programming, Machine Learning and Natural Language Processing.",
    size: "half",
    bioImg: Person
  },
  {
    name: "Brendan Chambers",
    title: "Postdoctoral Scholar, University of Chicago",
    bio:
      "Brendan is a creative data scientist specializing in complex interconnected systems. He performed his PhD research in the MacLean Laboratory for Cortical Circuits and Network Neuroscience, studying emergent activity patterns in the neurons of neocortex. His current work is situated at the intersection between machine learning, communication networks, and the sociology of science. Brendan has been recognized as an NSF S-STEM Fellow in Computation & Modeling and an NSF IGERT Fellow in the Neural Control of Movement. His work in collaboration with Dr. Jason MacLean was nominated for a Hot Topic Award by the Society for Neuroscience and distinguished as a Top 50 Most-Downloaded Article by PLOS Computational Biology. Brendan grew up in Iowa and studied computer science at Oberlin College. He is a hobbyist electronic musician and climber. You can find him on Twitter via @societyoftrees.",
    size: "half",
    bioImg: Person
  },
  {
    name: "Yo Hoong “YJ” Choe",
    title: "PhD Student, Machine Learning, Carnegie Mellon",
    bio:
      "I am a PhD student studying Machine Learning at Carnegie Mellon. I was born and raised in Seoul, South Korea. I am broadly interested in the theory of machine learning as well as its applications to social models.",
    size: "half",
    bioImg: Person
  },
  {
    name: "Valentin Danchev",
    title: "Postdoctoral Scholar, University of Chicago",
    bio:
      "Valentin Danchev is a computational sociologist. He uses network analysis, computational models, text analysis, and large-scale databases to study how patterns of connectivity in social, spatial, and semantic networks influence differences in outcomes, such as replicable discoveries, innovation, mobility opportunities, and inequality. At Knowledge Lab, Valentin conducts a large-scale evaluation of the robustness and replicability of tens of thousands of research results published in the biomedical literature and examines what network structures of scientific communities contribute to robust, replicable discoveries. He also examines the interplay of social, biological, and organizational mechanisms inducing robust innovations in oncology research. Valentin holds a DPhil (PhD) in Development Studies from the University of Oxford, where he was also affiliated with the networks research group at the Mathematical Institute. Prior to that, he received his MA from the University of Essex and his BA from the University of Sofia, both in Sociology.",
    size: "half",
    bioImg: Person
  },
  {
    name: "Alexander Dunlap",
    title: "PhD Student, Mathematics, Stanford University",
    bio:
      "Mathematics PhD student at Stanford. I am interested in machine learning and, more generally, using quantitative ideas to understand complex problems. In my free time I enjoy bicycling and baking.",
    size: "half",
    bioImg: Person
  },
  {
    name: "Aaron Gerow",
    title: "Post-doctoral Scholar, Knowledge Lab",
    bio:
      "I grew up in and around Chicago, went to college in Tacoma at Pacific Lutheran University studying computer science and philosophy, liberal arts style. I received my masters degree from University College Dublin in cognitive science and I began my PhD at Trinity in the Fall of 2010. In September, 2013, I submitted my PhD in computational linguistics and started work at the Knowledge Lab as a post-doctoral scholar. My interests have clustered around novel and large-scale natural language processing and figurative language, both with a distinct slant toward cognitive and social sciences. I'm interested, specifically, in how large data-sets of structured linguistic information relate to patterns of information use. One example is tracking how people's description of stock-markets relate to the markets themselves, or tracking trends in the grammatical context of key terms in a corpus. As part of the Knowledge Lab, I hope to explore the how emergent properties of text and information influence the dynamics of knowledge creation and use.",
    size: "half",
    bioImg: Person
  },
  {
    name: "Anuraag Girdhar",
    title:
      "First-year student in the MA program in Computational Social Science",
    bio:
      "While conferring with Professor Mark Granovetter at Stanford, he spent the past year studying how the structure of social networks affects opinion polarization. He is more broadly interested in operationalizing notions of objective truth and theory of mind on social networks. He is also interested in extending these ideas to designing social networks that optimize social good. Anuraag has an A.B. in Mathematics and Economics from Dartmouth College. Prior to arriving at the University of Chicago, he spent four years in private industry working as a pharmaceutical statistician at Gilead Sciences, and as an economic research associate at Bridgewater Associates.",
    size: "half",
    bioImg: Person
  },
  {
    name: "Clara del Junco",
    title: "Postdoctoral Scholar, University of Chicago",
    bio:
      "My research interests include characterizing and promoting diversity in scientific research, and the importance of language and social context in science-how concepts flow and meaning changes between scientific fields and popular discourse. Before joining the Knowledge Lab in autumn 2020, I did a PhD in theoretical chemistry at the Vaikuntanathan lab at the University of Chicago. My thesis explored how consuming energy allows biological and physical systems to adapt and operate robustly in noisy environments. Personal website: https://cdeljunco.github.io/me/",
    size: "half",
    bioImg: Person
  },
  {
    name: "Molly Lewis",
    title: "Special Faculty, Carnegie Mellon University",
    bio:
      "My research focuses on understanding how linguistic meaning-semantic space-is acquired in cognitive development, changes over historical time, and varies cross-linguistically. I am also interested in issues related to scientific replicability and reproducibility. I received my PhD in Developmental Psychology from Stanford University, where I worked with Michael Frank. Before that, I received a BA in Linguistics from Reed College. At the Knowledge Lab, my work examined cross-linguistic variability in the alignment of linguistic meaning using large scale corpora. I was co-advised by James Evans at the Knowledge Lab and Gary Lupyan in the Psychology Department at the University of Wisconsin-Madison. I am currently a faculty member in the Department of Psychology and Social and Decision sciences at Carnegie Mellon University. My personal website: http://www.andrew.cmu.edu/user/mollylew/",
    size: "half",
    bioImg: Person
  },
  {
    name: "Linzhou Li",
    title: "Graduate student, University of Chicago",
    bio:
      "I am a PhD student in Chicago Sociology Department. My research interest is mostly related to economic and cultural change. More specifically, I made efforts in understanding questions such as the substitution and generalization of social, cultural and ideological values; reasoning based upon (and constrained by) the cultural system; and the self-organization of local financial and economic behaviors. I employ intensively state-of-the-art computational methods as well as traditional ethnographic tools to guide my research. A most recent project of mine applies a new embedding technique to embed words and tags into hyperbolic space to uncover the hidden hierarchical structure of 21st century physics. I am also collaborating with my colleague Shilin Jia to uncover cultural and ideological autonomy using China's newspaper People's Daily from 1946 to 2003. Before coming to Chicago, I received my BA and MA degree from Tsinghua University.",
    size: "half",
    bioImg: Person
  },
  {
    name: "Bowen Lou",
    title: "PhD Student, University of Pennsylvania, Wharton",
    bio:
      "Completed my masters study in computer science from University of Chicago and am currently a PhD Student at Wharton. I am a data enthusiast, and passionate about using large amounts of data to solve real world problems. I'm specifically interested in applying or proposing solutions from statistical, natural language processing, and network science in order to understand latent patterns under large-scale texts about individuals and organizations from social media, digital publications and the World Wide Web.",
    size: "half",
    bioImg: Person
  },
  {
    name: "Grace Lu",
    title: "Student, Uber",
    bio:
      "Grace works on self-driving cars at Uber. Grace graduated from the college double majoring in Computer Science and Economics from northeast Ohio. She is interested in big data, data analytics, social media trends, language processing, and using technology to create applications in a variety of different fields. At the Knowledge Lab, she worked on a project to map Wikipedia to understand how past revision history can lead to the creation of new pages. In her free time, she enjoys playing tennis, music, and traveling.",
    size: "half",
    bioImg: Person
  },
  {
    name: "Reid Mcllroy-Young",
    title: "Researcher at Knowledge Lab",
    bio:
      "I have a Masters in Computational Social Science from the University of Chicago and was a researcher at Knowledge Lab. My current research is on developing new machine learning techniques that are useful in the social sciences. What insights into human nature are present in the mass behavior of people? I have primarily worked with collections of source code and bibliographic sources to examine these, but as my PhD progresses I hope to expand the domain. At Knowledge Lab I primarily participated in two projects. First, a collection of Jupyter Notebooks to help with James Evans' Content Analysis class, these are detailed examples working through problems relevant to many social scientists, such as entity extraction, auto-encoders or model selection. Secondly, I was the main researcher on quarter million Sloan grant to study how programming languages impact science and thought with James Evans and Gary Lupyan.",
    size: "half",
    bioImg: Person
  },
  {
    name: "Deblina Mukherjee",
    title: "Undergraduate student, University of Chicago",
    bio:
      "I'm a fourth year in the College at UChicago, majoring in Sociology and minoring in Computer Science and Statistics. I am interested broadly in computational and applied math, both as method and as a field of inquiry in the tradition of science studies. At the Knowledge Lab, I'm working on Genesweep (which is a thesis project investigating the relationship between scientists and games), and with Jerimiah Milbauer and Yutao Chen on the Sloan Languages Project (which is investigating how programming languages shape thought). Personal website: https://deblina.net",
    size: "half",
    bioImg: Person
  },
  {
    name: "Prateeti Mohapatra",
    title: "Research Engineer - Modeling and Simulation, Knowledge Lab",
    bio:
      "My background is in Statistical Modeling and Analysis, System Dynamics, Speech Processing and Software Engineering. I have also worked in the areas of Parallel Programming, Numerical Methods, Requirements Engineering, Life-cycle Cost Modeling, and Global Software Development at Research Centers (Central Research Laboratory, India, ABB Corporate Research Center, India, and Flash Center for Computational Science, UChicago, USA) and Software Industries (The Mathworks). My current work focuses on developing reliable and scalable data warehouse systems for data contained in different repositories in both structured and unstructured format. I am also currently working on feature identification/extraction from text objects as well as their classification using various machine learning approaches.",
    size: "half",
    bioImg: Person
  },
  {
    name: "Chris Natoli",
    title: "PhD student in Mathematics at CUNY Graduate Center",
    bio:
      "I like learning about and using machine learning and probabilistic methods to rigorously study problems in the social sciences. I care a lot about the left, history, and New York City.",
    size: "half",
    bioImg: Person
  },
  {
    name: "Nate Sauder",
    title: "Develop deep learning algorithms for medical image diagnosis",
    bio: "",
    size: "half",
    bioImg: Person
  },
  {
    name: "Nandana Sengupta",
    title: "Postdoctoral Scholar, University of Chicago",
    bio:
      "My research revolves around improving the predictive performance of traditional Econometric models using modern Statistics and Machine Learning. I'm very interested in developing these techniques with a special focus on Public Policy applications. I am currently a doctoral candidate of Economics at the Tepper School of Business, Carnegie Mellon University. I also hold a Bachelor's degree in Physics from St. Stephen's College (New Delhi, India) and a Master's degree in Development Economics from Indira Gandhi Institute of Development Research (Mumbai, India). I've had the opportunity to participate in a number of interdisciplinary research groups including the Machine Learning in Social Sciences group at Carnegie Mellon University and the Computational Social Science Workshop at the Santa Fe Institute. I'm looking forward to continuing this line of work at the Knowledge Lab, where my projects will include developing computational tools to more deeply engage user input as well as developing new techniques to assess and predict the impact of academic research.",
    size: "half",
    bioImg: Person
  },
  {
    name: "Feng “Bill” Shi",
    title: "Applied Mathematics Researcher",
    bio:
      "My background is in applied mathematics, and complex networks in particular. I have been working on various interacting particle systems such as the evolving voter model, percolation of nanocomposites, and virus-antibody interactions. My work currently focuses on understanding the processes that generate and shape the knowledge in scientific systems, for example, the beliefs, preferences, biases, and strategies that guide scientists in their exploration of the natural world. This research is embedded in a large interdisciplinary collaboration to understand the creation, dissemination, and limit of human knowledge.",
    size: "half",
    bioImg: Person
  },
  {
    name: "Taweewat “Champ” Somboonpanyakul",
    title: "PhD student in Physics at MIT",
    bio:
      "I am originally from Thailand. I have some experience in Astrophysics, specifically gravitational lensing and exoplanets, but I am also interested in social parts of science, and, in particular, how humans gather new knowledge in science.",
    size: "half",
    bioImg: Person
  },
  {
    name: "Jamshid Sourati",
    title: "Postdoctoral Scholar, University of Chicago",
    bio:
      "My research interest revolves around machine learning and its applications in discovering underlying patterns in real-world data. At the Knowledge lab, my goal is to apply computational tools for processing enormous textual data sets and to develop novel learning models that give better insights into how humans think and interact collectively. I received my doctorate in Electrical and Computer Engineering at Northeastern University. During the course of my Ph.D., my focus was primarily on generic analysis of learning models in theoretical levels. Prior to joining Knowledge lab, as a post-doctoral researcher in Harvard medical school, I conducted research in development and rigorous analysis of machine learning algorithms for automatic medical image processing.",
    size: "half",
    bioImg: Person
  },
  {
    name: "Bhargav Srinivasa Desikan",
    title: "Ph.D. Candidate in Computer Science at EPFL",
    bio:
      "Bhargav is a Research Fellow at the Knowledge Lab, currently working with Prof. Evans on a book titled 'Thinking with Deep Learning', where they are trying to work towards a sophisticated deep learning powered approach to representations of social objects. He previously received an MA in Computational Social Science from the University of Chicago, and his research interests lie in the intersection of AI and the social sciences: using computational tools to probe questions of social behavior, as well as critically examining the effects which the information age has had on our species and planet. He has previously co-authored publications in the Journal of Machine Learning Research, the proceedings of the International Conference on Computational Linguistics, and Cognition, and has authored a book on NLP and Computational Linguistics with Python.",
    size: "half",
    bioImg: Person
  },
  {
    name: "Misha Teplitsky",
    title: "Ph.D. in Sociology from the University of Chicago",
    bio:
      "I was a Graduate Research Fellow at KnowledgeLab. My research focuses on academic publishing, particularly on how scientists evaluate the work of others. How do scientists decide if a finding is worthy of publication, and how valid are these judgments? To answer these questions I examine the peer review files of academic journals using a variety of machine learning and text processing techniques. I am also engaged in a variety of collaborative projects. In a KnowledgeLab project with James Evans, we test the robustness of a large sample of claims published in social science journals by testing them on out-of-sample data and 'perturbing' the model specifications. In another KnowledgeLab project with Eamon Duede and Grace Lu, we study which scientific findings move from the scientific literature to Wikipedia.",
    size: "half",
    bioImg: Person
  },
  {
    name: "Di Tong",
    title: "Graduate Student, University of Chicago",
    bio:
      "I'm a student in the Computational Social Science Master's program with a concentration in sociology. My major research interest lies in stratification and inequality, political sociology as well as computational text analysis. Specifically, I'm interested in studying political discourse, cultural norms, public perceptions and attitudes regarding distributive justice; the causes and consequences of economic disparities and the social conditions that mediate and moderate these processes. Currently, at the Knowledge lab, I'm applying word embedding techniques on massive-scale job ads data to examine the underlying geometry of skill coordination that shapes social lives centered at the labor division. I'm also working on a project that examines the relationship between perceived inequality and political trust in East Asian societies. My previous work utilizes topic modeling to trace the transforming biopolitics in China from 1956-2003 through the lens of the changing official discourse on the birth planning policy. Before coming to Chicago, I completed my undergraduate degree at Tsinghua University majoring in English Language and Literature.",
    size: "half",
    bioImg: Person
  },
  {
    name: "Lingfei Wu",
    title: "Postdoctoral Scholar, University of Chicago",
    bio:
      "My research interest is the sciences of collaboration and innovation. I apply mathematical models and machine learning techniques to analyze collective knowledge production systems, including Web of Science, U.S. patents, Stack Exchange, GitHub. My works were published in journals including Nature, Physical Review E, Scientific Reports, PloS ONE, and also generated broad interest among diverse audiences in New Scientists and Science Daily. I got my PhD in Communication from the City University of Hong Kong in 2013. Overlapping with the PhD program I spent a year in Baidu as an algorithm engineer (internship). I joined Knowledge Lab in 2016 after working two years in the Center for Behavior, Institutions and the Environment at Arizona State University as a post-doc researcher. I am a core member of Swarma Club, a research network in Beijing with a vision to bridge academia, industry, and government.",
      size: "half",
    bioImg: Person
  }
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
         
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{props.name}</h4>
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
                    name={team.name}
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
            className={activeTab === "Alumni" ? "active" : ""}
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
                 <Col xs={6} sm={3}>
                 <Row>
                 <Col xs={12}>
                  
                    <img src={team.bioImg} alt={team.name} />
                  </Col>
                  <Col
                    xs={12}
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
                      name={team.name}
                    />
                  </Col></Row>
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
                    <Col xs={6} sm={3}><Row>
                    
                      <Col xs={12}>
                        <img src={team.bioImg} alt={team.name} />
                      </Col>
                      <Col xs={12}>
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
                          name={team.name}
                        />
                      </Col>
                      </Row></Col>
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
                          name={team.name}
                        />

                      </Col>
                    </Row>
                  ) : (
                    <>

                    <Col xs={6} sm={3}><Row>
                      <Col xs={12}>
                        <img
                          src={team.bioImg}
                          alt={team.name}
                          key={`A${index}`}
                        />
                      </Col>
                      <Col xs={12}>
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
                          name={team.name}
                        />
                      </Col>
                      </Row></Col>
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
                          name={team.name}
                        />
                      </Col>
                    </Row>
                  ) : (
                    <>
                    <Col xs={6} sm={3}><Row>
                      <Col xs={12}>
                        <img src={team.bioImg} alt={team.name} />
                      </Col>
                      <Col xs={12}>
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
                          name={team.name}
                        />
                      </Col>
                      </Row></Col>
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
