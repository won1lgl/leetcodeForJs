class HashTable {
    constructor() {
        this.table = new Array(137)
    }

    // 最简单的计算下标的方法
    simpleHash(data) {
        let total = 0
        for (const index in data) {
            total += data.charCodeAt(index)
        }
        return total % this.table.length
    }

    // 存入by=开链法
    put(data) {
        let pos = this.simpleHash(data)
        if (this.table[pos]) {
            this.table[pos].push(data)
        } else {
            this.table[pos] = []
            this.table[pos].push(data)
        }
    }

    // 显示全部
    showDistro() {
        for (const index in this.table) {
            console.log(`${index} => ${this.table[index]}`)
        }
    }
}

class Student {

    // 产生规定范围内的整数
    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    // 随机生成学生的成绩信息
    genStuData(arr) {
        for (let j = 0; j < arr.length; j++) {
            let num = ''
            for (let i = 0; i < 9; i++) {
                num += Math.floor(Math.random() * 10)
            }
            num += this.getRandomInt(50, 100)
            arr[j] = num
        }
    }

    // 显示信息
    showInfo(arr) {
        for (const value of arr) {
            console.log(`student id:${value.substring(0, 8)},the score is ${value.substring(9)}`)
        }
    }
}

let h = new HashTable()
let testArray = new Array(10)
let s = new Student()
s.genStuData(testArray)
for(const value of testArray){
    h.put(value)
}
h.showDistro()