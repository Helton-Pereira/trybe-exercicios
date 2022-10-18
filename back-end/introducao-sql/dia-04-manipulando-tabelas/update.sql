SET SQL_SAFE_UPDATES = 0;

USE sakila;

UPDATE sakila.actor
SET first_name = 'JOE'
WHERE actor_id IN (1,2,3);

SELECT * FROM actor;

-- Opção 2 - Especificando como cada entrada será alterada individualmente
UPDATE sakila.actor
SET first_name = (
CASE actor_id WHEN 1 THEN 'JOE' -- se actor_id = 1, alterar first_name para 'JOE'
              WHEN 2 THEN 'DAVIS' -- se actor_id = 2, alterar first_name para 'DAVIS'
              WHEN 3 THEN 'CAROLINE' -- se actor_id = 3, alterar first_name para 'CAROLINE'
	      ELSE first_name -- em todos os outros casos, mantém-se o first_name
END);


-- Exemplo:
UPDATE sakila.staff
SET password = 'FavorResetarSuaSenha123'
WHERE active = 1
ORDER BY last_update
LIMIT 2;

UPDATE actor
SET first_name = 'JULES'
WHERE first_name = 'JULIA';

UPDATE category
SET name = 'Science Fiction'
WHERE name = 'Sci-Fi';

UPDATE film
SET rental_rate = 25.00
WHERE (rating = 'G' OR rating = 'PG' OR rating = 'PG-13')
	AND length > 100
    AND replacement_cost > 20;

UPDATE film
SET rental_rate = (
CASE 
	WHEN length BETWEEN 0 AND 100 THEN 10.00
	WHEN length > 100 THEN 20.00
		ELSE rental_rate
END);

SELECT * FROM film;
