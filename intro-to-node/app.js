const express = require('express');
const bodyParser = require('body-parser');

// object with features, provided by express
const app = express();

// the engine for parsing our views,
// ourtemplates, should be ejs
app.set('view engine', 'ejs');
// where to find our views
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
	let userName = req.body.username || 'Unknown User';
	// .send() also express feature
	// res.send(`<h1>Hi ${userName}</h1>
	// <form method="POST" action="/">
	// <input type="text" name="username" id="input" placeholder="name">
	// <button type="submit">Send</button>
	// </form>`);

	// send response with ejs
	// 1st - name of our view is index
	// 2nd - object with parameters
	res.render('index', {
		user: userName
	});
});

app.listen(3000);
