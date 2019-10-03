// 题目描述
// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Example:

// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.



//时间复杂度o(n^3),暴力解
const getMaxAdd = (testArray)=>{
    if(testArray.length == 1){
        return testArray[0]
    }else{
        let sum=testArray[0]
        for(let i = 0;i < testArray.length - 1;i++){
            for(let j=i+1;j<testArray.length;j++){
                let temSum=0
                for(let k=i;k<=j;k++){
                    temSum+=testArray[k]
                    sum=sum>=temSum?sum:temSum
                }
            }
        }
        return sum
    }
}

const testArray = [1]
console.log(getMaxAdd(testArray))

//最优解，动态规划 时间复杂度o(n)
const Lss = (testArray)=>{
    const len = testArray.length
    let max = testArray[0]
    for(let i=1;i<len;i++){
        testArray[i]=Math.max(0,testArray[i-1])+testArray[i]
        max=Math.max(testArray[i],max)
    }
    return max
}
console.log(Lss(testArray))