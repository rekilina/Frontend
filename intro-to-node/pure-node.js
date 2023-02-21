const http = require('http');

const server = http.createServer((request, response) => {
	// we are recievivng chunks of data
	let body = [];
	// set uo a listener, and push chunks to body
	request.on('data', (chunk) => {
		body.push(chunk);
	}).on('end', () => {
		// convert data into smth we can use than (to string)
		body = Buffer.concat(body).toString();
		let userName = "Unknown";
		if (body) {
			// console.log(body);
			userName = body.split('=')[1];
		}
		response.setHeader('Content-Type', 'text/html');
		response.write(`<h1>Hi ${userName}</h1><form method="POST" action="/"><input type="text" name="username" id="input" placeholder="name"><button type="submit">Send</button></form>`);
		response.end();
	});
});
// start the server
server.listen(3000);

