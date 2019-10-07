// 定义队的类
function Queue() {
    this.dataScore = []
    this.enqueue = enqueue
    this.dequeue = dequeue
    this.front = front
    this.back = back
    this.toString = toString
    this.empty = empty
}

// 定义入队操作
function enqueue(data) {
    this.dataScore.push(data)
}

// 定义出队操作
function dequeue() {
    return this.dataScore.shift()
}

// 返回队列第一个元素
function front() {
    return this.dataScore[0]
}

// 返回队列最后一个元素
function back() {
    return this.dataScore[this.dataScore.length - 1]
}

// 显示队列中所有元素
function toString() {
    let str = ''
    for (const value of this.dataScore) {
        str += `${value} `
    }
    return str
}

// 判断队列是否为空
function empty() {
    return this.dataScore.length ? false : true
}

let q = new Queue()
q.enqueue('tim')
q.enqueue('tom')
q.enqueue('maya')
q.enqueue('lili')
q.enqueue('tony')
console.log(q.dequeue())
console.log(q.front())
console.log(q.back())
console.log(q.empty())
console.log(q.toString())

