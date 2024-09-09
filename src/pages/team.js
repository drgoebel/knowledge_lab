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
import Bowen from "../images/bowenlou.webp";
import Jar from "../images/jarder.webp";
import Ufuk from "../images/ufuk.webp";
import Qixin from "../images/qixin.webp";
import XYang from "../images/xyang.webp";
import Biliotti from "../images/biliotti.webp";
import NWRim from "../images/nwrim.webp";
import Wenxuan from "../images/wenxuan.webp";
import Tong from "../images/tong.webp";
import Yuanyi from "../images/yuanyi.webp";
import Renwu from "../images/renwu.webp";
import Chenlin from "../images/chenlin.webp";
import Iyad from "../images/iyad.webp";
import Zhao from "../images/zhao.webp";
import Danw from "../images/danw.webp";
import Danh from "../images/danh.webp";
import Ling from "../images/lingfei.webp";
import Misha from "../images/misha.webp";
import Dashun from "../images/dashun.webp";
import Dougg from "../images/dougg.webp";
import Donghyung from "../images/donghyung.webp";
import Fang from "../images/fang.webp";
import Esposito from "../images/esposito.webp";
import Cui from "../images/cui.webp";
import Haiziyu from "../images/haiziyu.webp";
import Bhargav from "../images/bhargav.webp";
import Billshi from "../images/billshi.webp";
import Mollyl from "../images/mollyl.webp";
import Muhua from "../images/muhua.webp";
import Jacy from "../images/jacy.webp";
import Sarria from "../images/sarria.webp";
import Partha from "../images/partha.webp";
import Hsing from "../images/hsin.jpg";
import BernardK from "../images/bernardk.webp";
import YongY from "../images/yongy.webp";
import BenB from "../images/benb.webp";
import LevinB from "../images/levinb.webp";
import IshanuC from "../images/ishanuc.webp";
import DouglasD from "../images/douglasd.webp";
import IanF from "../images/ianf.webp";
import JoshuaJ from "../images/joshuaj.webp";
import RuiP from "../images/ruip.webp";
import JamshidS from "../images/jamshids.webp";
import ChenhaoT from "../images/chenhaot.webp";
import LavV from "../images/lavv.webp";
import DavidW from "../images/davidw.webp";
import AaronS from "../images/aarons.webp";
import FengliX from "../images/fenglix.webp";
import PeteA from "../images/petea.webp";
import JeffreyL from "../images/jeffreyl.webp"
import NadvK from "../images/nadavk.webp"
import ShilinJ from "../images/shilinj.webp"
import YujinP from "../images/yujinp.webp"
import NingiL from "../images/ningzil.webp"

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
    title: "Assistant Director and Senior Research Associate at Knowledge Lab",
    bioImg: Austin,
    bio:
      "Austin Kozlowski is the Assistant Director and Senior Research Associate at the Knowledge Lab. His work combines machine learning with theories of culture to investigate how ideas come together to form systems of meaning, both in human and in algorithms. He has published research on the evolution of political polarization, the roles of status and politics in the social sciences, and the representation of cultural categories in neural network models of language. In his current research, Kozlowski is developing techniques to explore the “world models” contained within large language models and multimodal AI systems. He leads the AI Interpretability Group at Knowledge Lab.",
    size: "half",
  },
  {
    name: "Alexis Puzon",
    title: "Program Manager at Social Sciences Research Center",
    bio:
      "Alexis Puzon is the program manager for research centers and team science in the Social Sciences Research Center (SSRC). She supports research initiatives across the social science division. Prior to joining SSRC, Alexis was the Assistant Director of the Center for International Social Science Research (CISSR) at the University of Chicago, where she gained experience supporting global faculty research around the world. Before that, she was the HR/Faculty Affairs manager for the Department of Psychiatry and Behavioral Sciences at Northwestern University. She has a Bachelor’s Degree from the University of Wisconsin-Madison in Political Science and History with minors in European Studies and Medieval Studies. She also completed graduate courses at Northwestern University in Liberal Arts with a focus on history and media studies.",
    url: "page-2",
    bioLink: "this",
    bioImg: Alexis,
    size: "full",
  },
];

const klabAffiliated = [
  {
    name: "Eamon Duede",
    email: "eduede@purdue.edu",
    affiliation: "Purdue University",
    bio:
      "Eamon is an epistemologist of science focusing on three streams of research. His theoretical work in the philosophy of science focuses on the epistemology of emerging technologies, principally artificial intelligence (AI). His empirical work investigates and evaluates roles and capabilities of AI in enhancing the effectiveness and scalability of innovative, data-driven, and algorithm-assisted operational frameworks for scientific discovery.\n\nBefore joining Purdue, Eamon was a Postdoctoral Fellow at Harvard University, affiliated with the Digital Data Design Institute at Harvard Business School and the Embedded EthiCS program in the Philosophy and Computer Science departments. He earned a joint Ph.D. in Philosophy and Conceptual and Historical Studies of Science from the University of Chicago, where he was also an NSF-funded Fellow at the Pritzker School of Molecular Engineering.",
    website: "https://www.eamonduede.com",
    publications: [
      {
        title: "Deep learning opacity in scientific discovery.",
        journal: "Philosophy of Science",
        volume: 90,
        issue: 5,
        year: 2023,
        pages: "1089-1099",
      },
      {
        title:
          "Instruments, agents, and artificial intelligence: novel epistemic categories of reliability.",
        journal: "Synthese",
        volume: 200,
        issue: 6,
        year: 2022,
        pages: "491",
      },
      {
        title:
          "Apriori Knowledge in an Era of Computational Opacity: The Role of AI in Mathematical Discovery.",
        journal: "Philosophy of Science",
        status: "Forthcoming",
      },
      {
        title:
          "Confabulation: The Surprising Value of Large Language Model Hallucinations.",
        journal:
          "Proceedings of the 61st Annual Meeting of the Association for Computational Linguistics",
        year: 2024,
        status: "Forthcoming",
      },
    ],
    role: "Affiliate Faculty",
    bioImg: Eamon,
  },
  {
    name: "Bowen Lou",
    email: "bowenlou@usc.edu",
    affiliation: "USC",
    bio:
      "Bowen Lou is an Assistant Professor of Data Sciences and Operations at the Marshall School of Business, University of Southern California. Professor Lou’s research primarily lies in economics of artificial intelligence (AI), innovation and entrepreneurship, and future of work. Broadly, he is extremely passionate about studying emerging technology-enabled phenomena in business and society (including but not limited to topics on AI, big data analytics, digital platform, FinTech, healthcare IT, and social media). He works on the new waves of digitization and technological innovation spanning a wide spectrum of industry sectors, by collaborating with leading analytics companies that track technology, labor and innovation trends. Linking macro patterns to micro activities, his studies leverage a variety of interdisciplinary methodologies (including but not limited to bio/chem-informatics, econometrics, game-theoretical modeling, randomized field experiments, machine learning, and network analysis).",
    website: "https://bowenlou.org/",
    publications: [
      {
        title: "Proposing Ties in a Dense Hypergraph of Academics.",
        journal:
          "Social Informatics: 7th International Conference, SocInfo 2015",
        location: "Beijing, China",
        year: 2015,
        pages: "209-226",
        publisher: "Springer International Publishing",
      },
      {
        title:
          "AI on Drugs: Can Artificial Intelligence Accelerate Drug Development? Evidence from a Large-Scale Examination of Bio-Pharma Firms.",
        journal: "MIS Quarterly",
        volume: 45,
        issue: 3,
        year: 2021,
        pages: "1451-1482",
      },
      {
        title:
          "Innovation Strategy After IPO: How AI Analytics Spurs Innovation After IPO.",
        journal: "Management Science",
        year: 2024,
      },
      {
        title:
          "Unintended Consequences of Advances in Matching Technologies: Information Revelation and Strategic Participation on Gig-economy Platforms.",
        journal: "Management Science",
        volume: 70,
        issue: 3,
        year: 2024,
        pages: "1729-1754",
      },
      {
        title:
          "Artificial Intelligence, CEO Turnover, and Directional Change in Firm Innovation.",
        journal: "ICIS 2023 Proceedings",
        year: 2023,
      },
    ],
    role: "Affiliate Faculty",
    bioImg: Bowen,
  },
  {
    name: "Jar-Der Luo",
    email: "jarderluo@126.com",
    affiliation: "Tsinghua University",
    bio:
      "Jar-Der is a Joint Appointed Professor, Social Science School and Public Administration School, Tsinghua University (Beijing), Chief Editor, Journal of Social Computing, and PI, Tsinghua U. Computational Social Sciences & National Governance Lab, Social Sec. He earned his Ph.D degree in Sociology Dept. of State U. of New York at Stony Brook. He researches numerous topics in social network studies, including social capital, trust, social network in big data, network dynamics, emergence of collective intelligence, self-organization process and Chinese indigenous management researches, such as guanxi, guanxi circle, favor exchange, Yin and Yang, and dynamic balance theory.",
    role: "Affiliate Faculty",
    bioImg: Jar,
  },
  {
    name: "Iyad Rahwan",
    email: "rahwan@mpib-berlin.mpg.de",
    affiliation: "MPG-Berlin",
    bio:
      "Iyad Rahwan is director of the Max Planck Institute for Human Development in Berlin, where he founded and directs the Center for Humans & Machines. He is also an honorary professor of Electrical Engineering and Computer Science at the Technical University of Berlin. Prior to moving to Berlin, he was an Associate Professor of Media Arts & Sciences at the Massachusetts Institute of Technology (MIT). A native of Aleppo, Syria, Rahwan holds a PhD from the University of Melbourne, Australia.",
    website: "https://www.rahwan.me/",
    publications: [
      {
        title: "The moral machine experiment.",
        journal: "Nature",
        volume: 563,
        issue: 7729,
        year: 2018,
        pages: "59-64",
      },
      {
        title: "Machine culture.",
        journal: "Nature Human Behaviour",
        volume: 7,
        issue: 11,
        year: 2023,
        pages: "1855-1868",
      },
      {
        title: "Machine behaviour.",
        journal: "Nature",
        volume: 568,
        issue: 7753,
        year: 2019,
        pages: "477-486",
      },
      {
        title: "Time-critical social mobilization.",
        journal: "Science",
        volume: 334,
        issue: 6055,
        year: 2011,
        pages: "509-512",
      },
      {
        title: "Cooperating with machines.",
        journal: "Nature Communications",
        volume: 9,
        issue: 1,
        year: 2018,
        pages: "233",
      },
    ],
    role: "Affiliate Faculty",
    bioImg: Iyad,
  },
  {
    name: "Lingfei Wu",
    email: "wlf850927@gmail.com",
    affiliation: "University of Pittsburgh",
    bio:
      "Lingfei Wu is an Assistant Professor of Information Science at the University of Pittsburgh. He leverages big data, complexity sciences, and AI to understand how science and technology can advance through collaborative teamwork, contributing to the field of Team Science and Innovation. His research has been published in Nature and PNAS and featured in The New York Times, The Atlantic, and Scientific American, earning him accolades such as the NSF Career Award and Oxford Martin School Fellowship. Wu also advises organizations like Novo Nordisk Fonden and John Templeton Foundation on research evaluation.",
    website: "https://lingfeiwu.github.io/",
    publications: [
      {
        title: "Flat teams drive scientific innovation.",
        journal: "Proceedings of the National Academy of Sciences",
        volume: 119,
        issue: 23,
        year: 2022,
        pages: "e2200927119",
      },
      {
        title:
          "Large teams develop and small teams disrupt science and technology.",
        journal: "Nature",
        volume: 566,
        issue: 7744,
        year: 2019,
        pages: "378-382",
      },
      {
        title:
          "Skill discrepancies between research, education, and jobs reveal the critical need to supply soft skills for the data economy.",
        journal: "Proceedings of the National Academy of Sciences",
        volume: 115,
        issue: 50,
        year: 2018,
        pages: "12630-12637",
      },
    ],
    role: "Affiliate Faculty",
    bioImg: Ling,
  },
  {
    name: "Doug Guilbeault",
    email: "dguilb@stanford.edu",
    affiliation: "Stanford University",
    bio:
      "Guilbeault received dual bachelor’s degrees in philosophy and rhetoric (with a minor in cognitive science) from the University of Waterloo, an MA in Cognitive Linguistics from the University of British Columbia, and a PhD from the University of Pennsylvania’s Annenberg School for Communication. He is co-director of the Berkeley-Stanford Computational Culture Lab, and a founding member of the theoretical cognitive science and machine learning collective comp-syn (“computational synesthesia”). His work has appeared in a number of top journals, including Nature, Nature Communications, The Proceedings of the National Academy of the Sciences, and Management Science, as well as in popular news outlets, such as The Atlantic, Wired, and The Harvard Business Review. He has received top research awards from The International Conference on Computational Social Science, The Cognitive Science Society, and The International Communication Association.",
    website:
      "https://www.gsb.stanford.edu/faculty-research/faculty/douglas-r-guilbeault",
    publications: [
      {
        title: "Online Images Amplify Gender Bias",
        journal: "Nature",
        year: 2024,
        award:
          "Best Paper Award, 2022 International Conference on Computational Social Science",
      },
      {
        title:
          "Divergences in Color Perception between Deep Neural Networks and Humans",
        journal: "Cognition",
        volume: 241,
        year: 2023,
        pages: "105621",
        corresponding_authors: true,
      },
      {
        title:
          "Signal in Noise: Exploring Meaning Encoded in Random Character Sequences with Character-Aware Language Models",
        journal:
          "Proceedings of the 60th Annual Meeting of the Association for Computational Linguistics",
        year: 2022,
      },
      {
        title:
          "Topological Measures for Identifying and Predicting the Spread of Complex Contagions",
        journal: "Nature Communications",
        volume: 12,
        issue: 4430,
        year: 2021,
        highlight:
          "Selected by editorial team as a featured article in Applied Physics and Mathematics",
      },
      {
        title:
          "Experimental Evidence for Scale Induced Category Convergence across Populations",
        journal: "Nature Communications",
        volume: 12,
        issue: 327,
        year: 2021,
        award:
          "Computational Modeling Prize in Applied Cognition, The Cognitive Science Society, 2020",
      },
      {
        title: "Compsyn: Perceptually Grounded Word Embeddings with Color",
        journal:
          "Proceedings of the 28th International Conference on Computational Linguistics (COLING @ ACL)",
        year: 2020,
        pages: "1744–1751",
      },
      {
        title: "Color Associations in Abstract Semantic Domains",
        journal: "Cognition",
        volume: 201,
        year: 2020,
        pages: "104306",
      },
    ],
    role: "Affiliate Faculty",
    bioImg: Dougg,
  },
  {
    name: "Misha Teplitskiy",
    email: "tepl@umich.edu",
    affiliation: "University of Michigan",
    bio:
      "Misha Teplitskiy is an Assistant Professor at the University of Michigan School of Information and the head of DiscoveryLab. He is a sociologist interested in the drivers of scientific and technological innovation, and especially the role that policy and technology can play in accelerating scientific discovery. His current work investigates 1) how individuals and organizations evaluate innovative ideas, and 2) how knowledge diffuses between scientists in-person and online.",
    website: "www.misha.mx",
    publications: [
      {
        title:
          "Author mentions in science news reveal widespread disparities across name-inferred ethnicities.",
        journal: "Quantitative Science Studies",
        year: 2024,
        pages: "1-15",
      },
      {
        title: "Being Together in Place as a Catalyst for Scientific Advance.",
        journal: "Research Policy",
        volume: 53,
        issue: 2,
        year: 2024,
      },
      {
        title: "The substantive effect of rhetorical citations in science.",
        journal: "Nature Communications",
        volume: 15,
        issue: 1,
        year: 2024,
        pages: "431",
      },
    ],
    role: "Affiliate Faculty",
    bioImg: Misha,
  },
  {
    name: "Dashun Wang",
    email: "dashun.wang@kellogg.northwestern.edu",
    affiliation: "Northwestern University",
    bio:
      "Dashun Wang is a Professor of Management and Organizations at the Kellogg School of Management, and the McCormick School of Engineering, at Northwestern University. At Kellogg, he is the Founding Co-Director of the Ryan Institute on Complexity and the Founding Director of the Center for Science of Science and Innovation (CSSI). He is also a core faculty at the Northwestern Institute on Complex Systems (NICO). Dashun is a recipient of multiple awards for his research and teaching, including the AFOSR Young Investigator award, Poets & Quants Best 40 Under 40 Professors, Junior Scientific Award from the Complex Systems Society, the Erdos-Renyi Prize, Thinkers50 Radar 2021, and more.",
    website: "www.dashunwang.com",
    publications: [
      {
        title: "Academic articles",
        journal: "Academic website",
        year: 2024,
        pages: "https://www.dashunwang.com/academic-articles",
      },
    ],
    role: "Affiliate Faculty",
    bioImg: Dashun,
  },
  {
    name: "Daniel Holz",
    email: "blackhole@uchicago.edu",
    affiliation: "University of Chicago",
    bio:
      "Holz is a professor at the University of Chicago in the Departments of Physics, Astronomy & Astrophysics, the Enrico Fermi Institute, and the Kavli Institute for Cosmological Physics. He works on black holes, gravitational waves, astrophysics, and cosmology. He is a member of the Laser Interferometer Gravitational-Wave Observatory (LIGO) collaboration, and was part of the team that announced the first detection of gravitational waves in early 2016. Holz is Chair of the Science and Security Board of the Bulletin of the Atomic Scientists, and in this role helps set the time of the Doomsday Clock. He is also director of the UChicago Existential Risk Laboratory (XLab), an interdisciplinary effort focused on understanding and mitigating existential risks, including nuclear war, climate change, and AI-fueled disinformation.",
    website: "https://holzlab.uchicago.edu",
    publications: [],
    bioImg: Danh,
  },
  {
    name: "Ufuk Akcigit",
    email: "uakcigit@uchicago.edu",
    affiliation: "University of Chicago",
    bio:
      "Ufuk Akcigit is the Arnold C. Harberger Professor of Economics at the University of Chicago and a Research Associate at several prestigious institutions, including the National Bureau of Economic Research. His research focuses on economic growth, innovation, and firm dynamics, with his work published in top economics journals and featured in policy reports and popular media. He co-edited the book 'The Economics of Creative Destruction' and serves as the lead academic for the World Bank's World Development Report 2024. Akcigit's contributions have earned him numerous accolades, including the Max Planck-Humboldt Research Award, Guggenheim Fellowship, and Kiel Institute’s Global Economy Prize.",
    role: "Affiliate Faculty",
    bioImg: Ufuk,
  },
  {
    name: "Bernard Koch",
    email: "bernardkoch@uchicago.edu",
    affiliation: "University of Chicago",
    bio:
      "Bernard Koch is an assistant professor in the sociology department. His research develops and deploys mechanistic models to explain the evolution of scientific and cultural fields. Current questions include how AI became dominated by deep learning, why problematic race science persists in psychology, and how music genres develop. He also has eccentric interests in deep learning, causal inference, networks & Bayesian modeling. His work has been published at Sociological Methods and Research, Sociological Methodology, NeurIPS, and WWW, among other venues.",
    website: "https://bernardjkoch.com",
    publications: [
      {
        title: "Deep Learning for Causal Inference.",
        journal: "Sociological Methods & Research",
        authors: [
          "Koch BJ",
          "Sainburg T",
          "Geraldo PE",
          "Jiang S",
          "Sun Y",
          "Foster JG",
        ],
      },
      {
        title:
          "Reduced, reused and recycled: The life of a machine learning dataset.",
        journal: "NeurIPS",
        year: 2021,
        pages: "1-13",
        presentation_type: "oral",
      },
      {
        title:
          "HINTS: time series prediction via dynamic heterogeneous information network embedding.",
        journal: "WWW",
        year: 2021,
        pages: "3158-3167",
      },
      {
        title:
          "Uncovering sociological effect heterogeneity using tree-based machine learning.",
        journal: "Sociological Methodology",
        year: 2021,
        pages: "189-223",
      },
    ],
    role: "Affiliate Faculty",
    bioImg: BernardK,
  },
  {
    name: "Zhao Wang",
    email: "zwang13@uchicago.edu",
    institution: "University of Chicago",
    bio:
      "Dr. Wang is an Assistant Instructional Professor in the Masters in Computational Social Science program at The University of Chicago. She is a computer scientist focusing on machine learning, natural language processing, causal inference, and social network analysis. Her research leverages computer science techniques to analyze large-scale online data and explore problems of social importance.",
    website: "https://zhaowang-uc.github.io/",
    publications: [
      "Identifying spurious correlations for robust text classification",
      "Robustness to spurious correlations in text classification via automatically generated counterfactuals",
      "Enhancing model robustness and fairness with causality: A regularization approach",
    ],
    position: "Affiliate Faculty",
    bioImg: Zhao,
    additionalLink:
      "https://drive.google.com/file/d/1Gp5La4RU6S-2wAh5xS4vlXLGGMej-eUA/view?usp=drive_link",
  },
  {
    name: "Dan Weld",
    email: "danw@alllenai.org",
    institution: "Allen Institute",
    bio:
      "Daniel S. Weld is Chief Scientist and General Manager of Semantic Scholar at the Allen Institute of Artificial Intelligence and Professor Emeritus at the University of Washington. After formative education at Phillips Academy, he received bachelor’s degrees in both Computer Science and Biochemistry at Yale University in 1982 and a Ph.D. from the MIT Artificial Intelligence Lab in 1988. Weld received a Presidential Young Investigator’s award and an Office of Naval Research Young Investigator’s award; he is a Fellow of the Association for Artificial Intelligence (AAAI), the American Association for the Advancement of Science (AAAS), and the Association for Computing Machinery (ACM).",
    website: "https://www.cs.washington.edu/people/faculty/weld/",
    position: "Affiliate Faculty",
    bioImg: Danw,
    additionalLink:
      "https://drive.google.com/file/d/1MEWhzw7k9eyxpNCxz-q2Gd39reIJBZL0/view?usp=drive_link",
  },
  {
    name: "Pete Aceves",
    email: "paceves@jhu.edu",
    affiliation: "Johns Hopkins University",
    bio:
      "Pedro (Pete) Aceves is an Assistant Professor of Management and Organization at the Carey Business School at Johns Hopkins University. His research bridges multiple disciplinary domains, including organization theory, linguistics, cognitive science, and information theory. By linking these domains of scientific work with computational and natural language processing tools, he aims to bring a dynamic and interactional lens to the study of organizational and economic life. He is studying these themes in contexts ranging from small groups such as mountaineering expeditions and innovation teams to large-scale social systems such as online platforms, markets, and scientific disciplines.",
    personal_website: "www.peteaceves.com",
    publications: [
      {
        title:
          "Human languages with greater information density have higher communication speed but lower conversation breadth",
        journal: "Nature Human Behaviour",
        year: 2024,
      },
      {
        title:
          "Mobilizing Conceptual Spaces: How Word Embedding Models Can Inform Measurement and Theory within Organization Science",
        journal: "Organization Science",
        year: 2024,
      },
      {
        title: "Machine Translation: Mining Text for Social Theory",
        journal: "Annual Review of Sociology",
        year: 2016,
      },
    ],
    position: "Affilicate Faculty",
    bioImg: PeteA,
  },
  {
    name: "Fengli Xu",
    email: "fenglixu@tsinghua.edu.cn",
    affiliation: "Tsinghua University",
    bio:
      "Fengli Xu is a tenure-track assistant professor at the Department of Electronic Engineering in Tsinghua University. His research explores the interdisciplinary realms of Artificial Intelligence, Data Science, Social Computing and Urban Science. His latest research focuses on creating autonomous Large Language Model agents, capable of learning from the interactions with environment, simulating realistic human behavior, and revealing the collective dynamics of societies. Prior to his current position, he was a postdoctoral scholar at the Knowledge Lab.",
    personal_website: "https://fenglixu.github.io/",
    publications: [
      {
        title: "Flat teams drive scientific innovation",
        journal: "Proceedings of the National Academy of Sciences",
        year: 2022,
        volume: 119,
        issue: 23,
        pages: "e2200927119",
      },
      {
        title:
          "Emergence of urban growth patterns from human mobility behavior",
        journal: "Nature Computational Science",
        year: 2021,
        volume: 1,
        issue: 12,
        pages: "791-800",
      },
      {
        title:
          "Large Language Model-driven Meta-structure Discovery in Heterogeneous Information Network",
        journal: "KDD",
        year: 2024,
      },
      {
        title:
          "Chain-of-Planned-Behaviour Workflow Elicits Few-Shot Mobility Generation in LLMs",
        journal: "arXiv preprint",
        year: 2024,
        location: "arXiv:2402.09836",
      },
      {
        title:
          "Synergy-of-Thoughts: Eliciting Efficient Reasoning in Hybrid Language Models",
        journal: "arXiv preprint",
        year: 2024,
        location: "arXiv:2402.02563",
      },
    ],
    position: "Affilicate Faculty",
    bioImg: FengliX,
  },
  {
    name: "Aaron Schein",
    email: "schein@uchicago.edu",
    affiliation: "University of Chicago",
    bio:
      "Aaron Schein is an assistant professor of statistics and data science at the University of Chicago. His research develops methodology in Bayesian statistics, machine learning, and causal inference for data-intensive applications in the social and natural sciences.",
    personal_website: "www.aaronschein.com",
    publications: [],
    position: "Affilicate Faculty",
    bioImg: AaronS,
  },
  {
    name: "David Wolpert",
    email: "david.h.wolpert@gmail.com",
    affiliation: "Santa Fe Institute",
    bio:
      "David Wolpert is a professor at the Santa Fe Institute, external professor at the Complexity Science Hub in Vienna, adjunct professor at ASU, and research associate at the ICTP in Trieste. He is the author of three books (and co-editor of several more), over 200 papers, has three patents, is an associate editor at over half a dozen journals, has received numerous awards, and is a fellow of the IEEE. Before his current position, he was the Ulam Scholar at the Center for Nonlinear Studies, and before that he was at NASA Ames Research Center and a consulting professor at Stanford University, where he formed the Collective Intelligence group. He has worked at IBM and a data mining startup and is external faculty at numerous international institutions. His degrees in Physics are from Princeton and the University of California.",
    personal_website: "",
    publications: [],
    position: "Affilicate Faculty",
    bioImg: DavidW,
  },
  {
    name: "Lav Varshney",
    email: "varshney@illinois.edu",
    affiliation: "University of Illinois",
    bio:
      "Lav R. Varshney was born in Syracuse, New York on October 28, 1982. He received the B. S. degree with honors in electrical and computer engineering (magna cum laude) from Cornell University, Ithaca, New York in 2004. He received the S. M., E. E., and Ph. D. degrees in electrical engineering and computer science from the Massachusetts Institute of Technology (MIT), Cambridge in 2006, 2008, and 2010, respectively, where his theses received the E. A. Guillemin thesis award and the J.-A. Kong award honorable mention. Since 2014, he has been with the Department of Electrical and Computer Engineering, University of Illinois Urbana-Champaign, where he is currently an associate professor. He has further affiliations in Computer Science, Neuroscience, Industrial and Enterprise Systems Engineering, Digital Agriculture, and Personalized Nutrition, as well as the Discovery Partners Institute of the University of Illinois System. Dr. Varshney holds a joint appointment at Brookhaven National Laboratory, Upton, NY, where he is a Computational Scientist in the Computational Science Initiative (CSI).",
    personal_website: "http://www.varshney.csl.illinois.edu/",
    publications: [],
    position: "Affilicate Faculty",
    bioImg: LavV,
  },
  {
    name: "Chenhao Tan",
    email: "chenhao@uchicago.edu",
    affiliation: "University of Chicago",
    bio:
      "Chenhao Tan is an assistant professor of computer science at the University of Chicago. He obtained his PhD degree in the Department of Computer Science at Cornell University and bachelor’s degrees in computer science and in economics from Tsinghua University. Prior to joining UChicago, he spent a year at University of Washington as a postdoc and three years at CU Boulder as an assistant professor. His research interests include human-centered machine learning, natural language processing, and computational social science. He has published papers primarily at ACL and WWW, and also at KDD, WSDM, ICWSM, etc. His work has been covered by many news media outlets, such as the New York Times and the Washington Post. He also won an NSF CAREER award, an NSF CRII award, a Salesforce research award, an Amazon research award, a Facebook fellowship, and a Yahoo! Key Scientific Challenges award.",
    personal_website: "https://chenhaot.com/",
    publications: [],
    position: "Affilicate Faculty",
    bioImg: ChenhaoT,
  },
  {
    name: "Jamshid Sourati",
    email: "",
    affiliation: "Depaul University",
    bio: "",
    personal_website: "",
    publications: [],
    position: "Affilicate Faculty",
    bioImg: JamshidS,
  },
  {
    name: "Rui Pan",
    email: "rui.pan@kellogg.northwestern.edu",
    affiliation: "Northwestern University",
    bio: "tbd",
    personal_website: "tbd",
    publications: [],
    position: "Affilicate Faculty",
    bioImg: RuiP,
  },
  {
    name: "Joshua Jackson",
    email: "joshua.jackson@chicagobooth.edu",
    affiliation: "University of Chicago",
    bio:
      "Joshua Conrad Jackson is a Neubauer Family Assistant Professor at the Booth School of Business, and a co-PI of the Chicago Culture Lab. His research focuses on how culture and psychology co-evolve over time. He is especially interested in how social psychology adapted to the evolution of large and diverse human societies throughout human history, and how new trends involving technology and globalization may change our social psychologies in the future. He received his PhD from the University of North Carolina, Chapel Hill, in 2021, and worked at the Kellogg School of Management for two years as a post-doctoral fellow before joining Booth.",
    personal_website: "https://www.joshuaconradjackson.com/",
    publications: [
      {
        title:
          "Emotion semantics show both cultural variation and universal structure",
        journal: "Science",
        year: 2019,
        volume: 366,
        issue: 6472,
        pages: "1517-1522",
      },
      {
        title:
          "Does algorithmic amplification cause people to misperceive norms during a natural election?",
        journal: "Nature",
        year: "accepted in principle",
      },
      {
        title: "Worldwide divergence of values",
        journal: "Nature Communications",
        year: 2024,
        volume: 15,
        issue: 1,
        pages: "2650",
      },
      {
        title: "Exposure to Automation Explains Religious Declines",
        journal: "Proceedings of the National Academy of Sciences",
        year: 2023,
        volume: 120,
        issue: 34,
        pages: "e2304748120",
      },
      {
        title:
          "Supernatural explanations across 114 societies are more common for natural than social phenomena",
        journal: "Nature Human Behavior",
        year: 2023,
      },
      {
        title: "Valence-dependent mutation in lexical evolution",
        journal: "Nature Human Behavior",
        year: 2022,
      },
    ],
    position: "Affilicate Faculty",
    bioImg: JoshuaJ,
  },
  {
    name: "Ian Foster",
    email: "foster@uchicago.edu",
    affiliation: "University of Chicago",
    bio:
      "Dr. Ian Foster is Senior Scientist and Distinguished Fellow, and also director of the Data Science and Learning Division, at Argonne National Laboratory, and the Arthur Holly Compton Distinguished Service Professor of Computer Science at the University of Chicago. Ian received a BSc degree from the University of Canterbury, New Zealand, and a PhD from Imperial College, United Kingdom, both in computer science. His research deals with distributed, parallel, and data-intensive computing technologies, and innovative applications of those technologies to scientific problems in such domains as materials science, climate change, and biomedicine. Foster is a fellow of the AAAS, ACM, BCS, and IEEE, and an Office of Science Distinguished Scientists Fellow.",
    personal_website: "",
    publications: [],
    position: "Affilicate Faculty",
    bioImg: IanF,
  },
  {
    name: "Doug Downey",
    email: "dougd@allenai.org",
    affiliation: "Allen Institute for AI",
    bio:
      "Downey's research is focused on natural language processing, machine learning, and artificial intelligence, with a particular interest in the automatic construction of useful knowledge bases from Web text. One goal is to develop techniques and prototypes that extend the state of the art in Web search. Another goal is to theoretically investigate and establish a formal basis for techniques that can learn from unstructured text alone, without hand-labeled data. More generally, Downey works on ways to utilize human input more effectively in machine learning. Two directions in this effort involve selecting human input carefully (active learning) or utilizing it in concert with unlabeled data (semi-supervised learning).",
    personal_website: "",
    publications: [
      {
        title: "Penguins Don't Fly",
        journal: "Association for Computational Linguistics (ACL)",
        year: 2023,
        authors: [
          "Allaway, Emily",
          "Hwang, Jena D.",
          "Bhagavatula, Chandra",
          "McKeown, Kathleen",
          "Downey, Doug",
          "Choi, Yejin",
        ],
      },
      {
        title: "Embedding Recycling for Language Models",
        journal: "Association for Computational Linguistics (ACL)",
        year: 2023,
        authors: [
          "Saad-Falcon, Jon",
          "Singh, Amanpreet",
          "Soldaini, Luca",
          "D’Arcy, Mike",
          "Cohan, Arman",
          "Downey, Doug",
        ],
      },
      {
        title: "Relatedly",
        journal: "Association for Computing Machinery",
        year: 2023,
        authors: [
          "Palani, Srishti",
          "Naik, Aakanksha",
          "Downey, Doug",
          "Zhang, Amy X.",
          "Bragg, Jonathan",
          "Chang, Joseph Chee",
        ],
      },
      {
        title: "CiteSee",
        journal: "Association for Computing Machinery",
        year: 2023,
        authors: [
          "Chang, Joseph Chee",
          "Zhang, Amy X.",
          "Bragg, Jonathan",
          "Head, Andrew",
          "Lo, Kyle",
          "Downey, Doug",
          "Weld, Daniel S.",
        ],
      },
      {
        title: "Few-Shot Self-Rationalization with Natural Language Prompts",
        journal: "Association for Computational Linguistics (ACL)",
        year: 2022,
        authors: [
          "Marasovic, Ana",
          "Beltagy, Iz",
          "Downey, Doug",
          "Peters, Matthew E.",
        ],
      },
      {
        title: "FeedLens",
        journal: "Association for Computing Machinery, Inc",
        year: 2022,
        authors: [
          "Kaur, Harmanpreet",
          "Downey, Doug",
          "Singh, Amanpreet",
          "Cheng, Evie Yu Yen",
          "Weld, Daniel",
          "Bragg, Jonathan",
        ],
      },
      {
        title: "S2AMP",
        journal: "Institute of Electrical and Electronics Engineers Inc.",
        year: 2022,
        authors: [
          "Rohatgi, Shaurya",
          "Downey, Doug",
          "King, Daniel",
          "Feldman, Sergey",
        ],
      },
      {
        title: "VILA",
        journal:
          "Transactions of the Association for Computational Linguistics",
        year: 2022,
        authors: [
          "Shen, Zejiang",
          "Lo, Kyle",
          "Wang, Lucy Lu",
          "Kuehl, Bailey",
          "Weld, Daniel S.",
          "Downey, Doug",
        ],
      },
    ],
    position: "Affilicate Faculty",
    bioImg: DouglasD,
  },
  {
    name: "Ishanu Chattopadhyay",
    email: "ishanu@uchicago.edu",
    affiliation: "University of Chicago",
    bio:
      "Ishanu Chattopadhyay’s research focuses on the theory of unsupervised machine learning and the interplay of stochastic processes and formal language theory in exploring the mathematical underpinnings of the question of inferring causality from data. His most visible contributions include the algorithms for data smashing, inverse Gillespie inference, and nonparametric nonlinear and zero-knowledge implementations of Granger causal analysis that have crucial implications for biomedical informatics, data-enabled discovery in biomedicine, and personalized precision health care. His current work focuses on analyzing massive clinical databases of disparate variables to distill patterns indicative of hitherto unknown etiologies, dependencies, and relationships, potentially addressing the daunting computational challenge of scale and making way for ab initio and de novo modeling in an age of ubiquitous data. Chattopadhyay received an MS and PhD in mechanical engineering, as well as an MA in mathematics, from the Pennsylvania State University. He completed his postdoctoral training and served as a research associate in the Department of Mechanical Engineering at Penn State. He also held a postdoctoral fellowship simultaneously at the Department of Computer Science and the Sibley School of Mechanical and Aerospace Engineering at Cornell University.",
    personal_website: "",
    publications: [],
    position: "Affilicate Faculty",
    bioImg: IshanuC,
  },
  {
    name: "Levin Brinkmann",
    email: "brinkmann@mpib-berlin.mpg.de",
    affiliation: "MPG-Berlin",
    bio:
      "Levin Brinkmann is a predoctoral fellow at the Center for Human and Machines at the Max Planck Institute for Human Development. In 2014 he received a Master's in Physics from the University of Goettingen. He joined the center after working for several years as a data scientist in the fashion and advertising industry, where he developed inspirational algorithms for creative workers. Levin's current interests are in the influence of algorithms on human-machine hybrid cultural evolution.",
    personal_website:
      "https://www.mpib-berlin.mpg.de/publication-search/248657?person=persons273302",
    publications: [],
    position: "Affilicate Faculty",
    bioImg: LevinB,
  },
  {
    name: "Ben Blaiszik",
    email: "blaiszik@uchicago.edu",
    affiliation: "University of Chicago",
    bio:
      "Ben Blaiszik is a researcher in the Data Science and Learning Division within the CELS Directorate. His work includes leveraging machine learning, large language models, high performance computing and big data techniques to meet the unique challenges faced by scientists; leading cross-disciplinary materials design, data infrastructure, and development efforts; and executing complex experimental and computational design planning. His work has culminated in 5 issued patents, and ~100 peer reviewed publications/book chapters/conference papers.",
    personal_website: "",
    publications: [],
    position: "Affilicate Faculty",
    bioImg: BenB,
  },
  {
    name: "Yong-Yeol Ahn",
    email: "yyahn@iu.edu",
    affiliation: "Indiana University",
    bio:
      "Yong-Yeol Ahn earned his Ph.D. in physics from KAIST in 2008. He was a postdoctoral researcher at the Center for Complex Network Research of Northeastern University and a visiting researcher at the Center for Cancer Systems Biology at Dana-Farber Cancer Institute from 2008-2011. He is interested in various complex systems such as biological and social networks.",
    personal_website: "",
    publications: [],
    position: "Affilicate Faculty",
    bioImg: YongY,
  },
];

const klabResearchPost = [
  {
    name: "Molly Lewis",
    email: "mollyllewis@gmail.com",
    affiliation: "Meta",
    bio:
      "Molly is a computational social scientist interested in human learning and language. She uses a wide range of methods including behavioral experiments, LLMs, and analyses of large trace data. She earned her PhD in Psychology from Stanford University in 2016, and is currently a Quantitative Researcher at Meta.",
    website: "https://mllewis.github.io/",
    publications: [
      {
        title:
          "Local similarity and global variability characterize the semantic space of human languages",
        journal: "PNAS",
        volume: "120",
        issue: "51",
        year: 2023,
        pages: "e2300986120",
      },
      {
        title:
          "Gender stereotypes are reflected in the distributional structure of 25 languages",
        journal: "Nature Human Behavior",
        volume: "4",
        issue: "10",
        year: 2020,
        pages: "1021-1028",
      },
      {
        title:
          "The puzzling relationship between multi-lab replications and meta-analyses of the rest of the literature",
        journal: "Royal Society Open Science",
        volume: null,
        issue: null,
        year: 2022,
        pages: null,
      },
    ],
    role: "Affiliate Researcher",
    bioImg: Mollyl,
  },
  {
    name: "Bill Shi",
    email: "fbillshi@gmail.com",
    affiliation: "Pond",
    bio:
      "Bill has been wearing multiple hats – researcher, engineer, and lately, tech adventurer. Currently, he is the co-founder and CTO of Pond, a startup focused on building the foundation model for crypto AI. Throughout his career, whether in industry (TigerGraph, Amazon) or academia (UNC, UChicago), Bill has been driven by a passion for applying mathematical modeling and machine learning to solve real-world challenges. His work spans a wide range of fields, from graph AI, recommender systems, to computational social science and biomedicine.",
    website: "https://www.billshi.net/",
    publications: [
      {
        title:
          "The micro-foundations of elite politics: conversation networks and elite conflict during China’s reform era",
        journal: "Theory and Society",
        volume: "53",
        issue: "1",
        year: 2024,
        pages: "193-237",
      },
      {
        title:
          "Surprising combinations of research contents and contexts are related to impact and emerge with scientific outsiders from distant disciplines",
        journal: "Nature Communications",
        volume: "14",
        issue: "1",
        year: 2023,
        pages: "1641",
      },
      {
        title:
          "Systems and methods for high-order modeling of predictive hypotheses",
        journal: null,
        volume: null,
        issue: null,
        year: 2022,
        pages: null,
      },
      {
        title:
          "Community detection for hypergraph networks via regularized tensor power iteration",
        journal: "arXiv preprint arXiv:1909.06503",
        volume: null,
        issue: null,
        year: 2019,
        pages: null,
      },
      {
        title: "The wisdom of polarized crowds",
        journal: "Nature Human Behaviour",
        volume: "3",
        issue: "4",
        year: 2019,
        pages: "329-336",
      },
      {
        title: "Reflexive Regular Equivalence for Bipartite Data",
        journal:
          "Advances in Artificial Intelligence: 30th Canadian Conference on Artificial Intelligence, Canadian AI 2017, Edmonton, AB, Canada, May 16-19, 2017, Proceedings 30",
        volume: null,
        issue: null,
        year: 2017,
        pages: "71-77",
      },
      {
        title:
          "Millions of online book co-purchases reveal partisan differences in the consumption of science",
        journal: "Nature Human Behaviour",
        volume: "1",
        issue: "4",
        year: 2017,
        pages: "0079",
      },
      {
        title:
          "Weaving the fabric of science: Dynamic network models of science's unfolding structure",
        journal: "Social Networks",
        volume: "43",
        issue: null,
        year: 2015,
        pages: "73-85",
      },
    ],
    role: "Affiliate Researcher",
    bioImg: Billshi,
  },
  {
    name: "Haizi Yu",
    email: "haiziyu@uchicago.edu",
    affiliation: "University of Chicago",
    bio:
      "Haizi has a Ph.D. in Computer Science. His research interests include white-box AGI, interpretable machine learning, automatic knowledge discovery, and music intelligence. He received his doctoral degree from the University of Illinois at Urbana-Champaign, his M.S. degree in Computer Science from Stanford University, and his B.S. degree from the Department of Automation at Tsinghua University.",
    website: null,
    publications: [],
    role: "Affiliate Researcher",
    bioImg: Haiziyu,
  },
  {
    name: "Bhargav Desikan",
    email: "bhargavvader@gmail.com",
    affiliation: "Institute for Public Policy Research (IPPR)",
    bio:
      'Bhargav is a Senior Research Fellow at the Institute for Public Policy Research (IPPR) in London. At IPPR, he works on AI and Industrial Policy, focusing on social and economic policy to gear AI to providing maximum positive social impact. Bhargav is co-author on articles and workshops published at Nature, Cognition, ACL, NeurIPS, and more. He has previously written a book on NLP with Python and has authored multiple programming resources for social scientists. At the Knowledge Lab, he is an affiliate researcher working with Prof. James Evans on a book project titled "Thinking with Deep Learning", where they unravel modern deep learning to allow natural scientists, social scientists, and business practitioners to make the most of their complex data. He also holds research affiliations and consultancies with the University of Cambridge and Stanford University.',
    website:
      "https://urldefense.com/v3/__https:/scholar.google.com/citations?user=JSMnASoAAAAJ&hl=en__;!!BpyFHLRN4TMTrA!6DqKP_3_7s7FIcUNeDGw60HanhFOSvdvawemR_k1LjQHOOMV5PBAHqg1Xzj5hdUOKyqudwdTQOqS4PQ0UyJVZFuh$",
    publications: [],
    role: "Affiliate Researcher",
    bioImg: Bhargav,
  },
  {
    name: "Haochuan Cui",
    email: "hcui94@hotmail.com",
    affiliation: "Beijing Normal University",
    bio:
      "Haochuan earned his PhD in School of System Sciences at Beijing Normal University. He is the Pre-Assistant Professor of School of Information Management at Nanjing University. His interests focus on the complexity of cognitive behavior within scientific discovery and knowledge diffusion. He is currently using big language models and network analysis techniques to study the influence of workforce aging on Science and Technology and the labor division within organizations.",
    website: "https://hashc.github.io/about/",
    publications: [],
    role: "Postdoctoral Scholar",
    bioImg: Cui,
  },
  {
    name: "Chris Esposito",
    email: "Christopher.Esposito@anderson.ucla.edu",
    affiliation: "UCLA",
    bio:
      "Chris is the Osborne Postdoctoral Fellow at the UCLA Anderson School of Management. He studies innovation in science and technology using computational and econometric techniques. His dissertation developed centuries of new historical data to uncover the common processes that cities pass through as they emerge as centers for innovation. More recently, he has studied knowledge obsolescence and its impact on the changing structure of the innovative economy. In ongoing collaborations with the Knowledge Lab, he is analyzing the shifting balance of global power in scientific and technological innovation.",
    website: "http://cresposito.com",
    publications: [
      {
        title: null,
        journal: "Journal of Economic Geography",
        volume: "23",
        issue: "1",
        year: 2023,
        pages: "209-234",
      },
      {
        title: null,
        journal: "Research Policy",
        volume: "52",
        issue: "6",
        year: 2023,
        pages: null,
      },
      {
        title: null,
        journal: "SSRN",
        volume: null,
        issue: null,
        year: 2023,
        pages: null,
      },
      {
        title: null,
        journal: "arXiv",
        volume: null,
        issue: null,
        year: 2023,
        pages: null,
      },
    ],
    role: "Postdoctoral Scholar",
    bioImg: Esposito,
  },
  {
    name: "Hongbo Fang",
    email: "fanghongdoublebo@gmail.com",
    affiliation: "University of Chicago",
    bio:
      "Hongbo Fang is a computational social science researcher with broad interests in innovation processes, the evolution of online communities and social media activities, and the societal impact of large language models. Before beginning his postdoctoral research at UChicago, he earned a PhD in computer science from Carnegie Mellon University and a bachelor's degree in computer science from Zhejiang University, China.",
    website: null,
    publications: [
      {
        title:
          "Novelty Begets Popularity, But Curbs Participation-A Macroscopic View of the Python Open-Source Ecosystem",
        journal: "ICSE",
        volume: null,
        issue: null,
        year: 2024,
        pages: null,
      },
      {
        title:
          '"This is damn slick!" estimating the impact of tweets on open source project popularity and new contributors',
        journal: "ICSE",
        volume: null,
        issue: null,
        year: 2022,
        pages: null,
      },
    ],
    role: "Postdoctoral Scholar",
    bioImg: Fang,
  },
  {
    name: "Donghyun Kang",
    email: "kangd@uchicago.edu",
    affiliation: "University of Chicago",
    bio:
      "Donghyun Kang is a Postdoctoral Scholar at the Knowledge Lab. Donghyun's research aims to advance the understanding of the emergence, diffusion, and evolution of ideas and practices in science and technology and across civic domains by bridging computational large-scale analysis with theoretical insights from the sociology of knowledge, science, and organization. He received a B.A. in Business Administration and an M.A. in Sociology from Seoul National University, and a Ph.D. in Sociology from the University of Chicago.",
    website: "https://donghyun-kang-soc.github.io/",
    publications: [
      {
        title: "Limited Diffusion of Scientific Knowledge Forecasts Collapse",
        journal: "Nature Human Behaviour",
        volume: null,
        issue: null,
        year: 2024,
        pages: null,
      },
      {
        title:
          "Adaptation in Action: The Rise and Fall of Academic Publications from Korean High Schoolers, 2001–2021",
        journal: "British Journal of Sociology of Education",
        volume: "45",
        issue: "5",
        year: 2024,
        pages: "742–62",
      },
      {
        title:
          "Against method: Exploding the boundary between qualitative and quantitative studies of science",
        journal: "Quantitative Science Studies",
        volume: "1",
        issue: "3",
        year: 2020,
        pages: "930-944",
      },
    ],
    role: "Postdoctoral Scholar",
    bioImg: Donghyung,
  },
  {
    name: "Ningzi Li",
    email: "ningzi@uchicago.edu",
    affiliation: "University of Chicago",
    bio:
      "Ningzi is a professional research specialist at the Data Science Institute (DSI) and an adjunct assistant professor at the Booth School of Business at the University of Chicago. She obtained Ph.D. in sociology from Cornell University. Ningzi studies communication and behavior in organizations. She particularly focuses on how firms strategically communicate to influence stakeholder behaviors in the context of earnings calls, venture capital investments, and ESG reports. She also studies how stakeholders' communication influences firm behaviors in the context of employee reviews and product recalls. Her analysis heavily relies on natural experiments and natural language processing tools.",
    website: "http://ningzili.com",
    publications: [],
    role: "Postdoctoral Scholar",
    bioImg: NingiL,
  },
  {
    name: "Yujin Potter",
    email: "yujinyujin9393@gmail.com",
    affiliation: "UC Berkeley",
    bio:
      "She is currently a postdoc in EECS at UC Berkeley. Her interests span a wide range of topics within AI alignment/ethics, including examining the societal impacts of AI, identifying AI misalignment, studying AI behaviors in multi-agent settings, and addressing AI bias. Previously, she conducted research on decentralization technologies such as blockchain, DeFi, and DAOs. Before joining UC Berkeley, she got a PhD from KAIST.",
    website: null,
    publications: [
      {
        title:
          "Evolving AI Collectives to Enhance Human Diversity and Enable Self-Regulation",
        journal: "ICML",
        volume: null,
        issue: null,
        year: 2024,
        pages: null,
      },
    ],
    role: "Postdoctoral Scholar",
    bioImg: YujinP,
  },
  {
    name: "Shilin Jia",
    email: "shilinj@stanford.edu",
    affiliation: "Stanford University",
    bio:
      "Shilin Jia is the 2023-24 Shorenstein Postdoctoral Fellow on Contemporary Asia at Stanford University. His scholarly interest lies in applying computational methods to the study of political culture and organizations, with a special focus on post-reform China. Shilin’s research analyzes job transfers of Communist Party elites in China by using machine learning to code party elites' CVs. His objective is to grasp the evolution of the party-state through the division of labor and circulation of its elite members. He also conducts a computational content analysis of 60 years of the People's Daily, the official mouthpiece of the Communist Party of China, tracking ideological changes. More recently, He has been working on building a hundred years of word-embedding models based on multiple languages of Google N-grams and studying identity formation and international relations across language communities. Shilin received a Ph.D. in sociology from the University of Chicago.",
    website: "https://shevajia.github.io/",
    publications: [],
    role: "Postdoctoral Scholar",
    bioImg: ShilinJ,
  },
  {
    name: "Nadav Kunievsky",
    email: "nadavkunievsky@uchicago.edu",
    affiliation: "University of Chicago",
    bio:
      "Nadav Kunievsky is an economist specializing in quantifying and measuring information environments. His research focuses on developing methods to assess the knowledge and information accessible to agents in different social groups and quantifying the impact of these differences on labor market disparities. His work is characterized by a blend of theoretical and empirical economics, with a strong emphasis on interpretability. Before beginning his postdoctoral research at the Knowledge Lab, Nadav earned a PhD in Economics from the University of Chicago and both a BA and MA from Tel Aviv University.",
    personal_website: "https://nkunievsky.github.io/",
    publications: [],
    role: "Postdoctoral Scholar",
    bioImg: NadvK
  },
  {
    name: "Jeffrey Lockhart",
    email: "jlockhart@uchicago.edu",
    affiliation: "University of Chicago",
    bio:
      "Jeff Lockhart is a James S. McDonnell Postdoctoral Fellow at the University of Chicago, in the Department of Sociology and the Knowledge Lab. He holds a PhD in Sociology from the University of Michigan as well as masters degrees in both gender studies and computer science. His research examines how identities such as sex, gender, sexuality, and race are constructed and contested in scientific, technological, and political arenas. Lockhart uses a mix of computational social science and qualitative archival methods in his research.",
    personal_website: "https://voices.uchicago.edu/jlockhart",
    publications: [
      {
        title:
          "Incorporating Physical Knowledge Into Machine Learning for Planetary Space Physics",
        journal: "Frontiers in Astronomy and Space Sciences",
        volume: 7,
        issue: "July",
        pages: 36,
        year: 2020,
        doi: "https://doi.org/10.3389/fspas.2020.00036",
      },
      {
        title:
          "`A Large and Long Standing Body`: Historical Authority in the Science of Sex",
        journal: "Far Right Revisionism and the End of History: Alt/Histories",
        location: "New York: Routledge",
        pages: "359–86",
        year: 2020,
        doi: "https://doi.org/10.4324/9781003026433",
      },
      {
        title: "Paradigms of Sex Research and Women in STEM",
        journal: "Gender & Society",
        volume: 35,
        issue: 3,
        pages: "449–75",
        year: 2021,
        doi: "https://doi.org/10.1177/08912432211001384",
      },
      {
        title:
          "Because the Machine Can Discriminate: How Machine Learning Serves and Transforms Biological Explanations of Human Difference",
        journal: "Big Data & Society",
        volume: 10,
        issue: 1,
        year: 2023,
        doi: "https://doi.org/10.1177/20539517231155060",
      },
      {
        title: "Gender, Sex, and the Constraints of Machine Learning Methods",
        journal: "The Oxford Handbook of the Sociology of Machine Learning",
        location: "Oxford University Press",
        year: 2023,
        doi: "https://doi.org/10.1093/oxfordhb/9780197653609.013.24",
      },
      {
        title: "Scientific Argument with Supervised Learning",
        journal: "NeurIPS 2021 AI for Science Workshop",
        year: 2021,
        doi: "https://openreview.net/pdf?id=uGe5cXJXkib",
      },
      {
        title:
          "Name-Based Demographic Inference and the Unequal Distribution of Misrecognition",
        journal: "Nature Human Behaviour",
        volume: 7,
        issue: "July",
        pages: "1084–95",
        year: 2023,
        doi: "https://doi.org/10.1038/s41562-023-01587-9",
      },
      {
        title:
          "Who Authors Social Science? Demographics and the Production of Knowledge",
        journal: "Social Currents",
        volume: 0,
        issue: 0,
        pages: "1–13",
        year: 2024,
        doi: "https://doi.org/10.1177/23294965241246805",
      },
      {
        title: "Diagnosing Gender Bias in Image Recognition Systems",
        journal: "Socius",
        volume: 6,
        issue: "November",
        pages: "1–17",
        year: 2020,
        doi: "https://doi.org/10.1177/2378023120967171",
      },
    ],
    role: "Postdoctoral Scholar",
    bioImg: JeffreyL
  },
];

const klabStudents = [
  {
    name: "Partha Kadambi",
    email: "parthaskadambi@gmail.com",
    affiliation: null,
    bio:
      "A graduate of the MACSS program at the University of Chicago, Partha Kadambi is interested in the application of computational linguistics to understand human behavior & culture. His thesis focused on investigating personality psychology using social media data. As an affiliate of the Knowledge Lab, Partha's research interests include understanding the cultural factors underpinning the economic outcomes of firms. He currently works as a Senior Data Scientist in the financial services industry, focusing on GenAI and NLP.",
    website: null,
    publications: [],
    role: "Masters Student",
    bioImg: Partha,
  },
  {
    name: "Qixin Lin",
    email: "qxlin@uchicago.edu",
    institution: "University of Chicago",
    bio:
      "Qixin is a second-year master's student in the Computational Social Science program with a concentration in sociology at the University of Chicago. Leveraging a diverse computational toolkit that includes text analysis, Large Language Models (LLMs) and various modeling techniques, she investigates complex datasets to understand the intricate dynamics of labor markets and knowledge networks. Her research interests lie at the intersections of labor, working skills and employment issues, ambitiously aiming to enhance access to quality jobs and career opportunities while bolstering workers' rights and well-being. Beyond her core research, Qixin is passionate about interdisciplinary approaches and complex systems, actively expanding her expertise in fields such as ecology and physics - a curiosity that extends to all forms of new knowledge, experiences, and food.",
    website: "https://qixin-lin.github.io/",
    title: "Masters Student",
    bioImg: Qixin,
  },
  {
    name: "Xiaodi Yang",
    email: "xiaodiyang@uchicago.edu",
    institution: "University of Chicago",
    bio:
      "Xiaodi Yang is a master's student in the Social Sciences Program at the University of Chicago. She uses language models to study how people form group cognition and ideologies through social contagion, with a focus on the role of digital media technologies in this process. She is also curious about the transformations in knowledge production brought about by AI technologies. Before joining the University of Chicago, she earned her bachelor's degree in sociology from Xi'an Jiaotong University. Her undergraduate research primarily focused on social network relationships and interpersonal communication.",
    website: "",
    title: "Masters Student",
    bioImg: XYang,
  },
  {
    name: "Alejandro Sarria-Morales",
    email: "asarria@uchicago.edu",
    affiliation: "University of Chicago",
    bio:
      "Alejandro is currently pursuing a Masters in Computational Social Science at the University of Chicago. He is interested in computational approaches to Latin American political communication, with a focus on the intersection of emotion, ideology, and populism in political speech. His research aims to uncover how these factors contribute to novel understandings of politics in Latin America. Alejandro’s current work involves analyzing presidential addresses and large-scale corpora using natural language processing to identify emergent political ideological categories. Before coming to Chicago, he earned a B.A. in Psychology with minors in Economics and Comparative Political Science, from the University of the Andes in Bogotá, Colombia.",
    website: null,
    publications: [],
    role: "Masters Student",
    bioImg: Sarria,
  },
  {
    name: "Jacy Anthis",
    email: "anthis@uchicago.edu",
    affiliation: "University of Chicago",
    bio:
      "Jacy Anthis is a joint PhD candidate with the Sociology department and the Econometrics & Statistics group at the Booth School of Business. He is the co-founder of the Sentience Institute, where he leads research on human-AI interaction and machine learning, particularly the rise of digital minds and how humanity can work together with highly capable AI systems. Previously his research focused on social and moral change in humanity's relationship with nonhuman animals. Anthis' research has been published in top academic venues, such as CHI, HRI, and NeurIPS, and featured in global media outlets, such as <i>The Guardian</i>, <i>Vox</i>, and <i>Forbes</i>. He has presented his work at conferences and seminars in over 20 countries, and he lives in San Francisco with his wife Kelly Anthis and their adopted dogs Apollo and Dio(nysus).",
    website: "https://jacyanthis.com",
    publications: [],
    role: "PhD Student",
    bioImg: Jacy,
  },
  {
    name: "Muhua Huang",
    email: "muhua@uchicago.edu",
    affiliation: "University of Chicago",
    bio:
      "Muhua Huang is a master’s student in MACSS, with an interest in AI for social science. She holds a BA in Computer Science & Psychology from the University of British Columbia. Currently, she has two lines of research involving LLM-Agents: (1) creating LLM-Agents at scale using a psychometric approach for behavioral science studies, and (2) investigating how LLMs’ values evolve through multi-agent interaction. Using methods from machine learning, NLP, and quantitative psychology, her research experience spans Social & Personality Psychology, Human-Centered AI, and Psychometrics.",
    website: null,
    publications: [],
    role: "Masters Student",
    bioImg: Muhua,
  },
  {
    name: "Carolina Biliotti",
    email: "carolina.biliotti@imtlucca.it",
    institution: "IMT School for Advanced Studies Lucca, Italy",
    bio:
      "Carolina Biliotti is a fourth-year PhD student in Economics, Networks and Business Analytics (ENBA) at the IMT School for Advanced Studies Lucca, and a visiting student at Knowledge Lab. Her research interests include applications of causal inference, econometrics, and machine learning, focusing on policy evaluation and gender bias in science. At Knowledge Lab, her purpose is to investigate the interplay of gender, recognition, and innovation within the scientific community. She received a Bachelor’s degree in Political Sciences and a Master’s degree in Economics from the University of Florence.",
    website: "https://www.researchgate.net/profile/Carolina-Biliotti",
    title: "PhD Student",
    bioImg: Biliotti,
  },
  {
    name: "Shiyang Lai",
    email: "shiyanglai@uchicago.edu",
    institution: "",
    bio:
      "I am a Ph.D. student in the Department of Sociology at the University of Chicago. Before this, I held a visiting fellow position at Northwestern University's Kellogg School of Management and received an M.A. in Computational Social Science from the University of Chicago. My current research agenda broadly encompasses societal computing and collective intelligence. In societal computing, I am developing a new computational framework to model social entities and systems, drawing inspiration from quantum physics. This approach aims to introduce a new lens for understanding the social world and to improve inference and predictions of a wide range of social activities, with an initial focus on scientific and technological innovations. In the realm of collective intelligence, my work explores the emergence of the wisdom of crowds and how it can be more effectively harnessed in open environments with minimal regulations from an evolutionary perspective. My scope extends beyond merely human entities to include artificial intelligence, acknowledging their increasing significance in the contemporary landscape of social learning.",
    website: "https://shiyang-term.com/",
    title: "PhD Student",
    bioImg: Person,
  },
  {
    name: "Ningzi Li",
    email: "ningzi@uchicago.edu",
    institution: "University of Chicago",
    bio:
      "Ningzi is a professional research specialist at the Data Science Institute (DSI) and an adjunct assistant professor at the Booth School of Business at the University of Chicago. She obtained Ph.D. in sociology from Cornell University. Ningzi studies communication and behavior in organizations. She particularly focuses on how firms strategically communicate to influence stakeholder behaviors in the context of earnings calls, venture capital investments, and ESG reports. She also studies how stakeholders' communication influences firm behaviors in the context of employee reviews and product recalls. Her analysis heavily relies on natural experiments and natural language processing tools.",
    website: "https://ningzili.com",
    title: "PhD Student",
    bioImg: Person,
  },
  {
    name: "Chen Lin",
    email: "lchencu@connect.ust.hk",
    affiliation: "Hong Kong University of Science and Technology",
    bio:
      "Lin is currently a near-graduating CS PhD candidate at the Hong Kong University of Science and Technology. She visited Knowledge Lab in 2022~2023. Her research interests lie in data-driven understanding of human-place visitation and human-human interaction patterns in complex urban environments, specifically focusing on topics including inequality, segregation, and resilience. She is also exploring using large language models for network learning and Science of Science (collective research attention).",
    website: "https://linchen-65.github.io/linchen/",
    publications: [
      {
        title:
          "Strategic COVID-19 vaccine distribution can simultaneously elevate social utility and equity",
        journal: "Nature Human Behaviour",
        volume: "6",
        issue: "11",
        year: 2022,
        pages: "1503-1514",
      },
      {
        title:
          "Counterfactual mobility network embedding reveals prevalent accessibility gaps in US cities",
        journal: "Humanities and Social Sciences Communications",
        volume: "11",
        issue: "1",
        year: 2024,
        pages: "1-12",
      },
    ],
    role: "PhD Student",
    bioImg: Person,
  },
  {
    name: "Hongkai Mao",
    email: "hm404@stanford.edu",
    institution: "Stanford University",
    bio:
      "Hongkai Mao is a PhD student in the Organizational Behavior Program at the Graduate School of Business, Stanford University. His research focuses on negative social interactions, such as toxicity, conflicts, and polarization, across both interpersonal and organizational levels. He aims to understand how people perceive their surroundings and how these perceptions can lead to unfavorable behavior in a socio-techno environment. As a potential approach to achieving this, he is interested in leveraging Large Language Models as digital doubles for simulated experiments to explore these complex dynamics.",
    website: "",
    title: "PhD Student",
    bioImg: Person,
  },
  // {
  //   "name": "Rui Pan",
  //   "email": "rui.pan@kellogg.northwestern.edu",
  //   "institution": "Northwestern University",
  //   "bio": "tbd",
  //   "website": "tbd",
  //   "title": "PhD Student",
  //   "bioImg": Person
  // },
  {
    name: "Nakwon Rim",
    email: "nwrim@uchicago.edu",
    institution: "University of Chicago",
    bio:
      "Nakwon is a Ph.D. student in the Department of Psychology at the University of Chicago. He is interested in how people represent and compress information about the complex environment around us and how that information gives rise to innovations, cognitive processes, and/or biases. Before coming to the University of Chicago, he received his bachelor's degree in Psychology and Brain Cognitive Science from Korea University.",
    website: "https://nwrim.github.io/",
    title: "PhD Student",
    bioImg: NWRim,
  },
  {
    name: "Wenxuan Shi",
    email: "wenxuanshi@whu.edu.cn",
    affiliation: "Wuhan University",
    bio:
      "Wenxuan Shi is a Ph.D. candidate at the School of Information Management, Wuhan University, China. She has been affiliated with the Knowledge Lab since June 2022. Her research centers on the science of science and scientific evaluation, with a particular focus on the processes of knowledge combination and innovation diffusion, the career trajectories of scientists, and the composition of research teams. Her work aims to provide insights that help scientists better organize and lead teams to foster scientific innovation and breakthroughs.",
    website: null,
    publications: [
      {
        title:
          "Women’s Strength in Science: Exploring the Influence of Female Participation on Research Impact and Innovation",
        journal: "Scientometrics",
        volume: "129",
        issue: "7",
        year: 2024,
        pages: "4529-4551",
      },
      {
        title:
          "The expansion of team size in library and information science (LIS): Is bigger always better?",
        journal: "Journal of Information Science",
        volume: null,
        issue: null,
        year: 2023,
        pages: "01655515231204800",
      },
    ],
    role: "PhD Student",
    bioImg: Wenxuan,
  },

  {
    name: "Di Tong",
    email: "ditong@mit.edu",
    institution: "MIT",
    bio:
      "Di is a PhD candidate at MIT Sloan school of management, affiliated with the Institute for Work and Employment Research. Her research interests include organizational change, sociology of work, inequality, and social activism. She applies computational text analyses to study how firms respond to institutional, social, economic, and technological environments to change the organization of work and workers. She graduated with a M.A. in Computational Social Science from the University of Chicago and a B.A. in English Language and Literature from Tsinghua University.",
    website: "https://di-tong.github.io/",
    title: "PhD Student",
    bioImg: Tong,
  },
  {
    name: "Renli Wu",
    email: "renly@uchicago.edu",
    institution: "Wuhan University",
    bio:
      "Renli Wu is a Ph.D. candidate at the School of Information Management, Wuhan University. He has been training at the Knowledge Lab for two years, since October 2021. His research primarily focuses on the Science of Science and Information Science, investigating the evolution of disciplines and cross-disciplinary knowledge flows. This encompasses examining the heterogeneity and differentiation in knowledge diffusion across various fields, uncovering hierarchies and biases within disciplinary networks, and studying the emergence and aging of domains. His work aims to provide valuable insights into the occurrence of innovations and the propagation of knowledge across different domains. Additionally, his studies delve into the dynamics of scientific teams and the career trajectories of scientists, exploring aspects such as team leadership, team size, and gender. Moving forward, he aims to explore the potential of leveraging LLMs and AI to discover new perspectives and make predictions about knowledge creation and scientific innovation.",
    website: "",
    title: "PhD Student",
    bioImg: Renwu,
  },
  {
    name: "Yuanyi Zhen",
    email: "zhenyy21@maills.tsinghua.edu.cn",
    institution: "Tsinghua University",
    bio:
      "Yuanyi Zhen is a Ph.D. candidate in the Sociology Department at Tsinghua University and has been visiting the Knowledge Lab since March 2023. Her academic interests focus on the science of science, computational social science, and the sociology of science. Specifically, she seeks to understand how national culture, values, and norms shape the social relationships between innovators and how they influence disruptive innovation, tracing these social dynamics and mechanisms using network simulations and computational methods such as NLP and machine learning. Yuanyi holds a master's degree in Educational Technology from Beijing Normal University, specializing in Artificial Intelligence in Education (AIED), with a focus on the automatic construction of knowledge graphs in computer-supported collaborative learning and the evaluation of intelligent tools.",
    website:
      "https://scholar.google.com/citations?user=tQm_0ZAAAAAJ&hl=zh-CN&oi=ao",
    title: "PhD Student",
    bioImg: Yuanyi,
  },
  {
    name: "Hyunku Kwon",
    email: "hyunkukwon@uchicago.edu",
    affiliation: "University of Chicago",
    bio:
      "Hyunku Kwon is a PhD candidate in sociology at the University of Chicago. He uses computational and geostatistical methods to study political economy, race, and the environment in the Postbellum US South, with a focus on agricultural land use arrangements, labor contracts and cotton. His dissertation examines the role that Black federal troops played in shaping land use (e.g., plantations, sharecropping, etc.) and crop monoculture in the Postbellum US South. His research has been published or is forthcoming in the American Political Science Review and Sociological Science. Before joining the University of Chicago, he received a BA in Public Administration and Political Science from Yonsei University.",
    website: "hyunkukwon.com",
    publications: [
      {
        title:
          "Black Troops, White Rage, and Political Violence in the Postbellum American South",
        journal: "American Political Science Review",
        volume: null,
        issue: null,
        year: 2024,
        pages: null,
      },
      {
        title: "Subjective Political Polarization",
        journal: "Sociological Science",
        volume: null,
        issue: null,
        year: 2023,
        pages: null,
      },
    ],
    role: "PhD Student",
    bioImg: Person,
  },
  {
    name: "Honglin Bao",
    email: "honglinbao@uchicago.edu",
    institution: "University of Chicago",
    bio:
      "Honglin Bao (he/him) is a doctoral student in the Knowledge Lab and Data Science Institute at the University of Chicago. His research focuses on uncovering the driving forces behind science and innovation. In his research he uses and develops computational tools, including network analysis, machine learning, and simulation modeling.",
    website: "www.hbao.info",
    title: "PhD Student",
    bioImg: Person,
  },
  {
    name: "Carina Kane",
    email: "carinalkane@gmail.com",
    affiliation: "University of Chicago",
    bio:
      "Carina is an undergraduate student at the University of Chicago pursuing a B.S. in Data Science and a B.A. in Philosophy. She is interested in studying knowledge representation in AI models, both to improve AI model performance and also deepen our understanding of individual and collective knowledge systems. Her current research at Knowledge Lab is focused on using natural language processing techniques to model the evolution of scientific concepts and capture, on a conceptual level, the dynamics of scientific innovation. Her research is aimed at combining theories from the history and philosophy of science with technically rigorous methods in artificial intelligence and data analysis.",
    website: null,
    publications: [],
    role: "Undergraduate Student",
    bioImg: Person,
  },
];

const klabAlumni = [
  {
    name: "Hsin-Keng Ling",
    email: "hkling@umich.edu",
    affiliation: "University of Michigan",
    bio:
      "Hsin-Keng Ling is a PhD student at the Department of Sociology, University of Michigan. His interest lies in the intersection of knowledge, politics, culture, cognition, and technology. His work spans various projects that broadly aim to model a 'market of ideas' in information domains such as social media, policy documents, or academia. He previously completed a Master's in Computational Social Science at the University of Chicago, and a BA in Sociology at National Taiwan University.",
    website: null,
    publications: [],
    role: "Alumni",
    bioImg: Hsing,
  },
  {
    name: "Cay del Junco",
    email: "caydj@posteo.net",
    affiliation: null,
    bio:
      "Currently an academic librarian, Cay trained as a computational chemist and physicist with Suri Vaikuntanathan at the University of Chicago (2014-20), and was a postdoc with the Knowledge Lab in 2020-21. As a practicing science librarian, Cay’s interests lie in critical teaching methods for STEM librarianship, equitable, grassroots models of open access scholarly publishing, and data analysis (bibliometrics, collections analysis, etc.). As a researcher, Cay is broadly interested in power & politics in academic knowledge production and scholarly communication, especially in the natural sciences.",
    website: "https://cdeljunco.github.io/",
    publications: [],
    role: "Alumni",
    bioImg: Person,
  },
  {
    name: "Haohan Shi",
    email: "haohanshi2028@u.northwestern.edu",
    affiliation: "Northwestern University",
    bio:
      "Haohan Shi is a Ph.D. student in the Media, Technology, and Society program at Northwestern University. At Northwestern, he collaborates in the Lab on Innovation, Networks, and Knowledge under the guidance of Dr. Agnes Horvat. He is broadly interested in misinformation, the science of science, online democracy, computational social science, and AI for social good. His work focuses on advancing online scholarly communication and promoting the democratization of science through digital science dissemination. He holds an M.A. in Computational Social Science from the University of Chicago and a B.S. in Mathematics/Computer Science and Psychology/Linguistics from Emory University.",
    website: "https://hshi420.github.io/",
    publications: [],
    role: "Alumni",
    bioImg: Person,
  },

  // {
  //   name: "Aabir Abubaker Kar",
  //   title: "Graduate student, University of Chicago",
  //   bio:
  //     "Aabir is currently pursuing an MA in Computational Social Science at The University of Chicago expected May 2021). At the Knowledge Lab, he is using NLP and embedding methods to analyze textual data on job advertisements to better understand up-skilling, labor markets, and teams. He has a BE in Engineering and an MSc in Physics from BITS Pilani, Goa Campus in India - as well as a Minor Certificate in Philosophy, Economics and Politics. He has previously worked on research at the New England Complex Systems Institute and the International Centre for Theoretical Sciences, Bangalore. His research interests are in complex socioeconomic systems - social stratification, information propagation, economic flows amongst them. Methodologically, he works with machine learning, networks, statistics, physics - and enjoys exploring their applications to other disciplines.",
  //   size: "half",
  //   bioImg: Person
  // },

  // {
  //   name: "Shahab Asoodeh",
  //   title: "Postdoctoral Scholar, University of Chicago",
  //   bio:
  //     "I am interested in the applications of discrete (differential) geometry and information theory in machine learning and network science. In particular, my main research at the Knowledge Lab focuses on the following two broad questions: 1) How to quantify geometry of graphs, simplicial complexes, and more generally, hypergraphs and to interpret them in real-world networks? And 2) How to use geometry and information theory to define and quantify fairness and privacy in machine learning and data mining? I am fortunate to work with James Evans at the Knowledge Lab and Ishanu Chattopadhyay at the Institute of Genomics and System Biology (IGSB). I received my PhD and MSc both in applied mathematics from Queen's University, Canada, in 2017 and 2011 and a MSc in Electrical Engineering from ETH Zurich and TU Delft in 2010.",
  //   size: "half",
  //   bioImg: Person
  // },
  // {
  //   name: "Megan Barnes",
  //   title: "Student, University of Chicago",
  //   bio:
  //     "I graduated from the University of Chicago, studying linguistics and computer science. I am interested in language processing as well as data processing techniques, like machine learning, that help us better understand humans. At Knowledge Lab, I worked on a project to create maps of research activity in key topical areas of interest to research funding agencies. The maps could reveal and help funders analyze a) levels of research activity, b) who is participating, c) and in which topics. Also, I love music, Twitter, comedy, and the Pacific Northwest. I am currently working for an early stage startup in New York City.",
  //   size: "half",
  //   bioImg: Person
  // },
  // {
  //   name: "Alexander Belikov",
  //   title: "Postdoctoral Scholar, University of Chicago",
  //   bio:
  //     "Alexander Belikov is interested in applications of machine learning and natural language processing to social phenomena and texts. Of particular interest to him are the relation extraction and the convergence of social consensus, which can be studied in conjunction. Alexander received his B.S. and M.S. from the Moscow Institute of Physics and Technology and his PhD in physics from the University of Chicago. Prior to joining the Knowledge Lab, he held a two-year postdoc at the Institut d'Astrophysique de Paris. He also worked as a quantitative researcher in wholesale risk modeling at JP Morgan Chase and later at the exotic equity derivatives desk at Barclays Capital in New York.",
  //   size: "half",
  //   bioImg: Person
  // },
  // {
  //   name: "Cody Braun",
  //   title: "IMB",
  //   bio:
  //     "Cody is a masters student in computer science, a veteran of several tech startups, and a University of North Carolina alumnus. Though he is currently studying high-performance computing, machine learning, and data analysis, his wide range of past experiences include jobs at small-town Southern newspapers, Portuguese olive farms, and Australian construction companies. Among other projects, he is currently working on a browser plugin designed to detect phishing, a bound ePaper book dynamically populated by a web crawler, and a handful of Arduino-based gadgets.",
  //   size: "half",
  //   bioImg: Person
  // },
  // {
  //   name: "William Catino",
  //   title: "Principal Software Engineer, University of Chicago",
  //   bio:
  //     "William earned a PhD in Electrical and Computer Engineering at the Illinois Institute of Technology in 1997, under the guidance of Joseph L. LoCicero and Henry Stark. His research topic was Constrained Optimization Algorithms for Image Processing, applied to Hologram design. In addition to working at several technology companies, he spent a large portion of his career as an independent consultant. His work has spanned, and often integrated, a variety of areas, including: Adaptive Stochastic Signal Processing, applied to Telecommunications, Efficient / High-Performance Software Implementation, Video Games and Computer Graphics, Simulation and Modeling of Physical and Virtual Systems, Optimization Algorithms, Pattern Recognition, Artificial Intelligence. William currently serves as a Principal Software Engineer for the Knowledge Lab at the University of Chicago, focusing on Database Design and Programming, Machine Learning and Natural Language Processing.",
  //   size: "half",
  //   bioImg: Person
  // },
  // {
  //   name: "Brendan Chambers",
  //   title: "Postdoctoral Scholar, University of Chicago",
  //   bio:
  //     "Brendan is a creative data scientist specializing in complex interconnected systems. He performed his PhD research in the MacLean Laboratory for Cortical Circuits and Network Neuroscience, studying emergent activity patterns in the neurons of neocortex. His current work is situated at the intersection between machine learning, communication networks, and the sociology of science. Brendan has been recognized as an NSF S-STEM Fellow in Computation & Modeling and an NSF IGERT Fellow in the Neural Control of Movement. His work in collaboration with Dr. Jason MacLean was nominated for a Hot Topic Award by the Society for Neuroscience and distinguished as a Top 50 Most-Downloaded Article by PLOS Computational Biology. Brendan grew up in Iowa and studied computer science at Oberlin College. He is a hobbyist electronic musician and climber. You can find him on Twitter via @societyoftrees.",
  //   size: "half",
  //   bioImg: Person
  // },
  // {
  //   name: "Yo Hoong “YJ” Choe",
  //   title: "PhD Student, Machine Learning, Carnegie Mellon",
  //   bio:
  //     "I am a PhD student studying Machine Learning at Carnegie Mellon. I was born and raised in Seoul, South Korea. I am broadly interested in the theory of machine learning as well as its applications to social models.",
  //   size: "half",
  //   bioImg: Person
  // },
  // {
  //   name: "Valentin Danchev",
  //   title: "Postdoctoral Scholar, University of Chicago",
  //   bio:
  //     "Valentin Danchev is a computational sociologist. He uses network analysis, computational models, text analysis, and large-scale databases to study how patterns of connectivity in social, spatial, and semantic networks influence differences in outcomes, such as replicable discoveries, innovation, mobility opportunities, and inequality. At Knowledge Lab, Valentin conducts a large-scale evaluation of the robustness and replicability of tens of thousands of research results published in the biomedical literature and examines what network structures of scientific communities contribute to robust, replicable discoveries. He also examines the interplay of social, biological, and organizational mechanisms inducing robust innovations in oncology research. Valentin holds a DPhil (PhD) in Development Studies from the University of Oxford, where he was also affiliated with the networks research group at the Mathematical Institute. Prior to that, he received his MA from the University of Essex and his BA from the University of Sofia, both in Sociology.",
  //   size: "half",
  //   bioImg: Person
  // },
  // {
  //   name: "Alexander Dunlap",
  //   title: "PhD Student, Mathematics, Stanford University",
  //   bio:
  //     "Mathematics PhD student at Stanford. I am interested in machine learning and, more generally, using quantitative ideas to understand complex problems. In my free time I enjoy bicycling and baking.",
  //   size: "half",
  //   bioImg: Person
  // },
  // {
  //   name: "Aaron Gerow",
  //   title: "Post-doctoral Scholar, Knowledge Lab",
  //   bio:
  //     "I grew up in and around Chicago, went to college in Tacoma at Pacific Lutheran University studying computer science and philosophy, liberal arts style. I received my masters degree from University College Dublin in cognitive science and I began my PhD at Trinity in the Fall of 2010. In September, 2013, I submitted my PhD in computational linguistics and started work at the Knowledge Lab as a post-doctoral scholar. My interests have clustered around novel and large-scale natural language processing and figurative language, both with a distinct slant toward cognitive and social sciences. I'm interested, specifically, in how large data-sets of structured linguistic information relate to patterns of information use. One example is tracking how people's description of stock-markets relate to the markets themselves, or tracking trends in the grammatical context of key terms in a corpus. As part of the Knowledge Lab, I hope to explore the how emergent properties of text and information influence the dynamics of knowledge creation and use.",
  //   size: "half",
  //   bioImg: Person
  // },
  // {
  //   name: "Anuraag Girdhar",
  //   title:
  //     "First-year student in the MA program in Computational Social Science",
  //   bio:
  //     "While conferring with Professor Mark Granovetter at Stanford, he spent the past year studying how the structure of social networks affects opinion polarization. He is more broadly interested in operationalizing notions of objective truth and theory of mind on social networks. He is also interested in extending these ideas to designing social networks that optimize social good. Anuraag has an A.B. in Mathematics and Economics from Dartmouth College. Prior to arriving at the University of Chicago, he spent four years in private industry working as a pharmaceutical statistician at Gilead Sciences, and as an economic research associate at Bridgewater Associates.",
  //   size: "half",
  //   bioImg: Person
  // },
  // {
  //   name: "Clara del Junco",
  //   title: "Postdoctoral Scholar, University of Chicago",
  //   bio:
  //     "My research interests include characterizing and promoting diversity in scientific research, and the importance of language and social context in science-how concepts flow and meaning changes between scientific fields and popular discourse. Before joining the Knowledge Lab in autumn 2020, I did a PhD in theoretical chemistry at the Vaikuntanathan lab at the University of Chicago. My thesis explored how consuming energy allows biological and physical systems to adapt and operate robustly in noisy environments. Personal website: https://cdeljunco.github.io/me/",
  //   size: "half",
  //   bioImg: Person
  // },
  // {
  //   name: "Molly Lewis",
  //   title: "Special Faculty, Carnegie Mellon University",
  //   bio:
  //     "My research focuses on understanding how linguistic meaning-semantic space-is acquired in cognitive development, changes over historical time, and varies cross-linguistically. I am also interested in issues related to scientific replicability and reproducibility. I received my PhD in Developmental Psychology from Stanford University, where I worked with Michael Frank. Before that, I received a BA in Linguistics from Reed College. At the Knowledge Lab, my work examined cross-linguistic variability in the alignment of linguistic meaning using large scale corpora. I was co-advised by James Evans at the Knowledge Lab and Gary Lupyan in the Psychology Department at the University of Wisconsin-Madison. I am currently a faculty member in the Department of Psychology and Social and Decision sciences at Carnegie Mellon University. My personal website: https://www.andrew.cmu.edu/user/mollylew/",
  //   size: "half",
  //   bioImg: Person
  // },
  // {
  //   name: "Linzhou Li",
  //   title: "Graduate student, University of Chicago",
  //   bio:
  //     "I am a PhD student in Chicago Sociology Department. My research interest is mostly related to economic and cultural change. More specifically, I made efforts in understanding questions such as the substitution and generalization of social, cultural and ideological values; reasoning based upon (and constrained by) the cultural system; and the self-organization of local financial and economic behaviors. I employ intensively state-of-the-art computational methods as well as traditional ethnographic tools to guide my research. A most recent project of mine applies a new embedding technique to embed words and tags into hyperbolic space to uncover the hidden hierarchical structure of 21st century physics. I am also collaborating with my colleague Shilin Jia to uncover cultural and ideological autonomy using China's newspaper People's Daily from 1946 to 2003. Before coming to Chicago, I received my BA and MA degree from Tsinghua University.",
  //   size: "half",
  //   bioImg: Person
  // },
  // {
  //   name: "Bowen Lou",
  //   title: "PhD Student, University of Pennsylvania, Wharton",
  //   bio:
  //     "Completed my masters study in computer science from University of Chicago and am currently a PhD Student at Wharton. I am a data enthusiast, and passionate about using large amounts of data to solve real world problems. I'm specifically interested in applying or proposing solutions from statistical, natural language processing, and network science in order to understand latent patterns under large-scale texts about individuals and organizations from social media, digital publications and the World Wide Web.",
  //   size: "half",
  //   bioImg: Person
  // },
  // {
  //   name: "Grace Lu",
  //   title: "Student, Uber",
  //   bio:
  //     "Grace works on self-driving cars at Uber. Grace graduated from the college double majoring in Computer Science and Economics from northeast Ohio. She is interested in big data, data analytics, social media trends, language processing, and using technology to create applications in a variety of different fields. At the Knowledge Lab, she worked on a project to map Wikipedia to understand how past revision history can lead to the creation of new pages. In her free time, she enjoys playing tennis, music, and traveling.",
  //   size: "half",
  //   bioImg: Person
  // },
  // {
  //   name: "Reid Mcllroy-Young",
  //   title: "Researcher at Knowledge Lab",
  //   bio:
  //     "I have a Masters in Computational Social Science from the University of Chicago and was a researcher at Knowledge Lab. My current research is on developing new machine learning techniques that are useful in the social sciences. What insights into human nature are present in the mass behavior of people? I have primarily worked with collections of source code and bibliographic sources to examine these, but as my PhD progresses I hope to expand the domain. At Knowledge Lab I primarily participated in two projects. First, a collection of Jupyter Notebooks to help with James Evans' Content Analysis class, these are detailed examples working through problems relevant to many social scientists, such as entity extraction, auto-encoders or model selection. Secondly, I was the main researcher on quarter million Sloan grant to study how programming languages impact science and thought with James Evans and Gary Lupyan.",
  //   size: "half",
  //   bioImg: Person
  // },
  // {
  //   name: "Deblina Mukherjee",
  //   title: "Undergraduate student, University of Chicago",
  //   bio:
  //     "I'm a fourth year in the College at UChicago, majoring in Sociology and minoring in Computer Science and Statistics. I am interested broadly in computational and applied math, both as method and as a field of inquiry in the tradition of science studies. At the Knowledge Lab, I'm working on Genesweep (which is a thesis project investigating the relationship between scientists and games), and with Jerimiah Milbauer and Yutao Chen on the Sloan Languages Project (which is investigating how programming languages shape thought). Personal website: https://deblina.net",
  //   size: "half",
  //   bioImg: Person
  // },
  // {
  //   name: "Prateeti Mohapatra",
  //   title: "Research Engineer - Modeling and Simulation, Knowledge Lab",
  //   bio:
  //     "My background is in Statistical Modeling and Analysis, System Dynamics, Speech Processing and Software Engineering. I have also worked in the areas of Parallel Programming, Numerical Methods, Requirements Engineering, Life-cycle Cost Modeling, and Global Software Development at Research Centers (Central Research Laboratory, India, ABB Corporate Research Center, India, and Flash Center for Computational Science, UChicago, USA) and Software Industries (The Mathworks). My current work focuses on developing reliable and scalable data warehouse systems for data contained in different repositories in both structured and unstructured format. I am also currently working on feature identification/extraction from text objects as well as their classification using various machine learning approaches.",
  //   size: "half",
  //   bioImg: Person
  // },
  // {
  //   name: "Chris Natoli",
  //   title: "PhD student in Mathematics at CUNY Graduate Center",
  //   bio:
  //     "I like learning about and using machine learning and probabilistic methods to rigorously study problems in the social sciences. I care a lot about the left, history, and New York City.",
  //   size: "half",
  //   bioImg: Person
  // },
  // {
  //   name: "Nate Sauder",
  //   title: "Develop deep learning algorithms for medical image diagnosis",
  //   bio: "",
  //   size: "half",
  //   bioImg: Person
  // },
  // {
  //   name: "Nandana Sengupta",
  //   title: "Postdoctoral Scholar, University of Chicago",
  //   bio:
  //     "My research revolves around improving the predictive performance of traditional Econometric models using modern Statistics and Machine Learning. I'm very interested in developing these techniques with a special focus on Public Policy applications. I am currently a doctoral candidate of Economics at the Tepper School of Business, Carnegie Mellon University. I also hold a Bachelor's degree in Physics from St. Stephen's College (New Delhi, India) and a Master's degree in Development Economics from Indira Gandhi Institute of Development Research (Mumbai, India). I've had the opportunity to participate in a number of interdisciplinary research groups including the Machine Learning in Social Sciences group at Carnegie Mellon University and the Computational Social Science Workshop at the Santa Fe Institute. I'm looking forward to continuing this line of work at the Knowledge Lab, where my projects will include developing computational tools to more deeply engage user input as well as developing new techniques to assess and predict the impact of academic research.",
  //   size: "half",
  //   bioImg: Person
  // },
  // {
  //   name: "Feng “Bill” Shi",
  //   title: "Applied Mathematics Researcher",
  //   bio:
  //     "My background is in applied mathematics, and complex networks in particular. I have been working on various interacting particle systems such as the evolving voter model, percolation of nanocomposites, and virus-antibody interactions. My work currently focuses on understanding the processes that generate and shape the knowledge in scientific systems, for example, the beliefs, preferences, biases, and strategies that guide scientists in their exploration of the natural world. This research is embedded in a large interdisciplinary collaboration to understand the creation, dissemination, and limit of human knowledge.",
  //   size: "half",
  //   bioImg: Person
  // },
  // {
  //   name: "Taweewat “Champ” Somboonpanyakul",
  //   title: "PhD student in Physics at MIT",
  //   bio:
  //     "I am originally from Thailand. I have some experience in Astrophysics, specifically gravitational lensing and exoplanets, but I am also interested in social parts of science, and, in particular, how humans gather new knowledge in science.",
  //   size: "half",
  //   bioImg: Person
  // },
  // {
  //   name: "Jamshid Sourati",
  //   title: "Postdoctoral Scholar, University of Chicago",
  //   bio:
  //     "My research interest revolves around machine learning and its applications in discovering underlying patterns in real-world data. At the Knowledge lab, my goal is to apply computational tools for processing enormous textual data sets and to develop novel learning models that give better insights into how humans think and interact collectively. I received my doctorate in Electrical and Computer Engineering at Northeastern University. During the course of my Ph.D., my focus was primarily on generic analysis of learning models in theoretical levels. Prior to joining Knowledge lab, as a post-doctoral researcher in Harvard medical school, I conducted research in development and rigorous analysis of machine learning algorithms for automatic medical image processing.",
  //   size: "half",
  //   bioImg: Person
  // },
  // {
  //   name: "Bhargav Srinivasa Desikan",
  //   title: "Ph.D. Candidate in Computer Science at EPFL",
  //   bio:
  //     "Bhargav is a Research Fellow at the Knowledge Lab, currently working with Prof. Evans on a book titled 'Thinking with Deep Learning', where they are trying to work towards a sophisticated deep learning powered approach to representations of social objects. He previously received an MA in Computational Social Science from the University of Chicago, and his research interests lie in the intersection of AI and the social sciences: using computational tools to probe questions of social behavior, as well as critically examining the effects which the information age has had on our species and planet. He has previously co-authored publications in the Journal of Machine Learning Research, the proceedings of the International Conference on Computational Linguistics, and Cognition, and has authored a book on NLP and Computational Linguistics with Python.",
  //   size: "half",
  //   bioImg: Person
  // },
  // {
  //   name: "Misha Teplitsky",
  //   title: "Ph.D. in Sociology from the University of Chicago",
  //   bio:
  //     "I was a Graduate Research Fellow at KnowledgeLab. My research focuses on academic publishing, particularly on how scientists evaluate the work of others. How do scientists decide if a finding is worthy of publication, and how valid are these judgments? To answer these questions I examine the peer review files of academic journals using a variety of machine learning and text processing techniques. I am also engaged in a variety of collaborative projects. In a KnowledgeLab project with James Evans, we test the robustness of a large sample of claims published in social science journals by testing them on out-of-sample data and 'perturbing' the model specifications. In another KnowledgeLab project with Eamon Duede and Grace Lu, we study which scientific findings move from the scientific literature to Wikipedia.",
  //   size: "half",
  //   bioImg: Person
  // },
  // {
  //   name: "Di Tong",
  //   title: "Graduate Student, University of Chicago",
  //   bio:
  //     "I'm a student in the Computational Social Science Master's program with a concentration in sociology. My major research interest lies in stratification and inequality, political sociology as well as computational text analysis. Specifically, I'm interested in studying political discourse, cultural norms, public perceptions and attitudes regarding distributive justice; the causes and consequences of economic disparities and the social conditions that mediate and moderate these processes. Currently, at the Knowledge lab, I'm applying word embedding techniques on massive-scale job ads data to examine the underlying geometry of skill coordination that shapes social lives centered at the labor division. I'm also working on a project that examines the relationship between perceived inequality and political trust in East Asian societies. My previous work utilizes topic modeling to trace the transforming biopolitics in China from 1956-2003 through the lens of the changing official discourse on the birth planning policy. Before coming to Chicago, I completed my undergraduate degree at Tsinghua University majoring in English Language and Literature.",
  //   size: "half",
  //   bioImg: Person
  // },
  // {
  //   name: "Lingfei Wu",
  //   title: "Postdoctoral Scholar, University of Chicago",
  //   bio:
  //     "My research interest is the sciences of collaboration and innovation. I apply mathematical models and machine learning techniques to analyze collective knowledge production systems, including Web of Science, U.S. patents, Stack Exchange, GitHub. My works were published in journals including Nature, Physical Review E, Scientific Reports, PloS ONE, and also generated broad interest among diverse audiences in New Scientists and Science Daily. I got my PhD in Communication from the City University of Hong Kong in 2013. Overlapping with the PhD program I spent a year in Baidu as an algorithm engineer (internship). I joined Knowledge Lab in 2016 after working two years in the Center for Behavior, Institutions and the Environment at Arizona State University as a post-doc researcher. I am a core member of Swarma Club, a research network in Beijing with a vision to bridge academia, industry, and government.",
  //     size: "half",
  //   bioImg: Person
  // }
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
        <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
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
                  <h3>{team.name}</h3>
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
                      <Col xs={12}>
                        <h3>{team.name}</h3>
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
                      </Col>
                    </Row>
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
                        <h3>{team.name}</h3>
                        <p>{team.title}</p>
                        <Link to={team.url}>
                          <button>Read Bio</button>
                        </Link>
                      </Col>
                    </Row>
                  ) : (
                    <>
                      <Col xs={6} sm={3}>
                        <Row>
                          <Col xs={12}>
                            <img src={team.bioImg} alt={team.name} />
                          </Col>
                          <Col xs={12}>
                            <h3>{team.name}</h3>
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
                        </Row>
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
                        <h3>{team.name}</h3>
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
                      <Col xs={6} sm={3}>
                        <Row>
                          <Col xs={12}>
                            <img
                              src={team.bioImg}
                              alt={team.name}
                              key={`A${index}`}
                            />
                          </Col>
                          <Col xs={12}>
                            <h3>{team.name}</h3>
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
                        <img
                          src={team.bioImg}
                          alt={team.name}
                          key={`S${index}`}
                        />
                      </Col>
                      <Col xs={12} md={9}>
                        <h3>{team.name}</h3>
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
                      <Col xs={6} sm={3}>
                        <Row>
                          <Col xs={12}>
                            <img src={team.bioImg} alt={team.name} />
                          </Col>
                          <Col xs={12}>
                            <h3>{team.name}</h3>
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
