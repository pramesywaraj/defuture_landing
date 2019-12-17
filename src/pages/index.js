import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import indexStyle from './styling/index.module.scss'

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		{/* Tagline */}
		<section className={indexStyle.cover}>
			<div className={indexStyle.title}>
				<h1>Genggam Dunia Digital Bersama <font>Kami !</font></h1>
				<p>Solusi untuk mengembangkan bisnis Anda</p>
			</div>
		</section>
		{/* About */}
		<section className={indexStyle.about}>
			<div className={indexStyle.aboutTitle}>
				<h1>Defuture Hadir!</h1>
				<p>Kami hadir dengan pelayanan terbaik kami, dan <font>mengapa harus kami ?</font></p>
			</div>
			<div className={indexStyle.aboutContainer}>
				<div className={indexStyle.aboutBox}>
					<div className={indexStyle.card}>
						<img className={indexStyle.cardImg} src={require('../assets/Layer2-1.png')}/>
					</div>
					<p className={indexStyle.highlighted}>Kami selalu memberikan saran!</p>
					<p>Kami tidak ingin pelanggan kami memiliki kendala pada saat ingin mewujudkan ide hebatnya.</p>
				</div>
				<div className={indexStyle.aboutBox}>
					<div className={indexStyle.card}>
						<img className={indexStyle.cardImg} src={require('../assets/Layer2-2.png')}/>
					</div>
					<p className={indexStyle.highlighted}>Oh tidak, ada perubahan?!</p>
					<p>Tenang, kami siap dengan segala perubahan apabila tidak sesuai dan langsung mengerjakannya.</p>
				</div>
				<div className={indexStyle.aboutBox}>
					<div className={indexStyle.card}>
						<img className={indexStyle.cardImg} src={require('../assets/Layer2.png')}/>
					</div>
					<p className={indexStyle.highlighted}>Para Client percaya dengan kami.</p>
					<p>Kami telah membantu Client kami dalam mewujudkan idenya bersama kami. Apakah Anda tahu? Mereka puas!</p>
				</div>
			</div>
			<div className={indexStyle.halfServices}></div>
		</section>
		{/* Services */}
		<section className={indexStyle.services}>
			<div className={indexStyle.servicesTitle}>
				Our Services<br></br>
			</div>
			<div className={indexStyle.servicesContainer}>
				<div className={indexStyle.servicesBox}>
					{/* WEB/APP */}
					<div className={indexStyle.servicesCard}>
						<div className={indexStyle.cardPicture}>
							<img className={indexStyle.cardImg} src={require('../assets/Group16-2.png')}/>
						</div>
						<div className={indexStyle.cardTitle}>
							Web / App Development
						</div>
						<div  className={indexStyle.cardDescription}>
							Kami dapat membantu Anda untuk membuat website atau aplikasi yang Anda inginkan.
						</div>
					</div>
					{/* AI */}
					<div className={indexStyle.servicesCard}>
						<div className={indexStyle.cardPicture}>
							<img className={indexStyle.cardImg} src={require('../assets/Group18-2.png')}/>
						</div>
						<div className={indexStyle.cardTitle}>
							Artificial Intelligence
						</div>
						<div className={indexStyle.cardDescription}>
						Anda ingin menjalankan bisnis secara otomatis? Biarkan lah komputer mempelajarinya.
						</div>
					</div>
					{/* IOT */}
					<div className={indexStyle.servicesCard}>
						<div className={indexStyle.cardPicture}>
							<img className={indexStyle.cardImg} src={require('../assets/Group19-2.png')}/>
						</div>
						<div className={indexStyle.cardTitle}>
							Internet of Things
						</div>
						<div className={indexStyle.cardDescription}>
							Anda membutuhkan perangkat yang pintar dalam kegiatan Anda? Kami juga bisa mewujudkannya.
						</div>
					</div>
					{/* SOFTWARE CONSULTATION */}
					<div className={indexStyle.servicesCard}>
						<div className={indexStyle.cardPicture}>
							<img className={indexStyle.cardImg} src={require('../assets/Group21-2.png')}/>
						</div>
						<div className={indexStyle.cardTitle}>
							Software Consultation
						</div>
						<div  className={indexStyle.cardDescription}>
						Anda membutuhkan saran?
						</div>
					</div>
				</div>
			</div>
		</section>
		{/* Our client */}
		{/* <section className={indexStyle.ourclient}>
			<div className={indexStyle.title}>

			</div>
			<div className={indexStyle.ourclientLogo}>
				
			</div>
			
		</section> */}
		{/* Contact us */}
		<section>
				{/* picture left */}
			<div className={indexStyle.contactus}>
				<div className={indexStyle.contactusPicture}>
				<p className={indexStyle.contactusTitle}>Tertarik untuk mewujudkannya bersama kami? Ayo segera hubungi kami!</p>
					<img height="80%" width="80%" className={indexStyle.cardImg} src={require('../assets/Group13.png')}/>
 				</div>
				{/* form right */}
				<div className={indexStyle.contactusForm}>
					<form action="/submit">
						<label>Your name</label><br></br>
						<input className={indexStyle.inputField} type="text" name="your_name"></input><br></br><br></br>
						
						<label>Email</label><br></br>
						<input className={indexStyle.inputField} type="email" name="email"></input><br></br><br></br>

						<label>Phone number</label><br></br>
						<input className={indexStyle.inputField} type="number" name="phone_number"></input><br></br><br></br>

						<label>Company name</label><br></br>
						<input className={indexStyle.inputField} type="text" name="company_name"></input><br></br><br></br>

						<label>Enjoy to type your message</label><br></br>
						<textarea className={indexStyle.inputField} col="10" type="text" name="message"></textarea><br></br>

						<input className={indexStyle.btn} type="submit" value="Submit"></input>
					</form>
				</div>
			</div>
		</section>
	</Layout>
)

export default IndexPage