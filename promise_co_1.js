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

//coの中でreturnするとthenと同じ処理になる
co(function *(){
  return yield getPromise(1);
})
.then(onSuccess).catch(onError);  //resolveするからthenのコールバック

co(function *(){
  return yield getPromise(2);
})
.then(onSuccess).catch(onError);  //rejectするからcatchの方へ飛ぶ