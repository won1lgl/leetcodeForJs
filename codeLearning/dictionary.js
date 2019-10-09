class Dictionary {
    constructor() {
        this.dataScore = {}
    }
    add(key, value) {
        this.dataScore[key] = value
    }

    remove(key) {
        delete this.dataScore[key]
    }
    showAll() {
        for (const key in this.dataScore) {
            console.log(`${key} => ${this.dataScore[key]}`)
        }
    }
    count(){
        let n = 0
        for(const key in this.dataScore){
            n++
        }
        return n
    }
    clear(){
        for(const key in this.dataScore){
            delete this.dataScore[key]
        }
    }
}

let d = new Dictionary()
d.add('foo', 'a')
d.add(true, 'bbb')
d.add(2, '2333')
d.remove('true')
d.clear()
d.showAll()
console.log(d.count())