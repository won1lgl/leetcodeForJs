/* Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.
*/

const testArray = [1, 4, 5, 3, 6, 8, 1, 5]
// 老子先写个暴力解，时间复杂度直接o(n2)
const getMostProfit = (testArray) => {
    let arr = []
    for (let i = testArray.length - 1; i > 0; i--) {
        let leftMin = Math.min(...testArray.slice(0, i))
        arr.push(testArray[i] - leftMin)
    }
    return Math.max(...arr)
}
console.log(getMostProfit(testArray))

//最优解，时间复杂度o(n)

const getMostProfit2 = (testArray) => {
    let profit = 0
    let min = testArray[0]
    for (let i = 1; i < testArray.length; i++) {
        if (testArray[i] > testArray[i - 1]) {
            profit = Math.max(profit, testArray[i] - min)
        } else {
            min = Math.min(min, testArray[i])
        }
    }
    return profit
}

console.log(getMostProfit2(testArray))

