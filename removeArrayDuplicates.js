var arr = ["apple", "mango","apple", "orange", "mango", "mango"];


function removeDuplicates(arr) {
  return arr.filter((item, index) =>  {
    console.log(arr.indexOf(item),index)
    return arr.indexOf(item) === index});
}

function removeDuplicates(arr) {
  var unique = arr.reduce(function (acc, curr) {
      if (!acc.includes(curr))
          acc.push(curr);
      return acc;
  }, []);
  return unique;
}
console.log(removeDuplicates(arr));