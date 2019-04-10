function getPromise(i) {
  return new Promise((resolve, reject) => i % 2 ? resolve(i) : reject(new Error(i)));
}

function onSuccess(result) {
  console.log("success", result);
}

function onError(e) {
  console.log('error', e);
}

getPromise(1)
  .then(onSuccess)  //resolveしてるからそのままコールバックが呼ばれる
  .then(() => 
    getPromise(2)
      .then(onSuccess) //resolveしないからcatchに飛ぶ
      .catch(onError)
  )
  .catch(onError)