class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
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
      this.pop();
    } else {
      let current = this.head.next;

      while (current.next !== this.tail) {
        current = current.next;
      }

      this.tail = current;
      this.tail.next = null;
      this.length--;
    }

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
    }

    return currentHead;
  }

  unshift(value) {
    const node = new Node(value);

    if (!this.head) {
      this.push(node);
    } else {
      node.next = this.head;
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

    let foundNode = this.head;

    for (let i = 0; i < index; i++) {
      foundNode = foundNode.next;
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

    const previous = this.get(index - 1);
    const node = this.get(index);
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

    let previous = null;
    let next = null;

    for (let i = 0; i < this.length; i++) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }
  }
}

const list = new SinglyLinkedList();
list.push('hello');
list.push('hi');
list.push('there');
list.reverse();
console.log(list);
