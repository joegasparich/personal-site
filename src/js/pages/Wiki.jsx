import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

import PageNav from "../components/PageNav";
import WikiHomePage from "./Wiki/WikiHomePage";
import JavaScriptPage from "./Wiki/JavaScriptPage";
import CssPage from "./Wiki/CssPage";
import GitPage from "./Wiki/GitPage";
import MongoDBPage from "./Wiki/MongoDBPage";

export const wikiPages = [
	{
		title: "JavaScript",
		location: "/wiki/js",
		component: JavaScriptPage
	},
	{
		title: "Css",
		location: "/wiki/css",
		component: CssPage
	},
	{
		title: "Git",
		location: "/wiki/git",
		component: GitPage
	},
	{
		title: "MongoDB",
		location: "/wiki/mongodb",
		component: MongoDBPage
	}
];

export default class Wiki extends Component {
	render() {
		return (
			<div id="wiki">
				<h1 className="link-title">
					<Link to="/wiki">Wiki</Link>
				</h1>

				<Route exact path="/wiki" component={WikiHomePage} />

				<PageNav pages={wikiPages} path="/wiki" columns={5} hideButtons />
			</div>
		);
	}
}
