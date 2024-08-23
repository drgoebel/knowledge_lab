// /src/components/InitiativeList.jsx
import * as React from "react";
import { useState } from "react";
import Layout from "../components/layout";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import Nav from "../components/nav";
import initiatives from "../json/initiatives.json"; // Adjust the path if necessary
import AIGroup from "../images/ai-group.png";

function CenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{props.shorter}</h4>
        <p>{props.description}</p>
        <div className="paper">{props.papers}</div>
        <p>{props.grants}</p>
        <p>{props.partners}</p>
        <p>{props.talks}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
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
              <p>
                Knowledge Lab harnesses the power of artificial intelligence to
                unravel complex scientific and societal problems, bridging the
                gap between data-driven insights and real-world applications.
                This innovative group collaborates with interdisciplinary
                experts to develop AI tools and methodologies that advance our
                understanding of knowledge creation and dissemination.
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
                <Col xs={12} sm={6} md={3} key={index} style={{ marginBottom: "30px" }}>
                     <img src={initiative.image} />
                  {/* Initiative Name */}
                  {initiative.name && <h2>{initiative.name}</h2>}

                  {/* Tagline */}
                  {initiative.tagline && (
                    <p>
                      <strong>Tagline: </strong>
                      {initiative.tagline}
                    </p>
                  )}

                  <Button
                    variant="primary"
                    onClick={() => setOpenModalIndex(`L` + index)}
                  >
                    Read More <FontAwesomeIcon icon={faCaretRight} />
                  </Button>

                  <CenteredModal
                    title={initiative.name}
                    show={openModalIndex === `L` + index}
                    onHide={() => setOpenModalIndex(null)}
                    shorter={
                      initiative.shorter_tagline && (
                        <p>
                          <strong>
                          {initiative.shorter_tagline}</strong>
                        </p>
                      )
                    }
                    description={
                      initiative.description && (
                        <p>
                          <strong>Description: </strong>
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
                          <strong>Grants: </strong>
                          {initiative.grants.join(", ")}
                        </p>
                      )
                    }
                    papers={
                      initiative.papers && (
                        <>
                          <strong>Papers:</strong>
                          <ul>
                            {initiative.papers.map((paper, idx) => (
                              <li key={idx}>
                                {/* If paper is an object and has a URL, render as a hyperlink */}
                                {typeof paper === "object" && paper.url ? (
                                  <em><a
                                    href={paper.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    {paper.title}
                                  </a></em>
                                ) : // Otherwise, render as plain text
                                typeof paper === "object" ? (
                                  paper.title
                                ) : (
                                  paper
                                )}<br />
                                {paper.journal}<br /> {paper.year}{' '}  
                                {paper.volume && `Vol: ${paper.volume}`}{' '} 
                                {paper.issue && `Issue: ${paper.issue}`}{' '}  
                                {paper.pages && `Paper: ${paper.pages}`}{' '} 
                                
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

export default Initiatives;
