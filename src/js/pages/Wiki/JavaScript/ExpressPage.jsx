import React, { Component } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";

export default class ExpressPage extends Component {
	componentDidMount() {
		Prism.highlightAll();
	}

	render() {
		return (
			<div>
				<h2>Express JS</h2>
				<a href="https://expressjs.com">Express</a>
				<p>
					With NodeJS, routing must be done manually, which may be error prone and insecure. Express builds upon Node reducing the boilerplate code required in routing and creating
					middleware.
				</p>
				<hr />
				<section>
					<h3>Webservers</h3>
					<p>Express dramatically reduces the code required to create a webserver.</p>
					<pre>
						<code className="language-js">{`const express = require('express');\n\nconst app = express();\n\n//Listen on port 3000\napp.listen(3000, () => {\n  console.log('Listening on port 3000');\n});`}</code>
					</pre>
					<hr />
					<h3>REST Methods</h3>
					<p>Express gives methods to easily respond to HTTP Requests.</p>
					<pre>
						<code className="language-js">{`app.get() //GET\napp.post() //POST\napp.put() //PUT\napp.delete() //DELETE`}</code>
					</pre>
				</section>
				<hr />
				<section>
					<h3>Routes</h3>
					<p>While possible in Node, Express makes it simple to create request listeners per url, i.e. a route.</p>
					<pre>
						<code className="language-js">{`app.get('/', (req, res) => {\n  res.send('Wowee');\n})\napp.get('/about', (req, res) => {\n  res.send('About');\n})`}</code>
					</pre>
					<p>
						You can send files using the <code>res.sendFile()</code> function
					</p>
					<pre>
						<code className="language-js">{`app.get('/', (req, res) => {\n  res.sendFile(path.join(__dirname, "index.html"));\n})`}</code>
					</pre>
					<h4>Parameters</h4>
					<p>Route parameters - Used for required parameters</p>
					<p>
						<i>http://site.com/api/items/3</i>
					</p>
					<pre>
						<code className="language-js">{`app.get('/api/items/:id', (req, res) => {\n  const id = req.params.id; //3\n    . . .\n})`}</code>
					</pre>
					<p>Query string parameters - Used for optional parameters</p>
					<p>
						<i>http://site.com/api/items?sortBy=name</i>
					</p>
					<pre>
						<code className="language-js">{`app.get('/api/items/:id', (req, res) => {\n  const sort = req.query.sortBy; //"name"\n    . . .\n})`}</code>
					</pre>
				</section>
				<hr />
				<section>
					<h3>Static Files</h3>
					<p>
						To serve static files such as images, css files and js files, use the <code>express.static()</code> function.
					</p>
					<pre>
						<code className="language-js">{`app.use(express.static(path.join(__dirname, "public")));`}</code>
					</pre>
					<p>You can now load the files in the public directory, e.g.</p>
					<p>
						<i>http://site.com/images/rare-meme.png</i>
					</p>
				</section>
			</div>
		);
	}
}
/*
<pre>
	<code className="language-js">{``}</code>
</pre>
*/
