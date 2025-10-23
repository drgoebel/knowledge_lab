// /src/components/InitiativeList.jsx
import * as React from "react";
import { useState } from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Seo from "../components/seo";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import AIGroup from "../images/aigroup.webp";
import Global from "../images/global-observe.webp";
import Policy from "../images/policy-lab.webp";
import Computational from "../images/computational.webp";
import Digital from "../images/digital-minds.webp";
import Complementary from "../images/complementary.webp";
import AISociety from "../images/aisociety.webp";
import Cultural from "../images/cultural.webp";
import Science2 from "../images/science2.webp";
import Existential from "../images/existential.webp";

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
          {props.title === "Science2" ? (
            <h2>
              Science<sup>2</sup>
            </h2>
          ) : (
            <h2>{props.title}</h2>
          )}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{props.shorter}</h4>
        <div>{props.description}</div>
        <p>{props.grants}</p>
        <p>{props.partners}</p>
        <p>{props.talks}</p>
        <div className="paper">{props.papers}</div>
      </Modal.Body>
      <Modal.Footer>
        <Button className="init-btn" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

const Initiatives = ({ data }) => {
  const pageData = data.contentfulKLabPage;

  const [modalShow, setModalShow] = React.useState(false);
  const [openModalIndex, setOpenModalIndex] = useState(null);
  
  return (
    <Layout>
      <Container fluid id="initiatives-header">
        <div className="background"></div>
        <Container>
          <Row>
            {pageData.kLabContents
              .filter((content) => content.__typename === "ContentfulHero")
              .map((content) => {
                const sideImage = content.sideImage ? getImage(content.sideImage) : null;
                
                return (
                  <React.Fragment key={content.id}>
                    <Col xs={12} sm={8}>
                      <h1>{pageData.title}</h1>
                      <div>
                        {content.body && <p>{renderRichText(content.body)}</p>}
                      </div>
                    </Col>

                    <Col xs={12} sm={4}>
                      {sideImage && (
                        <GatsbyImage 
                          image={sideImage} 
                          alt={content.title || "Hero image"} 
                        />
                      )}
                    </Col>
                  </React.Fragment>
                );
              })}
          </Row>
        </Container>
      </Container>
      <Container fluid id="initiatives">
        <Container>
          <Row>
            {pageData.kLabContents
              .filter(
                (content) =>
                  content.__typename === "ContentfulContentInitiative"
              )
              .map((initiative, index) => {
                const initiativeImage = initiative.image ? getImage(initiative.image) : null;
                
                return (
                  <Col
                    xs={12}
                    md={4}
                    key={initiative.id}
                    style={{ marginBottom: "30px" }}
                  >
                    <a
                      variant="primary"
                      onClick={() => setOpenModalIndex(`L` + index)}
                      style={{ cursor: "pointer" }}
                    >
                      {initiativeImage && (
                        <GatsbyImage 
                          image={initiativeImage} 
                          alt={initiative.title} 
                        />
                      )}
                    </a>
                    {/* Initiative Name */}
                    <a
                      variant="primary"
                      onClick={() => setOpenModalIndex(`L` + index)}
                      style={{ cursor: "pointer" }}
                    >
                      {initiative.title === "Science2" ? (
                        <h2>
                          Science<sup>2</sup>
                        </h2>
                      ) : (
                        <h2>{initiative.title}</h2>
                      )}
                    </a>

                    {/* Tagline */}
                    {initiative.tagline?.tagline && (
                      <p>
                        <a
                          variant="primary"
                          onClick={() => setOpenModalIndex(`L` + index)}
                          style={{ cursor: "pointer" }}
                        >
                          {initiative.tagline.tagline}
                        </a>
                      </p>
                    )}

                    <CenteredModal
                      title={initiative.title}
                      show={openModalIndex === `L` + index}
                      onHide={() => setOpenModalIndex(null)}
                      description={
                        initiative.initiativeDescription &&
                        renderRichText(initiative.initiativeDescription)
                      }
                      partners={
                        initiative.partners && (
                          <>
                            <strong>Partners: </strong>
                            {initiative.partners}
                          </>
                        )
                      }
                      grants={
                        initiative.founders && (
                          <>
                            <strong>Founders: </strong>
                            {initiative.founders}
                          </>
                        )
                      }
                      papers={
                        initiative.papers && (
                          <>
                            <p>
                              <strong>Papers: </strong>
                            </p>
                            {renderRichText(initiative.papers)}
                          </>
                        )
                      }
                    />
                  </Col>
                );
              })}
          </Row>
        </Container>
      </Container>
    </Layout>
  );
};

export const Head = () => <Seo title="Initiatives at Knowledge Lab" />;

export default Initiatives;

export const query = graphql`
  query InitiativesQuery {
    contentfulKLabPage(slug: { eq: "initiatives" }) {
      id
      title
      slug
      kLabContents {
        __typename
        ... on ContentfulKLabContent {
          id
          title
          body {
            raw
          }
        }
        ... on ContentfulHero {
          id
          title
          body {
            raw
          }
          sideButton {
            sideButton
          }
          sideImage {
            gatsbyImageData(width: 600, placeholder: BLURRED)
          }
        }
        ... on ContentfulPersonItem {
          id
          name
          title
          biography {
            raw
          }
        }
        ... on ContentfulPublicationItem {
          id
          title
          url
          authors
        }
        ... on ContentfulKLabJob {
          id
          title
          jobDescription {
            raw
          }
          callToAction
        }
        ... on ContentfulNewsOrEvent {
          id
          title
          url
          typeNewsEvent
          featuredItem
          description {
            raw
          }
          image {
            gatsbyImageData(width: 400, placeholder: BLURRED)
          }
        }
        ... on ContentfulContentInitiative {
          id
          title
          tagline {
            tagline
          }
          image {
            gatsbyImageData(width: 500, placeholder: BLURRED)
          }
          initiativeDescription {
            raw
          }
          papers {
            raw
          }
          partners
          founders
        }
      }
    }
  }
`;