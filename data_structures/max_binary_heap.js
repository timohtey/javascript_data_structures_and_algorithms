class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  // O(log n)
  insert(value) {
    this.values.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.values.length - 1;
    let parentIndex = Math.floor((index - 1) / 2);

    while (this.values[parentIndex] < this.values[index]) {
      const temp = this.values[parentIndex];
      this.values[parentIndex] = this.values[index];
      this.values[index] = temp;
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }

  // O(log n)
  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }

  sinkDown() {
    const length = this.values.length;
    let parentIndex = 0;

    while (true) {
      const element = this.values[parentIndex];
      let leftChildIndex = 2 * parentIndex + 1;
      let rightChildIndex = 2 * parentIndex + 2;
      let leftChild =
        leftChildIndex < length ? this.values[leftChildIndex] : null;
      let rightChild =
        rightChildIndex < length ? this.values[rightChildIndex] : null;
      let swap = null;

      if (leftChild > rightChild) {
        if (element < leftChild) {
          swap = leftChildIndex;
        }
      } else {
        if (element < rightChild) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) {
        break;
      }

      this.values[parentIndex] = this.values[swap];
      this.values[swap] = element;
      parentIndex = swap;
    }
  }
}

const maxBinaryHeap = new MaxBinaryHeap();
maxBinaryHeap.insert(65);
maxBinaryHeap.insert(58);
maxBinaryHeap.insert(45);
maxBinaryHeap.insert(31);
maxBinaryHeap.insert(15);
maxBinaryHeap.insert(44);
maxBinaryHeap.insert(53);
maxBinaryHeap.insert(40);
console.log(maxBinaryHeap.extractMax());
console.log(maxBinaryHeap.values);
