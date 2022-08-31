function fn (age, sex) {
  console.log(this.name, age, sex);
}
let obj = {
  name: "peter",
};
fn.bind(obj, 26, 'male')();

Function.prototype.myBind = function (thisArg, ...args) {
  let fn = this
  thisArg = thisArg ? Object(thisArg) : window
  args = args ? args : []
  let symbol = Symbol()
  thisArg[symbol] = fn
  function proxyFun () {
    let result = undefined
    let symboles = Object.getOwnPropertySymbols(thisArg)
    for (let key of symboles) {
      result = thisArg[key](...args)
      delete thisArg[key]
      return result
    }
  }
  return proxyFun
}

fn.myBind(obj, 26, 'male')()