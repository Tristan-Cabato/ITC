let employeeList = [];

function addEmployee() {
    let name = document.getElementById('employeeName').value;
    let daysWorked = parseFloat(document.getElementById('daysWorked').value);
    let dailyRate = parseFloat(document.getElementById('dailyRate').value);
    let deductionAmount = parseFloat(document.getElementById('deductionAmount').value);

    if (!name || isNaN(daysWorked) || isNaN(dailyRate) || isNaN(deductionAmount)) {
        alert("There are missing inputs");
        return;
    }
    let grossPay = daysWorked * dailyRate;
    let netPay = grossPay - deductionAmount;
    let employee = {
        name: name,
        daysWorked: daysWorked,
        dailyRate: dailyRate,
        grossPay: grossPay,
        deductionAmount: deductionAmount,
        netPay: netPay
    };
    employeeList.push(employee);
    displayEmployees();

    document.getElementById('employeeName').value = '';
    document.getElementById('daysWorked').value = '';
    document.getElementById('dailyRate').value = '';
    document.getElementById('deductionAmount').value = '';
}

function displayEmployees() {
    let tableBody = document.getElementById('payrollTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';

    employeeList.forEach((employee, index) => {
        let row = tableBody.insertRow();
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${employee.name}</td>
            <td>${employee.daysWorked}</td>
            <td>${employee.dailyRate}</td>
            <td>${employee.grossPay}</td>
            <td>${employee.deductionAmount}</td>
            <td>${employee.netPay}</td>
        `;
    });
}

function deleteEmployeeByIndex(index) {
    if (confirm("Are you sure you want to delete this employee?")) {
        employeeList.splice(index, 1);
        displayEmployees();
    }
}

function deleteEmployee() {
    let lineNumber = prompt("Enter the line number of the employee to delete:");

    if (lineNumber && !isNaN(lineNumber) && lineNumber > 0 && lineNumber <= employeeList.length) {
        let index = lineNumber - 1;
        deleteEmployeeByIndex(index);
    } else {
        alert("Invalid line number.");
    }
}
document.getElementById('addEmployeeBtn').addEventListener('click', addEmployee);
document.getElementById('deleteEmployeeBtn').addEventListener('click', deleteEmployee);