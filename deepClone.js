const deepClone = (obj) => {
  if (typeof (obj) !== 'object') return
  let newObj = obj instanceof Array ? [] : {}
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof (obj[key]) !== 'object') {
        newObj[key] = obj[key]
      } else {
        newObj[key] = deepClone(obj[key])
      }
    }
  }
  return newObj
}

const obj = { a: '1', b: '2', c: { x: 1 } }
const newObj = deepClone(obj)
newObj.c.x = 2
console.log(obj, newObj)

//这个是简单版本的深拷贝，复杂版本的目前先不考虑