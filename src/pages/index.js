import React, { useEffect, useState } from "react";
import { graphql, Link } from "gatsby";
import ScrollHome from "../components/scrollHome";
import VerticalScrollMenu from "../components/scrollInitatives";
import { StaticImage } from "gatsby-plugin-image";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../components/layout";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { MARKS, INLINES, BLOCKS } from "@contentful/rich-text-types";
import Seo from "../components/seo";
import "../components/index.module.css";
import "../components/oval.css";
import "../components/gridder.css";
import Rings from "../images/rings.svg";
import AniNav from "../components/animatedNav";

const IndexPage = ({ data }) => {
  const { nodes: pages } = data.allContentfulKLabPage;
  const { nodes: imageContent } = data.allContentfulBlockImage;
  const pageData = data.contentfulKLabPage;
  const currentPage = pages.find((conts) => conts.title === "Home");
  // console.log(data);

  // *********************************** IF THE LINKS DO NOT LOAD ON THE FIRST CLICK REVISE THIS SECTION ***********************************
  function getEntryWithId(pageId) {
    // ** First match id with the page
    const matchingId = data.allContentfulCrPage.nodes.find(
      (node) => node.contentful_id === pageId
    );

    // ** Get the slug from the matched page
    const matchingEntry = matchingId.slug;
    //console.log('the matching entry: '+matchingEntry)

    // ** If there is no matching entry gtfo brah
    if (!matchingEntry) return;

    // Recursive function to find the matching slug and build the URL path
    const buildUrlPath = (items, slug) => {
      // Iterate over each node in the current level
      for (const item of items) {
        // Check if the current node matches the slug
        if (item.navSlug === slug) {
          // Found the matching slug, construct URL path

          return `${item.navSlug}`;
        }

        // Check if the current node has navNextLevel
        if (item.navNextLevel) {
          // Recursively search in the navNextLevel

          const nextLevelPath = buildUrlPath(item.navNextLevel, slug);

          // If the matching slug is found in the next level, prepend current slug to the path
          if (nextLevelPath !== "") {
            return `${item.navSlug}/${nextLevelPath}`;
          }
        }
      }

      // If matching slug not found in current nodes or their children, return empty string
      return "";
    };

    const urlPath = buildUrlPath(
      data.allContentfulCrNavGroup.nodes,
      matchingEntry
    );
    //console.log(urlPath)
    return `/${urlPath}`;
  }

  const researchStyle = {
    //backgroundImage: `url(${Rings}), linear-gradient(-22deg, #B9529F  -10%, #B9529F 32%,  #3953A4 100%)`,
    backgroundImage: ` linear-gradient(-22deg, #B9529F  -10%, #B9529F 32%,  #3953A4 100%)`,
    backgroundSize: "initial", // Adjust this as needed to control the size of the SVG
    backgroundPosition: "120% 40%",
    backgroundRepeat: "no-repeat", // Prevent the SVG from repeating
    paddingTop: "clamp(var(--space-5),var(--space-7), var(--space-7))",
    paddingBottom: "clamp(var(--space-5),var(--space-7), var(--space-7))",
    color: "white",
    zIndex: 1,
    position: `relative`,
    clipPath: `polygon(0% 0%, 1000% 0%, 100% 90%, 0% 100%)`,
  };

  const featureStyle = {
    zIndex: 2,
  };

  const options = {
    renderText: (text) => {
      return text.split("\n").reduce((children, textSegment, index) => {
        return [...children, index > 0 && <br key={index} />, textSegment];
      }, []);
    },
    renderMark: {
      [MARKS.BOLD]: (text) => <strong className="font-bold">{text}</strong>,
    },
    renderNode: {
      [INLINES.ENTRY_HYPERLINK]: (node, children) => {
        const referencedEntry = getEntryWithId(node.data.target.sys.id);
        return <Link to={`${referencedEntry}`}>{children}</Link>;
      },
      [INLINES.HYPERLINK]: (node, children) => {
        const referencedEntry = node.data.uri;
        return (
          <Link to={`${referencedEntry}`} target="_blank">
            {children}
          </Link>
        );
      },
      [INLINES.EMBEDDED_ENTRY]: (node, children) => {
        const thisSlug = node.data.target.sys.slug;
        return (
          <>
            <a href={thisSlug} className="underline">
              {children}
            </a>
          </>
        );
      },
      [BLOCKS.HEADING_2]: (node, children) => {
        return <h2>{children}</h2>;
      },
      [BLOCKS.TABLE]: (node, children) => {
        const getPathname = () => {
          if (typeof window !== "undefined") {
            return window.location.pathname;
          }
          return ""; // Default path or server-side equivalent
        };

        const path = getPathname();

        return <table className="other-table">{children}</table>;
      },
    },
  };

  return (
    <>
      <Layout>
        <Container>
          <Row>
            <h1>
              {" "}
              <StaticImage
                src="../images/klab-logo.svg"
                loading="eager"
                quality={100}
                formats={["auto", "webp"]}
                alt="Knowledge Lab"
                placeholder="blurred"
                layout="fullWidth"
                aria-hidden="true"
                style={{
                  marginBottom: `0`,
                  marginTop: `var(--space-5)`,
                  marginLeft: `auto`,
                  marginRight: `auto`,
                  display: "block",
                  color: "white",
                  backgroundColor: "white",
                  width: "50%",
                  zIndex: "100",
                  padding: "0",
                }}
              />
              <span class="visually-hidden">Knowledge Lab</span>
            </h1>
          </Row>
        </Container>

        <Container>
          <Row style={{ justifyContent: "center" }}>
            <AniNav />
          </Row>
        </Container>
        <Container fluid style={{ backgroundColor: "#efefef" }}>
          <Container
            style={{ width: "100%", maxWidth: "1400px" }}
            id="scroller-home"
          >
            <Row>
              <Col xs={12}>
                <h2>In the News</h2>
              </Col>
              {(() => {
                const filteredContent = currentPage.kLabContents.filter(
                  ({ __typename, typeNewsEvent, homePageFeature }) =>
                    __typename === "ContentfulNewsOrEvent" &&
                    typeNewsEvent &&
                    homePageFeature
                );

                return <ScrollHome contentList={filteredContent} />;
              })()}
            </Row>
            <Row>
              <Col xs={12} className="allnews">
                <p>
                  <a href="/news">All KLab News</a>
                </p>
              </Col>
            </Row>
          </Container>
        </Container>

        <Container fluid id="research" style={researchStyle}>
          <Container>
            <Row>
              {currentPage.kLabContents.map((klabCont) => {
                const isKlContent =
                  klabCont.__typename === "ContentfulKLabContent" &&
                  klabCont.title;
                const body = klabCont.body;

                return isKlContent || body ? (
                  <>
                    <Col xs={12} md={6} key={klabCont.id || klabCont.title}>
                      {/* {isKlContent && <h2>{klabCont.title}</h2>} */}
                      {body && <p>{renderRichText(body, options)}</p>}
                    </Col>
                    <Col xs={12} md={6}>
                      {(() => {
                        const filteredInitiatives = currentPage.kLabContents.filter(
                          (klabCont) =>
                            klabCont.__typename ===
                              "ContentfulContentInitiative" &&
                            klabCont.homePageFeature === true
                        );

                        return filteredInitiatives.length > 0 ? (
                          <VerticalScrollMenu data={filteredInitiatives} />
                        ) : null;
                      })()}
                    </Col>
                  </>
                ) : null;
              })}
            </Row>
          </Container>
        </Container>

        <Container id="numbers">
          <Row>
            {currentPage.kLabContents.map((klabCont) => {
              const isBigNumber =
                klabCont.__typename === "ContentfulBigNumber" && klabCont.title;
              const description = klabCont.numberDescription;

              return isBigNumber || description ? (
                <Col xs={6} md={3} key={klabCont.id || klabCont.title}>
                  {isBigNumber && <h2>{klabCont.title}</h2>}
                  {description && <p>{renderRichText(description, options)}</p>}
                </Col>
              ) : null;
            })}
          </Row>
        </Container>

        <Container fluid id="partners">
          <Container>
            <>
              {["Support", "Partner"].map((type) => {
                const sponsors = currentPage.kLabContents.filter(
                  (klabs) =>
                    klabs.__typename === "ContentfulSponsor" &&
                    klabs.sponsorType[0] === type
                );

                if (sponsors.length > 0) {
                  return (
                    <div key={type}>
                      <Row>
                        <Col xs={12}>
                          <h2>
                            {type === "Support" ? "Supported by" : "Partner"}
                          </h2>
                        </Col>
                      </Row>
                      <Row>
                        {sponsors.map((klabs) => {
                          const isLogo = klabs.sponsorLogo;
                          return (
                            <Col xs={3} key={klabs.id || klabs.title}>
                              {isLogo && (
                                <img src={isLogo.url} alt={klabs.title} />
                              )}
                            </Col>
                          );
                        })}
                      </Row>
                    </div>
                  );
                }
                return null;
              })}
            </>
          </Container>
        </Container>
      </Layout>
    </>
  );
};

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="KLab Home" />;

export default IndexPage;

export const query = graphql`
  query GroupQuery {
    allContentfulKLabPage {
      nodes {
        title
        slug
        kLabContents {
          __typename
          ... on ContentfulKLabContent {
            id
            __typename
            title
            body {
              raw
            }
          }
          ... on ContentfulSponsor {
            __typename
            id
            sponsorType
            title
            sponsorLogo {
              url
              file {
                url
              }
            }
          }
          ... on ContentfulBigNumber {
            id
            __typename
            title
            numberDescription {
              raw
            }
          }
          ... on ContentfulNewsOrEvent {
            id
            title
            url
            typeNewsEvent
            featuredItem
            homePageFeature
            description {
              raw
            }
            image {
              url
            }
          }

          ... on ContentfulContentInitiative {
            __typename
            homePageFeature
            image {
              file {
                url
              }
            }
            tagline {
              tagline
            }
            title
          }
        }
      }
    }
    allContentfulBlockImage {
      __typename
      nodes {
        image {
          file {
            url
          }
        }
      }
    }
  }
`;
