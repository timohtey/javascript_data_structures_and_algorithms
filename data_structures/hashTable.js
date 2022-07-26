class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    const WEIRD_PRIME = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }

    return total;
  }

  // O(1)
  set(key, value) {
    const index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    // Add logic to handle duplicate keys
    this.keyMap[index].push([key, value]);
  }

  // O(1)
  get(key) {
    const index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        const element = this.keyMap[index][i];

        if (element[0] === key) {
          return element;
        }
      }
    }

    return undefined;
  }

  keys() {
    const keys = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          const key = this.keyMap[i][j][0];

          if (!keys.includes(key)) {
            keys.push(key);
          }
        }
      }
    }

    return keys;
  }

  values() {
    const values = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          const value = this.keyMap[i][j][1];

          if (!values.includes(value)) {
            values.push(value);
          }
        }
      }
    }

    return values;
  }
}

const hashTable = new HashTable();
hashTable.set('attribute', 'hello');
hashTable.set('attribute1', 'hello1');
hashTable.set('attribute2', 'hello2');
hashTable.set('attribute3', 'hello3');

console.log(hashTable.values());
console.log(hashTable.keys());
