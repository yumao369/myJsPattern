class myPromise {
  static PENDING = 'pending'
  static FULFILLED = 'fulfilled'
  static REJECTED = 'rejected'
  constructor (func) {
    this.PromiseState = myPromise.PENDING
    this.PromiseResult = null
    this.onFulfilledCallbacks = []
    this.onRejectedCallbacks = []
    try {
      func(this.resolve.bind(this), this.reject.bind(this))
    } catch (error) {
      console.log(error)
      this.reject(error)
    }
  }
  resolve (result) {
    if (this.PromiseState === myPromise.PENDING) {
      this.PromiseState = myPromise.FULFILLED
      this.PromiseResult = result
      this.onFulfilledCallbacks.forEach(callback => {
        callback(result)
      })
    }
  }
  reject (reason) {
    if (this.PromiseState === myPromise.PENDING) {
      this.PromiseState = myPromise.REJECTED
      this.PromiseResult = reason
      this.onRejectedCallbacks.forEach(callback => {
        callback(reason)
      })
    }
  }
  then (onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
    onRejected = typeof onRejected === 'function' ? onRejected : reason => {
      throw reason
    }
    if (this.PromiseState === myPromise.PENDING) {
      this.onFulfilledCallbacks.push(onFulfilled)
      this.onRejectedCallbacks.push(onRejected)
    }
    if (this.PromiseState === myPromise.FULFILLED) {
      setTimeout(() => {
        onFulfilled(this.PromiseResult)
      })
    }
    if (this.PromiseState === myPromise.REJECTED) {
      setTimeout(() => {
        onRejected(this.PromiseResult)
      })
    }
  }
}

console.log(1);
let promise1 = new myPromise((resolve, reject) => {
  console.log(2);
  setTimeout(() => {
    console.log('A', promise1.PromiseState);
    resolve('这次一定');
    console.log('B', promise1.PromiseState);
    console.log(4);
  });
})
promise1.then(
  result => {
    console.log('C', promise1.PromiseState);
    console.log('fulfilled:', result);
  },
  reason => {
    console.log('rejected:', reason)
  }
)
console.log(3);

