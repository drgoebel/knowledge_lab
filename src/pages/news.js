import * as React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Scroll from "../components/scroll";
import Layout from "../components/layout";
import Nav from "../components/nav";
import Seo from "../components/seo";
import { Container, Row, Col } from "react-bootstrap";
import "../components/gridder.css";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import Trianges from "../images/triangles.svg";
import SmallerTeams from "../images/smallerteams.webp";
import Doomed from "../images/doomed.webp";
import TooBig from "../images/toobig.webp";
import WSJ from "../images/wsj.webp";
import GreatMinds from "../images/greatminds.webp";
import BBC from "../images/bbc.webp";
import FastCo from "../images/fastcompany.webp";
import Wired from "../images/wired.webp";
import HBR from "../images/hbr.webp";
import Forbes2 from "../images/forbes2.webp";
import LeMonde from "../images/lamonde.webp";
import DieZeit from "../images/diezeit.webp";
import Nature from "../images/nature.webp";
import Science from "../images/science.webp";
import JoeRogan from "../images/joerogan.webp";

const newsItems = [
  {
    title: "New Yorker",
    image: Doomed,
    url:
      "https://www.newyorker.com/magazine/2024/06/10/are-we-doomed-heres-how-to-think-about-it",
  },
  {
    title: "NYT",
    image: TooBig,
    url:
      "https://www.nytimes.com/2019/02/13/science/science-research-psychology.html",
  },
  {
    title: "Atlantic",
    image: SmallerTeams,
    url:
      "https://www.theatlantic.com/science/archive/2019/02/why-small-science-still-matters/582685/",
  },
  {
    title: "Wall Street Journal",
    image: WSJ,
    url:
      "https://www.wsj.com/articles/SB10001424052702304066504576341280447107102",
  },
  {
    title: "The Economist",
    image: GreatMinds,
    url:
      "https://www.economist.com/science-and-technology/2008/07/17/great-minds-think-too-much-alike",
  },
  {
    title: "BBC",
    image: BBC,
    url:
      "https://www.sciencefocus.com/news/algorithm-predict-future-crimes-90-accuracy-heres-why-creator-thinks-tech-wont-be-abused",
  },
  {
    title: "Fast Company",
    image: FastCo,
    url:
      "https://www.fastcompany.com/90451983/science-reveals-the-tipping-point-between-success-and-failure",
  },
  {
    title: "Wired",
    image: Wired,
    url: "https://www.wired.com/2008/07/is-the-internet/",
  },
  {
    title: "HBR",
    image: HBR,
    url:
      "https://hbr.org/2019/02/research-when-small-teams-are-better-than-big-ones",
  },
  {
    title: "Forbes",
    image: Forbes2,
    url:
      "https://www.forbes.com/sites/billfischer/2019/02/15/it-takes-more-than-members-to-make-a-team/?sh=2c3a41946016",
  },
  {
    title: "Le Monde",
    image: LeMonde,
    url:
      "https://www.lemonde.fr/sciences/article/2019/02/18/en-science-les-plus-petites-equipes-sont-les-plus-innovantes_5424938_1650684.html",
  },
  {
    title: "Der Zeit",
    image: DieZeit,
    url:
      "https://www.zeit.de/wissen/2014-02/wissenschaft-james-evans-forschung-computer",
  },
  {
    title: "Nature",
    image: Nature,
    url: "https://www.nature.com/articles/d41586-023-03596-0",
  },
  {
    title: "Science",
    image: Science,
    url:
      "https://www.science.org/content/article/larger-teams-worsen-academic-career-prospects",
  },
  {
    title: "The Joe Rogan Experience",
    image: JoeRogan,
    url:
      "https://drive.google.com/file/d/1lTfWSU7KUvQoTSMAO-4AGS7mdaxfUf51/view?usp=sharing",
  },
];

const News = ({ data }) => {
  const pageData = data.contentfulKLabPage;

  return (
    <Layout>
      <Container fluid id="news-header">
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

      <Container fluid style={{ width: "100%", maxWidth: "1400px" }}>
        <Row>
          {(() => {
            const filteredContent = pageData.kLabContents.filter(
              ({ __typename, typeNewsEvent, featuredItem }) =>
                __typename === "ContentfulNewsOrEvent" &&
                typeNewsEvent &&
                featuredItem
            );

            return <Scroll contentList={filteredContent} />;
          })()}
        </Row>
      </Container>

      <Container fluid id="news">
        <Container>
          <Row>
            {pageData.kLabContents
              .filter(
                ({ __typename, typeNewsEvent, featuredItem }) =>
                  __typename === "ContentfulNewsOrEvent" &&
                  typeNewsEvent &&
                  !featuredItem
              )
              .map((content) => {
                const newsImage = content.image ? getImage(content.image) : null;
                
                return (
                  <Col xs={12} sm={3} className="news-item" key={content.id}>
                    <a href={content.url} target="_blank" rel="noopener noreferrer">
                      {newsImage && (
                        <GatsbyImage 
                          image={newsImage} 
                          alt={content.title} 
                        />
                      )}
                    </a>
                  </Col>
                );
              })}
          </Row>
        </Container>
      </Container>
    </Layout>
  );
};

export const Head = () => <Seo title="News for Knowledge Lab" />;

export default News;

export const query = graphql`
  query NewsQuery {
    contentfulKLabPage(slug: { eq: "news" }) {
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