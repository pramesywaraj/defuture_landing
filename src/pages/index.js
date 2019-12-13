import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import indexStyle from './styling/index.module.scss'

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<section className={indexStyle.cover}>
			<div className={indexStyle.title}>
				<h1>Genggam Dunia Digital Bersama <font>Kami !</font></h1>
				<p>Solusi untuk mengembangkan bisnis Anda</p>
			</div>
			{/* <img className={indexStyle.centeredImage} src={require('../assets/character_1.svg')} alt="Defuture Mascot"/> */}
		</section>
		<section className={indexStyle.about}>
			<div>
				<h1>Defuture Hadir!</h1>
			</div>
		</section>
	</Layout>
)

export default IndexPage
