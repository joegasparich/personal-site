import React, { Component } from "react";
import { Link } from "react-router-dom";

import PageNav from "../components/PageNav";
import ViceVersa from "./Projects/ViceVersa";

import vvImage from "../../resources/vv.jpg";
import rrImage from "../../resources/rr.png";
import ReptileRampage from "./Projects/ReptileRampage";

export default class Projects extends Component {
	render() {
		const pages = [
			{
				title: "Vice Versa",
				location: "/projects/viceversa",
				component: ViceVersa,
				image: vvImage
			},
			{
				title: "Reptile Rampage",
				location: "/projects/reptilerampage",
				component: ReptileRampage,
				image: rrImage
			}
		];

		return (
			<div>
				<h1 className="link-title">
					<Link to="/projects">Projects</Link>
				</h1>
				<PageNav pages={pages} path="/projects" />
			</div>
		);
	}
}
