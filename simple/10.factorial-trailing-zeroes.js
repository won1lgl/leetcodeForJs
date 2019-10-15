/* Given an integer n, return the number of trailing zeroes in n!.
Note: Your solution should be in logarithmic time complexity. */

// 通过寻找连乘的数字中能分解出5的个数来确定0的个数
const factorialFindZero = (n) => {
    let total = 0
    while(n>=5){
        total += Math.floor(n / 5)
        n = Math.floor(n / 5)
    }
    return total
}

console.log(factorialFindZero(20))