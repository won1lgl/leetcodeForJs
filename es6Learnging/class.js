// 传统定义类
function point(x, y) {
    this.x = x
    this.y = y
}

point.prototype.toString = function () {
    return `(${this.x},${this.y})`
}

//引入es6后所定义的类
// 实质上相当于语法糖
class Point {
    // 构造方法
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    // 定义类方法不用使用function()关键字
    toString() {
        return `(${this.x},${this.y})`
    }

    // 通过增加static关键字，可以使方法转变为只有类可以调用的方法，实例不会继承该方法
    static alert(){
        console.log('aaa')
    }
}

const p = new Point(1, 6)
console.log(p + '')
Point.alert()