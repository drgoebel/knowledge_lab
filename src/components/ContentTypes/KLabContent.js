import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { renderRichText } from "gatsby-source-contentful/rich-text";

const KLabContent = ({ content }) => (
  <Container>
    <Row>
      <Col>
        <h2>{content.title}</h2>
        <p>{renderRichText(content.body)}</p>
      </Col>
    </Row>
  </Container>
);

export default KLabContent;