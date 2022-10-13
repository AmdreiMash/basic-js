function isMAC48Address(n) {
	return /[\da-f][\da-f]-[\da-f]+-[\da-f]+-[\da-f]+-[\da-f]+-[\da-f]+/i.test(n)
}



console.log(isMAC48Address('Z1-1B-63-84-45-E6'))