/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.scss";
import '../styles/animations.css';
// import Cursor from "./Cursor";

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
    <div className="site">
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
        {/* <Cursor/> */}
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a>Made with coffe by <a href="https://github.com/codekyd" target="_blank" rel="noreferrer">codekyd</a> </a>
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
