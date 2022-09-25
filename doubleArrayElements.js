var ogArray = [1, 2, 3, 4, 5];

function doubleEachArrayElement(arr){
   return arr.reduce((doubled, val) => { doubled.push(val* 2); return doubled },[])
}

function doubleEachArrayElementWithMutation(arr){
  return arr.reduce((doubled, val,index) => { doubled[index] *= 2; return doubled },arr)
}

console.log(doubleEachArrayElement(ogArray));

console.log(doubleEachArrayElementWithMutation(ogArray));