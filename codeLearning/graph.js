// 点类
class Vertex {
    constructor(label) {
        this.label = label
        this.wasVisited = false
    }
}

// 图类
class Graph {
    constructor(v) {
        this.vertices = v
        this.edge = 0
        this.adj = []
        for (let i = 0; i < this.vertices; i++) {
            this.adj[i] = []
        }
        this.marked = []
        for (let i = 0; i < this.vertices; i++) {
            this.marked[i] = false
        }
    }

    // 增加边
    addEdge(v, w) {
        this.adj[v].push(w)
        this.adj[w].push(v)
        this.edge++
    }

    // 显示图
    showGraph() {
        for (let i = 0; i < this.vertices; i++) {
            let str = `${i} -> `
            for (const value of this.adj[i]) {
                str += `${value} `
            }
            console.log(str)
        }
    }

    // 深度优先遍历
    dfs(v) {
        this.marked[v] = true
        console.log(v)
        this.adj[v].forEach(vertex => {
            if (!this.marked[vertex]) {
                this.dfs(vertex)
            }
        });
    }

    // 广度优先遍历(使用了递归，没有利用好广度优先的优势))
    worseBfs(v) {
        if (!this.marked[v]) {
            this.marked[v] = true
            console.log(v)
        }
        let queue = []
        this.adj[v].forEach(vertex => {
            if (!this.marked[vertex]) {
                console.log(vertex)
                this.marked[vertex] = true
                queue.push(vertex)
            }
        })
        while (queue.length) {
            this.bfs(queue.shift())
        }
    }

    // 更优秀的广度优先遍历
    bfs(v) {
        let queue = []
        queue.push(v)
        while (queue.length) {
            let s = queue.shift()
            this.marked[s] = true
            console.log(s)
            this.adj[s].forEach(vertex => {
                if (!this.marked[vertex]) {
                    queue.push(vertex)
                }
            })
        }
    }
}


g = new Graph(5)
g.addEdge(0, 1)
g.addEdge(0, 2)
g.addEdge(1, 3)
g.addEdge(2, 4)
g.showGraph()
// g.dfs(2)
g.bfs(0)