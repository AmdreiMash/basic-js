const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {

	//return email.match(/@.+\.com|@.+\.ru/)[0].replace('@', '')
	//return email.match(/([@-]\w+\.)+com|([@-]\w+\.)+ru/g)[0].slice(0,)
	return email.match(/(@[-\w\d]+\.)+com|(@[-\w\d]+\.)+ru/g)[0].slice(1,)
}

module.exports = {
	getEmailDomain
};
