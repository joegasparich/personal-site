import express from "express";

import document from "../html/index.html";

import "../resources/favicon.ico";

const app = express();

const PORT = 5001;

app.use(express.static("dist"));

app.get("/*", (req, res) => {
	res.send(document);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
