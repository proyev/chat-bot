let testFunc = () => console.log('Logic is working');

const testComFun = msg => {
	let retVal;
	console.log(msg);
	msg.includes('hello') ? retVal = 'oh, hi' : retVal = msg;
	console.log(retVal);
	return retVal;
}
