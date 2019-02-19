import React, { Component } from "react";

import vvSite from "../../../resources/vvsite.jpg";

export default class ViceVersa extends Component {
	render() {
		return (
			<div>
				<h2>Vice Versa</h2>
				<div>
					<p>
						In late 2018, a group of Auckland artists and I formed a music and arts collective called Vice Versa. Vice Versa acts as a platform for these artists to distribute their work,
						and a medium to get their news to the public.
					</p>
					<p>I offered to build a website, as I had recently begun experimenting with React, and was interested in putting what I had learned to the test.</p>
					<p>The Vice Versa site uses the full MERN stack, as well as other technologies such as GraphQL and Sass.</p>
					<p>
						You can find the site <a href="http://viceversa.nz">here</a>, and the GitHub repository <a href="https://github.com/joegasparich/viceversa">here</a>.
					</p>
					<img src={vvSite} alt="Screenshot of the Vice Versa site" width="100%" />
				</div>
			</div>
		);
	}
}
