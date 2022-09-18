const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
	constructor(mod) {
		if (mod === true || mod === undefined) {
			this.mod = true
		} else {
			this.mod = false
		}
		this.abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
	}
	encrypt(str, key) {
		if (str == undefined || key == undefined) {
			throw Error('Incorrect arguments!')
		}
		key = key.toUpperCase()
		let w = 0
		let result = str.toUpperCase().split('').reduce((result, e, i) => {
			if (this.abc.indexOf(e) == -1) {
				result += e
				w++
			} else {
				console.log(`бува - ${e}, буква шифра ${key[(i >= key.length) ? (i - w) % key.length : i - w]}`)
				result += String.fromCharCode((e.charCodeAt() - 65 + key[(i >= key.length) ? (i - w) % key.length : i - w].charCodeAt() - 65) % 26 + 65)
			}
			return result
		}, '')
		if (this.mod == true) {
			return result
		}
		else {
			return result.split('').reverse().join('')
		}
	}
	decrypt(str, key) {
		if (str == undefined || key == undefined) {
			throw Error('Incorrect arguments!')
		}
		key = key.toUpperCase()
		let w = 0
		let result = str.toUpperCase().split('').reduce((result, e, i) => {
			if (this.abc.indexOf(e) == -1) {
				result += e
				w++
			} else {
				if (((e.charCodeAt() - 65 - key[(i >= key.length) ? (i - w) % key.length : i - w].charCodeAt() + 65) % 26 + 65) > 64) {
					result += String.fromCharCode((e.charCodeAt() - 65 - key[(i >= key.length) ? (i - w) % key.length : i - w].charCodeAt() + 65) % 26 + 65)
				} else {
					result += String.fromCharCode((e.charCodeAt() - 65 - key[(i >= key.length) ? (i - w) % key.length : i - w].charCodeAt() + 65) % 26 + 65 + 26)
				}
			}
			return result
		}, '')
		if (this.mod == true) {
			return result
		}
		else {
			return result.split('').reverse().join('')
		}
	}
}


module.exports = {
	VigenereCipheringMachine
};
let m = new VigenereCipheringMachine()
let n = new VigenereCipheringMachine(false)

// L == 79
// T == 84 
// E = 69 
//console.log(('A'.charCodeAt() - 'J'.charCodeAt() + 65 + 26))
//console.log('U'.charCodeAt() - 65)
//console.log('J'.charCodeAt() - 65)
//console.log('R'.charCodeAt())
//console.log('8'.charCodeAt())
////console.log(m.encrypt('Example of sequence: 1, 2, 3, 4.', 'lilkey')) //EIHQX SX DLLU!
console.log(m.decrypt('UWJJW XAGWLNFM VNNNDXHVWWL :)', 'js')) //LEARN FRONTEND DEVELOPMENT :)'
console.log(n.decrypt('UWJJW XAGWLNFM VNNNDXHVWWL :)', 'js')) //LEARN FRONTEND DEVELOPMENT :)'

//console.log('LEARN FRONTEND DEVELOPMENT :)'.split('').reverse().join(''))
