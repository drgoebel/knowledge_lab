import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { renderRichText } from "gatsby-source-contentful/rich-text";

const PersonItem = ({ content }) => {

    if (content.name && content.biography && content.personCategory[0] === 'Leadership') {
        return (
          <Col xs={12} sm={6}>
                <div>
                  <h2>{content.name}</h2>
                  <p>{renderRichText(content.biography)}</p>

                  {content.website && (
                    <p>
                      <a href={content.website} target="_blank">
                        Webiste
                      </a>
                    </p>
                  )}

                  {content.email && (
                    <p>
                      <a href={`mailto:${content.email}`} target="_blank">
                        {content.email}
                      </a>
                    </p>
                  )}

                  {content.cv && (
                    <p>
                      <a href={content.cv} target="_blank">
                        CV
                      </a>
                    </p>
                  )}
                </div>
            
          </Col>
        );
      }

  // Return null or some fallback if the content is missing
  return null;
};

export default PersonItem;
