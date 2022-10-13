function getSumOfDigits(n) {
	n = String(n)
	n = n.split('').reduce((sum, i) => {
		console.log(i)
		sum += +i
		console.log(sum)
		return sum
	}, 0)
	if (String(n).length > 1) {
		return getSumOfDigits(n)
	}
	return (n)
}




console.log(getSumOfDigits(91))

//var arr = [];
//arr[0] = "Jani";
//arr[1] = "Hege";
//arr[2] = "Stale";
//arr[3] = "Kai Jim";
//arr[4] = "Borge";

//console.log(arr);
//arr.splice(2, 0, "Lene");
//console.log(arr);