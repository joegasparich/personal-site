import React, { Component } from "react";

import PageNav from "../../components/PageNav";
import SassPage from "./Css/SassPage";
import FlexboxPage from "./Css/FlexboxPage";

export const cssPages = [
	{
		title: "Sass",
		location: "/wiki/css/sass",
		component: SassPage
	},
	{
		title: "Flexbox",
		location: "/wiki/css/flexbox",
		component: FlexboxPage
	}
];
export default class CssPage extends Component {
	render() {
		return (
			<div>
				<PageNav pages={cssPages} path="/wiki/css" columns={5} />
			</div>
		);
	}
}
