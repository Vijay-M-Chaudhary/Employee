function employeeRecords(callback) {

    let xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'employee.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}

function getData() {
    employeeRecords(response => {
        let employeeList = JSON.parse(response);
        let app = document.querySelector('#employeeDetails');
        app.innerHTML = '<ul>' + employeeList.map(employee => {
            return `<li> ${employee.employee_name} - ${employee.employee_age} </li>`;
        }).join('') + '</ul>';
    });
}

getData();

