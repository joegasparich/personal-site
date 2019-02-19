import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

export default class PageNav extends Component {
	render() {
		const buttons = () => {
			return (
				<div className="center-elements">
					{this.props.pages.map(page => {
						return (
							<Link key={page.title} to={page.location}>
								<button className="header-button" variant="contained" color="primary">
									{page.title}
								</button>
							</Link>
						);
					})}
				</div>
			);
		};

		const routes = this.props.pages.map(page => <Route key={page.title} path={page.location} component={page.component} />);

		const navHome = () => {
			const width = 100 / (this.props.columns || 3) - 2;

			return (
				<div className="center-elements">
					{this.props.pages.map(page => {
						return (
							<div key={page.title} className={"square-button " + (page.image != null && "square-image")} style={{ width: width + "%" }}>
								<Link to={page.location}>
									{page.image && <img src={page.image} alt={page.title} />}
									{!page.image && <p>{page.title}</p>}
								</Link>
							</div>
						);
					})}
				</div>
			);
		};

		return (
			<div className="page-nav">
				{!this.props.hideButtons && <Route path={this.props.path + "/**"} component={buttons} />}
				<Route exact path={this.props.path + "/"} component={navHome} />
				{routes}
			</div>
		);
	}
}
