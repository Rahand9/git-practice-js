// Rearrange "Last, First" -> "First Last"
function rearrangeName(name) {
  const match = name.match(/^([\w .-]*), ([\w .-]*)$/);
  if (!match) return name;
  const [, last, first] = match;
  return `${first} ${last}`;
}

// simple exports for Node
module.exports = { rearrangeName };
