const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(m) {
	if (!Array.isArray(m)) {
		return false
	}
	m = m.filter(i => typeof i == 'string')
	return m.reduce((r, i) => {
		if (typeof i == 'string') {
			i = i.replace(/\s/g, '')
			r += i[0].toUpperCase()
			return (r.split('').sort().join(''))
		}
	}, '')
}

module.exports = {
	createDreamTeam
};
