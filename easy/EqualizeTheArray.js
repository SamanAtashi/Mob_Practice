//https://www.hackerrank.com/challenges/equality-in-a-array/problem?h_r=internal-search&isFullScreen=true

function equalizeArray(arr) {
	if (arr.length <= 1) {
		// return 1
		return 0;
	} else if (arr.length <= 2) {
		if (arr[0] == arr[1]) {
			return 1;
			// return 0
		} else {
			return 1;
		}
	} else {
		// find the max equal
		let eqNum = 0;
		let theNum = 0;

		for (let i = 0; i < arr.length; i++) {
			let temp = 1; // amount of repetition
			for (let j = i + 1; j < arr.length; j++) {
				if (arr[i] == arr[j]) {
					temp++;
				}
				if (temp > eqNum) {
					eqNum = temp;
					theNum = arr[i];
				}
			}
		}
		return arr.length - arr.filter((item) => item == theNum).length;
	}
}

// console.log(equalizeArray([1])) // no delete

// console.log(equalizeArray([1, 1])) // no delete // delete one

// console.log(equalizeArray([1, 3])) // delete X1

// console.log(equalizeArray([1, 3, 2])) // delete X2

console.log(equalizeArray([1, 3, 3])); // delete X1

console.log(equalizeArray([1, 1, 1, 2, 3, 3])); // delete X3
