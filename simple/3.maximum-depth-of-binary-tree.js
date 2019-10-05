/* Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node. */

// 定义节点类
function Node(data, left = null, right = null) {
    this.data = data
    this.left = left
    this.right = right
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
    this.getDepth = getDepth
    this.trueGetDepth = trueGetDepth
    this.getMaxDepth2 = getMaxDepth2
}

// 二叉树的插入节点方法
function insert(data) {
    const node = new Node(data)
    if (this.root == null) {
        this.root = node
    } else {
        let current = this.root
        let parent
        while (true) {
            parent = current
            if (data < current.data) {
                current = current.left
                if (current == null) {
                    parent.left = node
                    break
                }
            } else {
                current = current.right
                if (current == null) {
                    parent.right = node
                    break
                }
            }
        }
    }
}

// 二叉搜索树中序遍历
function inOrder(current = this.root) {
    if (!(current == null)) {
        inOrder(current.left)
        console.log(current.show())
        inOrder(current.right)
    }
}

let bTree = new BST()
bTree.insert(3)
bTree.insert(9)
bTree.insert(20)
bTree.insert(15)
bTree.insert(7)
bTree.inOrder()



//建树完成，下面编写算法

//我自己编写的垃圾算法
let depthArray = []

function getDepth(current = this.root, depth = 0) {
    if (!(current == null)) {
        depth++
        getDepth(current.left, depth)
        getDepth(current.right, depth)
    } else {
        depthArray.push(depth)
    }
}

function getMaxDepth() {
    bTree.getDepth()
    return Math.max(...depthArray)
}

console.log("最大深度是", getMaxDepth())

//大牛逼算法
// 传说中的层次优先遍历
function trueGetDepth(root = this.root) {
    if (!root) return 0
    if (!root.left && !root.right) return 1
    let cur = root
    let queue = [root, null]
    let depth = 1
    while ((cur = queue.shift()) !== undefined) {
        if (cur == null) {
            if (queue.length == 0) return depth
            depth++
            queue.push(null)
            continue
        }
        if (cur.left !== null) queue.push(cur.left)
        if (cur.right !== null) queue.push(cur.right)
    }
}

console.log('最大深度是:', bTree.trueGetDepth())

//真正的递归
function getMaxDepth2(cur = this.root){
    if(!cur) return 0
    if(!cur.left && !cur.right) return 1
    return 1+Math.max(getMaxDepth2(cur.left),getMaxDepth2(cur.right))
}

console.log('最大的深度就是:', bTree.getMaxDepth2())
