# _funge

IP: Instruction Pointer

IPD: Instruction Pointer Direction

[a, b, c...]: Action arguments, in the order they are in the stack.

#: Greedy (Removes the value from the stack)

|------------------------------------------------------------------------------------------------|

"^": []; Sets the IPD to up.

">": []; Sets the IPD to right.

"v": []; Sets the IPD to down.

"<": []; Sets the IPD to left.

"/": []; Reflects the IPD through y = x.

"\": []; Reflects the IPD through y = -x.

"_": [x]; Compares x to 0, and sets the IPD to left if equal, else right.

"|": [x]; Comapres x to 0, and sets the IPD to down if equal, else up.

"?": [x]; Compares x to 0, and sets the IPD to down if equal.

"!": [#x]; Compares x to 0, and sets the IPD to down if equal.

"J": [#y, #x]; Sets the IP location equal to the coordinates (x, y).

"r": []; Sets the IPD to a random direction.

"=": [#x, #y]; Compares x to y, and if they are equal, pushes a 1 to the stack, else pushes a 0.

"G": [#y, #x]; Compares x to y, and if x is greater than y, pushes a 1 to the stack, else pushes a 0.

"L": [#y, #x]; Compares x to y, and if x is less than y, pushes a 1 to the stack, else pushes a 0.

"a": [#x, #y]; Adds the values of x and y, and pushes the result to the stack.

"s": [#y, #x]; Subtracts the value of y from the value of x and pushes the result to the stack.

"m": [#x, #y]; Multiplies the values of x and y and pushes the result to the stack.

"d": [#y, #x]; Divides the value of x by the value of y and pushes the result to the stack.

"%": [#y, #x]; Performs x % y and pushes the reuslt to the stack.

"e": [#y, #x]; Raises the value of x to the value of y and pushes the result to the stack.

"&": [#x, #y]; Performs a bitwise AND on the values of x and y and pushes the result to the stack.

"~": [#x, #y]; Performs a bitwise OR on the values of x and y and pushes the result to the stack.

"U": [#x]; Performs a bitwise NOT on the value of x and pushes the result to the stack.

"I": [x]; Increments x by 1.

"D": [x]; Decrements x by 1.

"+": [#x]; Removes x from the stack.

"f": []; Reverses the stack.

"*": [x]; Pushes the value of x to the stack.

")": [#y, #x]; Pushes the value of y to the stack, followed by the value of x.

"g": [#y, #x]; Pushes the ASCII value of the character at the coordinates (x, y) to the stack.

"p": [#c, #y, #x]; Sets the character at the coordinates (x, y) to the character specified by the ASCII value of c.

".": [#x]; Outputs the value of x.

":": [#x]; Outputs the character specified by the ASCII value of x.

",": []; Pushes 8 bits of user input to the stack.

";": []; Pushes an 8 bit ASCII Character Code from user input to the stack.

"C": []; Empties the stack.

|------------------------------------------------------------------------------------------------|

Run Command:

node main.js [binding file] [action file] [program file]

e.g. node main.js ./bindings.json ./actions.js ./code.txt  
