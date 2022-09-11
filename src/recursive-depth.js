const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
	calculateDepth(array) {
		//let count = 1
		//if (array.find(e => Array.isArray(e))) {
		//	count += depthCalc.calculateDepth(array.flat())
		//}
		//return count
		//[1, 2, 3, [4,[], 5], []]
		let result = 0
		let count = 0
		if (Array.isArray(array)) {
			count++
			array.forEach(i => {
				let x = 1
				x += this.calculateDepth(i)
				if (x > count) {
					count = x
				}
			})
		}
		return count
	}
}
let depthCalc = new DepthCalculator

module.exports = {
	DepthCalculator
};
