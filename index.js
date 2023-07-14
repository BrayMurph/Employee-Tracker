const inquirer = require("inquirer");
const mysql = require("mysql2");
const table = require("console.table");
const { start } = require("repl");

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
    console.log("   -------- Now Viewing Departments --------");
    let query = "SELECT * FROM department";
    connection.query(query, function (err, res) {
        if (err) {
            throw err;
        }
        let departmentArr = [];
        res.forEach(department => departmentArr.push(department));
        console.table(departmentArr);
        console.log("Viewed Employees");
        startApp();
    });
}

function viewallRoles() {
    console.log("   ---------- Now Viewing Roles ----------");
    let query = "SELECT * FROM role";
    connection.query(query, function (err, res) {
        if (err) {
            throw err;
        }
        let roleArr = [];
        res.forEach(role => roleArr.push(role));
        console.table(roleArr);
        console.log("Viewed Employees");
        startApp();
    });
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
    console.log("----- Now Adding Employee -----");
    let roles = connection.query("SELECT * FROM role");
    let managers = connection.query("SELECT * FROM employee");
    let answer = inquirer.prompt([
        {
            name: "firstName",
            type: "input",
            message: "Give First Name of Employee"
        },
        {
            name: "lastName",
            type: "input",
            message: "Give Last Name of Employee"
        },
        {
        
        },
        {
           
        }
    ])

    let result = connection.query("INSERT INTO employee SET ?", {
        first_name: answer.firstName,
        last_name: answer.lastName,
        role_id: (answer.employeeRole),
        manager_id: (answer.employeeManager)
    });

    console.log(`${answer.firstName} ${answer.lastName} added successfully.`)
    startApp();
}

function updateRole() {

}