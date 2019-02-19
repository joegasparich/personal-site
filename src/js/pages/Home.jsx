import React, { Component } from "react";

import cv from "../../resources/CV2019.pdf";
import joeImage from "../../resources/joe.jpg";
import SocialMedia from "../components/SocialMedia";

export default class Home extends Component {
	render() {
		return (
			<div id="home">
				<section id="bio">
					<img id="bio-pic" className="only-s" src={joeImage} alt="Joe Gasparich" />
					<h1>Who Am I?</h1>
					<p>
						I am an aspiring full stack developer who has an interest in all things JavaScript. I began programming at 13, creating games using GameMaker and later Unity. I learned Java at
						highschool and later at university, which introduced me to OO concepts. I majored in computer science and minored in information science at the University of Otago, and
						graduated in 2017. I recently picked up React, which has quickly grown into an interest in web dev and the MERN stack.
					</p>
					<p>I'm also a huge fan of listening to and playing music of all genres. I play the drums, guitar, and bass, and have recently picked up the trumpet.</p>
					<div className="only-s">
						<SocialMedia />
					</div>
				</section>
				<hr />
				<div id="cv">
					<a href={cv} className="center">
						Download a PDF version of my CV
					</a>
				</div>
				<div className="row-m">
					<div className="col-8-m">
						<div className="container">
							<section>
								<h1>Experience</h1>
								<ul className="experience">
									<li>
										<h3>Fusion5</h3>
										<p>
											<i>March 2018 - Current</i>
										</p>
										<ul>
											<li>Front End Portal Development</li>
											<li>SharePoint customisation/configuration</li>
											<li>Powershell Scripting</li>
										</ul>
									</li>
									<li>
										<h3>Function Staff</h3>
										<p>
											<i>March 2015 - November 2015</i>
										</p>
										<ul>
											<li>Cash Register</li>
											<li>Bar Tending</li>
											<li>Wait Staff</li>
										</ul>
									</li>
									<li>
										<h3>Worldwide School of English</h3>
										<p>
											<i>April 2013 - September 2013</i>
										</p>
										<ul>
											<li>Data Entry</li>
											<li>Digital Conversions</li>
											<li>Administration Work</li>
										</ul>
									</li>
								</ul>
							</section>
							<hr />
							<section>
								<h1>Other Development Experience</h1>
								<ul className="experience">
									<li>
										<h3>Vice Versa (2018)</h3>
										<ul>
											<li>Website for a music and arts collective that I am a part of.</li>
											<li>Technologies used: React, GraphQL, MongoDB, NodeJS, Sass</li>
											<li>
												<a href="www.viceversa.nz">www.viceversa.nz</a>
											</li>
											<li>
												<a href="https://github.com/joegasparich/viceversa">Github</a>
											</li>
										</ul>
									</li>
									<li>
										<h3>Grass Roots (2016)</h3>
										<ul>
											<li>Website for a lawn mowing business started by a friend, developed with the help of another friend.</li>
											<li>Technologies used: Java (JSP)</li>
											<li>Site is not currently available as the business is no longer active</li>
											<li>
												<a href="https://github.com/roconnorr/grassroots">Github</a>
											</li>
										</ul>
									</li>
								</ul>
							</section>
							<hr />
							<section>
								<h1>Skills</h1>
								<ul className="experience">
									<li>
										<h3>Programming/Web Development</h3>
										<ul>
											<li>HTML, CSS, JavaScript, SQL, React, Typescript, Sass, MongoDB, GraphQL, NodeJS, jQuery</li>
											<li>Webpack, Babel, npm, Yarn</li>
											<li>Java, C#, Powershell, Python, Lua</li>
										</ul>
										<h3>Software</h3>
										<ul>
											<li>Photoshop, Illustrator, InDesign, Office, Git</li>
										</ul>
										<h3>Personal Skills</h3>
										<ul>
											<li>Excellent problem solving</li>
											<li>Can pick up new technologies very quickly</li>
											<li>Able to work in a team effectively</li>
											<li>Always keen to learn</li>
										</ul>
									</li>
								</ul>
							</section>
						</div>
					</div>
					<div className="col-4-m">
						<div className="container">
							<hr className="only-s" />
							<section>
								<h1>Education</h1>
								<h3>University of Auckland 2015</h3>
								<h3>University of Otago 2016 - 2017</h3>
								<p>Bachelor of Science</p>
								<ul>
									<li>Majoring in Computer Science</li>
									<li>Minoring in Information Science</li>
								</ul>
								<p>Microsoft Exam 70-480:Programming in HTML5 with JavaScript and CSS3</p>
							</section>
							<hr />
							<section>
								<h1>Interests</h1>
								<h3>Music</h3>
								<p>I’ve been playing drums for 11 years and play in at least two bands. I also enjoy listening to music of a wide variety of genres</p>
								<h3>Web Development/Design</h3>
								<p>
									I’ve made a few websites for friends in the past and am constantly tinkering with the latest technologies. While I wouldn’t call myself an experienced graphic
									designer, I do have an eye for what works and what doesn’t.
								</p>
								<h3>Game Development</h3>
								<p>I enjoy developing games in my spare time, I thoroughly enjoy the process of moving from a concept all the way to a fully realised game.</p>
							</section>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
