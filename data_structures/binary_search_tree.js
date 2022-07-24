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
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(11);
tree.insert(15);
tree.insert(12);
console.log(tree.contains(20));
