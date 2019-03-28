import React, { Component } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";

export default class ReduxPage extends Component {
	componentDidMount() {
		Prism.highlightAll();
	}

	render() {
		return (
			<div>
				<h2>Redux</h2>
				<p>Redux is a state management library which stores the entire state of your app in one centralised location.</p>
				<hr />
				<h4>The Store</h4>
				<p>The store is a central location where all state information is held in one object. This allows for a single source of truth.</p>
				<p>
					While having all of your app state in one place is convenient, it would also be an absolute nightmare to debug. It'd be nearly impossible to figure out what is updating the state.
				</p>
				<p>In order to solve this, Redux employs a system where all changes to state must be done using what are called actions.</p>
				<hr />
				<h4>Actions</h4>
				<p>Actions are objects that can be thought of as a definitions for how a the state should change. For example "Add User" or "Increment Counter".</p>
				<pre>
					<code className="language-js">{`{\n	type: "ADD_USER",\n	user: {\n		name: "Joe"\n	}\n}`}</code>
				</pre>
				<p>This way, a log of actions can be kept in order to keep track of all changes to the state.</p>
				<p>Actions can be created using action creators:</p>
				<pre>
					<code className="language-js">{`function addUser(name) {\n	return {\n		type: ADD_USER,\n		user: {\n			name\n		}\n	}\n}`}</code>
				</pre>
				<hr />
				<h4>Reducers</h4>
				<p>
					Reducers are functions which define <i>how</i> an action changes the state.
				</p>
				<p>A reducer would take the user from the action, and actually add him to the user list within the store:</p>
				<pre>
					<code className="language-js">{`function rootReducer(state = initialState, action) {\n	switch (action.type) {\n		case ADD_USER:\n			return Object.assign({}, state, {\n				users: state.users.concat(action.user)\n			})\n		default:\n			return state\n	}\n}`}</code>
				</pre>
			</div>
		);
	}
}
