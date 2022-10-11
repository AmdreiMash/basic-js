const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
	let result = {}
	let x = domains.map(e => '.' + e.split('.').reverse().join('.')).join(' ')
	if (x.match(/\.\w+/)) {
		result[x.match(/\.\w+/)] = x.match(/\.\w+\./g).length
	}
	if (x.match(/\.\w+\.\w+/)) {
		result[x.match(/\.\w+\.\w+/)] = x.match(/\.\w+\.\w+/g).length
	}

	if (x.match(/\.\w+\.\w+\.\w+/g)) {
		result[x.match(/\.\w+\.\w+\.\w+/)] = x.match(/\.\w+\.\w+\.\w+/g).length
	}

	console.log(x.match(/\.\w+\.\w+\.\w+/g))


	return result
}

module.exports = {
	getDNSStats
};
