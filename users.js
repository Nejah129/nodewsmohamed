const uuid = require("uuid");

const list = [
  { id: uuid.v4(), name: "Mohamed", age: 18 },
  { id: uuid.v4(), name: "Ali", age: 88 },
  { id: uuid.v4(), name: "Edam", age: 25 },

];
// console.log(list);
// console.log(list.find(el=>el.name==="Edam"))
// console.log(module.exports)
// console.log(list.map(el=>el.age).reduce((acc,curr)=>acc+curr)/list.length)
module.exports=list