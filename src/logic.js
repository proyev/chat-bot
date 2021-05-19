let testFunc = () => console.log('Logic is working');

function generateHTMLResponse(type, msg, timeStamp){

	let sender = '',
		html = '';
	if (type === 'answer-bubble'){
		sender = 'You';
	} else {
		sender = 'Interrogator';
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



const testComFun = msg => {
	let retVal;
	console.log(msg);
	msg.includes('hello') ? retVal = 'oh, hi' : retVal = msg;
	console.log(retVal);
	return retVal;
}

const showID = spyStatus => {
	if (spyStatus){
		return personalData = {
			identityName: 'Sam Sepiol',
			trueName: '',
			identityAge: 28,
			identityBirthday: '20.09.1952',
			contactPlaces: ['library', 'pub'],
			age: 31,

		}
	}
	// return
}

//prints the current question on the screen and returns the answer back to the game
const askQuestion = question => {

}

function checkAskedQuestions(askedQuestions, lastQuestion) {
	askedQuestions.push(lastQuestion);
	if (askedQuestions.length > 2){
		gameOver('train');
	} else if (askedQuestions[askedQuestions.length - 2] === lastQuestion){
		gameOver('train');
	}
	return askedQuestions;
}

const startGame = () => {
	//those counters will make a decision about the final result,
	// if the player goes that far of course
	let dizzyCounter = 0, aggressiveCounter = 0,
		questionCounter = 0, releaseCounter = 0;

	let askedQuestions = [], lastQuestion = '';

	//depending
	spyStatus = Math.floor(Math.random() * 2);
	showID(spyStatus);

	suspectData = {
		name: 'Sam Sepiol',
		nick: 'Sal',
		birth: '20.09.1952',
		age: 28,
		prof: '',
		friends: '',
		hobbys: ['painting', 'reading', ''],

	}



	interrogatorQuestionnaire = ['State your name',
								'Tell me how old are you',
	];

	interrogatorAnswers = []
	//now questions will be asked
	if (askQuestion('State your name'));

}

const shoot = () => {

}

const train = () => {

}

const release = () => {

}

//prints corresponding interragator msg and switches to the next window
function gameOver(status) {
	switch (status){
		case 'shoot':
			shoot();
			break;
		case 'train':
			train();
			break;
		case 'release':
			release();
			break;
	}

}}
