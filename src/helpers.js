function deepClone(anyObject) {
  return JSON.parse(JSON.stringify(anyObject));
}
module.exports = { deepClone };
