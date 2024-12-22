import * as React from "react";
import { graphql, Link } from "gatsby";
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
              .map((content) => (
                <>
                  <Col xs={12} sm={8}>
                    <h1>{pageData.title}</h1>
                    <div key={content.id}>
                      {content.body && <p>{renderRichText(content.body)}</p>}
                    </div>
                  </Col>

                  <Col className="d-none d-md-block" sm={3}>
                    <img src={content.sideImage.file.url} />
                  </Col>
                </>
              ))}
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
            .map((content) => (
              <>
                <Row className="h-100 news-item">
                  <Col xs={6} sm={3}>
                    <a href={content.url} target="_blank">
                      <img src={content.image.url} alt={content.title} />
                    </a>
                  </Col>
                  <Col xs={6} sm={9}>
                    <h3>{content.title}</h3>
                    <p>{renderRichText(content.description)}</p>
                  </Col>
                </Row>
              </>
            ))}
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
            file {
              url
            }
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
            url
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
