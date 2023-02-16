const button = document.querySelector('button');
const output = document.querySelector('p');

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
  navigator.geolocation.getCurrentPosition(
    posData => {
      setTimer(2000, 'geoposition').then(data => {
        console.log(data, posData);
      });
    },
    error => {
      console.log(error);
    }
  );
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
