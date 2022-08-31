Array.prototype.myMap = function (callback, thisArg) {
  let result = []
  let len = this.length
  for (let i = 0; i < len; i++) {
    const newItem = callback.call(thisArg, this[i], i, this)
    result.push(newItem)
  }
  return result
}

const arr = [1, 2, 3, 4]

const newArr = arr.myMap(function (currentValue) {
  const newItem = currentValue + 1
  return newItem
})

console.log(newArr)