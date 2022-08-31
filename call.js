//call 用法
let obj = {
  name: 'peter',
  age: 25
}

function add (...args) {
  console.log(this.name)
  console.log(args)
}

add.call(obj, 1, 2, 3)
//output
//{name:'peter',age:25}
//[1,2,3]

//implement call
Function.prototype.myCall = function (thisArg, ...args) {
  let result = undefined
  let fn = this
  thisArg = thisArg ? Object(thisArg) : window
  let symbol = Symbol()
  thisArg[symbol] = fn
  args = args ? args : []
  let symboles = Object.getOwnPropertySymbols(thisArg)
  for (let key of symboles) {
    result = thisArg[key](...args)
    delete thisArg[key]
  }
  return result
}

add.myCall(obj, 1, 2, 3)