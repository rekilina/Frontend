// The node:fs module enables interacting with the file system
// in a way modeled on standard POSIX functions.
const fs = require('fs');

fs.writeFile('user-data.txt', 'username=Ivan', err => {
	if (err) {
		console.log(err)
	} else {
		console.log('Success')
	}
})

fs.readFile('user-data.txt', (err, data) => {
	if (err) {
		console.log(err);
		return;
	} else {
		console.log(data.toString());
	}
})