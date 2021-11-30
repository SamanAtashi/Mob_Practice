// https://www.hackerrank.com/challenges/the-time-in-words/

function timeInWords(h, m) {
	let arrH = [
		'one',
		'two',
		'three',
		'four',
		'five',
		'six',
		'seven',
		'eight',
		'nine',
		'ten',
		'eleven',
		'twelve',
	];

	let arrM = [
		'one',
		'two',
		'three',
		'four',
		'five',
		'six',
		'seven',
		'eight',
		'nine',
		'ten',
		'eleven',
		'twelve',
		'thirteen',
		'fourteen',
		'fifteen',
		'sixteen',
		'seventeen',
		'eighteen',
		'nineteen',
		'twenty',
		'twenty one',
		'twenty two',
		'twenty three',
		'twenty four',
		'twenty five',
		'twenty six',
		'twenty seven',
		'twenty eight',
		'twenty nine',
		'thirty',
	];

	if (m == 0) {
		return `${arrH[h - 1]} o' clock`;
	}

	if (m < 30) {
		return `${m == 15 ? '' : arrM[m - 1]}${
			m == 15 ? 'quarter' : m != 1 ? ' minutes' : ' minute'
		} past ${arrH[h - 1]}`;
	} else if (m === 30) {
		return `half past ${arrH[h - 1]}`;
	} else {
		let num = 60 - m;

		return `${num == 15 ? '' : arrM[num - 1]}${
			num == 15 ? 'quarter' : num != 1 ? ' minutes' : ' minute'
		} to ${arrH[h]}`;
	}
}

// explicit words
console.log(timeInWords(5, 00));
console.log(timeInWords(5, 01));
console.log(timeInWords(5, 10));
console.log(timeInWords(5, 15));
console.log(timeInWords(5, 28));
console.log(timeInWords(5, 30)); // half past five
// difference to next hour
console.log(timeInWords(5, 40));
console.log(timeInWords(5, 45)); // quarter
console.log(timeInWords(5, 47));

console.log('---------------');
console.log(timeInWords(10, 57));
