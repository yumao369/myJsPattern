class myPromise {
  static PENDING = 'pending';
  static FULFILLED = 'fulfilled';
  static REJECTED = 'rejected';
  constructor (func) {
    this.PromiseState = myPromise.PENDING;
    func(this.resolve, this.reject);
  }
  resolve () {
    if (this.PromiseState === myPromise.PENDING) {
      this.PromiseState = myPromise.FULFILLED;
    }
  }
  reject () {
    if (this.PromiseState === myPromise.PENDING) {
      this.PromiseState = myPromise.REJECT;
    }
  }
}