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

//yeildし終わったらgeneratorはvalueがundifinedになって処理を終了してるっぽい
co(function *(){
  try {
    let r = yield getPromise(1);
    console.log('try', r);
    return r
  } catch(e){
    console.log('err', e);
  }
})
.then(onSuccess)
.catch(onError)  //ここのcatchはresolveしてるから呼ばれない
