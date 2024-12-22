import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import ReactMarkdown from "react-markdown";

const Hero = ({ content }) => {
    if (content.title && content.body) {
        return (
          <Container fluid className="hero">
            <Container>
              <Row>
                <Col xs={12} sm={8}>
                  <h2>{content.title}</h2>
                  <p>{renderRichText(content.body)}</p>
                </Col>
                <Col xs={12} sm={4}>
                  {content.sideButton && (
                    <div className="side-button">
                      <ReactMarkdown>
                        {content.sideButton.sideButton}
                      </ReactMarkdown>
                    </div>
                  )}
                  {content.sideImage && (
                    <>
                      <img src={content.sideImage.file.url} />
                    </>
                  )}
                </Col>
              </Row>
            </Container>
          </Container>
        );
      }

  // Return null or some fallback if the content is missing
  return null;
};

export default Hero;
