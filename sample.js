const delayTime = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("클럭!");
    }, 1000);
  });
};

async function asyncAwait() {
  const startTime = Date.now();
  await delayTime();
  await delayTime();
  await delayTime();
  await delayTime();
  await delayTime();
  const endTime = Date.now();
  const sec = Math.round((endTime - startTime) / 1000);
  console.log(sec);
}

function promiseThen() {
  const startTime = Date.now();
  delayTime().then(() => {
    delayTime().then(() => {
      delayTime().then(() => {
        delayTime().then(() => {
          delayTime().then((res) => {
            const endTime = Date.now();
            const sec = Math.round((endTime - startTime) / 1000);
            console.log("INSIDE: ", sec);
          });
        });
      });
    });
  });

  const endTime = Date.now();
  const sec = Math.round((endTime - startTime) / 1000);
  console.log("OUTSITE: ", sec);
}

const startTime = Date.now();
asyncAwait();
const endTime = Date.now();
const sec = Math.round((endTime - startTime) / 1000);
console.log("asyncAwait() Sec: ", sec);

promiseThen();
