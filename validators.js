// Return true if username is valid, else false.
// Rules:
// - must be a string
// - length >= minLen
// - only letters and numbers
// - cannot start with a number
function validateUser(username, minLen) {
  if (typeof username !== "string") {
    throw new TypeError("username must be a string");
  }
  if (minLen < 1) {
    throw new RangeError("minLen must be at least 1");
  }
  if (username.length < minLen) return false;
  if (!/^[a-zA-Z0-9]+$/.test(username)) return false;
  if (/^[0-9]/.test(username)) return false;
  return true;
  console.log("hello");
}

module.exports = { validateUser };
