// 使用split方法可以将字符串分割成数组
function splitString(str) {
    return str.split(' ')
}

const someWords = "what are you doing?"
console.log(splitString(someWords))

let testArray = [1, 4, 100, 200, 400, 30]

//浅复制(只是增加一个引用)
let myArray = testArray
//深复制
let tryArray = [...testArray]

//存取函数
console.log(testArray.indexOf(4))
//将数组转化为字符串
console.log(testArray + '')        //使用隐式类型转换
console.log(testArray.join(' '))   //使用join方法
console.log(testArray.toString())  //使用toSting方法


//迭代器方法(不会生成新数组)
//every函数：所有元素均返回true,则返回true
console.log(testArray.every((num) => num % 2 == 0))
//some函数:一个元素返回true，则返回true
console.log(testArray.some(num => num % 2 == 0))
//reduce函数:叠加器
console.log(testArray.reduce((a, b) => a + b))

//（会生成新数组
console.log(testArray.map((num) => num * num))
console.log(testArray.filter((num) => num >= 100))

//初始化二维数组的方法
function matrix(numRows, numCols, initalValue) {
    let arr = []
    for (let i = 0; i < numRows; i++) {
        let column = []
        for (let i = 0; i < numCols; i++) {
            column[i] = initalValue
        }
        arr[i] = column
    }
    return arr
}

console.log(matrix(2,4,0))