SELECT t1.coluna, t2.coluna
FROM tabela1 AS t1
INNER JOIN tabela2 AS t2
ON t1.coluna_em_comum = t2.coluna_em_comum;

SELECT a.first_name, a.actor_id, f.actor_id
FROM sakila.actor AS a
INNER JOIN sakila.film_actor AS f
ON a.actor_id = f.actor_id;

USE sakila;

SELECT * FROM actor;
SELECT * FROM film_actor;
SELECT * FROM film;
SELECT * FROM staff;
SELECT * FROM address;
SELECT * FROM customer;
SELECT * FROM payment;

SELECT a.actor_id, a.first_name, f.film_id
FROM actor a
INNER JOIN film_actor f
ON a.actor_id = f.actor_id;

SELECT sta.first_name, sta.last_name, adr.address
FROM staff sta
INNER JOIN address adr
ON sta.address_id = adr.address_id;

SELECT c.customer_id, c.first_name, c.email, a.address_id, a.address
FROM customer c
INNER JOIN address a
ON c.address_id = a.address_id
ORDER BY c.first_name DESC
LIMIT 100; 

SELECT c.customer_id, c.first_name, c.email, a.address_id, a.address, a.district
FROM customer c
INNER JOIN address a
ON c.address_id = a.address_id
WHERE c.first_name LIKE '%rene%' AND a.district = 'California';

SELECT c.first_name, COUNT(a.address) AS 'Quantidade de endereços'
FROM customer c
INNER JOIN address a
ON c.address_id = a.address_id
WHERE c.active = 1
GROUP BY c.customer_id
ORDER BY first_name DESC, last_name DESC;

SELECT s.first_name, s.last_name, AVG(p.amount)
FROM staff s
INNER JOIN payment p ON s.staff_id = p.staff_id
WHERE YEAR(p.payment_date) = 2006
GROUP BY s.staff_id;

SELECT actor.actor_id, actor.first_name, film_actor.film_id, film.title
FROM actor actor
INNER JOIN film_actor film_actor ON actor.actor_id = film_actor.actor_id
INNER JOIN film film ON film_actor.film_id = film.film_id;