const express = require('express')

function fib(n) {
	let a = 0
	let b = 1
	let seq = []
	for (let i = 0; i < n; i++) {
		const temp = b
		b = a + b
		a = temp
		seq.push(a)
	}

	return seq
}

const server = express()

server.get('/', function (req, res) {
	res.send('hello world')
})

server.get('/fib', function (req, res) {
	const n = parseInt(req.query.n)
	if (isNaN(n)) {
		res.sendStatus(404)
	}
	else {
		res.send(fib(n))
	}
})

server.listen(8080, function () {
	console.log('Server is listening on port 8080')
})
