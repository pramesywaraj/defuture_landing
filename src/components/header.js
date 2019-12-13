import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import headerStyle from './styling/header.module.scss'

const Header = () => {
	const navElements = [
		{ link: "#about", name: "Tentang" },
		{ link: "#services", name: "Layanan" },
		{ link: "#portfolio", name: "Portfolio" },
		{ link: "#client", name: "Client" },
	]

	return (
		<header
			className={headerStyle.header}
		>
			<div
				className={headerStyle.headerSection}
			>
				<Link to={'/'}>
					<img 
						src={require('../assets/logo-min.png')} 
						alt="Defuture Tech Logo"
					/>
				</Link>

				<div className={headerStyle.mainNav}>
					{
						navElements.map(nav => (
							<Link to={nav.link}>
								{nav.name}
							</Link>
						))
					}
				</div>
			</div>
		</header>
	)
	
}

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
}

export default Header
