/* Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.
 */

const testNum = [2, 3, 5, 7, 11, 15, 30, 31]

// 暴力解
const getTwoIndex = (arr, total) => {
    for (let index1 = 0; index1 < arr.length; index1++) {
        for (let index2 = index1 + 1; index2 < arr.length; index2++) {
            if (arr[index1] + arr[index2] === total) {
                let index = {
                    index1: index1 + 1,
                    index2: index2 + 1
                }
                return index
            }
            if (arr[index1] + arr[index2] > total) {
                break
            }
        }
    }
}

console.log(getTwoIndex(testNum, 12))

// 讲道理的解法
// 两个指针即可
const trueGetTwoIndex = (arr, total) => {
    let left = 0
    let right = arr.length - 1
    while (left < right) {
        if (arr[left] + arr[right] === total) {
            return { left, right }
        } else if (arr[left] + arr[right] > total) {
            right--
        } else {
            left++
        }
    }
}

console.log(trueGetTwoIndex(testNum, 8))