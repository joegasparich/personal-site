const path = require("path");
const nodeExternals = require("webpack-node-externals");

const commonConfig = {
	mode: "development",
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			},
			{
				test: /\.html$/,
				loader: "raw-loader"
			},
			{
				test: /\.(css|scss)$/,
				use: ["style-loader", "css-loader", "sass-loader", "import-glob-loader"]
			},
			{
				test: /\.(png|jpe?g|gif|svg|ico|pdf)$/,
				loader: "file-loader?name=/resources/[path][name].[ext]&context=src/resources"
			},

			{
				test: /\.(woff|woff2|ttf|eot)$/,
				loader: "file-loader?name=/resources/fonts/[name].[hash].[ext]"
			}
		]
	},
	resolve: {
		extensions: [".js", ".jsx"] // common extensions
	}
};

const frontendConfig = Object.assign({}, commonConfig, {
	target: "web",
	name: "frontend",
	entry: "./src/js/frontend.jsx",
	output: {
		path: path.resolve(__dirname + "/dist/"),
		filename: "frontend.bundle.js"
	}
});

const backendConfig = Object.assign({}, commonConfig, {
	target: "node",
	name: "backend",
	entry: "./src/js/backend.jsx",
	output: {
		path: path.resolve(__dirname + "/dist/"),
		filename: "backend.bundle.js"
	},
	externals: [nodeExternals()]
});

module.exports = [frontendConfig, backendConfig];
