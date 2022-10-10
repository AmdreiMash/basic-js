const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
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
module.exports = {
	deleteDigit
};
