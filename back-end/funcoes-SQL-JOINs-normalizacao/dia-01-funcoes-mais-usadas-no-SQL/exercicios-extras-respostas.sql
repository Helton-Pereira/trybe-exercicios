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
SELECT district, COUNT(*) FROM address
GROUP BY district;

-- 4
SELECT MONTH(payment_date), YEAR(payment_date), SUM(amount) FROM payment
GROUP BY MONTH(payment_date), YEAR(payment_date);

-- 5
SELECT amount, COUNT(*) FROM payment
WHERE amount <= 1.99
GROUP BY amount;

-- 6
SELECT SUM(amount), YEAR(payment_date), MONTH(payment_date) FROM payment
GROUP BY MONTH(payment_date), YEAR(payment_date);

SELECT rental_id, COUNT(*) FROM payment
GROUP BY rental_id ORDER BY rental_id DESC;