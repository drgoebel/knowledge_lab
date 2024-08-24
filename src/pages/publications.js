import * as React from "react";
import { useState } from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Nav from "../components/nav";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../components/gridder.css";
import Trianges from "../images/triangles.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import data from "../json/publications.json"; 
import Nature1 from "../images/nature-small-teams.png"
import Nature2 from "../images/nature-dead.png"
import Nature4 from "../images/nature-4.webp"
import Pnas1 from "../images/pnas-1.webp"
import Pnas2 from "../images/pnas-2.webp"

const features = [
    {
        title:
          "Onsite teams conceive and remote teams execute ideas.",
        link: "https://www.nature.com/articles/s41586-019-0941-9",
        "author(s)": "Lingfei Wu, Dashun Wang, and James A. Evans",
        publication: "Nature 566, no. 7744 (2019): 378-382",
        image: Nature4
      },

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

const Pubby = () => {
  const [selectedGroups, setSelectedGroups] = useState([]);

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
      PP: "Political Polarization"
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
    setSelectedGroups((prevSelectedGroups) => {
      if (prevSelectedGroups.includes(group)) {
        return prevSelectedGroups.filter((g) => g !== group);
      } else {
        return [...prevSelectedGroups, group];
      }
    });
  };

  const isGroupSelected = (groupKey) =>
    selectedGroups.length === 0 || selectedGroups.includes(groupKey);

  return (
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
            </Col>
            <Col sm={3} className="d-none d-sm-block">
              <img src={Trianges} alt="connected triangle shapes" />
            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid id="publications">
        <Container>
        <Row id="feature-pubs">
              {features.map((pub) => {
                return (
                  <>
                    <Col xs={3}>
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


          {/* Buttons for group selection */}
          <div style={{ marginBottom: "20px" }}>
            {Object.keys(groupedEntries).map((groupKey) => (
              <Button
                key={groupKey}
                variant={selectedGroups.includes(groupKey) ? "primary" : "outline-primary"}
                onClick={() => handleButtonClick(groupKey)}
                style={{ marginRight: "10px", marginBottom: "10px" }}
              >
                {groupKey}
              </Button>
            ))}
          </div>

          {/* Displaying the filtered entries */}
          {Object.keys(groupedEntries)
            .filter((groupKey) => isGroupSelected(groupKey))
            .map((groupKey) => (
              <Row key={groupKey}>
                <h2>{groupKey}</h2>
                {groupedEntries[groupKey].map((entry, index) => (
                  <Col xs={6} sm={3} key={index}>
                    <Row>
                      <Col xs={2} sm={12}>
                      <a
                          href={entry.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        > <FontAwesomeIcon
                          icon={faFileLines}
                          className="document-icon"
                        /></a>
                      </Col>
                      <Col xs={9} sm={12}>
                      <a
                          href={entry.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        ><strong>{entry.title}</strong></a><br />
                       {entry.authors}<br />
                       {entry.outlet || "No outlet"}{" "}
                        <br />

                        {/* <a
                          href={entry.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Read More <FontAwesomeIcon icon={faCaretRight} />
                        </a> */}
                      </Col>
                    </Row>
                  </Col>
                ))}
              </Row>
            ))}
        </Container>
      </Container>
    </Layout>
  );
};

export default Pubby;
