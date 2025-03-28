import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import "../components/gridder.css";
import Trianges from "../images/triangles.svg";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import ReactMarkdown from "react-markdown";


const sampleCareers = [
  {
    title: "Outreach Director and Senior Project Manager",
    text:
      "The job leads the administration of academic, research, clinical or administrative programs. The Senior Project Manager and Outreach Director will be the lead administrator supporting the broader impacts and outreach associated with the collaborative NSF-funded research project “Global Observatory and Virtual Laboratory for Science & Technology Advance.” This role will manage the broader activities and outcomes of this project, tracking progress, building reports, and keeping leadership apprised of setbacks or other concerns. This role will be the key coordinator and contact for project activities including the robust outreach programs for under-represented STEM students. They will create and manage a communication strategy for public-facing outreach, and an internal communication strategy for the collaborators of the project. They will also build relationships with community partners and educational organizations who will be critical to outreach program success. The role will be an integral part of the success of this project, and will lead outreach-related goal setting, implementation, and other strategic efforts to build and report on the project’s public-facing impacts. ",
    url:
      "https://uchicago.wd5.myworkdayjobs.com/en-US/External/details/Outreach-Director---Senior-Project-Manager_JR27131?q=project%20manager",
    badge: false,
  },
  {
    title: "Knowledge Lab Postdoctoral Scholars",
    text:
      "The Knowledge Lab is inviting applications for several postdoctoral scholar positions. We are seeking passionate researchers eager to explore the intersection of artificial intelligence, science, technology, and policy. This is an opportunity to join a dynamic team at the forefront of research and innovation. If you are ready to make significant contributions to your field and collaborate with top-tier scholars, we encourage you to review the available positions and apply.",
    url: "https://form.jotform.com/241295631499062",
  },
];

const Join = ({ data }) => {
  const pageData = data.contentfulKLabPage;
  console.log(pageData);

  return (
    <Layout>
      <Container fluid id="careers-header">
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
                      <div className="apply-now">
                        <a
                          href="https://form.jotform.com/241295631499062"
                          target="_blank"
                        >
                          Apply to Knowledge Lab
                        </a>
                      </div>
                      <div className="join-now">
                        <a
                          href="https://form.jotform.com/242426215800043"
                          target="_blank"
                        >
                          Connect with KLab
                        </a>
                      </div>
                    </div>
                  </Col>
                </>
              ))}
          </Row>
        </Container>
      </Container>
      <Container fluid id="careers">
        <Container>
          <Row>
            <Col xs={12} sm={8}>
              {pageData.kLabContents
                .filter((content) => content.__typename === "ContentfulKLabJob")
                .map((content) => (
                  <>
                    <h3>{content.title}</h3>
                    {content.jobDescription && (
                      <p>{renderRichText(content.jobDescription)}</p>
                    )}
                    {content.jobLink && (
                      <a href={content.jobLink} target="_blank">
                        <button>
                          Learn more and Apply{" "}
                          {/* <FontAwesomeIcon icon={faCaretRight} /> */}
                          <i class="fa-solid fa-caret-right"></i>
                        </button>
                      </a>
                    )}
                  </>
                ))}
            </Col>
            <Col xs={12} sm={4} className="sidebar">
              {pageData.kLabContents
                .filter(
                  (content) => content.__typename === "ContentfulKLabContent"
                )
                .map((content) => (
                  <>
                    <div key={content.id}>
                      {content.body && <p>{renderRichText(content.body)}</p>}
                    </div>
                  </>
                ))}
            </Col>
          </Row>
        </Container>
      </Container>
    </Layout>
  );
};

export const Head = () => <Seo title="Join Knowledge Lab" />;

export default Join;

export const query = graphql`
  query GiveQuery {
    contentfulKLabPage(slug: { eq: "join" }) {
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
          jobLink
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
