/* Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome. */


const testString = 'A man, a plan, a canal: Panama'
const testString2 = 'race a car'

// 我自己的拍屁股想出来的写法
// 缺点:开辟了新的存储空间
const judgePalindrome = (str) => {
    const reg = /[a-zA-Z0-9]/
    let arr = []
    for (const vaule of str) {
        if (reg.test(vaule)) arr.push(vaule.toLowerCase())
    }
    while (arr.length > 1) {
        if (!(arr.shift() === arr.pop())) return false
    }
    return true
}

console.log(judgePalindrome(testString2))

//最优解：首尾指针法
const trueJudgePalindrome = (str) => {
    const reg = /[a-zA-Z0-9]/
    let left = 0
    let right = str.length - 1
    while (left < right) {
        if (!reg.test(str[left])) {
            left++
            continue
        }
        if (!reg.test(str[right])) {
            right--
            continue
        }
        if (!(str[left].toLowerCase() === str[right].toLowerCase())) return false
        left++
        right--
    }
    return true
}

console.log(trueJudgePalindrome(testString2))