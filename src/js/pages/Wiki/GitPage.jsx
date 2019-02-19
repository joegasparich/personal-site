import React, { Component } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";

export default class GitPage extends Component {
	componentDidMount() {
		Prism.highlightAll();
	}

	render() {
		return (
			<div>
				<h2>Git</h2>
				<p>This is a cheat sheet for common git commands.</p>
				<hr />
				<section>
					<h3>Creating Repositories</h3>
					<p>Create new repository from scratch</p>
					<pre>
						<code className="language-none">{`git init [project name]`}</code>
					</pre>
					<p>Download existing repository</p>
					<pre>
						<code className="language-none">{`git clone [project_url]`}</code>
					</pre>
				</section>
				<hr />
				<section>
					<h3>Staging and Commiting</h3>
					<p>Stage a file</p>
					<pre>
						<code className="language-none">{`git add [file]`}</code>
					</pre>
					<p>Stage all changed files</p>
					<pre>
						<code className="language-none">{`git add .`}</code>
					</pre>
					<p>Commit all staged files</p>
					<pre>
						<code className="language-none">{`git commit -m "commit message"`}</code>
					</pre>
					<p>Unstage file</p>
					<pre>
						<code className="language-none">{`git reset [file]`}</code>
					</pre>
					<p>Revert everything to the last commit</p>
					<pre>
						<code className="language-none">{`git reset --hard`}</code>
					</pre>
				</section>
				<hr />
				<section>
					<h3>Pushing and Pulling</h3>
					<p>Get the latest changes from origin (no merge)</p>
					<pre>
						<code className="language-none">{`git fetch`}</code>
					</pre>
					<p>Fetch the latest changes from origin and merge</p>
					<pre>
						<code className="language-none">{`git pull`}</code>
					</pre>
					<p>Fetch the latest changes from origin and rebase</p>
					<pre>
						<code className="language-none">{`git pull --rebase`}</code>
					</pre>
					<p>Push local changes to the origin</p>
					<pre>
						<code className="language-none">{`git push`}</code>
					</pre>
				</section>
				<hr />
				<section>
					<h3>Branches</h3>
					<p>List all local branches</p>
					<pre>
						<code className="language-none">{`git branch`}</code>
					</pre>
					<p>Switch to a branch and update working directory</p>
					<pre>
						<code className="language-none">{`git checkout [branch_name]`}</code>
					</pre>
					<p>Create a new branch</p>
					<pre>
						<code className="language-none">{`git branch [branch_name]`}</code>
					</pre>
					<p>Delete a branch</p>
					<pre>
						<code className="language-none">{`git branch -d [branch_name]`}</code>
					</pre>
					<p>Merge two branches</p>
					<pre>
						<code className="language-none">{`git checkout [branch_b]\ngit merge [branch_a]`}</code>
					</pre>
					<p>Tag the current commit</p>
					<pre>
						<code className="language-none">{`git tag [tag_name]`}</code>
					</pre>
				</section>
				<hr />
				<img src="https://i.imgur.com/fHjhYQZ.png" alt="Diagram of git commands" width="100%" />
				<hr />
				<p>References</p>
				<ul>
					<li>
						<a href="https://www.git-tower.com/blog/git-cheat-sheet/">https://www.git-tower.com/blog/git-cheat-sheet/</a>
					</li>
				</ul>
			</div>
		);
	}
}
