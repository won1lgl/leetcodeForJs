// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// 这个讲道理是个送分题了把(是个屁的送分题)
function Stack() {
    this.dataScore = []
    this.push = push
    this.pop = pop
    this.top = top
    this.getMin = getMin
}

function push(data) {
    this.dataScore.push(data)
}

function pop() {
    return this.dataScore.pop()
}

function top() {
    return this.dataScore[this.dataScore.length - 1]
}

function getMin() {
    let min = this.dataScore[0]
    for (let i = 1; i < this.dataScore.length; i++) {
        min = Math.min(min, this.dataScore[i])
    }
    return min
}

let s = new Stack()
s.push(1)
s.push(4)
s.push(2)
s.push(-5)
s.pop()
// console.log(s.top())
// console.log(s.getMin())

//事实上题意中的constant被我忽略了，所有的查找的时间复杂度为常量，所以我一开始写的就是狗p
function ConstantStack() {
    this.dataScore = []
    this.min = Number.MAX_VALUE
    this.push = push1
    this.pop = pop1
    this.top = top1
    this.getMin = getMin1
}

function push1(data) {
    const min = this.min
    if (data < this.min) this.min = data
    return this.dataScore.push(data - min)
}

function pop1() {
    const min = this.min
    const item = this.dataScore[this.dataScore.length - 1]
    this.dataScore.pop()
    if (item < 0) {
        this.min = min - item
        return min
    }
    return min + item
}

function top1() {
    const min = this.min
    const item = this.dataScore[this.dataScore.length - 1]
    if (item < 0) return min
    return min + item
}

function getMin1() {
    return this.min
}

let cs = new ConstantStack()
cs.push(1)
cs.push(-1)
console.log(cs.top())
console.log('cs的最小值是', cs.getMin())