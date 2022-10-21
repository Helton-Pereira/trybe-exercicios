USE hr;

SELECT * FROM employees;

SELECT
    CONCAT(Employee.first_name, " ", Employee.last_name) AS "Nome da Pessoa Colaboradora",
    CONCAT(Manager.first_name, " ", Manager.last_name) AS "Nome Gerente"
FROM
    employees AS Employee
INNER JOIN
    employees AS Manager ON Employee.manager_id = Manager.employee_id;
    
SELECT 
	CONCAT(Employee.first_name, " ", Employee.last_name) AS "Nome da Pessoa Colaboradora",
    CONCAT(Manager.first_name, " ", Manager.last_name) AS "Nome Gerente"
FROM employees Employee
INNER JOIN employees Manager ON Employee.manager_id = Manager.employee_id
WHERE Employee.department_id <> Manager.department_id;

SELECT 
	CONCAT(Manager.first_name, " ", Manager.last_name) AS "Nome Gerente",
    COUNT(*)
FROM employees Employee
INNER JOIN employees Manager ON Employee.manager_id = Manager.employee_id
GROUP BY Manager.employee_id