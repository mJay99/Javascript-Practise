const inputStack = []
const outputStack = []

function enqueue(inputStack,item){
   return inputStack.push(item)
}
function getqueue(){
  return inputStack
}
function dequeue(inputStack,outputStack){
  if(!outputStack.length){
    while(inputStack.length){
      let el = inputStack.pop()
      outputStack.push(el) 
    }
  }
  return outputStack.pop()
    
}

console.log(enqueue(inputStack,'a'))
console.log(enqueue(inputStack,'b'))
console.log(enqueue(inputStack,'c'))

console.log(dequeue(inputStack,outputStack))
console.log(dequeue(inputStack,outputStack))
console.log(enqueue(inputStack,'a'))
console.log(dequeue(inputStack,outputStack))
console.log(dequeue(inputStack,outputStack))
console.log(dequeue(inputStack,outputStack))
// dequeue(inputStack,outputStack)
// console.log(getqueue())
// console.log()
// console.log(outputStack)
