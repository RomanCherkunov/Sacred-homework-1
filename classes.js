class Test {
  arr = [];
    sum = 0;
  constructor(num) {
    this.arr.push(num);
  }

  log(text, arr) {
    console.log(text, " ", arr);
  }

  a() {
    return this.arr
  }

  get amount() {
    return this.calc();
  }

  set add(num) {
    this.arr.push(num);
    this.log("added num is ", num);
    // console.log("added num is ", num);
  }

  calc() {
    let sum = 0;
    for (let num of this.arr) {
      sum += num;
    }
    
    console.log("current sum is ", this.sum);
    return this.sum
  }
}

const test = new Test(10);
test.add = 20;
test.add = 30;
test.calc();
 console.log(test.amount) 
// test.log('current arr is ', test.arr)

class ChildTest extends Test {
  constructor() {
    super();
  }

  childLog() {
    super.log("test", 10);
  }
}

const child = new ChildTest();
child.childLog();
