module.exports = {
	/**
	 * Application configuration section
	 * http://pm2.keymetrics.io/docs/usage/application-declaration/
	 */
	apps: [
		{
			name: "joe-gasparich",
			script: "dist/backend.bundle.js",
			instances: 4,
			exec_mode: "cluster",
			watch: "dist/",
			env: {
				COMMON_VARIABLE: "true"
			},
			env_production: {
				NODE_ENV: "production"
			}
		}
	]
};
