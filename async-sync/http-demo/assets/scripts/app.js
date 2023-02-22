// https://javascript.info/xmlhttprequest

const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('post-template');

// create XMLHttpRequest
let xhr = new XMLHttpRequest();

// initialize it
// xhr.open(method, URL, [async, user, password])
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');

// send request
// xhr.send([body])
xhr.send();

// This will be called after the response is received
xhr.onload = function () {
	// console.log(JSON.parse(xhr.response));
	const listOfPosts = JSON.parse(xhr.response);

	for (const post of listOfPosts) {
		const postEl = document.importNode(postTemplate.content, true);
		postEl.querySelector('h2').textContent = post.title.toUpperCase();
		postEl.querySelector('p').textContent = post.body;
		listElement.append(postEl);
	}
}



