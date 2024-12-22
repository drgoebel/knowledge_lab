import * as React from "react";
import { useState } from "react";
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ReactMarkdown from "react-markdown";

const ContentInitiative = ({ content }) => {
  const [modalShow, setModalShow] = useState(false);
  const initiative = content;
  console.log(initiative);

  function CenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={props.show}
        onHide={props.onHide}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.title && (
              <span dangerouslySetInnerHTML={{ __html: props.title }} />
            )}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>{props.shorter}</h4>
          {/* <p>{props.description}</p> */}
          <p>{props.founders}</p>
          <p>{props.partners}</p>
          <div className="paper"><ReactMarkdown>{props.papers.papers}</ReactMarkdown></div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="init-btn" onClick={props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <>

      <Col xs={12} sm={6} md={4}>
            <p>{initiative.title}</p>

            <a
              href="#"
              onClick={(e) => {
                e.preventDefault(); // Prevent default link behavior
                setModalShow(true); // Show modal
              }}
            >
              Open Up
            </a>
            <CenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
              title={initiative.title}
              shorter={initiative.tagline.tagline}
              // description={initiative.initiativeDescription}
              founders={initiative.founders}
              partners={initiative.partners}
              // talks={initiative.talks}
              papers={initiative.papers}
            />
          
      </Col>

    </>
  );
};

export default ContentInitiative;
