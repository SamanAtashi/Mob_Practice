function beautifulTriplets(d, arr) {
	let sum = 0;

	// i<j<k
	for (let i = 0; i < arr.length - 2; i++) {
		for (let j = 1; j < arr.length - 1; j++) {
			for (let k = 2; k < arr.length; k++) {
				if (arr[j] - arr[i] == d && arr[k] - arr[j] == d) {
					sum++;
				}
			}
		}
	}

	// make combination with these

	// arr[j] - arr[i] = d
	// arr[k] - arr[j] = d
	// push
	return sum;
}

console.log(beautifulTriplets(3, [1, 2, 4, 5, 7, 8, 10]));
// 3
