USE sakila;

INSERT INTO actor (first_name, last_name)
	SELECT first_name, last_name FROM customer LIMIT 5;
    
SELECT * FROM customer;

INSERT INTO category (name) VALUE
	('Jogos'),
    ('Medo'),
    ('Outros');
    
SELECT * FROM category;

INSERT INTO store (manager_staff_id, address_id)
	VALUES(3,3);
	
SELECT * FROM store;