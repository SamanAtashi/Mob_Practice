function pN(a) {

    const endArray = [];
    const arr=a.sort((a, b) => (a - b));


    for (let i = 0; i < arr.length; i++) {
    const newArr = [];
        for (let j = i; j < arr.length; j++) {
            if (arr[i] - arr[j] == 1 || arr[i] - arr[j] == 0 || arr[i] - arr[j] == -1) {
                newArr.push(arr[j]);
            }
        }
        endArray.push(newArr)
    }
console.log(endArray)
    const len= endArray.map(a=>a.length)
    return Math.max(...len)
}


console.log(pN([1, 1, 2, 2, 4, 4, 5, 5, 5])) // length: 5
console.log(pN([1,2,2,3,1,2])) // length: 5

// go through array 
        // once for each element
        // once to compare ==> <= 1
// if OK ==> make a new array out out of them and push length into some array
