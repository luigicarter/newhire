/// this file is to test different methods and strategies
var firsName = 'ahmed';
var lastName = 'hersi';

const profile = {
  firsName: () => {
    return firsName;
  },
  lastName: () => {
    return lastName;
  },
  other: 'other stuff',
};

function init(Obj) {
  for (let func in Obj) {
    if (typeof Obj[func] === 'function') {
      console.log(Obj[func]());
    } else {
      console.log(Obj[func]);
    }
  }
}

init(profile);
