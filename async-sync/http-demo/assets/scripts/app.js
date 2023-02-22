// https://javascript.info/xmlhttprequest

const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('post-template');
const form = document.querySelector('#new-post form');
const fetchBtn = document.querySelector('#available-posts button');
const postList = document.querySelector('ul');

function sendHttpRequest(method, url, data) {
	// fetch returns a promise,
	// which results in response, 
	// which has .json() method
	// which also returns a promise 
	// which results in parsed JS object
	return fetch(url, {
		method: method,
		body: JSON.stringify(data),
		headers: {
			"Content-Type": "applicaton/json"
		}
	}).then(response => {
		if (response.status >= 200 && response.status < 300) {
			return response.json()
		} else {
			return response.json().then(errData => {
				console.log(errData);
				throw new Error('Smth went wrong on the server-side');
			});
		}
	}).catch(err => {
		console.log(err);
		throw new Error('Smth went wrong (catch block)');
	});
}

async function fetchPosts() {
	try {
		const responseData = await sendHttpRequest('GET', 'htps://jsonplaceholder.typicode.com/posts');
		const listOfPosts = responseData;

		for (const post of listOfPosts) {
			const postEl = document.importNode(postTemplate.content, true);
			postEl.querySelector('h2').textContent = post.title.toUpperCase();
			postEl.querySelector('p').textContent = post.body;
			postEl.querySelector('li').id = post.id;
			listElement.append(postEl);
		}
	} catch (err) {
		alert(err);
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
// fetchPosts();

fetchBtn.addEventListener('click', fetchPosts);

form.addEventListener('submit', event => {
	event.preventDefault();
	const enteredTitle = event.currentTarget.querySelector('#title').value;
	const enteredContent = event.currentTarget.querySelector('#content').value;
	createPost(enteredTitle, enteredContent);
})

postList.addEventListener('click', event => {
	if (event.target.tagName === 'BUTTON') {
		const postId = event.target.closest('li').id;
		sendHttpRequest('DELETE', `https://jsonplaceholder.typicode.com/posts/${postId}`);
	}
})
