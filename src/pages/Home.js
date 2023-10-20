import React, { useEffect } from "react";
import '../App.css';
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import Clock from '../components/clock/clock';
import Button from '../components/button/button';

function Home() {

  function lightDark() {
    var body = document.body
    var prt = document.querySelector(".presentation")
    var ctc = document.querySelector(".contact")
    var prj = document.querySelector(".projects")
    var lgt = document.querySelector(".languagesTools")
    var crt = document.querySelector(".copyright")
    var li = document.querySelectorAll("li")
    var btn = document.querySelectorAll(".btn")
    var liC = document.querySelectorAll(".contact li")

    body.classList.toggle("light-mode")
    prt.classList.toggle("presentation-light")
    ctc.classList.toggle("contact-light")
    prj.classList.toggle("projects-light")
    lgt.classList.toggle("languagesTools-light")
    crt.classList.toggle("copyright-light")
    
    for(var a=0; a < li.length; a++) {
      li[a].classList.toggle("li-light")
    }

    for(var i=0; i < btn.length; i++) {
      btn[i].classList.toggle("light-btn")
    }

    for(var p=0; a < liC.length; p++) {
      liC[p].classList.toggle(".contact li")
    }
  }

  useEffect(() => {

    var body = document.body
    var prt = document.querySelector(".presentation")
    var ctc = document.querySelector(".contact")
    var prj = document.querySelector(".projects")
    var lgt = document.querySelector(".languagesTools")
    var crt = document.querySelector(".copyright")
    var li = document.querySelectorAll("li")
    var btn = document.querySelectorAll(".btn")

		if (body.className === 'light-mode') {
      body.classList.toggle("light-mode")
      prt.classList.toggle("presentation-light")
      ctc.classList.toggle("contact-light")
      prj.classList.toggle("projects-light")
      lgt.classList.toggle("languagesTools-light")
      crt.classList.toggle("copyright-light")
      
      for(var a=0; a < li.length; a++) {
        li[a].classList.toggle("li-light")
      }

      for(var i=0; i < btn.length; i++) {
        btn[i].classList.toggle("light-btn")
      }
		}
	})
  console.log('There is nothing to see here, but you should click on "welcome"')
  return (
      <div className="App">
        <div className="loader">
  		    <p id="c1">C</p>
  		    <p id="k1">K</p>
  	    </div>
        <section className="container">
          <div className="presentation" role="presentation">
            <div className="firstPart">
              <div className="text">
                <p onClick={lightDark}>Welcome</p>
                <h1 itemProp="givenName familyName">Kilian Coutouzis</h1>
                <h2 itemProp="jobTitle">Developer Web - FrontEnd</h2>
                <p>FullStack in progress...</p>
              </div>
              <div className="button">
                <Link to='https://github.com/epouvaantail'>
                  <Button 
                    props={{
                      src: require("../img/logo/github-mark-white.webp"),
                      title: "My GitHub",
                    }}
                  />
                </Link>
                <Link to='https://www.linkedin.com/in/kilian-coutouzis-b21288295/'>
                  <Button 
                    props={{
                      src: require("../img/logo/LinkedIn.webp"),
                      title: "LinkedIn",
                    }}
                  />
                </Link>
                <Link to='mailto:coutouzis.kilian@gmail.com'>
                  <Button 
                    props={{
                      src: require("../img/logo/email.webp"),
                      title: "Email",
                    }}
                  />
                </Link>
              </div>
            </div>
            <div className="secondPart">
              <Clock />
            </div>
          </div>
          <div className="languagesTools">
            <h3>Languages and Tools</h3>
              <article>
                <p>Languages and Frameworks</p>
                <ul>
  					      <li>HTML5</li>
  						    <li>CSS3</li>
  						    <li>Sass</li>
  						    <li>JavaScript</li>
  						    <li>TypeCsript</li>
  						    <li>React</li>
  						    <li>ReactRouter</li>
  						    <li>Redux</li>
  						    <li>NodeJS</li>
  						    <li>NextJS</li>
                  <li>Angular</li>
                  <li>PHP</li>
  					    </ul>
              </article>
              <article>
                <p>Tools</p>
                <ul>
  					      <li>Git/Github</li>
  					      <li>MongoDB</li>
  					      <li>Swagger</li>
  					      <li>Notion</li>
  					      <li>Figma</li>
  					      <li>Firebase</li>
  					      <li>Vercel</li>
  					      <li>npm/pnpm</li>
  					      <li>Schema.org</li>
  					      <li>Wave</li>
  					      <li>GIMP</li>
  					    </ul>
              </article>
          </div>
          <div className="contact">
            <p>Contact</p>
            <h4 itemProp="email">coutouzis.kilian@gmail.com</h4>
            <p>Socials</p>
            <ul>
              <li>
                <a href="https://www.linkedin.com/in/kilian-coutouzis-b21288295/">LinkedIn</a>
                </li>
                <li>
                  <a href="https://github.com/epouvaantail">GitHub</a>
                </li>
            </ul>
            <p>Education</p>
            <ul>
              <li>
                <h4>Formation - Intégrator Web (RNCP level 5)</h4>
                <p>OpenClassrooms</p>
              </li>
              <li>
                <h4>Baccalauréat général</h4>
                <p>Mathematics / Computer Science</p>
              </li>
            </ul>
          </div>
          <NavLink to='/Projects'>
          <div className="projects">
              <section className='topPart'>
                  <div className='topLeft'>
                    <h2>Projects</h2>
                    <h3>Here the lasts projects I work on</h3>
                    <p>Click to see them !</p>
                  </div>
                  <div className='topRight'>
                    <img src={require('../img/logo/arrow.webp')} alt='logo arrow' id='arrow'/>
                  </div>
              </section>
              <hr/>
              <section className='bottomPart'>
                <div className='frontend'>
                  <h4>FrontEnd</h4>
                  <p>Website and web application development</p>
                </div>
                <div className='debug'>
                    <h4>Debug</h4>
                    <p>Finding and resolving bugs in websites and web applications</p>
                </div>
                <div className='seo'>
                    <h4>SEO</h4>
                    <p>Search Engine Optimization, improvement</p>
                </div>
              </section>
          </div>
          </NavLink>
          <div className="copyright">
            <h3>© 2023 Kilian COUTOUZIS, All Right Reserved.</h3>
          </div>
        </section>
      </div>
    );
}

export default Home;