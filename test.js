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
      console.log(func + ' ' + Obj[func]());
    } else {
      console.log(func + ' ' + Obj[func]);
    }
  }
}

init(profile);

class requestBuild {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  sendReqeust() {
    console.log(this.name + ' ' + this.year);
    function moreInfo() {
      console.log('your car is ' + this.name + ' ' + this.year);
    }
    moreInfo();
  }
}

const request = new requestBuild('benz', 1994);
request.sendReqeust();
