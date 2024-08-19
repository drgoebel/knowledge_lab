import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "./header";
import "./layout.css";
import "../components/gridder.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UCShield from "../images/ucshield.svg";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const footerStyle = {
    background:
      "linear-gradient(0deg, #34224D  0%, #34224D 32%,  #9F1FA1 100%)",
    paddingLeft: "clamp(var(--space-5),var(--space-6), var(--space-6))",
    paddingRight: "clamp(var(--space-5), var(--space-6), var(--space-6))",
    // paddingBottom: "clamp(var(--space-5),var(--space-6), var(--space-6))",
    position: `relative`,
    zIndex: 1,
  };

  return (
    <>
          <div className={`grid-container`}
      >
          
              <div className={`grid-div`}></div>
              <div className={`grid-div`}></div>
              <div className={`grid-div`}></div>
              <div className={`grid-div `}></div>
              <div className={`grid-div-last`}></div>
           
            </div>
         
      
      {/* <Container class="grid-container">
        <Row style={{ position: `relative` }}>
          <Col xs={12}className={`grid-div-container`}>
            <Col xs={3}>
              <div className={`grid-div`}></div>
            </Col>
            <Col xs={3}>
              <div className={`grid-div`}></div>
            </Col>
            <Col xs={3}>
              <div className={`grid-div`}></div>
            </Col>
            <Col xs={3}>
              <div className={`grid-div `}>
                
              </div>
              <div className={`grid-div-last`}></div>
            </Col>
          </Col>
        </Row>
      </Container> */}

      <Container fluid style={{ flexGrow: `1`, minHeight: `100vh` }}>
        <Header siteTitle={data.site.siteMetadata?.title || `Knowlege Lab`} />

        <Container fluid>{children}</Container>
      </Container>

      <Container fluid style={footerStyle}>
        <Container>
          <footer
            style={{
              marginTop: `var(--space-6)`,
              marginBottom: `var(--space-6)`,
              fontSize: `var(--font-sm)`,
              color: `white`,
              height: `5vh`,
            }}
          >
            <Row>
              <Col xs={2}>
                <img src={UCShield} />
                <br />
                <small>
                  1155 E 60th Street Room 211
                  <br />
                  Chicago, IL 60637
                </small>
              </Col>
              <Col xs={8}>
                {" "}
                © {new Date().getFullYear()} &middot; Knowledge Lab
              </Col>
            </Row>
          </footer>
        </Container>
      </Container>
    </>
  );
};

export default Layout;
