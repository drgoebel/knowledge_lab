import React, { useEffect, useState } from 'react';
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Seo from "../components/seo";
import * as styles from "../components/index.module.css";
import "../components/oval.css";
import "../components/gridder.css";





// const samplePageLinks = [
//   {
//     text: "Page 2",
//     url: "page-2",
//     badge: false,
//     description:
//       "A simple example of linking to another page within a Gatsby site",
//   },
//   { text: "TypeScript", url: "using-typescript" },
//   { text: "Server Side Rendering", url: "using-ssr" },
//   { text: "Deferred Static Generation", url: "using-dsg" },
// ]

// const moreLinks = [
//   { text: "Join us on Discord", url: "https://gatsby.dev/discord" },
//   {
//     text: "Documentation",
//     url: "https://gatsbyjs.com/docs/",
//   },
//   {
//     text: "Starters",
//     url: "https://gatsbyjs.com/starters/",
//   },
//   {
//     text: "Showcase",
//     url: "https://gatsbyjs.com/showcase/",
//   },
//   {
//     text: "Contributing",
//     url: "https://www.gatsbyjs.com/contributing/",
//   },
//   { text: "Issues", url: "https://github.com/gatsbyjs/gatsby/issues" },
// ]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`;

const IndexPage = () => {
  const links = [
    {
      text: "Conferences/Workshops",
      url: "conferences-workshops",
      color: "red",
      // description:
      //   "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    },
    {
      text: "Research",
      url: "/research",
      color: "yellow",
      // description:
      //   "A collection of websites ranging from very basic to complex/complete that illustrate how to accomplish specific tasks within your Gatsby sites.",
    },
    {
      text: "Careers",
      url: "/careers",
      color: "purple",
      // description:
      //   "Learn how to add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    },
    {
      text: "Give",
      url: "/give",
      color: "blue",
      // description:
      //   "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
    },
    {
      text: "About",
      url: "/about",
      color: "green",
      // description:
      //   "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
    },
    {
      text: "Team",
      url: "/team",
      color: "orange",
      // description:
      //   "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
    },
    {
      text: "News/Events",
      url: "/news-events",
      color: "olive",
      // description:
      //   "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
    },
    {
      // text: "Knowledge Lab",
      url: "/",
      color: "sizer",
      description: "Knowledge Lab",
    },
  ];

  const [hovering, setHovering] = useState(false);
  const [reverse, setReverse] = useState(false);
  const [initiateRemoved, setInitiateRemoved] = useState(false);

  useEffect(() => {
    if (reverse) {
      const swatch = document.querySelector('.olive');
      // Force reflow to restart the transition
      // void swatch.offsetWidth;
      // swatch.classList.remove('reverse');
      setReverse(false); // Reset reverse state after forcing reflow
    }
  }, [reverse]);

  const handleMouseEnter = () => {
    setHovering(true);
    setInitiateRemoved(true); // Remove the "initiate" class on mouse enter

  };

  const handleMouseLeave = () => {
    setHovering(false);
    setReverse(true);
  };

  return (
    <>
  <Layout>
    
    <div>
      
      <StaticImage
        src="../images/klab-logo.svg"
        loading="eager"
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{
          marginBottom: `var(--space-3)`,
          display: "block",
          width: "90%",
          marginLeft: "auto",
          marginRight: "auto",
          zIndex: '100',  
        }}
      />
      {/* <h1>Knowledge <b>Lab</b></h1> */}
    </div>
    {/* <div class="oval-container">
        <!-- <div class="sizer"></div> -->
        <a href="https://google.com" target="_blank">
            <div class="oval red"></div>
        </a>
        <div class="oval yellow"></div>
        <div class="oval blue"></div>
        <div class="oval purple"></div>
        <div class="oval green"><p>Knowledge<br />Lab</p></div>
    </div> */}

    <div className={"oval-container"}>
      <div className={"oval-list"}>
        {links.map((link) => (
          
          <a key={link.url} href={link.url} className={`${!initiateRemoved ? 'initiate' : ''} ${hovering ? 'hovering oval' : 'oval'}  ${link.color}`}
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave}
          >
           
              <span>{link.text}</span>
            
            <h1 className={styles.listItemDescription}>{link.description}</h1>
          </a>
          
        ))}
      </div>
    </div>
    {/* {moreLinks.map((link, i) => (
      <React.Fragment key={link.url}>
        <a href={`${link.url}${utmParameters}`}>{link.text}</a>
        {i !== moreLinks.length - 1 && <> · </>}
      </React.Fragment>
    ))} */}
  </Layout>
  </>
  )
};

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />;

export default IndexPage;
