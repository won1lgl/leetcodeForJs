/* Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).
 */


const testArray = [7, 1, 5, 3, 6, 4, 9, 3, 1]
const testArray2 = [1, 2, 3, 4, 5]
const testArray3 = [7, 6, 4, 3, 1]
// 我觉得和第一个买卖算法差别不大吧应该！
// 事实证明我真的蠢！算法没必要模拟真实的买卖场景啊
const getMostProfit = (arr) => {
    arr.push(-1)
    let min = arr[0]
    let profit = 0
    let totalProfit = 0
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] >= arr[i - 1]) {
            profit = Math.max(profit, arr[i] - min)
        } else {
            totalProfit += profit
            min = arr[i]
            profit = 0
        }
    }
    return totalProfit
}

// console.log(getMostProfit(testArray))
// console.log(getMostProfit(testArray2))
console.log(getMostProfit(testArray))


// 最简单的写法
const trueGetMostProfit = (arr) => {
    let profit = 0
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) {
            profit += arr[i] - arr[i - 1]
        }
    }
    return profit
}

console.log(trueGetMostProfit(testArray))
