

Array.prototype.myForEach = function (callback, thisArg) {
  let len = this.length
  for (let index = 0; index < len; index++) {
    callback.call(thisArg, this[index], index, this)
  }
}

let arrList = [1, 3, 5, 9]

arrList.myForEach(function (currentValue, index, arrself) {
  console.log(currentValue, index, arrself, this)
}, { a: 9 })