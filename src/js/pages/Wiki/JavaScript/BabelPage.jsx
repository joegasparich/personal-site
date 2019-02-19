import React, { Component } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";

export default class NodePage extends Component {
	componentDidMount() {
		Prism.highlightAll();
	}

	render() {
		return (
			<div>
				<h2>Babel</h2>
				<p>Babel is a JavaScript compiler, that can convert EMCAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.</p>
				<p>For example:</p>
				<pre>
					<code className="language-js">{`// Babel Input: ES2015 arrow function\n[1, 2, 3].map((n) => n + 1);\n\n// Babel Output: ES5 equivalent\n[1, 2, 3].map(function(n) {\n  return n + 1;\n});`}</code>
				</pre>
				<hr />
				<section>
					<h3>Usage</h3>
					<code>yarn add -D @babel/core @babel/cli</code>
					<code>yarn add @babel/polyfill</code>
					<p>
						<i>Preset</i>
					</p>
					<code>yarn add -D @babel/preset-env</code>
					<p>
						<b>.babelrc</b>
					</p>
					<pre>
						<code className="language-js">{`{\n	"presets": "@babel/preset-env"\n}`}</code>
					</pre>
					<h4>React</h4>
					<p>Babel can also convert JSX syntax</p>
					<code>yarn add -D @babel/preset-react</code>
					<p>
						<b>.babelrc</b>
					</p>
					<pre>
						<code className="language-js">{`{\n	"presets": ["@babel/preset-env", "@babel/preset-react"]\n}`}</code>
					</pre>
				</section>
			</div>
		);
	}
}
