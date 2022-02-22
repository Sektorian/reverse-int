module.exports = function reverse (n) {
  const arr1 = String(n).split('');
  let arr2 = [];
  let result;
  for (let i = 0; i < arr1.length; i++) {
    arr2.unshift(arr1[i]);
  }
  result = parseInt(arr2.join(''));
  return result;
}
