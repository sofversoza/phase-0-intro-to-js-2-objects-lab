// Write your solution in this file!
const employee = {
    name: 'Lola',
    streetAddress: 'Sweetwater Ave'
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const copyOfObj = {...employee};
    copyOfObj[key] = value;
    return copyOfObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue() {
    employee.name = 'Sam';
    employee.streetAddress = '12 Broadway';
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newCopy = {...employee};
    delete newCopy[key];
    return newCopy;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}