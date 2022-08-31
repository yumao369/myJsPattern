let obj = {
  name: 'peter',
  age: 25
}

function add (...args) {
  console.log(this.name)
  console.log(args)
}

add.apply(obj, [1, 2, 3])

//不能用箭头函数，箭头函数没有this，它的this是继承自父执行上下文里面的this
//Function.prototype.myApply = (thisArg, args) => {
Function.prototype.myApply = function (thisArg, args) {
  let result = undefined
  console.log(this)
  let fn = this
  thisArg = thisArg ? Object(thisArg) : window
  let symbol = Symbol()
  thisArg[symbol] = fn
  args = args ? args : []
  let symboles = Object.getOwnPropertySymbols(thisArg)
  for (let key of symboles) {
    console.log(key, thisArg)
    result = thisArg[key](...args)
    delete thisArg[key]
  }
  return result
}

add.myApply(obj, [1, 2, 3])