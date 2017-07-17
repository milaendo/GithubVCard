
// 1. First, find our UL Container
let node = document.querySelector ('body') 

// 2. Create our Ajax Request
let req = new XMLHttpRequest()
req.open('GET', "https://api.github.com/users/milaendo")
req.addEventListener("load", reqListener)
req.send()

function reqListener () {
	let data = JSON.parse(this.responseText)
	
		let htmlstr = `
			<div class="wrapper">
			<h1> The Basics </h1>
			<h3> Name: ${data.name} </h3>
			<h3> Github URL: <a href="${data.url}"> </h3>
			<h3> Email: ${data.email} </h3>
			<h3> Company: ${data.company} </h3>
			<h3> Website: <a href="${data.blog}"> </h3>
			
			</div>
		`


	console.log(htmlstr)
}