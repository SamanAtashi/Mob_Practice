// https://www.hackerrank.com/challenges/one-month-preparation-kit-drawing-book/problem?h_r=internal-search

function pageCount(n, p) {
    const num = Math.ceil((n+1)/2);
    const current = Math.ceil((p+1)/2);

    const front = current-1;
    const back = num - current;

    return (front>back) ? back : front; 
}


console.log(pageCount(9,7)) // 1