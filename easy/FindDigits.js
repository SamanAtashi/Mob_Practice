function findDigits(n) {
    // separte digits
    //divide %
    // return the amount
    const digits = [...n + ''].map(item => +item);

    let num = 0;
    digits.forEach((item) => {
        if (n % item == 0) {
            num++
        }
    })
    
    return num;
}


console.log(findDigits(1012))
