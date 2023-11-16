// New Object -> Object.prototype
const objA = {
  chaveA: "A",
  //   _proto_: Object.prototype
};

// objA.__proto__ === Object.prototype
// true

const objB = {
  chaveB: "B",
  //   _proto_: chaveA: "A"
};

const objC = new Object();

objC.chaveC = "C";

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);
console.log(objC.chaveA);
console.log(objC.chaveB);
