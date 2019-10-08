/* Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory? */

const testArray = [1, 5, 3, 8, 4, 3, 1, 8, 5]
const testArray2 = [4, 4, 11]

// 我先写个不考虑性能的最简单的方法
const findSingleNum = (arr) => {
    arr.sort((a, b) => a - b)
    for (let i = 0; i < arr.length; i += 2) {
        if (arr[i] !== arr[i + 1]) {
            return arr[i]
        }
    }
}
console.log(findSingleNum(testArray2))


// 考虑性能的算法
//使用了位运算符^,a^b的运算规则是将a和b的二进制每一位进行运算，如果该位相同则为0，不为0则为1，且满足a^a=0,a^0=a
//（ps:我服了，这谁想的到啊！！）
const findSingleNum2 = (arr) => {
    let res = 0
    for (const value of arr) {
        res ^= value
    }
    return res
}

console.log(findSingleNum2(testArray2))