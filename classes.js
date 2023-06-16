class User {
  receivedCash = [];

  constructor(cash) {
    this.addCash = cash;
  }

  log() {
    console.log("received cash array ======>", this.receivedCash);
  }

  get getCash() {
    this.calc();
  }

  set addCash(cash) {
    this.receivedCash.push(cash);
    this.log();
    console.log("you get ", cash);
  }

  calc() {
    let sum = 0;
    for (let num of this.receivedCash) {
      sum += num;
    }
    console.log("current cash is ", sum);
  }
}

const user = new User(10);

user.addCash = 20;
user.addCash = 30;
user.getCash;

class SuperUser extends User {
  receivedCash = [];
  constructor(cash) {
    super(cash);
    this.receivedCash.push(cash);
  }

  addCashSuper(cash) {
    super.addCash = cash * 2;
  }
}

const superUser = new SuperUser(100);

superUser.addCashSuper(200);
superUser.addCashSuper(300);
superUser.getCash;
