class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array = []) {
    // Speed - O(n) and Space - O(n)
    array.push(this.name)
    for (let node of this.children) {
      node.depthFirstSearch(array)
    }
    return array
  }
}

exports.Node = Node;
