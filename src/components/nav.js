import * as React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./header";
import "./layout.css";
import Logo from "../images/klab-logo.svg";
import "../components/gridder.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Nav = () => {
  const navStyles = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  };
  const navLogoStyle = {
    width: "23%",
    paddingTop: "1rem",
    paddingBottom: "1rem"
  };
  const navListStyles = {
    display: "flex",
    listStyle: "none",
    flexDirection: "row",
    justifyContent: "flex-end",
    flex: "1 0 auto",
    padding: "0",
    margin: "0",
  };
  const navItemStyles = {
    margin: "0",
    padding: "0",
  };
  const navLinkStyles = {
    padding: "clamp(10px, 1cqw, 16px)",
    textDecoration: "none",
    color: "var(--color-text)",
    textTransform: "uppercase",
    fontSize: "clamp(9px, 1cqw, 14px)",
    margin: "0",
  };
  const containerStyle = {
    background: "linear-gradient(0deg, rgb(235, 288, 243), rgb(198, 188, 188) 51%,transparent 0,transparent)",
    width: "100vw",
    height: "1px",
    backgroundSize: "8px 1px",
  }

  return (
    <>
      <Container fluid>
        
        <Container>
          <Row>
            <nav style={navStyles}>
              <Link to={`/`} style={navLogoStyle}>
                <img src={Logo} />
              </Link>
              <ul style={navListStyles}>
                <li style={navItemStyles}>
                  <Link style={navLinkStyles} to={`/careers`}>
                    careers
                  </Link>
                </li>
                <li style={navItemStyles}>
                  <Link style={navLinkStyles} to={`/initiatives`}>
                    initiatives
                  </Link>
                </li>
                <li style={navItemStyles}>
                  <Link style={navLinkStyles} to={`/team`}>
                    team
                  </Link>
                </li>
                <li style={navItemStyles}>
                  <Link style={navLinkStyles} to={`/workshops`}>
                    workshops/conferences
                  </Link>
                </li>
                <li style={navItemStyles}>
                  <Link style={navLinkStyles} to={`/news`}>
                    news
                  </Link>
                </li>
                <li style={navItemStyles}>
                  <Link style={navLinkStyles} to={`/give`}>
                    give
                  </Link>
                </li>
                <li style={navItemStyles}>
                  <Link style={navLinkStyles} to={`/about`}>
                    about
                  </Link>
                </li>
              </ul>
            </nav>
          </Row>
        </Container>
        <div style={containerStyle}></div>
      </Container>
    </>
  );
};

export default Nav;
