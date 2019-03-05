import React, { Component } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox } from "@fortawesome/free-solid-svg-icons/faBox";
import { faGlobe } from "@fortawesome/free-solid-svg-icons/faGlobe";
import { faMusic } from "@fortawesome/free-solid-svg-icons/faMusic";

import joeImage from "../../resources/joe.jpg";
import SocialMedia from "./SocialMedia";

export default class Nav extends Component {
	render() {
		return (
			<div className="nav">
				<img id="joe" src={joeImage} alt="Joe" />
				<h1>
					<Link to="/">Joe Gasparich</Link>
				</h1>
				<div id="links">
					<Link id="link-home" to="/">
						<button className={"nav-item " + (window.location.pathname === "/" && "selected")}>
							<span>Home</span>
						</button>
					</Link>
					<Link id="link-projects" to="/projects">
						<button className={"nav-item " + (window.location.pathname.indexOf("projects") >= 0 && "selected")}>
							<FontAwesomeIcon icon={faBox} />
							<span>Projects</span>
						</button>
					</Link>
					<Link id="link-wiki" to="/wiki">
						<button className={"nav-item " + (window.location.pathname.indexOf("wiki") >= 0 && "selected")}>
							<FontAwesomeIcon icon={faGlobe} />
							<span>Wiki</span>
						</button>
					</Link>
					<Link id="link-music" to="/music">
						<button className={"nav-item " + (window.location.pathname.indexOf("music") >= 0 && "selected")}>
							<FontAwesomeIcon icon={faMusic} />
							<span>Music</span>
						</button>
					</Link>
				</div>
				<div id="email">
					<p>
						Contact me: <a href="mailto: joe.gasparich@gmail.com">joe.gasparich@gmail.com</a>
					</p>
				</div>
				<SocialMedia />
			</div>
		);
	}
}
