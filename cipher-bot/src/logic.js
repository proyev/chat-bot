//caesarCipher, symbolCipher, reverseCipher functions were
//taken from Codecademy node.js course

const caesarCipher = (str, amount = 13) => {
	let output = '';
	for (let i = 0; i < str.length; i++) {
		let char = str[i];
		if (char.match(/[a-z]/i)) {
			let code = str.charCodeAt(i);
			if (code >= 65 && code <= 90) {
				char = String.fromCharCode(((code - 65 + amount) % 26) + 65);
			} else if (code >= 97 && code <= 122) {
				char = String.fromCharCode(((code - 97 + amount) % 26) + 97);
			}
		}
		output += char;
	}
	return output;
};

const symbolCipher = str => {
	const symbols = {
		'i': '!',
		'!': 'i',
		'l': '1',
		'1': 'l',
		's': '$',
		'$': 's',
		'o': '0',
		'0': 'o',
		'a': '@',
		'@': 'a',
		'e': '3',
		'3': 'e',
		'b': '6',
		'6': 'b'
	}

	let output = '';
	for (let i = 0; i < str.length; i++) {
		let char = str.toLowerCase()[i];

		if (symbols[char]) {
			output += symbols[char]
		} else {
			output += char;
		}
	}
	return output;
};

const reverseCipher = sentence => {
	let words = sentence.split(' ');
	for (let i = 0; i < words.length; i++) {
		words[i] = words[i].split('').reverse().join('');
	}
	return words.join(' ');
};

function cipherThis(msg) {

	let type = 'question-bubble';
	msg = msg.trim().toLowerCase();

	if(msg === 'whatis(caesar)'){

		msg = 'A “Caesar Cipher” in which the characters of the input message are shifted alphabetically by a given amount';
		return  generateHTMLResponse(type, msg);

	} else if(msg === 'whatis(symbol)'){

		msg = 'A “Symbol Cipher” in which select characters from the input message are replaced with visually similar symbols';
		return  generateHTMLResponse(type, msg);

	} else if(msg === 'whatis(reverse)'){

		msg = 'A “Reverse Cipher” in which each word of the input message is reversed in place';
		return  generateHTMLResponse(type, msg);

	} else {

		msg = msg.split(':');
		switch (msg[0].trim()) {
			case 'caesar':

				msg = caesarCipher(msg[1]);
				return  generateHTMLResponse(type, msg);
				break;

			case 'symbol':

				msg = symbolCipher(msg[1]);
				return  generateHTMLResponse(type, msg);
				break;

			case 'reverse':

				msg = reverseCipher(msg[1]);
				return  generateHTMLResponse(type, msg);
				break;

			default:
				msg = "Didn't quite get you, please repeat...";
				return  generateHTMLResponse(type, msg);
				break;
		}
	}
}

/*this funciton takes:
	-> type - shows, whether it is a user or bot message,
	BE ALERTED, the bubble names were made with initial game in mind, so, naming is a bit poor, yeah...
	-> msg - the text msg to be printed
* */
function generateHTMLResponse(type, msg) {
	//creates time-code for the message
	let timeStamp = String(new Date().getDate()) + '.' + String(Number(new Date().getMonth()) + 1) +
		' || ' + String(new Date().getHours()) + ':' + String(new Date().getMinutes());

	let sender = '',
		html = '';

	if (type === 'answer-bubble') {
		sender = 'You';
	} else {
		sender = 'Bot';
	}

	html = `<div class='phrase ${type}'>
				<div class='person'>
					<span>${sender}</span>	
				</div>
				<p>${msg}</p>
				<div class="meta">
					<span class="date-time">${timeStamp}</span>
				</div>
			</div>`;

	return html;
}

//Add communication btw form and logic
$('textarea').on('keypress', function (event){

	//13 corresponds to the keypress number of 'Enter'
	//found this line of code here: https://howtodoinjava.com/jquery/jquery-detect-if-enter-key-is-pressed/
	if(event.which == 13){

		let msg = $('textarea').val();

		//input field check
		if (msg.match(/[a-zA-Z0-9:()*&^%$#@!?]/)) {

			//generates the html code for the response field
			let userHTML = generateHTMLResponse('answer-bubble', msg);
			$(`${userHTML}`).appendTo('main');

			//to keep the viewport in place of the last messages
			let element = document.querySelector('main');
			element.scroll(0, element.scrollHeight);
			$('textarea').val(null);

			let botHTML = cipherThis(msg);
			$(`${botHTML}`).appendTo('main');
			element.scroll(0, element.scrollHeight);

		}
	}
});
