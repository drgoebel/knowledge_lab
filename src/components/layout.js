import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./header";
import "./layout.css";
import "../components/gridder.css";
import "bootstrap/dist/css/bootstrap.min.css";

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
      "linear-gradient(0deg, #34224D  0%, #34224D 32%,  #3953A4 100%)",
    paddingLeft: "clamp(var(--space-5),var(--space-6), var(--space-6))",
    paddingRight: "clamp(var(--space-5), var(--space-6), var(--space-6))",
    // paddingBottom: "clamp(var(--space-5),var(--space-6), var(--space-6))",
    position: `relative`,
    zIndex: 1,
  };

  return (
    <>
      <Container class="grid-container">
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
      </Container>
     

      <Container fluid style={{ flexGrow: `1` }}>
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
            © {new Date().getFullYear()} &middot; Knowledge Lab
          </footer>
        </Container>
      </Container>
    </>
  );
};

export default Layout;
