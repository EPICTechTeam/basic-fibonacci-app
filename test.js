
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

console.log(fib(100))
