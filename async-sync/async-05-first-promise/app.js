const button = document.querySelector('button');
const output = document.querySelector('p');

const getPosition = (opts) => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      success => {
        resolve(success);
      },
      error => {
        // it will mark a Promise as failed
        // errors are handled with the second function
        // you are passing to .then()
        // or with .catch()
        reject(error);
      });
  });
  return promise;
}

const setTimer = (duration, message) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!');
      console.log('here ', message);
      // reject('Rejected');
    }, duration);
  });
  return promise;
};

function trackUserHandler() {
  let positionData;
  getPosition()
    .then(posData => {
      positionData = posData;
      // here you can return any kind of data 
      // and will be converted (wrapped) into a Promise
      return setTimer(2000, 'first then');
    })
    .then(data => {
      console.log(data, positionData);
    })
    .catch(err => {
      console.log(err);
    });
  setTimer(1000, 'just timer').then(() => {
    console.log('Timer done!');
  });
  console.log('Getting position...');
}

button.addEventListener('click', trackUserHandler);

// let result = 0;

// for (let i = 0; i < 100000000; i++) {
//   result += i;
// }

// console.log(result);
