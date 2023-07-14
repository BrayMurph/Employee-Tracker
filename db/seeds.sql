USE employee_db;

INSERT INTO department (id, names)
VALUES (001, "Sales");
INSERT INTO department (id, names)
VALUES (002, "Engineering");
INSERT INTO department (id, names)
VALUES (003, "Finance");
INSERT INTO department (id, names)
VALUES (004, "legal");

INSERT INTO role (id, title, salary, department_id)
VALUES (01, "Lead Sales Associate", 120000, 1);
INSERT INTO role (id, title, salary, department_id)
VALUES (02, "Lead Engineer", 140000 , 2);
INSERT INTO role (id, title, salary, department_id)
VALUES (03, "Software Engineer", 110000, 2);
INSERT INTO role (id, title, salary, department_id)
VALUES (04, "Junior Software Engineer", 60000, 2);
INSERT INTO role (id, title, salary, department_id)
VALUES (05, "Accountant", 80000, 3);
INSERT INTO role (id, title, salary, department_id)
VALUES (06, "Legal Team Associate", 130000, 4);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Jade", "Weiss", 01, null); 
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (2, "Sam", "Gay", 03, null);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (3, "Ruby", "Shiele", 04, 3);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (4, "Will", "Bill", 02, null);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (5, "Tom", "Cromperton", 03, 4);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (6, "Sheen", "Willy", 04, 4);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (7, "Dave", "Whomp", 05, 1);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (8, "Krave", "Trimpe", 06, null);