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

//これはあんまり良くわからん、loader.jsでthrowされたerrorを受け取る
co(function *(){
  let r = yield getPromise(1);
  console.log('try', r);
  return r
})
.then(onSuccess)
.catch(onError)
