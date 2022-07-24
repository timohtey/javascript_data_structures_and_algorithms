class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new Node(value);

    if (this.root === null) {
      this.root = node;
    } else {
      let current = this.root;
      let inserted = false;

      while (!inserted) {
        if (value >= current.value) {
          if (current.right === null) {
            current.right = node;
            inserted = true;
          } else {
            current = current.right;
          }
        } else {
          if (current.left === null) {
            current.left = node;
            inserted = true;
          } else {
            current = current.left;
          }
        }
      }
    }
  }

  contains(value) {
    let current = this.root;

    while (current !== null) {
      if (current.value === value) {
        return true;
      }

      current = current.value > value ? current.left : current.right;
    }

    return false;
  }

  breadthFirstSearch() {
    const visited = [];
    const queue = [];

    queue.push(this.root);

    while (queue.length !== 0) {
      const node = queue.shift();

      if (node !== null) {
        visited.push(node.value);
        queue.push(node.left);
        queue.push(node.right);
      }
    }

    return visited;
  }

  depthFirstSearchPreOrder() {
    const visited = [];

    function traverse(node) {
      if (node === null) {
        return;
      }

      visited.push(node.value);
      if (node.left !== null) {
        traverse(node.left);
      }
      if (node.right !== null) {
        traverse(node.right);
      }
    }

    traverse(this.root);
    return visited;
  }

  depthFirstSearchPostOrder() {
    const visited = [];

    function traverse(node) {
      if (node === null) {
        return;
      }

      if (node.left !== null) {
        traverse(node.left);
      }
      if (node.right !== null) {
        traverse(node.right);
      }
      visited.push(node.value);
    }

    traverse(this.root);
    return visited;
  }

  depthFirstSearchInOrder() {
    const visited = [];

    function traverse(node) {
      if (node === null) {
        return;
      }

      if (node.left !== null) {
        traverse(node.left);
      }
      visited.push(node.value);
      if (node.right !== null) {
        traverse(node.right);
      }
    }

    traverse(this.root);
    return visited;
  }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(18);
tree.insert(6);
tree.insert(4);
console.log(tree.depthFirstSearchInOrder());
