import getType from './getType'

console.log(typeof "moonlab!") 
console.log(typeof 123)
console.log(typeof true)
console.log(typeof undefined)
console.log(typeof null)

console.log(getType(123))
console.log(getType(false))
console.log(getType([]))
console.log(getType({}))