const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function getStr(st, r, sp, dSp) {
	let result = ''
	if (r) {
		for (let i = 0; i < r; i++) {
			result += String(st)
			if (i != r - 1) {
				result += sp || dSp
			}
		}
	} else if (st != undefined) {
		result += String(st)
	}
	return result
}
function repeater(str, options) {
	let s = String(str) + getStr(options.addition, options.additionRepeatTimes, options.additionSeparator, '|') || ''
	return getStr(s, options.repeatTimes, options.separator, '+')
}

module.exports = {
	repeater
};
