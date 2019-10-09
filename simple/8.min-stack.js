// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// 这个讲道理是个送分题了把
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
console.log(s.top())
console.log(s.getMin())
