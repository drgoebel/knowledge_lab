import * as React from "react";
import { useState, useEffect } from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Nav from "../components/nav";
import Seo from "../components/seo";
import ScrollPubs from "../components/scrollPubs";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../components/gridder.css";
import Trianges from "../images/triangles.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines, faCaretRight } from "@fortawesome/free-solid-svg-icons";

const Publications = ({ data }) => {
  const pageData = data.contentfulKLabPage;

  // Extract unique categories and group items by category
  const publicationItems = pageData.kLabContents.filter(
    ({ __typename }) => __typename === "ContentfulPublicationItem"
  );

  const groupedPublications = publicationItems.reduce((acc, item) => {
    if (!item.category) return acc;

    const categories = Array.isArray(item.category)
      ? item.category
      : item.category.split(",").map((cat) => cat.trim());

    categories.forEach((category) => {
      if (!acc[category]) acc[category] = [];
      acc[category].push(item);
    });

    return acc;
  }, {});

  const categories = Object.keys(groupedPublications);

  // State for the selected category
  const [selectedCategory, setSelectedCategory] = useState(categories[0] || "");

  return (
    <Layout>
      <Container fluid id="publications-header">
        <div className="background"></div>
        <Container
          fluid
          id="scroller-pubs"
          style={{ backgroundColor: "#efefef" }}
        >
          <Container>
            <Row>
              <h1>{pageData.title}</h1>
              <h2>Featured Publications</h2>
            </Row>
            <Row>
              <Col>
                {(() => {
                  const filteredContent = pageData.kLabContents.filter(
                    ({ __typename, featuredItem }) =>
                      __typename === "ContentfulPublicationItem" && featuredItem
                  );

                  return <ScrollPubs contentList={filteredContent} />;
                })()}
              </Col>
            </Row>
          </Container>
        </Container>
      </Container>

      <Container id="publications" fluid>
        <Container>
          <Row>
            <h2>Additional Publications</h2>
          </Row>
          <Row id="pub-filters" className="justify-content-center">
            <Col xs={12} sm={6} className="sticky-filters">
              {/* Left Column: Category Buttons */}
              <Col className="sticky-filters">
                <Row className="justify-content-center">
                  {categories.slice(0, 4).map((category) => (
                    <Col xs={3} md={6} className="single-button" key={category}>
                      <button
                        type="button"
                        variant={
                          selectedCategory === category
                            ? "primary"
                            : "outline-primary"
                        }
                        className="btn btn-outline-primary"
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category}
                      </button>
                    </Col>
                  ))}
                </Row>
                <Row className="justify-content-center">
                  {categories.slice(4, 9).map((category) => (
                    <Col xs={3} md={6} className="single-button" key={category}>
                      <button
                        type="button"
                        variant={
                          selectedCategory === category
                            ? "primary"
                            : "outline-primary"
                        }
                        className="btn btn-outline-primary"
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category}
                      </button>
                    </Col>
                  ))}
                </Row>
                <Row className="justify-content-center">
                  {categories.slice(9, 13).map((category) => (
                    <Col xs={3} md={6} className="single-button" key={category}>
                      <button
                        type="button"
                        variant={
                          selectedCategory === category
                            ? "primary"
                            : "outline-primary"
                        }
                        className="btn btn-outline-primary"
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category}
                      </button>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Col>

            {/* Right Column: Publications */}
            <Col md={6} className="publications-column">
              <Row id="pub-group">
                <h3>{selectedCategory}</h3>

                {groupedPublications[selectedCategory]?.map((item) => {
                  const publicationImage = item.image ? getImage(item.image) : null;
                  
                  return (
                    <Col key={item.id} xs={12} className="publication-item">
                      <Row>
                        {publicationImage && (
                          <Col xs={2}>
                            <GatsbyImage 
                              image={publicationImage} 
                              alt={item.title} 
                              style={{maxHeight: "100px"}}
                              
                            />
                          </Col>
                        )}
                        <Col xs={10}>
                          <h4>{item.title}</h4>
                          <p>{item.authors}</p>
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {item.publication}{" "}
                            <i className="fa-solid fa-caret-right"></i>
                          </a>
                        </Col>
                      </Row>
                    </Col>
                  );
                })}
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </Layout>
  );
};

export const Head = () => <Seo title="Publications from Knowledge Lab" />;
export default Publications;

export const query = graphql`
  query NewsQuery {
    contentfulKLabPage(slug: { eq: "publications" }) {
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
            file {
              url
            }
          }
        }
        ... on ContentfulPublicationItem {
          authors
          category
          featuredItem
          id
          title
          publication
          url
          image {
            gatsbyImageData(width: 200, height: 400, placeholder: BLURRED)
          }
        }
      }
    }
  }
`;