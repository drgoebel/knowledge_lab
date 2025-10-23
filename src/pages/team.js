import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { Container, Row, Col } from "react-bootstrap";
import "../components/gridder.css";
import Person from "../images/person.jpg";

function CenteredModal(props) {
  const bioImage = props.bioImg ? getImage(props.bioImg) : null;
  
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <div className="title-img">
            {bioImage ? (
              <GatsbyImage image={bioImage} alt={props.name} />
            ) : (
              <img src={Person} alt={props.name} />
            )}
            {props.name && <h4>{props.name}</h4>}
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.bio && <p>{props.bio}</p>}
        {props.website && (
          <p>
            <i className="fa-solid fa-desktop"></i>{" "}
            <a href={props.website} target="_blank" rel="noopener noreferrer">
              {" "}
              Website <i className="fa-solid fa-chevron-right"></i>
            </a>
          </p>
        )}

        {props.email && (
          <p>
            <i className="fa-solid fa-envelope"></i>
            <a  href={`mailto:${props.email}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              {props.email} <i className="fa-solid fa-chevron-right"></i>
            </a>
          </p>
        )}

        {props.cv && (
          <p>
            <i className="fa-solid fa-file"></i>
            <a href={props.cv} target="_blank" rel="noopener noreferrer">
              CV <i className="fa-solid fa-chevron-right"></i>
            </a>
          </p>
        )}
      </Modal.Body>
    </Modal>
  );
}

const TabsComponent = ({ personData }) => {
  const [activeTab, setActiveTab] = useState();
  const [modalShow, setModalShow] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);

  // Separate Leadership category from others
  const leadershipPersons = personData.filter((person) =>
    person.personCategory.includes("Leadership")
  );

  const nonLeadershipPersons = personData.filter(
    (person) => !person.personCategory.includes("Leadership")
  );

  // Group remaining persons by category
  const groupedPersons = nonLeadershipPersons.reduce((acc, person) => {
    const categories = Array.isArray(person.personCategory)
      ? person.personCategory
      : [person.personCategory];

    categories.forEach((category) => {
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(person);
    });

    return acc;
  }, {});

  const categories = Object.keys(groupedPersons);

  // Set the first category as the default active tab
  if (!activeTab && categories.length > 0) {
    setActiveTab(categories[0]);
  }

  return (
    <Container>
      <Row>
        <Col>
          <h2>Leadership</h2>
        </Col>
      </Row>
      <Row>
        {leadershipPersons.map((person, index) => {
          const personImage = person.personImage ? getImage(person.personImage) : null;
          
          return (
            <React.Fragment key={person.id}>
              <Col xs={6} md={2}>
                {personImage ? (
                  <GatsbyImage image={personImage} alt={person.name} />
                ) : (
                  <img src={Person} alt={person.name} />
                )}
              </Col>

              <Col xs={6} md={4}>
                <h3>{person.name}</h3>
                <p>{person.title}</p>
                <Button
                  variant="primary"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedPerson(person);
                    setModalShow(true);
                  }}
                >
                  {person.name} Bio <i className="fa-solid fa-caret-right"></i>
                </Button>
              </Col>
            </React.Fragment>
          );
        })}
      </Row>
      <Container id="tabs">
        <Row className="team-tabber">
          {categories.map((category) => (
            <Col
              key={category}
              xs={3}
              className={`team-tab ${activeTab === category ? "active" : ""}`}
              onClick={(e) => {
                e.stopPropagation();
                setActiveTab(category);
              }}
            >
              {category}
            </Col>
          ))}
        </Row>

        <Row>
          {groupedPersons[activeTab]?.map((person) => {
            const personImage = person.personImage ? getImage(person.personImage) : null;
            
            return (
              <Col xs={6} sm={3} key={person.id}>
                <Row>
                  <Col xs={12}>
                    {personImage ? (
                      <GatsbyImage image={personImage} alt={person.name} />
                    ) : (
                      <img src={Person} alt={person.name} />
                    )}
                  </Col>
                  <Col xs={12}>
                    <h3>{person.name}</h3>
                    <p>{person.title}</p>
                    <Button
                      variant="primary"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedPerson(person);
                        setModalShow(true);
                      }}
                    >
                      {person.name} Bio <i className="fa-solid fa-caret-right"></i>
                    </Button>
                  </Col>
                </Row>
              </Col>
            );
          })}
        </Row>

        {selectedPerson && (
          <CenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            bio={renderRichText(selectedPerson.biography)}
            name={selectedPerson.name}
            email={selectedPerson.email}
            website={selectedPerson.website}
            bioImg={selectedPerson.personImage}
          />
        )}
      </Container>
    </Container>
  );
};

const Team = ({ data }) => {
  const pageData = data.contentfulKLabPage;
  const personData = data.contentfulKLabPage.kLabContents.filter(
    (item) => item.__typename === "ContentfulPersonItem"
  );

  return (
    <Layout>
      <Container fluid id="team-header">
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

                    <Col className="d-none d-md-block" sm={3}>
                      {sideImage && (
                        <GatsbyImage image={sideImage} alt={content.title || "Hero image"} />
                      )}
                    </Col>
                  </React.Fragment>
                );
              })}
          </Row>
        </Container>
      </Container>
      <Container fluid id="team">
        <TabsComponent personData={personData} />
      </Container>
    </Layout>
  );
};

export const Head = () => <Seo title="Knowledge Lab Team" />;

export default Team;

export const query = graphql`
  query TeamQuery {
    contentfulKLabPage(slug: { eq: "team" }) {
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
            gatsbyImageData(width: 500, placeholder: BLURRED)
          }
        }
        ... on ContentfulPersonItem {
          id
          name
          title
          personCategory
          biography {
            raw
          }
          personImage {
            gatsbyImageData(width: 400, placeholder: BLURRED)
          }
          email
          cv
          website
        }
      }
    }
  }
`;