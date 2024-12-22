import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { renderRichText } from "gatsby-source-contentful/rich-text";

const Publication = ({ content }) => {
  if (content.title && content.body) {
    return (
      <Container>
        <Row>
          <Col>
          
            <h2>{content.title}</h2>
            <p>{renderRichText(content.body)}</p>
          </Col>
        </Row>
      </Container>
    );
  }

  // Return null or some fallback if the content is missing
  return null;
};

export default Publication;
