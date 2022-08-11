// Write your solution in this file!
let employee = {
    name: "Man",
    streetAddress:"Hello"
 }
function updateEmployeeWithKeyAndValue(employee, key, value){
 return {...employee,[key]:value,}


}
updateEmployeeWithKeyAndValue(employee,"streetAddress", "11Broadway")
employee

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    // employee.streetAddress = "12Broadway"
 employee[key] = value;
    return employee
}

destructivelyUpdateEmployeeWithKeyAndValue(employee,"streetAddress", "12Broadway")
employee;

function deleteFromEmployeeByKey(employee, key){
    // employee[key] = value;
    
    // return {...employee,[key]:value,}
    const newEmployee = {...employee,key} 
    delete newEmployee.name
    return newEmployee;
}
deleteFromEmployeeByKey(employee,key)

newEmployee;

function destructivelyDeleteFromEmployeeByKey(employee, key){
    // employee = {employee,key} 
    delete employee.name
    return employee;
}
destructivelyDeleteFromEmployeeByKey(employee, key)
employee