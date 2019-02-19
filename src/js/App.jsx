import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReactGA from "react-ga";

import "../css/style.scss";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Wiki from "./pages/Wiki";
import Music from "./pages/Music";

export default class App extends Component {
	constructor(props) {
		super(props);

		ReactGA.initialize("UA-134609528-1");
		ReactGA.pageview(window.location.pathname + window.location.search);
	}

	render() {
		return (
			<Router>
				<div className="app-container">
					<Nav />
					<main>
						<div className="content-container">
							<Switch>
								<Route path="/projects" component={Projects} />
								<Route path="/wiki" component={Wiki} />
								<Route path="/music" component={Music} />
								<Route path="/" component={Home} />
							</Switch>
						</div>
						<Footer />
					</main>
				</div>
			</Router>
		);
	}
}
