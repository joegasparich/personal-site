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
				<h2>Webpack</h2>
				<p>Webpack is an asset bundler and compiler which creates a dependency graph of modules in your application, bundles and compiles them, and distributes them to a directory.</p>
				<p>
					Webpack is configured through the <b>webpack.config.js</b> file
				</p>
				<hr />
				<section>
					<h3>Entry</h3>
					<p>An entry point indicates which module webpack should use to begin building its internal dependency graph.</p>
					<pre>
						<code className="language-js">{`module.exports = {\n  entry: './path/to/file.js'\n};`}</code>
					</pre>
				</section>
				<hr />
				<section>
					<h3>Output</h3>
					<p>The output property tells webpack where to emit the bundles it creates.</p>
					<pre>
						<code className="language-js">{`const path = require('path');\n\nmodule.exports = {\n  // . . .\n  output: {\n    path: path.resolve(__dirname, 'dist'),\n    filename: 'my-webpack.bundle.js'\n  }\n};`}</code>
					</pre>
				</section>
				<hr />
				<section>
					<h3>Loaders</h3>
					<p>Out of the box, webpack only understands JavaScript and JSON files. Loaders allow webpack to process other types of files.</p>
					<pre>
						<code className="language-js">{`module.exports = {\n	// . . .\n	module: {\n		rules: [\n			{ test: /\.txt$/, use: 'raw-loader' }\n		]\n	}\n};`}</code>
					</pre>
				</section>
				<hr />
				<section>
					<h3>Plugins</h3>
					<p>
						While loaders are used to transform certain types of modules, plugins perform a wider range of tasks like bundle optimisation, asset management, and injection of environment
						variables.
					</p>
					<pre>
						<code className="language-js">{`const HtmlWebpackPlugin = require('html-webpack-plugin');\nconst webpack = require('webpack');\n\nmodule.exports = {\n	// . . .\n	plugins: [\n		new HtmlWebpackPlugin({ template: './src/index.html' })\n	]\n};`}</code>
					</pre>
				</section>
				<hr />
				<section>
					<h3>Mode</h3>
					<p>
						By setting the mode paremeter to <code>development</code>, <code>production</code>, or <code>none</code>, you can enable webpack’s built in optimisations that correspond to
						each environment.
					</p>
					<pre>
						<code className="language-js">{`module.exports = {\n  // . . .\n  mode: 'production'\n};`}</code>
					</pre>
				</section>
				<hr />
				<section>
					<h3>Target</h3>
					<p>Setting the target lets webpack know what it should compile the code for.</p>
					<pre>
						<code className="language-js">{`module.exports = {\n  // . . .\n  target: "node",\n  // or\n  target: "web",\n};`}</code>
					</pre>
				</section>
				<hr />
				<section>
					<h3>Creating Multiple Entry/Outputs</h3>
					<p>
						You can pass the <code>module.exports</code> an array of configs in order to create multiple bundles.
					</p>
					<p>You would usually have a common config which contains shared properties.</p>
					<pre>
						<code className="language-js">{`const commonConfig = {\n  mode: "development",\n  module: {\n    // . . .\n  },\n	resolve: {\n		extensions: [".js", ".jsx"] // common extensions\n	}\n}\n\nconst webConfig = Object.assign({}, commonConfig, {\n  target: "web",\n  name: "web",\n  entry: "path/to/entry.js",\n  output: {\n    path: path.resolve(__dirname + "/dist/"),\n    filename: "[name].bundle.js"\n  }\n});\n\nconst serverConfig = Object.assign({}, commonConfig, {\n  target: "node",\n  name: "server",\n  entry: "path/to/entry.js",\n  output: {\n    path: path.resolve(__dirname + "/dist/"),\n    filename: "[name].bundle.js"\n  },\n	externals: [nodeExternals()]\n});`}</code>
					</pre>
				</section>
			</div>
		);
	}
}
