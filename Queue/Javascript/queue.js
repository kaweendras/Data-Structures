class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() { return this.first }

  enqueue(value) {
    const newNode = new Node(value)
    if (!this.length) {
      this.first = newNode
      this.last = newNode
    } else {
      this.last.next = newNode
      this.last = newNode
    }
    this.length++
    return this
  }
  dequeue() {
    if (!this.first) {
      return 'no Node to dequeue'
    }
    if (this.first === this.last) {
      this.last = null
    }
    const removedNode = this.first
    this.first = this.first.next
    this.length--
    return removedNode
  }
  isEmpty() {
    return Boolean(!this.first)
  }
}

const myQueue = new Queue();