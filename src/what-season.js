const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(d) {
	if (d == undefined) {
		return 'Unable to determine the time of year!'
	}
	if (!Object.prototype.toString.call(d) === '[object Date]') {
		throw new Error('Invalid date!')
	}
	else {
		try {
			month = d.getMonth()
			return month == 0 || month == 1 || month == 11 ? 'winter' : month == 2 || month == 3 || month == 4 ? 'spring'
				: month == 5 || month == 6 || month == 7 ? 'summer' : month == 8 || month == 9 || month == 10 ? 'fall' : false;
		} catch {
			throw new Error('Invalid date!')
		}
	}
}


module.exports = {
	getSeason
};
