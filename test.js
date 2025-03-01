/// this file is to test different methods and strategies
var test = 'ahmed';
var test2 = 'hersi';

const profile = {
  firsName: () => {
    return test;
  },
  lastName: () => {
    return test2;
  },
  other: 'other stuuf',
};

function init(Obj) {
  for (let func in Obj) {
    console.log(typeof Obj[func]);
  }
}

init(profile);
