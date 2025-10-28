import * as React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import Nav from "../components/nav";
import Seo from "../components/seo";
import { Container, Row, Col } from "react-bootstrap";
import "../components/gridder.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import Trianges from "../images/triangles.svg";
import icssi from "../images/icssi.png";
import mcsscw from "../images/mcsscw.png";
import ic2s2 from "../images/ic2s2.webp";

const Events = ({ data }) => {
  const pageData = data.contentfulKLabPage;
  console.log(pageData);

  return (
    <Layout>
      <Container fluid id="workshops-header">
        <div className="background"></div>
        <Container>
          <Row>
            {pageData.kLabContents
              .filter((content) => content.__typename === "ContentfulHero")
              .map((content) => {
                const sideImage = content.sideImage
                  ? getImage(content.sideImage)
                  : null;

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

      <Container fluid id="workshops">
        <Container>
          {pageData.kLabContents
            .filter(
              ({ __typename, typeNewsEvent, featuredItem }) =>
                __typename === "ContentfulNewsOrEvent" &&
                !typeNewsEvent &&
                !featuredItem
            )
            .map((content) => {
              const eventImage = content.image ? getImage(content.image) : null;

              return (
                <Row className="h-100 news-item" key={content.id}>
                  <Col xs={6} sm={3}>
                    {eventImage && (
                      <a
                        href={content.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GatsbyImage image={eventImage} alt={content.title} />
                      </a>
                    )}
                  </Col>

                  {content.styleId === "event-calendar" ? (
                    <Col xs={6} sm={9} id={content.styleId || undefined}>
                      {content.title && <h3>{content.title}</h3>}
                      {content.description && (
                        <div>{renderRichText(content.description)}</div>
                      )}
                      <iframe
                        style={{ width: "100%", height: "900px" }}
                        scrolling="auto"
                        id="calendarWidget"
                        name="calendarWidget"
                        src="https://events.uchicago.edu/cal_widget.php?group=Knowledge%20Lab"
                      />
                    </Col>
                  ) : (
                    <Col xs={6} sm={9}>
                      {content.title && <h3>{content.title}</h3>}
                      {content.description && (
                        <div>{renderRichText(content.description)}</div>
                      )}
                    </Col>
                  )}
                </Row>
              );
            })}
        </Container>
      </Container>
    </Layout>
  );
};

export const Head = () => <Seo title="Events at Knowledge Lab" />;

export default Events;

export const query = graphql`
  query NewsQuery {
    contentfulKLabPage(slug: { eq: "events" }) {
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
          styleId
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
          initiativeDescription {
            raw
          }
          papers {
            raw
          }
        }
      }
    }
  }
`;
