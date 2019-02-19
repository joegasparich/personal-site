import React, { Component } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-sass";
import "prismjs/themes/prism-okaidia.css";

export default class SassPage extends Component {
	componentDidMount() {
		Prism.highlightAll();
	}

	render() {
		return (
			<div>
				<h2>Sass</h2>
				<a href="https://sass-lang/com/">Sass: Syntactically Awesome Style Sheets</a>
				<p>Sass is a css preprocesser which adds additional syntax to css and compiles into css.</p>
				<p>We can add a Sass loader to our webpack config with:</p>
				<pre>
					<code className="language-sass">{`{\n  test: /\.scss$/,\n  use: ["style-loader", "css-loader", "sass-loader", "import-glob-loader"]\n},`}</code>
				</pre>
				<hr />
				<section>
					<h3>Variables</h3>
					<p>Sass allows for creating variables within your stylesheet. This is extremely convenient for things like theme colours and fonts.</p>
					<pre>
						<code className="language-sass">{`$primary-color: #ff0000;\n\n.box {\n  background-color: $primary-color;\n}`}</code>
					</pre>
				</section>
				<hr />
				<section>
					<h3>Nesting</h3>
					<p>When using sass, you can nest selectors within one another, which can help to translate the html hierarchy into css.</p>
					<p>
						<i>Note that it is considered bad practice to over-nest because it can create over-qualified css that can prove hard to maintain.</i>
					</p>
				</section>
				<hr />
				<section>
					<h3>Import</h3>
					<p>Sass allows you to import other files into your .scss files. This allows for modularity while still only requiring one stylesheet import.</p>
					<pre>
						<code className="language-sass">{`@import "variables.scss"`}</code>
					</pre>
					<p>
						<code>import-glob-loader</code> allows us to import all files within a directory like so:
					</p>
					<pre>
						<code className="language-sass">{`@import "vars/*";`}</code>
					</pre>
				</section>
			</div>
		);
	}
}
