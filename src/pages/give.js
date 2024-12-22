import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import Nav from "../components/nav";
import Seo from "../components/seo";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import { Container, Row, Col } from "react-bootstrap";
import "../components/gridder.css";
import { renderRichText } from "gatsby-source-contentful/rich-text"
import ReactMarkdown from "react-markdown";

const Give = ({ data }) => {
  const pageData = data.contentfulKLabPage;

  return (
    <Layout>
      <Container fluid id="give-header">
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

                  <Col xs={12} sm={4}>
                    <div className="give-div">
                      <a
                        href="https://giving.uchicago.edu/site/Donation2?idb=1156375306&1838.donation=form1&df_id=1838&mfc_pref=T&1838_donation=form1&set.Designee=2622"
                        target="_blank"
                      >
                        
                        <h3><ReactMarkdown>{content.sideButton.sideButton}</ReactMarkdown></h3>
                      </a>
                    </div>
                  </Col>
                </>
              ))}
          </Row>
        </Container>
      </Container>
      <Container fluid id="give">
        <Container>
          <Row>
          {pageData.kLabContents
              .filter((content) => content.__typename === "ContentfulKLabContent")
              .map((content) => (
                <>
                  <Col xs={12} sm={8}>
                    <div key={content.id}>
                      {content.body && <p>{renderRichText(content.body)}</p>}
                    </div>
                  </Col>
                  </>
          ))}
          </Row>
        </Container>
      </Container>
    </Layout>
  );
};

export const Head = () => <Seo title="Give to Knowledge Lab" />;

export default Give;

export const query = graphql`
  query GiveQuery {
    contentfulKLabPage(slug: { eq: "give" }) {
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
