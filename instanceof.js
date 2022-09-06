//read the article below to understand prototype
//https://blog.csdn.net/qq_45848004/article/details/123549141?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522166193267816781647548658%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=166193267816781647548658&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduend~default-1-123549141-null-null.142^v44^pc_rank_34_default_23&utm_term=js%E4%B8%AD%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0%E5%92%8C%E5%8E%9F%E5%9E%8B%E9%93%BE&spm=1018.2226.3001.4187
function myInstanceof (target, origin) {
  if (typeof target !== "object" || target === null) return false;
  if (typeof origin !== "function")
    throw new TypeError("origin must be function");
  let proto = Object.getPrototypeOf(target);
  while (proto) {
    if (proto === origin.prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
  return false;
}

const abc = [1, 2, 3]
const abcd = { a: 1 }
console.log(myInstanceof(abc, Array))
console.log(myInstanceof(abcd, Object))