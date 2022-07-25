class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

// min binary heap
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    const node = new Node(value, priority);
    this.values.push(node);
    if (this.values.length > 1) {
      this.bubbleUp();
    }
  }

  bubbleUp() {
    let index = this.values.length - 1;
    let parentIndex = Math.floor((index - 1) / 2);

    while (
      index > 0 &&
      this.values[index].priority < this.values[parentIndex].priority
    ) {
      const parent = this.values[parentIndex];
      this.values[parentIndex] = this.values[index];
      this.values[index] = parent;
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }

  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }

    return min;
  }

  sinkDown() {
    const length = this.values.length;
    let index = 0;
    let swapIndex;
    let element;

    while (swapIndex !== null) {
      swapIndex = null;
      element = this.values[index];
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 1;
      let leftChild =
        leftChildIndex < length ? this.values[leftChildIndex] : null;
      let rightChild =
        rightChildIndex < length ? this.values[rightChildIndex] : null;

      if (leftChild !== null && rightChild != null) {
        if (leftChild.priority < rightChild.priority) {
          if (leftChild.priority < element.priority) {
            swapIndex = leftChildIndex;
          }
        } else {
          if (rightChild.priority < element.priority) {
            swapIndex = rightChildIndex;
          }
        }
      } else if (leftChild != null) {
        if (leftChild.priority < element.priority) {
          swapIndex = leftChildIndex;
        }
      } else if (rightChild != null) {
        if (rightChild.priority < element.priority) {
          swapIndex = rightChildIndex;
        }
      }

      if (swapIndex !== null) {
        this.values[index] = this.values[swapIndex];
        this.values[swapIndex] = element;
      }
    }
  }
}

const priorityQueue = new PriorityQueue();
priorityQueue.enqueue('scratch  wound', 5);
priorityQueue.enqueue('sorethroat', 3);
priorityQueue.enqueue('fracture', 1);
priorityQueue.enqueue('cough', 4);
priorityQueue.enqueue('migraine', 2);
console.log(priorityQueue.dequeue());
console.log(priorityQueue.values);
