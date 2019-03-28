import React, { Component } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-jsx";
import "prismjs/themes/prism-okaidia.css";

export default class ReactPage extends Component {
	componentDidMount() {
		Prism.highlightAll();
	}

	render() {
		return (
			<div>
				<h2>React</h2>
				<p>React is a frontend JavaScript library for building user interfaces. It is commonly used in the development of single-page or mobile applications.</p>
				<hr />
				<section>
					<h3>Components</h3>
					<p>
						React uses a pattern called components. This is where the UI is split into independent, reusable pieces. Components accept arbitrary inputs (called props) and return React
						elements describing what should appear on screen.
					</p>
					<p>Components can be thought of as custom HTML elements.</p>
					<p>React components are often written in JSX, which is a combination of HTML and JavaScript. This allows for easy access to UI elements with JavaScript</p>
					<h4>A Simple React Component</h4>
					<pre>
						<code className="language-jsx">{`class Button extends React.Component {\n  render() {\n    return <button> { this.props.text } </button>;\n  }\n}`}</code>
					</pre>
					<p>Components can also be functions:</p>
					<pre>
						<code className="language-jsx">{`function Button(props) {\n  return(\n    <button> { props.text } </button>;\n  );\n}`}</code>
					</pre>
					<h4>Rendering Components</h4>
					<p>
						Components can be rendered using the <code>ReactDOM.render()</code> method:
					</p>
					<pre>
						<code className="language-jsx">{`ReactDOM.render(\n  <Button text="Wow" />,\n  document.getElementById('root')\n);`}</code>
					</pre>
				</section>
				<hr />
				<section>
					<h3>State</h3>
					<p>
						State can only be stored in class style components (<a href="https://reactjs.org/docs/hooks-intro.html">for now</a>). It is accessed via <code>this.state</code> and can be
						updated via <code>this.setState()</code>.
					</p>
					<p>
						Note that <code>setState()</code> is asynchronous, and you can’t rely on the state value when setting it.
					</p>
					<pre>
						<code className="language-jsx">{`class Button extends React.Component {\n  constructor(props) {\n    super(props);\n    \n    this.state = {\n      numPresses = 0\n    };\n    \n    //Functions must be bound to the class in order to use "this" in them\n    this.handleClicked = this.handleClicked.bind(this);\n  }\n  \n  handleClicked() {\n    //async setState so must take state as an argument\n   this.setState((state, props) => {\n      numPresses: state.numPresses + 1 \n    });\n  }\n  \n  render() {\n     return (\n      <button onClick={ this.handleClicked }> { this.state.numPresses } </button>;\n    )\n  }\n}`}</code>
					</pre>
				</section>
				<hr />
				<section>
					<h3>Lifecycle</h3>
					<p>Class style components have various methods that allow code to be run during different parts of the component lifecycle.</p>
					<p>
						The <code>componentDidMount()</code> method runs after the component output has been rendered to the DOM.
					</p>
					<p>
						The <code>componentWillUnmount()</code> method runs when the component is about to be removed.
					</p>
				</section>
				<hr />
				<section>
					<h2>React Router</h2>
					<p>React router is an extension to react that allows you to render a component based on the current URL.</p>
					<code>{`yarn add react-router-dom`}</code>
					<p>This is the basic layout of a router:</p>
					<pre>
						<code className="language-jsx">{`<Router>\n  <div>\n    <Link to="/">Home</Link>\n    <Link to="/about">About</Link>\n    \n    <Route path="/" exact component={Home} />\n    <Route path="/about" component={About} />\n  </div>\n</Router>`}</code>
					</pre>
					<p>Routes act as components that will only show if the url contains the correct path.</p>
					<p>All Link and Router elements must be contained in a Router element.</p>
				</section>
			</div>
		);
	}
}
