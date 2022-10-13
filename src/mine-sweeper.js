const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
	return matrix.reduce((result, line, lineI) => {
		result.push([])
		console.log(line)
		line.reduce((num, e, eI) => {
			function check(x) {
				x === true ? num++ : false;
			}
			if (matrix[lineI - 1]) {
				matrix[lineI - 1][eI - 1] !== undefined ? check(matrix[lineI - 1][eI - 1]) : false;
				matrix[lineI - 1][eI] !== undefined ? check(matrix[lineI - 1][eI], num) : false;
				matrix[lineI - 1][eI + 1] !== undefined ? check(matrix[lineI - 1][eI + 1], num) : false;
			}
			matrix[lineI][eI - 1] !== undefined ? check(matrix[lineI][eI - 1], num) : false;
			matrix[lineI][eI + 1] !== undefined ? check(matrix[lineI][eI + 1], num) : false;

			if (matrix[lineI + 1]) {
				matrix[lineI + 1][eI - 1] !== undefined ? check(matrix[lineI + 1][eI - 1], num) : false;
				matrix[lineI + 1][eI] ? check(matrix[lineI + 1][eI], num) : false;
				matrix[lineI + 1][eI + 1] !== undefined ? check(matrix[lineI + 1][eI + 1], num) : false;
			}
			console.log(num)
			result[lineI].push(num)
			return num = 0
		}, 0)
		return result
	}, [])
}

module.exports = {
	minesweeper
};
