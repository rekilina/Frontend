const express = require('express');
const bodyParser = require('body-parser');

// object with features, provided by express
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
	let userName = req.body.username || 'Unknown User';
	// .send() also express feature
	res.send(`<h1>Hi ${userName}</h1>
	<form method="POST" action="/">
	<input type="text" name="username" id="input" placeholder="name">
	<button type="submit">Send</button>
	</form>`);
});

app.listen(3000);
