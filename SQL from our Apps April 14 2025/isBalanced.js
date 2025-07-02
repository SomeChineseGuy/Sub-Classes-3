/*
  Given a str implement the isBalance function
  Your str will always be {}
  "{{{}}}" // true
  "}{}}{" // false
  "{}{}{}" // true
  "{{{{}" // false
  "{{}}}}}}}" // false
  "}{" // false
  "{}}{" // false
  Think of you edge cases
  "" 
  
  "{{{{{{{"
  "}}}}}}}"
  Edge cases when it will ALWAYS Be false
  "}"
  "{"
  "}{}{" Starts with closing
  "{}{}{" Ending with opening
  "{}}" if the length of the str is ODD

[x, o, x] 0
[o, o, x] 0
[x, o, x] 0
0. 0  0. 0
*/