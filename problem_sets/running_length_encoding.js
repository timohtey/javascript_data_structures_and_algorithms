function encode(string) {
  let previous = null;
  let counter = 0;
  let result = '';

  for (const s of string) {
    if (previous === null) {
      counter++;
    } else if (s === previous) {
      counter++;
    } else {
      result += `${counter}${previous}`;
      counter = 1;
    }

    previous = s;
  }

  result += `${counter}${previous}`;

  return result;
}

// expected output is: 4a2b3c2a2c1b
console.log(encode('aaaabbcccaaccb'));
