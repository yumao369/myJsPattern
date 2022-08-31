const flatten1 = (arr) => {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i]))
    } else {
      result.push(arr[i])
    }
  }
  return result
}

const flatten2 = (arr) => {
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
}

const arr = [1, [2, [3]]]

