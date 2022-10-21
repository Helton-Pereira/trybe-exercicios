USE sakila;

SELECT * FROM rental;
SELECT * FROM film;
SELECT * FROM address;
SELECT * FROM payment;

-- 1
SELECT customer_id, ROUND(AVG(DATEDIFF(return_date, rental_date)), 2) FROM rental
GROUP BY customer_id; 

-- 2
SELECT rating, MAX(length), MIN(length), AVG(length) FROM film
WHERE release_year = 2006
GROUP BY rating;

-- 3
SELECT city_id, COUNT(*) FROM address
GROUP BY city_id;

-- 4
SELECT MONTH(payment_date), YEAR(payment_date), SUM(amount) FROM payment
GROUP BY MONTH(payment_date), YEAR(payment_date);

-- 5
SELECT amount, COUNT(*) FROM payment
WHERE amount <= 1.99
GROUP BY amount;

-- or
SELECT amount, COUNT(amount) FROM sakila.payment
GROUP BY amount HAVING amount <= 1.99;

-- 6
SELECT amount, SUM(amount), YEAR(payment_date), MONTH(payment_date) FROM payment
GROUP BY amount, MONTH(payment_date), YEAR(payment_date) ORDER BY SUM(amount) DESC;

-- answer key
SELECT 
  amount,
  SUM(amount) AS `soma`,
  YEAR(payment_date),
  MONTH(payment_date)
FROM
  sakila.payment
GROUP BY amount , YEAR(payment_date) , MONTH(payment_date)
ORDER BY `soma` DESC;