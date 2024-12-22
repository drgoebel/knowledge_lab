import * as React from "react";
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Header from "./header";
import Nav from "./nav";
import "./layout.css";
import "../components/gridder.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UCShield from "../images/ucshield.svg";
import "@fortawesome/fontawesome-free/css/all.min.css";

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
    position: `relative`,
    zIndex: 1,
    marginTop: `2rem`,
  };

  const location = useLocation();
  const isInitiativesPage = location.pathname === "/initiatives/";
  const isHomepage = location.pathname === "/";
  
  return (
    <>
      <div className={isInitiativesPage ? 'grid-container thirds' : 'grid-container'}>
        <div className={`grid-div`}></div>
        <div className={`grid-div`}></div>
        <div className={`grid-div`}></div>
        {!isInitiativesPage ? <div className={`grid-div`}></div>: null}
        <div className={`grid-div-last`}></div>
      </div>

      <Container fluid style={{ flexGrow: `1`, minHeight: `100vh` }}>
        <Header siteTitle={data.site.siteMetadata?.title || `Knowlege Lab`} />
        {!isHomepage && <Nav />}
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
              display: `flex`,
              flexDirection: `column`,
              justifyContent: `center`,
              textAlign: `right`,
              lineHeight: `var(--line-height-dense)`
            }}
          >
            <Row>
              <Col xs={3} sm={3}>
                <img src={UCShield} />
                <br />
                <small>
                  1155 E 60th Street Room 211
                  <br />
                  Chicago, IL 60637<br />
                  
                </small>
              </Col>
              <Col xs={9} sm={9} className="footer-deets">
                {" "}
                <p><a href="mailto:knowledgelab@uchicago.edu"><i class="fa-solid fa-envelope"></i> {" "}knowledgelab@uchicago.edu</a></p>
                © {new Date().getFullYear()} | Knowledge Lab
              </Col>
            </Row>
          </footer>
        </Container>
      </Container>
    </>
  );
};

export default Layout;
