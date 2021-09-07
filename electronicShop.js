function getMoneySpent(k, d, b) {
    const newK = k.filter((item) => { return item < b })
    const newD = d.filter((item) => { return item < b })
    if (newD === [] || newK === []) {
        return -1
    }

    const biggest = [];

    newK.forEach((item1) => {
        newD.forEach((item2) => {
            if (item1 + item2 <= b) {
                biggest.push(item1 + item2)
            }
        })
    })

return (biggest.length > 0) ? biggest.sort((a,b)=>a-b)[biggest.length - 1] : -1
}