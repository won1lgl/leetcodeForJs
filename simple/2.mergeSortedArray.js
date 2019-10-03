// 题目描述:
// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// 我觉得最简单的实现方法（使用js现成的工具）缺点：生成了新的数组，不符合题意
const MergeSortedArray = (arr1, arr2) => {
    return [...arr1, ...arr2].sort((a, b) => a - b)
}

const testArray1 = [1, 200, 2000, 8000]
const testArray2 = [-5, -3, 200, 1000, 1200, 10000]

console.log(MergeSortedArray(testArray1, testArray2))

// 我写的传统算法,相当于传统意义上的两个指针

const MergeSortedArray2 = (arr1, arr2) => {
    let i = 0
    for (const j of arr2) {
        if (j < arr1[i]) {
            arr1.splice(i, 0, j)
        } else {
            while (j > arr1[i + 1]) {
                i++
            }
            arr1.splice(i + 1, 0, j)
        }
    }
    return arr1
}

console.log(MergeSortedArray2(testArray1, testArray2))