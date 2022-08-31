//method 1
function deduplicate1 (arr) {
  const deArr = arr.filter((item, index, array) => {
    return array.indexOf(item) === index
  })
  return deArr
}

//method 2
const deduplicate2 = (arr) => [...new Set(arr)]

const testArr = [1, 1, 1, 2, 3, 4, 4]

const deArr1 = deduplicate1(testArr)
const deArr2 = deduplicate2(testArr)

console.log(deArr1, deArr2)

