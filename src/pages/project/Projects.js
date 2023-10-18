import './projects.css';
import Clock from '../../components/clock/clock';
import { NavLink } from 'react-router-dom';
import data from '../../data/projects.json'
import Button from '../../components/button/button'
import { Link } from 'react-router-dom';

function Projects() {
	console.clear()
	async function siteNone() {
		for (let d in data) {
			if (await data[d].site === null) {
				const siteNone = document.querySelector(`#${data[d].id} .site`)
				siteNone.style.display = 'none'
			}
		}
	}
	siteNone()
	return (
	    <div className="App">
			<Clock />
			<NavLink to='/'>
				<img src={require('../../img/logo/arrow.webp')} alt='icon arrow' className='arrow'/>
			</NavLink>
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
			<p>More projects in progress...</p>
			</section>
		</div>
	  );
	}

export default Projects;