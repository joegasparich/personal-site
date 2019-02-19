import React, { Component } from "react";

import PageNav from "../../components/PageNav";
import NodePage from "./JavaScript/NodePage";
import ExpressPage from "./JavaScript/ExpressPage";
import BabelPage from "./JavaScript/BabelPage";
import WebpackPage from "./JavaScript/WebpackPage";
import ReactPage from "./JavaScript/ReactPage";
import GraphQLPage from "./JavaScript/GraphQLPage";

export const javascriptPages = [
	{
		title: "Node",
		location: "/wiki/js/node",
		component: NodePage
	},
	{
		title: "Express",
		location: "/wiki/js/express",
		component: ExpressPage
	},
	{
		title: "Babel",
		location: "/wiki/js/babel",
		component: BabelPage
	},
	{
		title: "Webpack",
		location: "/wiki/js/webpack",
		component: WebpackPage
	},
	{
		title: "React",
		location: "/wiki/js/react",
		component: ReactPage
	},
	{
		title: "GraphQL",
		location: "/wiki/js/graphql",
		component: GraphQLPage
	}
];

export default class JavaScriptPage extends Component {
	render() {
		return (
			<div>
				<PageNav pages={javascriptPages} path="/wiki/js" columns={5} />
			</div>
		);
	}
}
