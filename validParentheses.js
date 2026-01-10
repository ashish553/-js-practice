function isValid(s) {
  const stack = [];
  const map = { ')': '(', ']': '[', '}': '{' };

  for (let ch of s) {
    console.log(ch);
    
    if (ch in map) {
        console.log('inside if map');
        
      if (stack.pop() !== map[ch]) return false;
    } else {
      stack.push(ch);
    }
  }
  return stack.length === 0;
}
console.log(isValid('()[]{}'));
