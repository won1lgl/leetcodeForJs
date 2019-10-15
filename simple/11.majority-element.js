/* Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array. */

const testArray = [2, 2, 2, 1, 1, 2, 2, 2, 3, 1, 2]

// 我这个智障也能写出来的最简单的写法
// 缺点：空间复杂度高
const findMajority = (arr) => {
    let freOfNums = {}
    for (const value of arr) {
        !freOfNums[value] ? freOfNums[value] = 1 : freOfNums[value]++
        if (freOfNums[value] > Math.floor(arr.length / 2)) return value
    }
}

// 由于具有大于2/n的约束条件，所以可以使用投票算法
// 在至少需要遍历所有元素的情况下充分利用大于2/n的条件
const trueFindMajority = (arr) => {
    let count = 1
    let major = arr[0]
    for(let i=1;i<arr.length;i++){
        if(count = 0){
            major = arr[i]
            count++
        } else if(arr[i] === major){
            count++
        }else{
            count--
        }
    }
    return major
}

console.log(findMajority(testArray))