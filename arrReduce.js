Array.prototype.myReduce = function (callback, intailvalue, thisArg) {
  let result = undefined
  let len = this.length
  if (intailvalue) {
    result = intailvalue
    for (let i = 0; i < len; i++) {
      result = callback.call(thisArg, result, this[i], i, this)
    }
  } else {
    result = this[0]
    for (let i = 1; i < len; i++) {
      result = callback.call(thisArg, result, this[i], i, this)
    }
  }
  return result
}

//test

const arr = [3, 4, 5]

let result = arr.myReduce(function (prev, cur, index, arr) {
  console.log(prev, cur, index)
  return prev + cur
}, 2)

console.log(result)

const array = [1, 4, 2, 5, 6, 9, 3]
const max = array.myReduce(function (prev, cur) {
  const result = prev > cur ? prev : cur
  return result
})
const min = array.myReduce(function (prev, cur) {
  const result = prev < cur ? prev : cur
  return result
})
console.log(max, min)

const arraydupli = [1, 2, 3, 4, 5, 5, 5]
let arrdedu = arraydupli.reduce(function (prev, cur) {
  if (!prev.includes(cur)) {
    prev.push(cur)
  }
  return prev
}, [])
console.log(arrdedu)