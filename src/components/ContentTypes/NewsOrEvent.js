import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import ReactMarkdown from "react-markdown";

const NewsOrEvent = ({ content }) => {
    if (
        content.title &&
        content.description &&
        //if false, it's an event else it's news (below)
        content.typeNewsEvent === false
      ) {
        return (
          <Container fluid>
            <Container>
              <Row>
                <div>
                  <img src={content.image.url} />
                  <h2>{content.title}</h2>
                  <p>{renderRichText(content.description)}</p>
                  {/* {content.url && (
              <p className="call-to-action"><a href={content.url}>Visit Website</a></p>
            )} */}
                </div>
              </Row>
            </Container>
          </Container>
        );
      } else {
        return (
          <Container fluid>
            <Container>
              <Row>
                <div>
                  {/* <h2>{content.title}</h2> */}
                  <a href={content.url} target="_blank">
                    <img src={content.image.url} />
                    <small>{renderRichText(content.description)}</small>
                    {/* {content.url && (
              <p className="call-to-action"><a href={content.url}>Visit Website</a></p>
            )} */}
                  </a>
                </div>
              </Row>
            </Container>
          </Container>
        );
      }

  // Return null or some fallback if the content is missing
  return null;
};

export default NewsOrEvent;
