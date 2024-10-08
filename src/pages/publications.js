import * as React from "react";
import { useState } from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Nav from "../components/nav";
import Seo from "../components/seo";
import ScrollPubs from "../components/scrollPubs";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../components/gridder.css";
import Trianges from "../images/triangles.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import data from "../json/publications.json";
import Nature1 from "../images/nature-small-teams.png";
import Nature2 from "../images/nature-dead.png";
import Nature4 from "../images/nature-4.webp";
import Pnas1 from "../images/pnas-1.webp";
import Pnas2 from "../images/pnas-2.webp";

const features = [
  {
    title: "Onsite teams conceive and remote teams execute ideas.",
    link: "https://www.nature.com/articles/s41586-019-0941-9",
    "author(s)": "Lingfei Wu, Dashun Wang, and James A. Evans",
    publication: "Nature 566, no. 7744 (2019): 378-382",
    image: Nature4,
  },

  {
    title:
      "Large teams develop and small teams disrupt science and technology.",
    link: "https://www.nature.com/articles/s41586-019-0941-9",
    "author(s)": "Lingfei Wu, Dashun Wang, and James A. Evans",
    publication: "Nature 566, no. 7744 (2019): 378-382",
    image: Nature1,
  },
  {
    title:
      "Skill discrepancies between research, education, and jobs reveal the critical need to supply soft skills for the data economy.",
    link: "https://www.pnas.org/content/115/50/12630",
    "author(s)":
      "Katy Börner, Olga Scrivner, Mike Gallant, Shutian Ma, Xiaozhong Liu, Keith Chewning, Lingfei Wu, and James A. Evans",
    publication:
      "Proceedings of the National Academy of Sciences 115, no. 50 (2018): 12630-12637",
    image: Pnas1,
  },
  {
    title: "Flat teams drive scientific innovation",
    link: "https://www.pnas.org/eprint/5SCQ7PK5J3MVUWRWWXX2/full",
    "author(s)": "Fengli Xu, Lingfei Wu, and James Evans",
    publication: "Proceedings of the National Academy of Sciences.",
    image: Pnas2,
  },
];

const Pubby = () => {
  const [selectedGroup, setSelectedGroup] = useState(null);

  const groupEntries = () => {
    const groups = {};

    const keyToNameMap = {
      G: "Global S&T Observatory",
      P: "AI-Driven S&T Policy Forge",
      C: "Computational Creativity",
      D: "Digital Minds",
      A: "Complementary AI",
      S: "AI Societies",
      M: "Modeling Cultural Worlds",
      I: "Innovation Theory",
      E: "Existential Epistemology",
      H: "Human Language",
      L: "Deep Learning",
      SS: "Computational Social Science",
      PP: "Political Polarization",
    };

    data.forEach((item) => {
      Object.keys(keyToNameMap).forEach((key) => {
        if (item[key] === 1) {
          const groupName = keyToNameMap[key];
          if (!groups[groupName]) {
            groups[groupName] = [];
          }
          groups[groupName].push(item);
        }
      });
    });

    return groups;
  };

  const groupedEntries = groupEntries();

  const handleButtonClick = (group) => {
    setSelectedGroup(group === "all" ? null : group);
  };

  const isGroupSelected = (groupKey) =>
    selectedGroup === null || selectedGroup === groupKey;

  return (
    <Layout>
      <Nav />
      {/* <div
        style={{
          position: `absolute`,
          height: `80vh`,
          backgroundColor: `#f6f6f6`,
          width: `100%`,
          zIndex: `-3`,
          clipPath: `polygon(0% 0%, 100% 0%, 100% 80%, 0% 100%)`,
        }}
      ></div> */}

      <Container fluid id="publications-header">
        <div className="background"></div>
        <Container fluid id="scroller-pubs" style={{backgroundColor: "#efefef"}}>
          <Container>
            <Row><h1>Publications</h1><h2>Featured Publications</h2>
            </Row>
          <Row>
            <Col>
              <ScrollPubs />
            </Col>
          </Row>
        </Container>
        </Container>
      </Container>

      <Container fluid id="publications">
        <Container>

          <Row>
            <h2>Additional Publications</h2>
          </Row>

          {/* Buttons for group selection */}

          <Row id="pub-filters" className="justify-content-center">
            
            <Col xs={12} sm={6} className="sticky-filters">

              <Col className="sticky-filters">
              {/* First Row: 3 Buttons */}
              <Row className="justify-content-center">
                {Object.keys(groupedEntries)
                  .slice(0, 4)
                  .map((groupKey) => (
                    <Col xs={3} className="single-button" key={groupKey}>
                      <Button
                        variant={
                          selectedGroup === groupKey
                            ? "primary"
                            : "outline-primary"
                        }
                        onClick={() => handleButtonClick(groupKey)}
                        style={{ marginRight: "10px", marginBottom: "10px" }}
                      >
                        {groupKey}
                      </Button>
                    </Col>
                  ))}
              </Row>

              {/* Second Row: 4 Buttons */}
              <Row className="justify-content-center">
                {Object.keys(groupedEntries)
                  .slice(4, 9)
                  .map((groupKey) => (
                    <Col xs={3} className="single-button" key={groupKey}>
                      <Button
                        variant={
                          selectedGroup === groupKey
                            ? "primary"
                            : "outline-primary"
                        }
                        onClick={() => handleButtonClick(groupKey)}
                        style={{ marginRight: "10px", marginBottom: "10px" }}
                      >
                        {groupKey}
                      </Button>
                    </Col>
                  ))}
              </Row>

              {/* Third Row: 4 Buttons */}
              <Row className="justify-content-center">
                {Object.keys(groupedEntries)
                  .slice(10, 15)
                  .map((groupKey) => (
                    <Col xs={3} className="single-button" key={groupKey}>
                      <Button
                        variant={
                          selectedGroup === groupKey
                            ? "primary"
                            : "outline-primary"
                        }
                        onClick={() => handleButtonClick(groupKey)}
                        style={{ marginRight: "10px", marginBottom: "10px" }}
                      >
                        {groupKey}
                      </Button>
                    </Col>
                  ))}
              </Row>

             
              </Col>
          </Col>
          <Col xs={12} sm={6}>

          {/* Displaying the filtered entries */}
          {Object.keys(groupedEntries)
            .filter((groupKey) => isGroupSelected(groupKey))
            .map((groupKey) => (
              <Row id="pub-group" key={groupKey}>
                <h3>{groupKey}</h3>
                {groupedEntries[groupKey].map((entry, index) => (
                  <Col xs={12} key={index}>
                    <Row>
                      {/* <Col xs={2} sm={12}>
                      <a
                          href={entry.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        > <FontAwesomeIcon
                          icon={faFileLines}
                          className="document-icon"
                        /></a>
                      </Col> */}
                      <Col xs={12} sm={12}>
                        <h4>
                          <a
                            href={entry.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <strong>{entry.title}</strong>
                          </a>
                        </h4>
                        <small>{entry.authors}</small>
                        <br />
                        <a
                          href={entry.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {entry.outlet || "No outlet"}{" "}
                          <FontAwesomeIcon icon={faCaretRight} />
                        </a>{" "}
                        <br />
                      </Col>
                    </Row>
                  </Col>
                  
                ))}
                
            
              </Row>
              
            ))}
            </Col></Row>
            
        </Container>
      </Container>
    </Layout>
  );
};
export const Head = () => <Seo title="Publications from Knowledge Lab" />;
export default Pubby;
