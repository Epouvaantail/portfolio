import React, { useEffect } from "react";
import './projects.css';
import Clock from '../../components/clock/clock';
import { NavLink } from 'react-router-dom';
import data from '../../data/projects.json'
import Button from '../../components/button/button'
import { Link } from 'react-router-dom';

function Projects() {

	async function siteNone() {
		for (let d in data) {
			if (await data[d].site === null) {
				const siteNone = document.querySelector(`#${data[d].id} .site`)
				siteNone.style.display = 'none'
			}
		}
	}
	siteNone()

	useEffect(() => {
		const clock = document.querySelector(".clock")
		clock.style.display = "none"

		var body = document.body
		var modal = document.querySelector(".modal")
		var chevron = document.querySelector(".modal img")
		var modalp = document.querySelector(".modal p")
		var pjt = document.querySelectorAll('.project')
		var arrow = document.querySelector('.arrow')
		var btn = document.querySelectorAll('.btn')

		if (body.className === 'light-mode') {
			arrow.style.filter = ('invert(0%)')
			modal.classList.toggle("modal-light")
			chevron.style.filter = ('invert(0)')
			for(var i=0; i < btn.length; i++) {
				btn[i].classList.toggle("light-btn")
			}
			for(var j=0; j < pjt.length; j++) {
				pjt[j].classList.toggle("project-light")
			}
		}

		var trad = document.querySelectorAll(".topLeft p")
		trad.forEach(function(check){
			check.addEventListener('click', checkIndex)
		})

		function checkIndex(event){
			// console.log( Array.from(trad).indexOf(event.target) );
			var position = Array.from(trad).indexOf(event.target);
			var datDesc = data.map((p) => p.description)
			var datTrad = data.map((p) => p.traduction)
			// console.log(datTrad[position])
			if (trad[position].innerHTML === datDesc[position] ) {
				trad[position].innerHTML = datTrad[position]
			}
			else if ( trad[position].innerHTML === datTrad[position] ) {
				trad[position].innerHTML = datDesc[position]
			}
		}

		chevron.addEventListener('click' ,disapear)
		function disapear() {
			if (chevron.style.transform === "rotate(180deg)") {
				chevron.style.transform = "rotate(0deg)"
				modalp.style.display = "none"
			}
			else {
				chevron.style.transform = "rotate(180deg)"
				modalp.style.display = "inline"
			}

		}
	})

	console.clear()

	return (
	    <div className="App">
			<Clock />
			<NavLink to='/'>
				<img src={require('../../img/logo/arrow.webp')} alt='icon arrow' className='arrow'/>
			</NavLink>
			<section className="modal">
				<p>For a French translation, click on the description !</p>
				<img src={require("../../img/logo/chevron.webp")} alt="chevron"/>
			</section>
			<section id='projects'>
			{data.map((p) => {
				return (
					<article key={p.id} className="project" id={p.id}>
						<section className='topSection'>
							<section className='topLeft'>
								<h2>{p.title}</h2>
								<p>{p.description}</p>
							</section>
	              			<img src={require( `../../img/${p.imageUrl}`)} alt={p.title}/>
						</section>
						<hr/>
						<section className='bottomSection'>
							<p>{p.languages}</p>
							<div className='btnRight'>
								<Link to={p.code}>
									<Button
										props={{
											src: require("../../img/logo/code.webp"),
											title: "Code",
										  }}
									/>
								</Link>
								<Link className="site" to={p.site}>
									<Button
										props={{
											src: require("../../img/logo/web.webp"),
											title: "Site",
										  }}
									/>
								</Link>
							</div>
						</section>
	            	</article>
				)
			})}
			</section>
			<p className="more">More projects in progress...</p>
		</div>
	  );
	}

export default Projects;