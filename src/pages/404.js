import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Nav from "../components/nav";
import { Container } from "react-bootstrap";



const NotFoundPage = () => {

  useEffect(() => {
    const script1 = document.createElement("script");

    script1.src = "https://lab.hakim.se/blob/03/js/blob.js";
    // "../components/blob.js";

    if (typeof window !== 'undefined') {
        // Browser-specific code here
      

    document.body.appendChild(script1);
    }
  }, []);
  return (
  <Layout>
    <Nav />
    <Container fluid><Container>
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <p><a href="/">Return home</a></p>

    <div style={{ width: `100%`, height: `100%`, position: `relative` }}>
        <p>
          Double click to split.{" "}
          <a id="keyboardUp" href="#">
            Increase
          </a>{" "}
          /{" "}
          <a id="keyboardDown" href="#">
            decrease
          </a>{" "}
          size or{" "}
          <a id="keyboardLeft" href="#">
            Previous
          </a>{" "}
          /{" "}
          <a id="keyboardRight" href="#">
            Next
          </a>{" "}
          skin.
        </p>
        <canvas id="world" style={{ width: `100%`, height: `100%` }}>
          .....
        </canvas>
      </div>
    </Container></Container>
  </Layout>
  )
}

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage