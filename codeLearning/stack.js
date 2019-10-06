// 栈的定义
function Stack() {
    this.dataScore = []
    this.top = 0
    this.push = push
    this.pop = pop
    this.peek = peek
    this.length = length
    this.clear = clear
}

// 向栈内增加元素
function push(data) {
    this.dataScore[this.top++] = data
}

//删除顶层元素的方法
function pop() {
    return this.dataScore[--this.top]
}

// 返回顶层元素的方法
function peek() {
    return this.dataScore[this.top - 1]
}

// 返回元素个数的方法
function length() {
    return this.top
}

// 清空栈的方法
function clear() {
    this.top = 0
}

let s = new Stack()
s.push("tim")
s.push("tom")
s.push("maya")
s.push("anna")
s.push("tony")
// console.log(s.peek())
// console.log(s.length())

// 使用栈来实现基数为2~9的数制转换
function mulBase(num, base) {
    let bStack = new Stack()
    while (num) {
        bStack.push(num % base)
        num = Math.floor(num / base)
    }
    let str = ''
    while (bStack.length()) {
        str += bStack.pop()
    }
    return str
}
console.log(mulBase(10,3))
