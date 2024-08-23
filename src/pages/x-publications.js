import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Nav from "../components/nav";
import Seo from "../components/seo";
import { Container, Row, Col } from "react-bootstrap";
import "../components/gridder.css";
import Trianges from "../images/triangles.svg";
import Neural from "../images/neural.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import Nature1 from "../images/nature-small-teams.png"
import Nature2 from "../images/nature-dead.png"
import Pnas1 from "../images/pnas-1.webp"
import Pnas2 from "../images/pnas-2.webp"

const features = [

  {
    title:
      "Large teams develop and small teams disrupt science and technology.",
    link: "https://www.nature.com/articles/s41586-019-0941-9",
    "author(s)": "Lingfei Wu, Dashun Wang, and James A. Evans",
    publication: "Nature 566, no. 7744 (2019): 378-382",
    image: Nature1
  },
  {
    title:
      "Skill discrepancies between research, education, and jobs reveal the critical need to supply soft skills for the data economy.",
    link: "https://www.pnas.org/content/115/50/12630",
    "author(s)":
      "Katy Börner, Olga Scrivner, Mike Gallant, Shutian Ma, Xiaozhong Liu, Keith Chewning, Lingfei Wu, and James A. Evans",
    publication:
      "Proceedings of the National Academy of Sciences 115, no. 50 (2018): 12630-12637",
      image: Pnas1  
  },
  {
    title:
      "Flat teams drive scientific innovation",
    link: "https://www.pnas.org/eprint/5SCQ7PK5J3MVUWRWWXX2/full",
    "author(s)":
      "Fengli Xu, Lingfei Wu, and James Evans",
    publication:
      "Proceedings of the National Academy of Sciences.",
      image: Pnas2  
  },
  
];

const publications = [
  {
    title:
      "Human Languages with Greater Information Density Increase Communication Speed, but Decrease Conversation Breadth.",
    link: "https://www.nature.com/articles/s41562-024-01815-w",
    "author(s)": "Pedro Aceves and James Evans. 2024.",
    publication: "Nature Human Behaviour.",
  },
  {
    title:
      "Local similarity and global variability characterize the semantic space of human languages.",
    link: "https://www.pnas.org/doi/10.1073/pnas.2300986120",
    "author(s)": "Molly Lewis and James Evans. 2023.",
    publication: "Proceedings of the National Academy of Sciences.",
  },
  {
    title: "Disrupted Routines Anticipate Musical Exploration.",
    link: "https://www.pnas.org/doi/10.1073/pnas.2306549121",
    "author(s)": "Kim Khwan, Noah Askin, and James Evans. 2024.",
    publication: "Proceedings of the National Academy of Sciences.",
  },
  {
    title:
      "Human Languages with Greater Information Density Increase Communication Speed, but Decrease Conversation Breadth.",
    link: "https://www.nature.com/articles/s41562-024-01815-w",
    "author(s)": "Pedro Aceves and James Evans. 2024.",
    publication: "Nature Human Behaviour.",
  },
  {
    title:
      "Local similarity and global variability characterize the semantic space of human languages.",
    link: "https://www.pnas.org/doi/10.1073/pnas.2300986120",
    "author(s)": "Molly Lewis and James Evans. 2023.",
    publication: "Proceedings of the National Academy of Sciences.",
  },
  {
    title: "Disrupted Routines Anticipate Musical Exploration.",
    link: "https://www.pnas.org/doi/10.1073/pnas.2306549121",
    "author(s)": "Kim Khwan, Noah Askin, and James Evans. 2024.",
    publication: "Proceedings of the National Academy of Sciences.",
  },
  {
    title:
      "Counterfactual Mobility Network Embedding Reveals Prevalent Accessibility Gaps in U.S. Cities.",
    link: "https://www.nature.com/articles/s41599-023-02570-5",
    "author(s)":
      "Young Li, Yunke Zhang, Fengli Xu, Lin Chen, Yuan Yuan, James Evans, and Luis Bettencourt. 2023.",
    publication: "Humanities and Social Sciences Communications.",
  },
  {
    title: "Being Together in Place as a Catalyst for Scientific Advance",
    link: "https://www.sciencedirect.com/science/article/pii/S0048733323001956",
    "author(s)":
      "Eamon Duede, Misha Teplitskiy, Karim Lakhani, and James Evans. 2023.",
    publication: "Research Policy 53(2): 104911.",
  },
  {
    title: "Accelerating Science though Human-Aware Artificial Intelligence",
    link: "https://www.nature.com/articles/s41562-023-01648-z",
    "author(s)": "Jamshid Sourati and James Evans. 2023.",
    publication: "Nature Human Behaviour.",
  },
  
  {
    title: "Ambiguity and engagement.",
    link: "https://www.journals.uchicago.edu/doi/full/10.1086/701298",
    "author(s)": "Peter McMahan and James Evans",
    publication: "American Journal of Sociology 124, no. 3 (2018): 860-912",
  },
  {
    title: "The wisdom of polarized crowds.",
    link: "https://www.nature.com/articles/s41562-019-0541-6",
    "author(s)": "Feng Shi, Misha Teplitskiy, Eamon Duede, and James A. Evans",
    publication: "Nature Human Behaviour 3, no. 4 (2019): 329-336",
  },
  {
    title: "Curvature of hypergraphs via multi-marginal optimal transport.",
    link: "https://ieeexplore.ieee.org/abstract/document/8619706",
    "author(s)": "Shahab Asoodeh, Tingran Gao, and James Evans",
    publication: "2018 IEEE Conference on Decision and Control (CDC)",
  },
  {
    title:
      "Wasserstein soft label propagation on hypergraphs: Algorithm and generalization error bounds.",
    link: "https://ojs.aaai.org/index.php/AAAI/article/view/4244",
    "author(s)": "Tingran Gao, Shahab Asoodeh, Yi Huang, and James Evans",
    publication:
      "Proceedings of the AAAI Conference on Artificial Intelligence, vol. 33, no. 01, pp. 3630-3637. 2019",
  },
  
  {
    title: "Toward a more scientific science.",
    link: "https://www.science.org/doi/full/10.1126/science.aav2484",
    "author(s)":
      "Pierre Azoulay, Joshua Graff-Zivin, Brian Uzzi, Dashun Wang, Heidi Williams, James A. Evans, Ginger Zhe Jin, et al.",
    publication: "Science 361, no. 6408 (2018): 1194-1197",
  },
  {
    title:
      "The sociology of scientific validity: How professional networks shape judgement in peer review.",
    link: "https://www.sciencedirect.com/science/article/pii/S0048733318301598",
    "author(s)":
      "Misha Teplitskiy, Daniel Acuna, Aïda Elamrani-Raoult, Konrad Körding, and James Evans",
    publication: "Research Policy 47, no. 9 (2018): 1825-1841",
  },
  {
    title: "Measuring discursive influence across scholarship.",
    link: "https://www.pnas.org/content/115/13/3308",
    "author(s)":
      "Aaron Gerow, Yuening Hu, Jordan Boyd-Graber, David M. Blei, and James A. Evans",
    publication:
      "Proceedings of the National Academy of Sciences 115, no. 13 (2018): 3308-3313",
  },
  {
    title: "Adaptive sampling for coarse ranking.",
    link: "http://proceedings.mlr.press/v84/katariya18a.html",
    "author(s)":
      "Sumeet Katariya, Lalit Jain, Nandana Sengupta, James Evans, and Robert Nowak",
    publication:
      "International Conference on Artificial Intelligence and Statistics, pp. 1839-1848. PMLR, 2018",
  },
  {
    title: "Science of science.",
    link: "https://www.science.org/doi/10.1126/science.aao0185",
    "author(s)":
      "Santo Fortunato, Carl T. Bergstrom, Katy Börner, James A. Evans, Dirk Helbing, Staša Milojević, Alexander M. Petersen et al.",
    publication: "Science 359, no. 6379 (2018)",
  },
  {
    title:
      "Millions of online book co-purchases reveal partisan differences in the consumption of science.",
    link: "https://www.nature.com/articles/s41562-017-0079",
    "author(s)":
      "Feng Shi, Yongren Shi, Fedor A. Dokshin, James A. Evans, and Michael W. Macy",
    publication: "Nature Human Behaviour 1, no. 4 (2017)",
  },
  {
    title: "Regression shrinkage and selection via the lasso.",
    link:
      "https://rss.onlinelibrary.wiley.com/doi/abs/10.1111/j.2517-6161.1996.tb02080.x",
    "author(s)": "Robert Tibshirani",
    publication:
      "Journal of the Royal Statistical Society: Series B (Methodological) 58, no. 1 (1996)",
  },
  {
    title:
      "Reconciling the small effect of rankings on university performance with the transformational cost of conformity.",
    link:
      "https://www.emerald.com/insight/content/doi/10.1108/S0733-558X20160000046009/full/html",
    "author(s)": "Craig Tutterow and James A. Evans",
    publication: "The university under pressure",
  },
  {
    title: "Choosing experiments to accelerate collective discovery.",
    link: "https://www.pnas.org/content/112/47/14569.short",
    "author(s)":
      "Andrey Rzhetsky, Jacob G. Foster, Ian T. Foster, and James A. Evans",
    publication:
      "Proceedings of the National Academy of Sciences 112, no. 47 (2015)",
  },
  {
    title: "Tradition and innovation in scientists’ research strategies.",
    link: "https://journals.sagepub.com/doi/full/10.1177/0003122415601618",
    "author(s)": "Jacob G. Foster, Andrey Rzhetsky, and James A. Evans",
    publication: "American Sociological Review 80, no. 5 (2015)",
  },
  {
    title:
      "Weaving the fabric of science: Dynamic network models of science’s unfolding structure.",
    link: "https://www.sciencedirect.com/science/article/pii/S0378873315000118",
    "author(s)": "Feng Shi, Jacob G. Foster, and James A. Evans",
    publication: "Social Networks 43 (2015): 73-85",
  },
  {
    title:
      "Health ROI as a measure of misalignment of biomedical needs and resources.",
    link: "https://www.nature.com/articles/nbt.3276",
    "author(s)":
      "Lixia Yao, Ying Li, Soumitra Ghosh, James A. Evans, and Andrey Rzhetsky",
    publication: "Nature Biotechnology 33, no. 8 (2015): 807-811",
  },
  {
    title: "Proposing ties in a dense hypergraph of academics.",
    link: "https://link.springer.com/chapter/10.1007/978-3-319-27433-1_15",
    "author(s)": "Aaron Gerow, Bowen Lou, Eamon Duede, and James Evans",
    publication:
      "International Conference on Social Informatics, pp. 209-226. Springer, Cham, 2015",
  },
  {
    title:
      "Fast, flexible models for discovering topic correlation across weakly-related collections.",
    link: "https://arxiv.org/abs/1508.04562",
    "author(s)":
      "Jingwei Zhang, Aaron Gerow, Jaan Altosaar, James Evans, and Richard Jean So",
    publication: "arXiv preprint arXiv:1508.04562 (2015)",
  },
  {
    title: "Promiscuous inventions.",
    link:
      "https://books.google.com/books?hl=en&lr=&id=QIqrDwAAQBAJ&oi=fnd&pg=PT174&dq=Promiscuous+Inventions:+Modeling+Cultural+Evolution+with+Multiple+Inheritance&ots=AUmxNyGZz2&sig=LQe5gNgCamk5LCuYaIS7DeRllaI#v=onepage&q=Promiscuous%20Inventions:%20Modeling%20Cultural%20Evolution%20with%20Multiple%20Inheritance&f=false",
    "author(s)": "Jacob G. Foster and James A. Evans",
    publication:
      "Beyond the Meme: Development and Structure in Cultural Evolution 22 (2019)",
  },
  {
    title: "Ten simple (empirical) rules for writing science.",
    link:
      "https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1004205",
    "author(s)": "Cody J. Weinberger, James A. Evans, and Stefano Allesina",
    publication: "(2015): e1004205",
  },
  {
    title:
      "Quantifying the impact and extent of undocumented biomedical synonymy.",
    link:
      "https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1003799",
    "author(s)":
      "David R. Blair, Kanix Wang, Svetlozar Nestorov, James A. Evans, and Andrey Rzhetsky",
    publication: "PLoS Computational Biology 10, no. 9 (2014): e1003799",
  },
  {
    title:
      "The modular community structure of linguistic predication networks.",
    link: "https://aclanthology.org/W14-3707.pdf",
    "author(s)": "Aaron Gerow and James Evans",
    publication:
      "Proceedings of TextGraphs-9: the workshop on Graph-based Methods for Natural Language Processing, pp. 48-55. 2014",
  },
  {
    title: "Active collaborative permutation learning.",
    link: "https://dl.acm.org/doi/abs/10.1145/2623330.2623730",
    "author(s)": "Jialei Wang, Nathan Srebro, and James Evans",
    publication:
      "Proceedings of the 20th ACM SIGKDD international conference on Knowledge discovery and data mining, pp. 502-511. 2014",
  },
  {
    title:
      "Finding cultural holes: How structure and culture diverge in networks of scholarly communication.",
    link:
      "https://sociologicalscience.com/download/volume%201/june/finding-cultural-holes.pdf",
    "author(s)":
      "Daril A. Vilhena, Jacob G. Foster, Martin Rosvall, Jevin D. West, James Evans, and Carl T. Bergstrom",
    publication: "Sociological Science 1 (2014): 221",
  },
  {
    title:
      "Modeling the transmission of community-associated methicillin-resistant Staphylococcus aureus: a dynamic agent-based simulation.",
    link:
      "https://translational-medicine.biomedcentral.com/articles/10.1186/1479-5876-12-124",
    "author(s)":
      "Charles M. Macal, Michael J. North, Nicholson Collier, Vanja M. Dukic, Duane T. Wegener, Michael Z. David, Robert S. Daum, et al.",
    publication: "Journal of Translational Medicine 12, no. 1 (2014): 1-12",
  },
  {
    title:
      "Attention to local health burden and the global disparity of health research.",
    link:
      "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0090147",
    "author(s)": "James A. Evans, Jae-Mahn Shim, and John PA Ioannidis",
    publication: "PloS One 9, no. 4 (2014): e90147",
  },
  {
    title: "Future science.",
    link: "https://www.science.org/doi/full/10.1126/science.1245218",
    "author(s)": "James A. Evans",
    publication: "Science 342, no. 6154 (2013): 44-45",
  },
  {
    title: "Communication and the evolution of cognition.",
    link:
      "https://books.google.com/books?hl=en&lr=&id=WdObAQAAQBAJ&oi=fnd&pg=PA125&dq=Evans,+James.+2013.+%E2%80%9CCommunication+and+the+Evolution+of+Cognition.%E2%80%9D+In:+Linda+Caporael,+James+Griesemer+and+William+Wimsatt,+eds.,+Scaffolding+in+Evolution,+Cognition+and+Culture,+MIT+Press.&ots=yyRQJvRTKy&sig=TApSAyPKENpTiq8ZzykCcLxHzCk#v=onepage&q&f=false",
    "author(s)": "James A. Evans",
    publication:
      "Developing scaffolding in evolution, cognition and culture. MIT Press, Cambridge (2014): 125-146",
  },
  {
    title: "Modeling the spread of community-associated MRSA.",
    link: "https://ieeexplore.ieee.org/abstract/document/6465271",
    "author(s)":
      "Charles M. Macal, Michael J. North, Nicholson Collier, Vanja M. Dukic, Diane S. Lauderdale, Michael Z. David, Robert S. Daum, et al.",
    publication:
      "Proceedings of the 2012 Winter simulation conference (WSC), pp. 1-12. IEEE, 2012",
  },
  {
    title: "War of ontology worlds: mathematics, computer code, or Esperanto?.",
    link:
      "https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1002191",
    "author(s)": "Andrey Rzhetsky and James A. Evans",
    publication: "PLoS Computational Biology 7, no. 9 (2011): e1002191",
  },
  {
    title:
      "Conflicting biomedical assumptions for mathematical modeling: the case of cancer metastasis.",
    link:
      "https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1002132",
    "author(s)":
      "Anna Divoli, Eneida A. Mendonça, James A. Evans, and Andrey Rzhetsky",
    publication: "PLoS Computational Biology 7, no. 10 (2011): e1002132",
  },
  {
    title: "Metaknowledge.",
    link: "https://www.science.org/doi/full/10.1126/science.1201765",
    "author(s)": "James A. Evans and Jacob G. Foster",
    publication: "Science 331, no. 6018 (2011): 721-725",
  },
  {
    title:
      "Advancing science through mining libraries, ontologies, and communities.",
    link: "https://www.jbc.org/article/S0021-9258(19)48716-4/fulltext",
    "author(s)": "James A. Evans and Andrey Rzhetsky",
    publication:
      "Journal of Biological Chemistry 286, no. 27 (2011): 23659-23666",
  },
  {
    title: "Benchmarking ontologies: bigger or better?.",
    link:
      "https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1001055",
    "author(s)":
      "Lixia Yao, Anna Divoli, Ilya Mayzus, James A. Evans, and Andrey Rzhetsky",
    publication: "PLoS Computational Biology 7, no. 1 (2011): e1001055",
  },
  {
    title:
      "Industry collaboration, scientific sharing, and the dissemination of knowledge.",
    link: "https://journals.sagepub.com/doi/abs/10.1177/0306312710379931",
    "author(s)": "James A. Evans",
    publication: "Social Studies of Science 40, no. 5 (2010): 757-791",
  },
  {
    title: "Industry induces academic science to know less about more.",
    link: "https://www.journals.uchicago.edu/doi/full/10.1086/653834",
    "author(s)": "James A. Evans",
    publication: "American Journal of Sociology 116, no. 2 (2010): 389-452",
  },
  {
    title: "Machine science.",
    link: "https://www.science.org/doi/full/10.1126/science.1189416",
    "author(s)": "James Evans and Andrey Rzhetsky",
    publication: "Science 329, no. 5990 (2010): 399-400",
  },
  {
    title:
      "Chapter Six. Nonprofit Research Institutes: From Companies without Products to Universities without Students.",
    link:
      "https://www.degruyter.com/document/doi/10.7208/9780226109985-007/html",
    "author(s)": "James A. Evans",
    publication:
      "Politics and Partnerships, pp. 151-182. University of Chicago Press, 2010",
  },
  {
    title:
      "Novel opportunities for computational biology and sociology in drug discovery: Corrected paper.",
    link: "https://www.sciencedirect.com/science/article/pii/S0167779910000144",
    "author(s)": "Lixia Yao, James A. Evans, and Andrey Rzhetsky",
    publication: "Trends in Biotechnology 28, no. 4 (2010): 161-170",
  },
  {
    title: "Open access and global participation in science.",
    link: "https://www.science.org/doi/full/10.1126/science.1154562",
    "author(s)": "James A. Evans and Jacob Reimer",
    publication: "Science 323, no. 5917 (2009): 1025-1025",
  },
  {
    title:
      "Electronic publication and the narrowing of science and scholarship.",
    link: "https://www.science.org/doi/full/10.1126/science.1150473",
    "author(s)": "James A. Evans",
    publication: "Science 321, no. 5887 (2008): 395-399",
  },
  {
    title:
      "Start-ups in science: Entrepreneurs, diverse backing, and novelty outside business.",
    link:
      "https://www.emerald.com/insight/content/doi/10.1016/S0733-558X%2806%2925008-0/full/html",
    "author(s)": "James A. Evans",
    publication:
      "The Sociology of Entrepreneurship. Emerald Group Publishing Limited, 2007",
  },
  {
    title:
      "Beach time, bridge time, and billable hours: The temporal structure of technical contracting.",
    link: "https://journals.sagepub.com/doi/abs/10.2307/4131454",
    "author(s)": "James A. Evans, Gideon Kunda, and Stephen R. Barley",
    publication: "Administrative Science Quarterly 49, no. 1 (2004): 1-38",
  },
  {
    title:
      "Why do contractors contract? The experience of highly skilled technical professionals in a contingent labor market.",
    link: "https://journals.sagepub.com/doi/abs/10.1177/001979390205500203",
    "author(s)": "Gideon Kunda, Stephen R. Barley, and James Evans",
    publication: "ILR Review 55, no. 2 (2002): 234-261",
  },
];

const Publications = () => (
  <Layout>
    <Nav />
    <div
      style={{
        position: `absolute`,
        height: `80vh`,
        backgroundColor: `#f6f6f6`,
        width: `100%`,
        zIndex: `-3`,
        clipPath: `polygon(0% 0%, 100% 0%, 100% 80%, 0% 100%)`,
      }}
    ></div>

    <Container fluid id="publications-header">
      <div className="background"></div>
      <Container>
        <Row>
          <Col xs={12} sm={9}>
            <h1>Publications</h1>
            {/* <p>Knowledge Lab is dedicated to the transformative power of knowledge and we are committed to advancing the frontiers of understanding through rigorous, data-driven research. Our publications, ranging from detailed studies to insightful articles,  serve as vital resources for scholars, policymakers, and the curious public. Our aim is to foster collaboration, drive innovation, and contribute to informed decision-making across various disciplines. Explore our work to discover how our research is shaping the future of knowledge creation and application.</p> */}
          </Col>
          <Col sm={3} className="d-none d-sm-block">
            <img src={Trianges} alt="connected triagle shapes" />
          </Col>
        </Row>
      </Container>
    </Container>

    <Container fluid id="publications">
      <Container>
        <Row>
          <Col xs={12} sm={9}>
            <Row id="feature-pubs">
              {features.map((pub) => {
                return (
                  <>
                    <Col xs={4}>
                      <Col xs={12} className="d-none d-sm-block">
                      <a href={pub.link} target="_blank"><img src={pub.image}/></a>
                      </Col>
                      <Col xs={12}>
                        <h3>
                          <a href={pub.link} target="_blank">
                            {pub.title}
                          </a>
                        </h3>
                        <p>
                          <strong>Authors:</strong> {pub["author(s)"]}
                        </p>
                        <p>
                          <strong>Publication: </strong>
                          {pub.publication}
                        </p>
                        <p>
                          <a href={pub.link} target="_blank">
                            Read Publication
                            <FontAwesomeIcon icon={faCaretRight} />
                          </a>
                        </p>
                      </Col>
                    </Col>
                  </>
                );
              })}
            </Row>
          
            {publications.map((pub) => {
              return (
                <>
                  <Row>
                    <Col xs={1} className="d-none d-sm-block morph">
                      <FontAwesomeIcon
                        icon={faFileLines}
                        className="document-icon"
                      />
                    </Col>
                    <Col xs={7}>
                      <h3>
                        <a href={pub.link} target="_blank">
                          {pub.title}
                        </a>
                      </h3>
                      <p>
                        <strong>Authors:</strong> {pub["author(s)"]}
                      </p>
                      <p>
                        <strong>Publication: </strong>
                        {pub.publication}
                      </p>
                      <p>
                        <a href={pub.link} target="_blank">
                          Read Publication{" "}
                          <FontAwesomeIcon icon={faCaretRight} />
                        </a>
                      </p>
                    </Col>
                  </Row>
                </>
              );
            })}
          </Col>

          <Col xs={12} sm={3}>
            <div className="sidebar">
              <h4>Initiatives</h4>
              <p>See what we've been working on.</p>
            </div>
            <div className="sidebar">
              <h4>News & Events</h4>
              <p>See what's in the news</p>
            </div>
            <div className="sidebar">
              <h4>Workshops & Conferences</h4>
              <p>See conference and workshops</p>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  </Layout>
);

export const Head = () => <Seo title="Page two" />;

export default Publications;
