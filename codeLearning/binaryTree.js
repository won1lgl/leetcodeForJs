//定义node类
function Node(data = 0, left = null, right = null) {
    this.data = data
    this.left = left
    this.right = right
    this.count = 1
    this.show = show
}

function show() {
    return this.data
}

// 定义二叉搜索树类
function BST() {
    this.root = null
    this.insert = insert
    this.inOrder = inOrder
    this.getMax = getMax
    this.getMin = getMin
    this.find = find
    this.remove = remove
    this.update = update
    this.genArray = genArray
    this.init = init
    this.getNodeNum = getNodeNum
    this.getSideNum = getSideNum
}

//定义二叉搜索树的插入节点算法
function insert(data) {
    const n = new Node(data)
    if (this.root == null) {
        this.root = n
    } else {
        let current = this.root
        let parent
        while (true) {
            parent = current
            if (data < current.data) {
                current = current.left
                if (current == null) {
                    parent.left = n
                    break
                }
            } else {
                current = current.right
                if (current == null) {
                    parent.right = n
                    break
                }
            }
        }
    }
}

// 中序遍历（我自己的垃圾写法）
/* function inOrder(node = this.root) {
    if (node.left !== null) {
        inOrder(node.left)
    }
    console.log(node.show())
    if (node.right !== null) {
        inOrder(node.right)
    }
} */

//中序遍历(最优写法)
function inOrder(node = this.root) {
    if (!(node == null)) {
        inOrder(node.left)
        console.log(node.show())
        inOrder(node.right)
    }
}

//先序遍历
function preOrder(node) {
    if (!(node == null)) {
        console.log(node.show())
        preOrder(node.left)
        preOrder(node.right)
    }
}

//后序遍历
function postOrder(node) {
    if (!(node == null)) {
        postOrder(node.left)
        postOrder(node.right)
        console.log(node.show())
    }
}

// 查找最小值
function getMin(current = this.root) {
    while (current.left !== null) {
        current = current.left
    }
    return current
}

// 查找最大值
function getMax(current = this.root) {
    while (current.right !== null) {
        current = current.right
    }
    return current
}

// 查找指定值
function find(num) {
    let current = this.root
    while (!(current == null)) {
        if (num == current.show()) {
            return current
        } else if (num > current.show()) {
            current = current.right
        } else {
            current = current.left
        }
    }
    return null
}

// 删除节点的方法
function remove(data) {
    this.root = removeNode(this.root, data)
}

//删除指定节点并返回新树
function removeNode(node, data) {
    if (node == null) {
        return null
    }
    if (node.show() == data) {
        if (node.left == null && node.right == null) {
            return null
        } else if (node.left == null) {
            return node.right
        } else if (node.right == null) {
            return node.left
        } else {
            let tempNode = getMax(node.right)
            node.data = tempNode.show()
            node.right = removeNode(node.right, tempNode.show())
            return node
        }
    } else {
        if (data > node.show()) {
            node.right = removeNode(node.right, data)
            return node
        } else {
            node.left = removeNode(node.left, data)
            return node
        }
    }
}

// 增加一次统计
function update(num) {
    node = this.find(num)
    node.count++
    return node
}

// 生成随机数数组
function genArray(length) {
    let arr = []
    for (let i = 0; i < length; i++) {
        let ranNum = Math.floor(Math.random() * 101)
        arr.push(ranNum)
    }
    return arr
}

// 初始化带频率统计的数组
function init(length) {
    const myArr = genArray(length)
    console.log('生成的数组是', myArr)
    for (const value of myArr) {
        let node = this.find(value)
        if (node == null) {
            this.insert(node)
        } else {
            this.update(value)
        }
    }
}

//统计二叉树节点的个数
function getNodeNum(node = this.root){
     if(!node) return 0
     return 1 + getNodeNum(node.left) + getNodeNum(node.right)
}

//统计二叉树边的个数
function getSideNum(){
    return this.getNodeNum() - 1
}

let bTree = new BST()
bTree.insert(23)
bTree.insert(45)
bTree.insert(16)
bTree.insert(37)
bTree.insert(3)
bTree.insert(99)
bTree.insert(22)
// bTree.inOrder()
// postOrder(bTree.root)
// console.log(bTree.getMax().show())
// console.log(bTree.getMin().show())
// bTree.find(37)
// bTree.remove(99)
// console.log(bTree.genArray(10))
console.log('这颗树上的节点共有:', bTree.getNodeNum())
console.log('这课树的边共有', bTree.getSideNum())

let cTree = new BST()
cTree.init(10)