const inquirer = require("inquirer");
const mysql = require("mysql");

const connection = mysql.createConnection({
    database: "employee_db",
    user: "root",
    password: "Cakes",
    host: "localhost",
    port: 3306
});

connection.connect(function (err) {
    if (err) {
        throw err;
    }
    console.log(`------------ Employee Manager ------------`);
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

function viewEmployee() {

}

function addDepartment() {

}

function addRole() {

}

function addEmployee() {

}

function updateRole() {

}