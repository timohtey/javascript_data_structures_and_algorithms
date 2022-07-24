class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);

    if (this.head == null) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      node.previous = this.tail;
      this.tail = node;
    }

    this.length++;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }

    const popped = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.previous;
      this.tail.next = null;
    }

    this.length--;

    return popped;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }

    const currentHead = this.head;

    this.head = this.head.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    } else {
      this.head.previous = null;
    }

    return currentHead;
  }

  unshift(value) {
    const node = new Node(value);

    if (!this.head) {
      this.push(node);
    } else {
      node.next = this.head;
      this.head.previous = node;
      this.head = node;
      this.length++;
    }
  }

  get(index) {
    if (index < 0 || index + 1 > this.length) {
      return undefined;
    } else if (index === 0) {
      return this.head;
    }

    // Check if index is nearer on the head or tail
    const mid = Math.floor(this.length / 2);

    let foundNode;

    if (index > mid) {
      foundNode = this.tail;

      for (let i = this.length; i > index; i--) {
        foundNode = foundNode.previous;
      }
    } else {
      foundNode = this.head;

      for (let i = 0; i < index; i++) {
        foundNode = foundNode.next;
      }
    }

    return foundNode;
  }

  set(value, index) {
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.value = value;
      return true;
    }

    return false;
  }

  insert(value, index) {
    if (index < 0 || index + 1 > this.length) {
      return undefined;
    } else if (index === this.length - 1) {
      this.push(value);
      return true;
    } else if (index === 0) {
      this.unshift(value);
      return true;
    }

    const node = new Node(value);
    const previous = this.get(index - 1);
    const next = previous.next;
    node.previous = previous;
    previous.next = node;
    node.next = next;
    this.length++;
  }

  remove(index) {
    if (index < 0 || index + 1 > this.length) {
      return undefined;
    } else if (index === this.length - 1) {
      this.pop();
      return true;
    } else if (index === 0) {
      this.shift();
      return true;
    }

    const node = this.get(index);
    const previous = node.previous;
    node.next.previous = previous;
    previous.next = node.next;
    this.length--;
  }

  reverse() {
    if (this.length <= 1) {
      return;
    }

    let current = this.head;
    this.head = this.tail;
    this.tail = current;

    let next = null;

    for (let i = 0; i < this.length; i++) {
      next = current.next;
      current.next = current.previous;
      current.previous = next;
      current = next;
    }
  }
}

const list = new DoublyLinkedList();
list.push('hello');
list.push('hi');
list.push('there');
list.insert('push', 1);
console.log(list);
