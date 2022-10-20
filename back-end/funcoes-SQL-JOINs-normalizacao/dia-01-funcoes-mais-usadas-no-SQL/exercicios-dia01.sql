SET SQL_SAFE_UPDATES = 0;

USE hr;

SELECT * FROM employees;

-- 1
SELECT MAX(salary) FROM employees;

-- 2
SELECT MAX(salary) - MIN(salary) FROM employees;

-- 3
SELECT job_id, AVG(salary) media_salarial FROM employees GROUP BY job_id ORDER BY media_salarial DESC;

-- 4
SELECT SUM(salary) FROM employees;

-- 5
SELECT ROUND(MAX(salary), 2), ROUND(MIN(salary), 2), ROUND(SUM(salary), 2), ROUND(AVG(salary), 2) FROM employees;

-- 6
SELECT job_id, COUNT(*) FROM employees
WHERE job_id = 'IT_PROG';

-- 7
SELECT job_id, SUM(salary) FROM employees
GROUP BY job_id;

-- 8 
SELECT job_id, SUM(salary) FROM employees
GROUP BY job_id
HAVING job_id = 'it_prog';

-- 9
SELECT job_id, ROUND(AVG(salary), 2) media_salarial FROM employees
GROUP BY job_id
HAVING job_id <> 'it_prog'
ORDER BY media_salarial DESC;

-- 10
SELECT ROUND(AVG(salary), 2), department_id, COUNT(*) FROM employees
GROUP BY department_id
HAVING COUNT(*) > 10;

-- 11
UPDATE employees
SET phone_number = REPLACE(phone_number, 515, 777);

-- 12
SELECT * FROM employees
WHERE LENGTH(first_name) > 8;

-- 13
SELECT employee_id, first_name, YEAR(hire_date) FROM employees;

-- 14
SELECT employee_id, first_name, DAY(hire_date) FROM employees;

-- 15
SELECT employee_id, first_name, MONTH(hire_date) FROM employees;

-- 16
SELECT CONCAT(UCASE(first_name), ' ', UCASE(last_name)) FROM employees;
-- or
SELECT UPPER(CONCAT(FIRST_NAME, " ", LAST_NAME))
FROM hr.employees;

-- 17
SELECT last_name, hire_date FROM employees
WHERE DATE(hire_date) BETWEEN '1987-07-01' AND '1987-07-31';
-- or
SELECT LAST_NAME _NAME, HIRE_DATE
FROM hr.employees
WHERE MONTH(HIRE_DATE)=7 and YEAR(HIRE_DATE)=1987;

-- 18
SELECT first_name, last_name, DATEDIFF(CURRENT_DATE() , HIRE_DATE) 'days_worked'
FROM employees;