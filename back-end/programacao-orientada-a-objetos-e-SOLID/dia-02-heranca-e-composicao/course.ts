class Superclass {
  public isSuper: boolean

  constructor() {
    this.isSuper = true
  }

  public sayHello() {
    console.log('Olá mundo!')
  }
}

class Subclass extends Superclass {
  constructor() {
    super();
    this.isSuper = false;
  }
}

const obj1 = new Superclass();
const obj2 = new Subclass()

function myFunc(obj: Superclass) {
  obj.sayHello();
  console.log(obj.isSuper ? 'Super!' : 'Sub!');
}

myFunc(obj1);
myFunc(obj2);