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
		</section>
		<section className={indexStyle.about}>
			<div className={indexStyle.aboutTitle}>
				<h1>Defuture Hadir!</h1>
				<p>Kami hadir dengan pelayanan terbaik kami, dan <font>mengapa harus kami ?</font></p>
			</div>
			<div className={indexStyle.aboutContainer}>
				<div className={indexStyle.aboutBox}>
					<div className={indexStyle.card}></div>
					<p>Kami selalu memberikan saran!</p>
					<p>Kami tidak ingin pelanggan kami memiliki kendala pada saat ingin mewujudkan ide hebatnya.</p>
				</div>
				<div className={indexStyle.aboutBox}>
					<div className={indexStyle.card}></div>
					<p>Oh tidak, ada perubahan?!</p>
					<p>Tenang, kami siap dengan segala perubahan apabila tidak sesuai dan langsung mengerjakannya.</p>
				</div>
				<div className={indexStyle.aboutBox}>
					<div className={indexStyle.card}></div>
					<p>Para Client percaya dengan kami.</p>
					<p>Kami telah membantu Client kami dalam mewujudkan idenya bersama kami. Apakah Anda tahu? Mereka puas!</p>
				</div>
			</div>
		</section>
	</Layout>
)

export default IndexPage
