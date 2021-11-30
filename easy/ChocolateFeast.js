// https://www.hackerrank.com/challenges/chocolate-feast/

function chocolateFeast(money, price, wrapperNeeded) {
	let eaten = 0;

	let wrappersRightNow = 0;

	let boughtWithMoney = Math.floor(money / price);

	eaten += boughtWithMoney;
	wrappersRightNow += boughtWithMoney;

	while (wrappersRightNow >= wrapperNeeded) {
		let newChocolate = Math.floor(wrappersRightNow / wrapperNeeded);
		let remainingWrappers = wrappersRightNow % wrapperNeeded;

		eaten += newChocolate;

		wrappersRightNow = newChocolate + remainingWrappers;
	}

	return eaten;
}

console.log(chocolateFeast(10, 2, 5)); //6 = (10/2=5) + (5/5 = 1 + 1 wrapper ==> 1)
console.log(chocolateFeast(6, 2, 2)); //5 = (6/2=3) + ((3/2 = (1new + 1 wrapper)
console.log(chocolateFeast(16, 2, 2)); //5 = (16/2=8) + ((8/2 = 4new + 4 wrapper ==> 4/2 ==> 2new
console.log(chocolateFeast(7, 3, 2)); //3 = (7/3~2) + (2 wrapper - 2 = 0 ==> 1)
