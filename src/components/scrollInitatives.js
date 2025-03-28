import React, { useContext } from "react";
import { graphql, Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import "../components/vertical-scroller.css";

// Vertical Scroll Arrow Component
const VerticalArrow = ({ children, disabled, onClick, isLeft }) => {
  return (
    <button
      disabled={disabled}
      onClick={(e) => {
        e.stopPropagation();
        onClick(e);
      }}
      style={{
        [isLeft ? "left" : "right"]: 0,
        opacity: disabled ? "0.1" : "1",
      }}
    >
      {children}
    </button>
  );
};

// Left/Up Arrow Component
const LeftArrow = () => {
  const { isFirstItemVisible, scrollPrev } = useContext(VisibilityContext);

  return (
    <VerticalArrow
      disabled={isFirstItemVisible}
      onClick={(e) => {
        e.preventDefault();
        scrollPrev && scrollPrev();
      }}
      isLeft={true}
    >
      <i className="fa-solid fa-circle-up"></i>
    </VerticalArrow>
  );
};

// Right/Down Arrow Component
const RightArrow = () => {
  const { isLastItemVisible, scrollNext } = useContext(VisibilityContext);
  return (
    <VerticalArrow
      disabled={isLastItemVisible}
      onClick={(e) => {
        e.preventDefault();
        scrollNext && scrollNext();
      }}
      isLeft={false}
    >
      <i className="fa-solid fa-circle-down"></i>
    </VerticalArrow>
  );
};

// Vertical Scrolling Menu Component
const VerticalScrollMenu = ( {data} ) => {

  //const content = data.allContentfulContentInitiative;
  console.log(data);

  return (
    <div id="vertical-scroller">
       <h3>
        Featured Initiatives
      </h3>
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} options={{
          // These options can help with more accurate visibility detection
          scrollDetection: {
            onScroll: true,
            onMouseEnter: true,
            onMouseLeave: true,
          }
        }}>
        {data.map((item) => (
          <Row
            key={item.title}
            itemId={item.title}
            style={{
              height: "auto",
              width: "100%",
              display: "flex",
              paddingBottom: "30px",
              // flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              overflow: "hidden",
            }}
          ><Col xs={4} md={4}>
            <a href="/initiatives">{item.image && (
              <img
                src={item.image.file.url}
                alt={item.title}
                style={{
                  maxWidth: "90%",
                  display: "flex",
                  justifySelf: "flex-end",
                  objectFit: "cover",
                }}
              />
            )}</a></Col>
            <Col xs={8} md={8}>
            <h4>{item.title}</h4>
            <small>{item.tagline?.tagline}</small><br />
            <small><a href="/initiatives">Learn More →</a></small>
            </Col>
          </Row>
        ))}
      </ScrollMenu>
    </div>
  );
};


export default VerticalScrollMenu;
