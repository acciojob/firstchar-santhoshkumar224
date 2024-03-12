function firstChar(str) {
    for (let char of str) {
        if (char !== ' ') {
            return char;
        }
    }
    return '';
}

// Test cases
console.log(firstChar(' Rosa Parks ')); // Output: 'R'
console.log(firstChar(' Hello World ')); // Output: 'H'
console.log(firstChar(' ')); // Output: ''
console.log(firstChar('')); // Output: ''
