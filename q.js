function getDNSStats(domains) {
	let result = {}
	let x = domains.map(e => '.' + e.split('.').reverse().join('.')).join(' ')
	result[x.match(/\.\w+/)] = x.match(/\.\w+\./g).length
	result[x.match(/\.\w+\.\w+/)] = x.match(/\.\w+\.\w+/g).length
	if (x.match(/\.\w+\.\w+\.\w+/g)) {
		result[x.match(/\.\w+\.\w+\.\w+/)] = x.match(/\.\w+\.\w+\.\w+/g).length
	}

	console.log(x.match(/\.\w+\.\w+\.\w+/g))


	return result
}



console.log(getDNSStats(['epam.com', 'info.epam.com']))

//console.log(('.' + 'ru'))
