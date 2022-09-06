/**
 * the implemention of object.create
 * Object.create =  function (o) {
    var F = function () {};
    F.prototype = o;
    return new F();
  };
 */

//https://juejin.cn/post/6844903937405878280

function myNew (obj, ...args) {
  const newObj = Object.create(obj.prototype)
  const result = obj.apply(newObj, args)
  return typeof result === 'object' ? result : newObj
}

//test
function Person (firtName, lastName) {
  this.firtName = firtName;
  this.lastName = lastName;
}

Person.prototype.getFullName = function () {
  return `${this.firtName} ${this.lastName}`;
};

const tb = new Person('peter', 'trump');
console.log(tb);

const tb2 = myNew(Person, 'peter', 'trump')
console.log(tb2)