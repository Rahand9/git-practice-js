const { rearrangeName } = require("./stringUtils");
const { validateUser } = require("./validators");

// Demo outputs:
console.log(rearrangeName("Doe, Jane"));           // "Jane Doe"
console.log(rearrangeName("SingleName"));          // "SingleName"

console.log(validateUser("alice1", 3));            // true
console.log(validateUser("1alice", 3));            // false (starts with number)
console.log(validateUser("a!", 1));                // false (non-alnum)
