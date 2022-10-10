function deleteDigit(n) {
	let result = 0
	let nS = String(n)
	//console.log(nS)

	for (let i = 0; i < nS.length; i++) {
		let x = nS.slice(0, i) + nS.slice(i + 1)
		console.log(x)
		x > result ? result = x : null;
	}
	return +result
}

console.log(deleteDigit(155))

//console.log('133'.slice(0, -1) + '133'.slice(0))

