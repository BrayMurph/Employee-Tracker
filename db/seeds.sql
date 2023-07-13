USE employee_db;

INSERT INTO department (name)
VALUES ("Sales");
INSERT INTO department (name)
VALUES ("Engineering");
INSERT INTO department (name)
VALUES ("Finance");
INSERT INTO department (name)
VALUES ("legal");

INSERT INTO role (title, salary, department_id)
VALUES ("Lead Sales Associate", 120000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Lead Engineer", 140000 , 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Software Engineer", 110000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Junior Software Engineer", 60000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Accountant", 80000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ("Legal Team Associate", 130000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jade", "Weiss", 1, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Sam", "Gay", 3, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Ruby", "Shiele", 4, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Will", "Bill", 2, 5);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Tom", "Cromperton", 3, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Sheen", "Willy", 4, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Dave", "Whomp", 5, 7);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Krave", "Trimpe", 4, null);