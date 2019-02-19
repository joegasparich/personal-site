import React, { Component } from "react";

import snitchImage from "../../resources/snitch.jpg";
import melanieImage from "../../resources/melanie.jpg";
import bonnieImage from "../../resources/bonnie.jpg";
import awipImage from "../../resources/awip.jpg";
import skatelakeImage from "../../resources/skatelake.jpg";

export default class Music extends Component {
	render() {
		return (
			<div id="music">
				<article id="snitch-jimmy">
					<h1>Snitch Jimmy</h1>
					<div className="row-l">
						<div className="col-4-l">
							<div className="container">
								<img id="snitch-image" src={snitchImage} alt="Snitch Jimmy" />
							</div>
						</div>
						<div className="col-8-l">
							<div className="container">
								<p>Alternative/Punk/Ska band that I play drums in. We've recently released our first EP with another in the works.</p>
								<iframe
									id="bandcamp"
									className="center"
									src="https://bandcamp.com/EmbeddedPlayer/album=19232984/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true/"
									seamless
								>
									<a href="http://snitchjimmy.bandcamp.com/album/sauce">Sauce by Snitch Jimmy</a>
								</iframe>
							</div>
						</div>
					</div>
					<ul id="links">
						<li>
							<a href="https://www.facebook.com/snitchjimmy">Facebook</a>
						</li>
						<li>
							<a href="https://www.instagram.com/snitchjimmy/">Instagram</a>
						</li>
						<li>
							<a href="https://www.viceversa.nz/artists/snitchjimmy">Website</a>
						</li>
					</ul>
				</article>
				<hr />
				<section>
					<p className="center">Other projects that I am a part of</p>
					<div className="other-bands row-m">
						<div className="col-3-m">
							<a href="https://www.viceversa.nz/artists/melanie" className="band container">
								<img src={melanieImage} alt="Melanie" />
								<h3 className="center">Melanie</h3>
								<p>Alternative/Emo band. Currently filling in as drummer.</p>
							</a>
						</div>
						<div className="col-3-m">
							<a href="https://www.facebook.com/bonniestrides/" className="band container">
								<img src={bonnieImage} alt="Bonnie Strides" />
								<h3 className="center">Bonnie Strides</h3>
								<p>Folk band, occasional live drummer</p>
							</a>
						</div>
						<div className="col-3-m">
							<a href="https://www.viceversa.nz/artists/aworkinprogress" className="band container">
								<img src={awipImage} alt="A Work in Progress" />
								<h3 className="center">A Work in Progress</h3>
								<p>Hip Hop group, occasional live drummer and producer</p>
							</a>
						</div>
						<div className="col-3-m">
							<a href="https://skatelake.bandcamp.com/releases" className="band container">
								<img src={skatelakeImage} alt="Skatelake" />
								<h3 className="center">Skatelake</h3>
								<p>Punk duo</p>
							</a>
						</div>
					</div>
				</section>
			</div>
		);
	}
}
