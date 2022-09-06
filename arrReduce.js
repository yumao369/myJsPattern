//the article below is the explanation of reduce function
//https://blog.csdn.net/yuanwen52/article/details/118418576?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522166186431816782248569681%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=166186431816782248569681&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduend~default-1-118418576-null-null.142^v42^pc_rank_34_1,185^v2^control&utm_term=js%20%E6%95%B0%E7%BB%84reduce&spm=1018.2226.3001.4187
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

