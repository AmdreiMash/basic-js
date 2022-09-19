const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s, s1) {
	return s.split('').reduce((resulr, i) => {
		if (s1.indexOf(i) != -1) {
			s1 = s1.slice(0, s1.indexOf(i)) + s1.slice(s1.indexOf(i) + 1)
			resulr++
		}
		return resulr
	}, 0)
}
module.exports = {
	getCommonCharacterCount
};
