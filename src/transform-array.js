const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(a) {
	let disE;
	let result = []
	if (!Array.isArray(a)) {
		throw new Error(`'arr' parameter must be an instance of the Array!`)
	} else if (a.length == 0) {
		return []
	} else {
		for (let i = 0; i < a.length; i++) {
			if (a[i] == '--discard-next' && disE != i) {
				disE = i + 2
				i++
			} else if (a[i] == '--discard-prev' && disE != i) {
				result.pop()
			} else if (a[i] == '--double-next' && disE != i) {
				result.push(a[i + 1])
			} else if (a[i] == '--double-prev' && disE != i) {
				result.push(a[i - 1])
			} else if (a[i] != '--discard-next' && a[i] !== '--discard-prev' && a[i] !== '--double-next' && a[i] != "--double-prev") {
				result.push(a[i])
			}
		}
	}
	return result.filter(a => a != undefined)
}

module.exports = {
	transform
};
