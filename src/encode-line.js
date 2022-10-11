const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
	let result = ''
	str.split('').reduce((prev, e, index, arr) => {
		if (!prev.length || prev[prev.length - 1] == e) {
			prev.push(e)
		} else {
			result += (prev.length > 1 ? prev.length : '') + arr[index - 1]
			prev = [e]
		}
		if (index + 1 == arr.length) {
			result += (prev.length > 1 ? prev.length : '') + arr[index]
		}
		console.log(prev)
		return prev
	}, [])
	return result.replace('1', '')
}

module.exports = {
	encodeLine
};
