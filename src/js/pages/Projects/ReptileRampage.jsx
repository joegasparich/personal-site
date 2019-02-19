import React, { Component } from "react";

import rrImage from "../../../resources/rr2.png";

export default class ReptileRampage extends Component {
	render() {
		return (
			<div>
				<h2>Reptile Rampage</h2>
				<p>Reptile Rampage was a group project for a game development paper at the University of Otago. It is a top-down shooter developed in Unity.</p>
				<p>
					The full game development process from idea to prototype to working game to testing and QA was completed in 6 weeks which was a major challenge, especially as the other members of
					the group had no experience using Unity.
				</p>
				<p>
					You can find the game on the university site <a href="http://www.cs.otago.ac.nz/coursework/cosc360/game-projects-reptilerampage.php">here</a>, and the GitHub repository{" "}
					<a href="https://github.com/roconnorr/reptilerampage">here</a>.
				</p>
				<img src={rrImage} alt="Screenshot of Reptile Rampage" width="100%" />
			</div>
		);
	}
}
