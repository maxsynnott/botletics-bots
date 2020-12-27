const express = require("express");
const bodyParser = require("body-parser");

const { Chess } = require("chess.js");

const app = express();

app.use(bodyParser.json());

app.post("/move", (req, res) => {
	const { fen } = req.body;
	const chess = new Chess(fen);

	const possibleMoves = chess.moves();
	const randMove =
		possibleMoves[Math.floor(Math.random() * possibleMoves.length)];

	res.json({ move: randMove });
});

app.listen(10000);
