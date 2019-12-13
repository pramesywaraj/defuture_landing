import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import indexStyle from './styling/index.module.scss'

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<div className={indexStyle.cover}>
			<h1>Genggam Dunia Digital Bersama Kami!</h1>
			{/* <img className={indexStyle.centeredImage} src={require('../assets/character_1.svg')} alt="Defuture Mascot"/> */}
		</div>
	</Layout>
)

export default IndexPage
