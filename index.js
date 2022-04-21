// Write your solution in this file!
const employee = {
  name : "Malik",
  streetAddress : "15 Bob"
};



function updateEmployeeWithKeyAndValue(employee, key, value){
  const newObject = {...employee};
  newObject[key]=value;
  return newObject;
}

console.log(updateEmployeeWithKeyAndValue(employee, "name", "James"));

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
  const newObject = employee;
  newObject[key]=value;
  return newObject;
}

function deleteFromEmployeeByKey(employee,key){
  const newObject = {...employee};
  delete newObject[key];
  return newObject;
}

console.log(destructivelyDeleteFromEmployeeByKey(employee,"name"));

function destructivelyDeleteFromEmployeeByKey(employee,key){
  const newObject = employee;
  delete newObject[key];
  return newObject;
}