import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./styling/layout.module.scss"

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
			{/* header */}
			<Header />
			<div>
			{/* main */}
				<main>{children}</main>
			{/* footer */}
				<footer>
					© <b>{new Date().getFullYear()} Defuture Technology</b>. All right reserved.
          			{` `}
					{/* <a className href="https://www.gatsbyjs.org">Gatsby</a> */}
				</footer>
			</div>
		</>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
