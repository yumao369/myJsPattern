class myPromise {
  static PENDING = 'pending';
  static FULFILLED = 'fulfilled';
  static REJECTED = 'rejected';
  constructor (func) {
    this.PromiseState = myPromise.PENDING;
    func(this.resolve, this.reject);
  }
  resolve () { }
  reject () { }
}