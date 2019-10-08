// 定义链表节点
function Node(data) {
    this.data = data
    this.next = null
}

// 定义链表类
function LList() {
    this.head = new Node('head')
    this.find = find
    this.insert = insert
    this.remove = remove
    this.display = display
}

// 定义插入算法
function insert(newData, data) {
    let curNode = this.find(data)
    let newNode = new Node(newData)
    newNode.next = curNode.next
    curNode.next = newNode
}

// 定义查找算法
function find(data) {
    let node = this.head
    while (node) {
        if (node.data === data) return node
        node = node.next
    }
    return null
}

// 定义显示算法
function display() {
    let node = this.head
    while (node.next) {
        node = node.next
        console.log(node.data)
    }
}

// 移除元素
function remove(data) {
    if (!this.find(data)) return null
    let node = this.head
    while (node.next.data !== data) {
        node = node.next
    }
    node.next = node.next.next
}

let city = new LList()
city.insert('beijing', 'head')
city.insert('tianjing', 'head')
city.insert('shanghai', 'head')
city.insert('hebei', 'tianjing')
city.remove('beijing')
city.display()
