import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import { Container, Row, Button } from "react-bootstrap";
import Logo from "../images/klab-logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark} from "@fortawesome/free-solid-svg-icons";
import "./layout.css";
import "../components/gridder.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/nav.css"

const Nav = () => {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  // Function to toggle the mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuVisible(!isMobileMenuVisible);
  };

  // Function to check if the viewport is below 576px
  const handleResize = () => {
    setIsMobileView(window.innerWidth < 767);
  };

  useEffect(() => {
    handleResize(); // Check the viewport size on component mount
    window.addEventListener("resize", handleResize); // Add resize event listener
    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup event listener on component unmount
    };
  }, []);

  const mobileButtonStyle = {
    width: "50px",
    height: "50px",
    alignSelf: "flex-start",
    marginTop: "15px",
    marginRight: "15px",
    backgroundColor: "var(--color-secondary)",
    outline: "none",
    border: "none"
  }
  const navStyles = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
  };
  const navLogoStyleMobile = {
    width: "50%",
    paddingTop: "1rem",
    paddingBottom: "1rem",
    flexGrow: "1",
    marginRight: "25cqw",
  };
  const navLogoStyle = {
    display: isMobileView  ? "none" : "flex",
    width: "23%",
    paddingTop: "1rem",
    paddingBottom: "1rem",
  };
  const navListStyles = {
    display: isMobileView ? (isMobileMenuVisible ? "block" : "none") : "flex",
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
    borderBottom: isMobileView && isMobileMenuVisible ? "1px solid #f8f8f8" : "none"
  };
  const navLinkStyles = {
    display: isMobileView ? (isMobileMenuVisible ? "block" : "none") : "flex",
    padding: isMobileView && isMobileMenuVisible ? "clamp(9px, .5cqw, 16px)" : "clamp(10px, 1cqw, 16px)",
    textDecoration: "none",
    color: "var(--color-text)",
    textTransform: "uppercase",
    fontSize: isMobileView && isMobileMenuVisible ? "clamp(16px, 1.5cqw, 24px)" : "clamp(9px, 1cqw, 14px)",
    // borderBottom: isMobileView && isMobileMenuVisible ? "1px dotted #333" : "none",
    margin: "0",
    
  };
  
  const containerStyle = {
    background:
      "linear-gradient(0deg, rgb(235, 288, 243), rgb(198, 188, 188) 51%,transparent 0,transparent)",
    width: "100vw",
    height: "1px",
    backgroundSize: "8px 1px",
  };

  return (
    <>
      <Container fluid>
        <Container>
          <Row style={{display: `flex`, justifyContent: `space-between`}}>
            {isMobileView && (
              <>
              <Link to={`/`} style={navLogoStyleMobile}>
              <img src={Logo} alt="Logo" />
            </Link>
            <Button onClick={toggleMobileMenu} style={mobileButtonStyle}>
                <FontAwesomeIcon icon={isMobileMenuVisible ? faXmark : faBars} /> {/* Conditionally render the icon */}
              </Button>
              </>
            )}
            <nav style={navStyles}>
              <Link to={`/`} style={navLogoStyle}>
                <img src={Logo} alt="Logo" />
              </Link>
              <ul style={navListStyles}>
                <li style={navItemStyles}>
                  <Link style={navLinkStyles} to={`/join`}>
                    Join KLab
                  </Link>
                </li>
                <li style={navItemStyles}>
                  <Link style={navLinkStyles} to={`/team`}>
                    Team
                  </Link>
                </li>
                <li style={navItemStyles}>
                  <Link style={navLinkStyles} to={`/initiatives`}>
                    Initiatives
                  </Link>
                </li>
                <li style={navItemStyles}>
                  <Link style={navLinkStyles} to={`/publications`}>
                    Publications
                  </Link>
                </li>
                <li style={navItemStyles}>
                  <Link style={navLinkStyles} to={`/news`}>
                    News
                  </Link>
                </li>
                
                <li style={navItemStyles}>
                  <Link style={navLinkStyles} to={`/events`}>
                    Events
                  </Link>
                </li>
                
                <li style={navItemStyles}>
                  <Link style={navLinkStyles} to={`/give`}>
                    Give
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
