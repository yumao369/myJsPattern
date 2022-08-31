Array.prototype.mySome = function (callback, thisArg) {
  let result = false
  let len = this.length
  for (let i = 0; i < len; i++) {
    result = callback.call(thisArg, this[i], i, this)
    if (result) {
      return result
    }
  }
  return result
}

//test

const arr = [10, 20, 30]
const res1 = arr.mySome(function (item) {
  return item < 0
})
const res2 = arr.mySome(function (item) {
  return item < 20
})
console.log(res1, res2)