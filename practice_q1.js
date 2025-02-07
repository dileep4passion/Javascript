// function sum(a, b) {
//   return a + b;
// }
// console.log(sum);
// console.log(sum(1, 2));
// let userName = "sai";
// console.log(`this is example user name: ${userName}`);

// There are 8 basic data types in JavaScript.
// Seven primitive data types:
// number for numbers of any kind: integer or floating-point, integers are limited by ±(253-1).
// bigint for integer numbers of arbitrary length.
// string for strings. A string may have zero or more characters, there’s no separate single-character type.
// boolean for true/false.
// null for unknown values – a standalone type that has a single value null.
// undefined for unassigned values – a standalone type that has a single value undefined.
// symbol for unique identifiers.
// And one non-primitive data type:
// object for more complex data structures.

// The typeof operator allows us to see which type is stored in a variable.

// Usually used as typeof x, but typeof(x) is also possible.
// Returns a string with the name of the type, like "string".
// For null returns "object" – this is an error in the language, it’s not actually an object.

//3 browser-specific functions to interact with visitors:
// alert
// shows a message.
// prompt
// shows a message asking the user to input text. It returns the text or, if Cancel button or Esc is clicked, null.
// confirm
// shows a message and waits for the user to press “OK” or “Cancel”. It returns true for OK and false for Cancel/Esc.

// Numeric conversion rules:

// Value	        Becomes…
// undefined	       NaN
// null	                0
// true and false	  1 and 0
// string	-> Whitespaces (includes spaces, tabs \t, newlines \n etc.) from the start and end are removed. If the remaining string is empty, the result is 0. Otherwise, the number is “read” from the string. An error gives NaN.
//note: the string with zero "0" is true

// console.log(typeof(121212122121n))

// binary, unary and operand

