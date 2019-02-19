import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";

export default class SocialMedia extends Component {
	render() {
		return (
			<div id="social-media">
				<a href="https://www.facebook.com/joe.gasparich.1" className="icon">
					<FontAwesomeIcon icon={faFacebook} />
				</a>
				<a href="https://github.com/joegasparich" className="icon">
					<FontAwesomeIcon icon={faGithub} />
				</a>
				<a href="https://www.linkedin.com/in/joe-gasparich/" className="icon">
					<FontAwesomeIcon icon={faLinkedin} />
				</a>
			</div>
		);
	}
}
