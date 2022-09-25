function flatten2dArray(arr) {
  return Array.isArray(arr) ? [].concat(...arr) : arr;
}

function flattenMultiDArray(arr) {
  return Array.isArray(arr) ? [].concat.apply([],arr.map(flattenMultiDArray)) : arr;
}

function flattened(arr){
  return Array.isArray(arr)  ?
  arr.reduce(function (emtpyArray, arrItem) {
    return emtpyArray.concat(arrItem);
  }, []) : arr
}

function flattenedMultiDArray(arr){
  return arr.reduce(function (emtpyArray, arrItem) {
    const makeFlat = Array.isArray(arrItem) ? flattenedMultiDArray(arrItem) : arrItem
    return emtpyArray.concat(makeFlat);
  }, []) 
}




let arr = [1,2,3,[4,5,6,[7,8,9]]]

console.log(flatten2dArray(arr))
console.log(flattenMultiDArray(arr))
console.log(flattened(arr))
console.log(flattenedMultiDArray(arr))
