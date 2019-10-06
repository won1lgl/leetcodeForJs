// 定义列表类
function List() {
    this.listSize = 0
    this.pos = 0
    this.dataStore = []
    this.append = append
    this.find = find
    this.remove = remove
    this.length = length
    this.toString = toString
    this.insert = insert
    this.clear = clear
    this.contain = contain
}

//向列表中增添项目
function append(data) {
    this.dataStore[this.listSize++] = data
}

// 查找列表中对应的项目
function find(data) {
    for (let i in this.dataStore) {
        if (this.dataStore[i] == data) return Number(i)
    }
    return -1
}

//移除列表中的项目
function remove(data) {
    const findAt = this.find(data)
    if (findAt > -1) {
        this.dataStore.splice(findAt, 1)
        this.listSize--
        return true
    } else {
        return false
    }
}

//返回列表中的长度
function length() {
    return this.listSize
}

//返回列表中的内容
function toString() {
    return this.dataStore
}

// 插入列表中的项目
function insert(data, after) {
    let insertPos = this.find(after)
    if (insertPos > -1) {
        this.dataStore.splice(insertPos + 1, 0, data)
        this.listSize++
        return true
    } else {
        return false
    }
}

//清空列表
function clear() {
    this.dataStore = []
    this.listSize = 0
}

//判断一个东西是否在列表中
function contain(data) {
    if (this.find(data) > -1) return true
    else return false
}

let bList = new List()
bList.append('tim')
bList.append('tom')
bList.append('kim')
bList.append('anna')
bList.append('lolo')
bList.insert('maya', 'tom')
// bList.clear()
// console.log(bList.length())
console.log(bList.contain('llala'))
console.log(bList.toString())
