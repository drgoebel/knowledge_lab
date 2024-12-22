import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import ReactMarkdown from "react-markdown";

const KLabJob = ({ content }) => {
    if (content.title && content.jobDescription) {
        return (
        
            <Container>
              <Row>
                <Col>
                  <h2>{content.title}</h2>
                  <p>{renderRichText(content.jobDescription)}</p>
                  {content.callToAction && (
                    <p className="call-to-action">{content.callToAction}</p>
                  )}
                </Col>
              </Row>
            </Container>
         
        );
      }

  // Return null or some fallback if the content is missing
  return null;
};

export default KLabJob;
