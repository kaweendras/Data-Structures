
class Stack {
  constructor() {
    this.data = []
  }

  push(resource) {
    this.data.push(resource)
  }

  pop() {
    return this.data.pop()
  }

  peek() {
    return this.data[this.data.length - 1]
  }
}

module.exports = Stack;
