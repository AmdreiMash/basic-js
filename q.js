function getEmailDomain(email) {
	return email.match(/([@-]\w+\.)+com|([@-]\w+\.)+ru/g)[0].slice(1,)
}


console.log(getEmailDomain('example-indeed@strange-example.com'))