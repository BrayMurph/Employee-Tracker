const inquirer = require("inquirer");
const mysql = require("mysql2");
const table = require("console.table");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    database: "employee_db",
    user: "root",
    password: "Cakes",
    
});



connection.connect(function (err) {
    if (err) {
     throw err;
    } 
    console.table("------------ Employee Manager ------------")
    startApp();
});

function startApp() {
    inquirer
        .prompt({
            type: "list",
            name: "task",
            message: "What do you want to do?",
            choices: ["View All Departments", "View All Roles", "View All Employees", "Add a Department", "Add a Role", "Add an Employee", "Update an Employee Role", "Quit"]
        })
        .then(function ({task}) {
            switch (task) {
                case "View All Departments":
                    viewallDepartments();
                    break;
                case "View All Roles":
                    viewallRoles();
                    break;
                case "View All Employees":
                    viewEmployee();
                    break;
                case "Add a Department":
                    addDepartment();
                    break;
                case "Add a Role":
                    addRole();
                    break;
                case "Add an Employee":
                    addEmployee();
                    break;
                case "Update an Employee Role":
                    updateRole();
                    break;
                case "Quit":
                    connection.end();
                    break;
            }
        });
}

function viewallDepartments() {

}

function viewallRoles() {

}

const viewEmployee = async () => {
    console.log("   --------- Now Viewing Employees ---------");
    let query = "SELECT * FROM employee";
    connection.query(query, function (err, res) {
        if (err) {
            throw err;
        }
        let employeeArr = [];
        res.forEach(employee => employeeArr.push(employee));
        console.table(employeeArr);
        console.log("Viewed Employees");
        startApp();
    });
}

function addDepartment() {

}

function addRole() {

}

function addEmployee() {

}

function updateRole() {

}