function getPromise(i) {
  return new Promise((resolve, reject) => i % 2 ? resolve(i) : reject(new Error(i)));
}

function onSuccess(result) {
  console.log("success", result);
}

function onError(e) {
  console.log('error', e);
}

const co = require('co');

co(function *(){
  onSuccess(yield getPromise(1));  //この処理がresolveしてから
  onSuccess(yield getPromise(2));   //こっちの処理をしに移る
})
.catch(onError);

//coの中でreturnするとthenと同じ処理になる
co(function *(){
  return yield getPromise(1);
})
.then(onSuccess).catch(onError);