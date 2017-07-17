

// 2. Create our Ajax Request
let req = new XMLHttpRequest()
req.open('GET', "https://api.github.com/users/milaendo")
req.addEventListener("load", reqListener)
req.send()

function reqListener () {
	let data = JSON.parse(this.responseText)
		let htmlstr = `
			<h1 class="header"> Mila Endo </h1>
			<div class= everything>
			<div class="wrapper">
				<h2> The Basics </h2>
				<h3> Name: ${data.name} </h3>
				<h3> Github URL: <a href="${data.url}"></a> </h3>
				<h3> Email: ${data.email} </h3>
				<h3> Company: ${data.company} </h3>
				<h3> Website: <a href="${data.blog}"></a> </h3>
				</div>
			<div class="story">
				<h2> The Story </h2>
				<p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." </p>
				<div class=img>
				<img src="${data.avatar_url}">
				</div>
			</div>
		`

	// 1. First, find our UL Container
	let node = document.querySelector('.main') 

	node.innerHTML = htmlstr

}