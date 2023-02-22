// https://javascript.info/xmlhttprequest

const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('post-template');

function sendHttpRequest(method, url, data) {
	const promise = new Promise((resolve, reject) => {
		// create XMLHttpRequest
		const xhr = new XMLHttpRequest();

		// initialize it
		// xhr.open(method, URL, [async, user, password])
		xhr.open(method, url);

		// send request
		// xhr.send([body])
		xhr.send(JSON.stringify(data));

		// This will be called after the response is received
		xhr.onload = function () {
			resolve(xhr.response);
		}
	});
	return promise;
}

// function fetchPosts() {
// 	sendHttpRequest('GET', 'https://jsonplaceholder.typicode.com/posts')
// 		.then(
// 			responseData => {
// 				const listOfPosts = JSON.parse(responseData);

// 				for (const post of listOfPosts) {
// 					const postEl = document.importNode(postTemplate.content, true);
// 					postEl.querySelector('h2').textContent = post.title.toUpperCase();
// 					postEl.querySelector('p').textContent = post.body;
// 					listElement.append(postEl);
// 				}
// 			}

// 		);
// }

async function fetchPosts() {
	const responseData = await sendHttpRequest('GET', 'https://jsonplaceholder.typicode.com/posts');
	const listOfPosts = JSON.parse(responseData);

	for (const post of listOfPosts) {
		const postEl = document.importNode(postTemplate.content, true);
		postEl.querySelector('h2').textContent = post.title.toUpperCase();
		postEl.querySelector('p').textContent = post.body;
		listElement.append(postEl);
	}
}

async function createPost(title, content) {
	const userId = Math.random();
	const post = {
		title: title,
		body: content,
		userId: userId
	}

	sendHttpRequest('POST',
		'https://jsonplaceholder.typicode.com/posts', post);

}

createPost('DUMMY', 'A dummy post');
fetchPosts();


