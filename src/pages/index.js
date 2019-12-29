import React from "react"
import { Link } from "gatsby"
import firebase from '../firebase';

import Layout from "../components/layout"
import SEO from "../components/seo"

import indexStyle from './styling/index.module.scss'

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		{/* Tagline */}
		<section className={indexStyle.cover}>
			<div className={indexStyle.title}>
				<h1>Take the world with <font>Us!</font></h1>
				<p>We can magic your business through technology</p>
			</div>
		</section>
		{/* About */}
		<section id="about" className={indexStyle.about}>
			<div className={indexStyle.aboutTitle}>
				<h1>Defuture is coming!</h1>
				<p>We come with our best services, and <font><b>why should us ?</b></font></p>
			</div>
			<div className={indexStyle.aboutContainer}>
				<div className={indexStyle.aboutBox}>
					<div className={indexStyle.card}>
						<img className={indexStyle.cardImg} src={require('../assets/Layer2-1.png')}/>
					</div>
					<p className={indexStyle.highlighted}>Solutive</p>
					<p>We want our customers to realize their business through technology.</p>
				</div>
				<div className={indexStyle.aboutBox}>
					<div className={indexStyle.card}>
						<img className={indexStyle.cardImg} src={require('../assets/Layer2-2.png')}/>
					</div>
					<p className={indexStyle.highlighted}>Responsive</p>
					<p>We are ready with customization from our customers.</p>
				</div>
				<div className={indexStyle.aboutBox}>
					<div className={indexStyle.card}>
						<img className={indexStyle.cardImg} src={require('../assets/Layer2.png')}/>
					</div>
					<p className={indexStyle.highlighted}>Trusted</p>
					<p>We have helped our clients realize their ideas with us. Do you know? They are satisfied!</p>
				</div>
			</div>
			<div className={indexStyle.halfServices}></div>
		</section>
		{/* Services */}
		<section  id="services" className={indexStyle.services}>
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
							We can help you to create the website or application that you want.
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
							Do you want to run a business automatically? Let the computer learn it.
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
							Do you need a smart device in your activities? We can also make it happen.
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
							Ask your necessary with us. We can give best solution for your business.
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
		<section id="contactus">
				{/* picture left */}
			<div className={indexStyle.contactus}>
				<div className={indexStyle.contactusPicture}>
				<p className={indexStyle.contactusTitle}>Interested to make it happen with us? Come on contact us immediately!</p>
					<img height="80%" width="80%" className={indexStyle.cardImg} src={require('../assets/Group13.png')}/>
 				</div>
				{/* form right */}
				<div className={indexStyle.contactusForm}>
					<form onSubmit={e =>{
						e.preventDefault()
						submitform(e)
					}}>
						<label>Your name</label><br></br>
						<input className={indexStyle.inputField} required type="text" name="name"></input><br></br><br></br>
						
						<label>Email</label><br></br>
						<input className={indexStyle.inputField} required type="email" name="email"></input><br></br><br></br>

						<label>Phone number</label><br></br>
						<input className={indexStyle.inputField} required type="number" name="phone_number"></input><br></br><br></br>

						<label>Company name</label><br></br>
						<input className={indexStyle.inputField} required type="text" name="company_name"></input><br></br><br></br>

						<label>Enjoy to type your message</label><br></br>
						<textarea className={indexStyle.inputFieldArea} required type="text" name="message"></textarea><br></br>

						<input className={indexStyle.btn} required type="submit" value="Submit"></input>
					</form>
				</div>
			</div>
		</section>
		{/* address */}
		<section className={indexStyle.footer}>
			<div className={indexStyle.address}>
				<h2>Office</h2>
				<p>
				Mitra Gading Villa, Jl. Kelapa Hibrida <br></br>
				Blok G1 No.03 RT : 005 / RW : 017 
				<br></br>Kelapa Gading, North Jakarta 14250
				<br></br>T : +62 21 24523331
				</p>
			</div>
		</section>
	</Layout>
)

function submitform(e) {
	const date = new Date()
	// unique_time for custom id in form_company table
	const unique_time = date.getHours()+":"+date.getMinutes()+":"+date.getDate()+":"+date.getMonth()+":"+date.getFullYear()
	// save data into firestore with table form_company
	firebase.firestore().collection('form_company').doc(unique_time).set({
		name:e.target.name.value,
		email:e.target.email.value,
		phone_number:e.target.phone_number.value,
		company_name:e.target.company_name.value,
		message:e.target.message.value,
		created_at: unique_time
		}).then(function() {
		  alert("Success! Thank you for your submission. We will contact you immediately");
		})
		.catch(function(error) {
			alert("Your submission is failed to upload. Please try again.");
		});
}
export default IndexPage