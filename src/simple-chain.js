const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
	a: [],

	getLength: function () {
		return chainMaker.a.length
	},

	addLink: function (e) {
		if (Object.prototype.toString.call(e) == '[object Function]') chainMaker.a.push(String(e));
		else if (Object.prototype.toString.call(e) == '[object Object]') chainMaker.a.push(String(e));
		else chainMaker.a.push(String(e));
		return chainMaker
	},

	removeLink: function (i) {
		if (this.a[i - 1] && i > 0) {
			delete chainMaker.a[i - 1]
			chainMaker.a = chainMaker.a.filter(e => e != 'undefined')
		} else {
			chainMaker.a = []
			throw Error(`You can\'t remove incorrect link!`)
		}
		return chainMaker
	},

	reverseChain: function () {
		chainMaker.a = chainMaker.a.reverse()
		return chainMaker
	},

	finishChain: function () {
		r = chainMaker.a.reduce((result, elem, index) => {
			result += `( ${elem} )`
			if (index != chainMaker.a.length - 1) result += '~~'
			return result
		}, '')
		chainMaker.a = []
		return r
	}

};

module.exports = {
	chainMaker
};
