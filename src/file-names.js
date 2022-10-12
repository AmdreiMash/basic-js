const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(name) {
	let result = name
	let names = {}
	result.forEach((element, i) => {
		if (element in names) {
			names[element] += 1
			result[i] = (element + (`(${names[element]})`))
			names[result[i]] = 0
		} else {
			names[element] = 0
			result[i] = (element)
			//names[result[i]] = 0
		}
		console.log(names)
	});
	return result
}

module.exports = {
	renameFiles
};
