/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"
import "../components/gridder.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
    <div class="grid-container">
        <div class="grid-div-container">
          <div class="grid-div"></div>
          <div class="grid-div"></div>
          <div class="grid-div"></div>
          <div class="grid-div"></div>
          <div class="grid-div"></div>
          <div class="grid-div"></div>
        </div>
      <div className="grid-gradient"></div>
      
      <Header siteTitle={data.site.siteMetadata?.title || `Knowlege Lab`} />

      
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
          }}
        >
          © {new Date().getFullYear()} &middot; Knowledge Lab
        </footer>
      </div>
      </div>
    </>
  )
}

export default Layout
