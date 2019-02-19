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
				<h2>Node JS</h2>
				<hr />
				<section>
					<h3>Modules</h3>
					<p>In Node, every file is a module function, this prevents potential variable name clashes. Variables and functions declared within a file are scoped to that module.</p>
					<p>The module function receives these arguments</p>
					<ul>
						<li>
							<code>exports</code>, <code>module</code>, <code>require</code>, <code>__filename</code>, <code>__dirname</code>
						</li>
					</ul>
					<i>
						Note that <code>exports</code> is a reference to <code>module.exports</code>, so reassigning <code>exports</code> to an object will not export that object. You instead need to
						reassign <code>module.exports</code>.
					</i>
					<h4>message.js</h4>
					<pre>
						<code className="language-js">{`const message = "snack";\nmodule.exports = message;`}</code>
					</pre>
					<h4>app.js</h4>
					<pre>
						<code className="language-js">{`const message = require("./message");\nconsole.log(message); //snack`}</code>
					</pre>
					You can use the <code>require</code> function to make your module depend on any other module.
				</section>
				<hr />
				<section>
					<h3>Global Object</h3>
					<p>
						When writing JavaScript in Node, because the code is not running in a browser you do not have access to the <code>window</code> and <code>document</code> objects. Instead, Node
						code has access to the <code>global</code> object, which contains objects and functions such as <code>console</code> or <code>setTimeout()</code>.
					</p>
				</section>
				<hr />
				<section>
					<h3>Asynchronicity</h3>
					<h4>The Event Loop</h4>
					<p>Node handles all asynchronous actions using the Event Loop. It handles management and monitoring of threads and deals with race conditions automatically.</p>
					<p>
						<i>nice</i>
					</p>
					<h4>Promises</h4>
					<p>In order to avoid lots of nested callbacks, Node’s functions have support for promises.</p>
					<pre>
						<code className="language-js">{`const { readFile } = require('fs').promises;\nasync function main() {\n  const data = await readFile(__filename);\n  console.log('File data is', data);\n}\nmain();`}</code>
					</pre>
					<h4>Event Emitters</h4>
					<p>Node includes an event system, which allows code to subscribe to an event, and run a callback function whenever the event is emitted.</p>
					<pre>
						<code className="language-js">{`const EventEmitter = require('events');\nconst emitter = new EventEmitter();\n//Subscribe\nemitter.on('food'), () => {\n  console.log("Snack!");\n});\n//Emit\nemitter.emit('food'); //Snack!`}</code>
					</pre>
				</section>
				<hr />
				<section>
					<h3>Working with the Operating System</h3>
					<h4>OS Module</h4>
					<pre>
						<code className="language-js">{`const os = require('os');`}</code>
					</pre>
					<p>
						This module contains useful information about the system that the code is running on. <br /> For example:
					</p>
					<pre>
						<code className="language-js">{`os.platform() //The operating system in use\nos.arch() //The CPU architecture\nos.cpus().length //The number of logical cores`}</code>
					</pre>
					<h4>FS Module</h4>
					<pre>
						<code className="language-js">{`const fs = require('fs');`}</code>
					</pre>
					<p>
						This module contains lots of functions to interact with the file system.
						<br />
						For example:
					</p>
					<pre>
						<code className="language-js">{`//Buffers\nfs.readFile(path[, options]);\nfs.writeFile(file, data[, options]);\n//Streams\nfs.createReadStream(path[, options]);\nfs.createWriteStream(path[, options]);\nfs.mkdir(path[, mode]) //Create directory`}</code>
					</pre>
				</section>
				<hr />
				<section>
					<h3>HTTP Module</h3>
					<p>This is a basic web server:</p>
					<pre>
						<code className="language-js">{`const http = require('http');\n//Creates a request listener\nconst server = http.createServer((req, res) => {\n  //Write to the server and end the connection\n  res.end('Kia ora koutou\\n.');\n})\n//Activate server and listen on port 4242\nserver.listen(4242, () => {\n  console.log('Server is running...');\n});`}</code>
					</pre>
				</section>
				<hr />
				<section>
					<h3>Packages</h3>
					<h4>Nodemon</h4>
					<code>npm i -g nodemon</code>
					<p>Nodemon watches for changes to files that node is running and reloads node whenever a file is changed.</p>
					<code>nodemon keephackinggcsb.js</code>
				</section>
			</div>
		);
	}
}
