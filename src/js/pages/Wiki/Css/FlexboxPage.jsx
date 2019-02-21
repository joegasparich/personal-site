import React, { Component } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-sass";
import "prismjs/themes/prism-okaidia.css";

let exampleContents = (
	<React.Fragment>
		<div className="flex-item">
			<p>: )</p>
		</div>
		<div className="flex-item">
			<p>: (</p>
		</div>
		<div className="flex-item">
			<p>: O</p>
		</div>
	</React.Fragment>
);

export default class FlexboxPage extends Component {
	componentDidMount() {
		Prism.highlightAll();
	}

	render() {
		return (
			<div id="flexbox">
				<h2>Flexbox</h2>
				<h3>Basics</h3>
				<p>You can set a container to use flex using:</p>
				<pre>
					<code className="language-css">{`display: flex;`}</code>
				</pre>
				<div className="flex-container">{exampleContents}</div>
				<h4>Useful Resources</h4>
				<p>
					<a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">CSS Tricks - A Guide to Flexbox</a>
				</p>
				<p>
					<a href="https://flexboxfroggy.com/">Flexbox Froggy</a>
				</p>
				<hr />
				<h3>Flex Direction</h3>
				<p>
					<code>flex-direction</code> changes which direction the children elements will stack with one another
				</p>
				<div className="row-l">
					<div className="col-6-l container">
						<pre>
							<code className="language-css">{`flex-direction: row;`}</code>
						</pre>
						<div className="flex-container" style={{ flexDirection: "row" }}>
							{exampleContents}
						</div>
					</div>
					<div className="col-6-l container">
						<pre>
							<code className="language-css">{`flex-direction: row-reverse;`}</code>
						</pre>
						<div className="flex-container" style={{ flexDirection: "row-reverse" }}>
							{exampleContents}
						</div>
					</div>
					<div className="col-6-l container">
						<pre>
							<code className="language-css">{`flex-direction: column;`}</code>
						</pre>
						<div className="flex-container" style={{ flexDirection: "column" }}>
							{exampleContents}
						</div>
					</div>
					<div className="col-6-l container">
						<pre>
							<code className="language-css">{`flex-direction: column-reverse;`}</code>
						</pre>
						<div className="flex-container" style={{ flexDirection: "column-reverse" }}>
							{exampleContents}
						</div>
					</div>
				</div>
				<hr />
				<h3>Flex Wrap</h3>
				<p>
					<code>flex-wrap</code> changes how the elements behave when they overflow the container
				</p>
				<div className="row-l">
					<div className="col-4-l container">
						<pre>
							<code className="language-css">{`flex-wrap: nowrap;`}</code>
						</pre>
						<div className="flex-container" style={{ flexWrap: "nowrap" }}>
							{exampleContents}
							{exampleContents}
						</div>
					</div>
					<div className="col-4-l container">
						<pre>
							<code className="language-css">{`flex-wrap: wrap;`}</code>
						</pre>
						<div className="flex-container" style={{ flexWrap: "wrap" }}>
							{exampleContents}
							{exampleContents}
						</div>
					</div>
					<div className="col-4-l container">
						<pre>
							<code className="language-css">{`flex-wrap: wrap-reverse;`}</code>
						</pre>
						<div className="flex-container" style={{ flexWrap: "wrap-reverse" }}>
							{exampleContents}
							{exampleContents}
						</div>
					</div>
				</div>
				<hr />
				<h3>Justify Content</h3>
				<p>
					<code>justify-content</code> changes how the elements align along each row (main axis)
				</p>
				<div className="row-l">
					<div className="col-4-l container">
						<pre>
							<code className="language-css">{`justify-content: flex-start;`}</code>
						</pre>
						<div className="flex-container" style={{ justifyContent: "flex-start" }}>
							{exampleContents}
						</div>
					</div>
					<div className="col-4-l container">
						<pre>
							<code className="language-css">{`justify-content: flex-end;`}</code>
						</pre>
						<div className="flex-container" style={{ justifyContent: "flex-end" }}>
							{exampleContents}
						</div>
					</div>
					<div className="col-4-l container">
						<pre>
							<code className="language-css">{`justify-content: center;`}</code>
						</pre>
						<div className="flex-container" style={{ justifyContent: "center" }}>
							{exampleContents}
						</div>
					</div>
					<div className="col-4-l container">
						<pre>
							<code className="language-css">{`justify-content: space-between;`}</code>
						</pre>
						<div className="flex-container" style={{ justifyContent: "space-between" }}>
							{exampleContents}
						</div>
					</div>
					<div className="col-4-l container">
						<pre>
							<code className="language-css">{`justify-content: space-around;`}</code>
						</pre>
						<div className="flex-container" style={{ justifyContent: "space-around" }}>
							{exampleContents}
						</div>
					</div>
					<div className="col-4-l container">
						<pre>
							<code className="language-css">{`justify-content: space-evenly;`}</code>
						</pre>
						<div className="flex-container" style={{ justifyContent: "space-evenly" }}>
							{exampleContents}
						</div>
					</div>
				</div>
				<hr />
				<h3>Align Items</h3>
				<p>
					<code>align-items</code> changes how the elements align across each row (cross axis)
				</p>
				<div className="row-l">
					<div className="col-4-l container">
						<pre>
							<code className="language-css">{`align-items: flex-start;`}</code>
						</pre>
						<div className="flex-container" style={{ height: "150px", alignItems: "flex-start" }}>
							{exampleContents}
						</div>
					</div>
					<div className="col-4-l container">
						<pre>
							<code className="language-css">{`align-items: flex-end;`}</code>
						</pre>
						<div className="flex-container" style={{ height: "150px", alignItems: "flex-end" }}>
							{exampleContents}
						</div>
					</div>
					<div className="col-4-l container">
						<pre>
							<code className="language-css">{`align-items: center;`}</code>
						</pre>
						<div className="flex-container" style={{ height: "150px", alignItems: "center" }}>
							{exampleContents}
						</div>
					</div>
					<div className="col-4-l container">
						<pre>
							<code className="language-css">{`align-items: stretch;`}</code>
						</pre>
						<div className="flex-container" style={{ height: "150px", alignItems: "stretch" }}>
							{exampleContents}
						</div>
					</div>
					<div className="col-4-l container">
						<pre>
							<code className="language-css">{`align-items: baseline;`}</code>
						</pre>
						<div className="flex-container" style={{ height: "150px", alignItems: "baseline" }}>
							<p className="flex-item">a b c d e f g h i j k l m n o p q r s t u v w x y z</p>
							{exampleContents}
						</div>
					</div>
				</div>
				<h3>Align Self</h3>
				<p>
					Individual child element alignment can be changed using <code>align-self</code>
				</p>
				<pre>
					<code className="language-css">{`.angry {\n	align-self: flex-end;\n}`}</code>
				</pre>
				<div className="flex-container" style={{ height: "150px", alignItems: "flex-start" }}>
					<div className="flex-item">
						<p>: )</p>
					</div>
					<div className="flex-item" style={{ backgroundColor: "red", alignSelf: "flex-end" }}>
						<p>>: (</p>
					</div>
					<div className="flex-item">
						<p>: )</p>
					</div>
				</div>
				<hr />
				<h3>Align Content</h3>
				<p>
					<code>align-content</code> works for rows similarly to how <code>justify-content</code> works for child elements
				</p>
				<div className="row-l">
					<div className="col-4-l container">
						<pre>
							<code className="language-css">{`align-content: flex-start;`}</code>
						</pre>
						<div className="flex-container" style={{ height: "200px", flexWrap: "wrap", alignContent: "flex-start" }}>
							{exampleContents}
							{exampleContents}
						</div>
					</div>
					<div className="col-4-l container">
						<pre>
							<code className="language-css">{`align-content: flex-end;`}</code>
						</pre>
						<div className="flex-container" style={{ height: "200px", flexWrap: "wrap", alignContent: "flex-end" }}>
							{exampleContents}
							{exampleContents}
						</div>
					</div>
					<div className="col-4-l container">
						<pre>
							<code className="language-css">{`align-content: center;`}</code>
						</pre>
						<div className="flex-container" style={{ height: "200px", flexWrap: "wrap", alignContent: "center" }}>
							{exampleContents}
							{exampleContents}
						</div>
					</div>
					<div className="col-4-l container">
						<pre>
							<code className="language-css">{`align-content: stretch;`}</code>
						</pre>
						<div className="flex-container" style={{ height: "200px", flexWrap: "wrap", alignContent: "stretch" }}>
							{exampleContents}
							{exampleContents}
						</div>
					</div>
					<div className="col-4-l container">
						<pre>
							<code className="language-css">{`align-content: space-between;`}</code>
						</pre>
						<div className="flex-container" style={{ height: "200px", flexWrap: "wrap", alignContent: "space-between" }}>
							{exampleContents}
							{exampleContents}
						</div>
					</div>
					<div className="col-4-l container">
						<pre>
							<code className="language-css">{`align-content: space-around;`}</code>
						</pre>
						<div className="flex-container" style={{ height: "200px", flexWrap: "wrap", alignContent: "space-around" }}>
							{exampleContents}
							{exampleContents}
						</div>
					</div>
				</div>
				<hr />
				<h3>Order</h3>
				<p>
					You can give a child an <code>order</code> value to give it a sorting priority.
				</p>
				<p>
					Elements have an <code>order</code> of 0 by default
				</p>

				<div className="row-l">
					<div className="col-4-l container">
						<pre>
							<code className="language-css">{`.angry {\n	order: 0;\n}`}</code>
						</pre>
						<div className="flex-container">
							<div className="flex-item">
								<p>: )</p>
							</div>
							<div className="flex-item" style={{ backgroundColor: "red" }}>
								<p>>: (</p>
							</div>
							<div className="flex-item">
								<p>: )</p>
							</div>
						</div>
					</div>
					<div className="col-4-l container">
						<pre>
							<code className="language-css">{`.angry {\n	order: 1;\n}`}</code>
						</pre>
						<div className="flex-container">
							<div className="flex-item">
								<p>: )</p>
							</div>
							<div className="flex-item" style={{ order: 1, backgroundColor: "red" }}>
								<p>>: (</p>
							</div>
							<div className="flex-item">
								<p>: )</p>
							</div>
						</div>
					</div>
					<div className="col-4-l container">
						<pre>
							<code className="language-css">{`.angry {\n	order: -1;\n}`}</code>
						</pre>
						<div className="flex-container">
							<div className="flex-item">
								<p>: )</p>
							</div>
							<div className="flex-item" style={{ order: -1, backgroundColor: "red" }}>
								<p>>: (</p>
							</div>
							<div className="flex-item">
								<p>: )</p>
							</div>
						</div>
					</div>
				</div>
				<hr />
				<h3>Flex Grow</h3>
				<p>
					You can set a <code>flex-grow</code> value on each child element to dictate what amount of the available space to take up. The default value is 0.
				</p>
				<p>The elements take up space in proportion to one another, so for example:</p>
				<pre>
					<code className="language-css">{`.one {\n	flex-grow: 1;\n}\n.two {\n	flex-grow: 2\n}`}</code>
				</pre>
				<div className="flex-container">
					<div className="flex-item" style={{ flexGrow: 1 }}>
						<p>1</p>
					</div>
					<div className="flex-item" style={{ flexGrow: 2 }}>
						<p>2</p>
					</div>
					<div className="flex-item" style={{ flexGrow: 1 }}>
						<p>1</p>
					</div>
				</div>
				<hr />
				<h3>Flex Basis</h3>
				<p>
					<code>flex-basis</code> defines the default size of the element before remaining space is distributed.
				</p>

				<p>
					Setting <code>flex-basis</code> to <code>auto</code> tells the element to look at its height/width. The remaining space is distributed using <code>flex-grow</code>
				</p>
				<img src="https://www.w3.org/TR/css-flexbox-1/images/rel-vs-abs-flex.svg" className="center-image" />
				<p className="center">
					<i>https://www.w3.org/TR/css-flexbox-1/images/rel-vs-abs-flex.svg</i>
				</p>
				<hr />
				<h3>Flex Shrink</h3>
				<p>
					<code>flex-shrink</code> dictates how much an element should shrink relative to other elements once the row can't contain the elements basis size. The default value is 1.
				</p>
			</div>
		);
	}
}
