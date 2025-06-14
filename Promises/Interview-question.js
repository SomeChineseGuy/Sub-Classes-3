/*
  make a function called isBalanced
  your function will take in a string
  that string will ALWAYS be {}
  { or }
  {}{}}
  {}{}{} //true
  {}}{{} // false
  {{{{{{}}}}}}
  }}}}}}{{{{{{
  {}{}{} // true
  {{{}}} //true
  }{ // false
  {{}{}{ // true
  {{{{ // false
  } // false

  if the last is opening { false
  if the first is closing } false
  if odd return false

  Track number of opening and close
  if the numbers don't match return false
  const tracker = 0
  loop through string
  if { 
  tracker + 1
  if }
  tracker - 1
  check if tracker is - 1
  return false

  if the end is not 0
  return false
  if at the end its 0 
  return true
*/

const isBalanced = (string) => {
    let tracker = 0;
    for(const char of string) {
        if(char === "{") tracker += 1;
        if(char === "}") tracker -= 1;
        if(tracker === -1) return false;
    }
    if(tracker > 0) return false;
    return true;
}

console.log(isBalanced("{}{}{}{"));
console.log(isBalanced("{{{{{{}}}}}}"));
console.log(isBalanced("{}{}}"));
console.log(isBalanced("{{}{}{}{}"));



