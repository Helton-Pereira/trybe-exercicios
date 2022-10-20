SELECT coluna(s) FROM tabela
GROUP BY coluna(s);

SELECT first_name FROM sakila.actor
GROUP BY first_name; -- evita duplicação

SELECT first_name, COUNT(*) FROM sakila.actor
GROUP BY first_name;

SELECT rating, rental_rate, COUNT(1) as total FROM sakila.film
GROUP BY rating, rental_rate 
ORDER BY rating, rental_rate;

-- Média de duração de filmes agrupados por classificação indicativa
SELECT rating, AVG(length)
FROM sakila.film
GROUP BY rating;

-- Valor mínimo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MIN(replacement_cost)
FROM sakila.film
GROUP BY rating;

-- Valor máximo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MAX(replacement_cost)
FROM sakila.film
GROUP BY rating;

-- Custo total de substituição de filmes agrupados por classificação indicativa
SELECT rating, SUM(replacement_cost)
FROM sakila.film
GROUP by rating;

SELECT * FROM  sakila.customer;

SELECT 
    active, COUNT(*)
FROM
    sakila.customer
GROUP BY active;

SELECT 
    active, store_id, COUNT(*)
FROM
    sakila.customer
GROUP BY active , store_id
ORDER BY store_id;

SELECT 
    AVG(rental_duration), rating
FROM
    sakila.film
GROUP BY rating
ORDER BY AVG(rental_duration) DESC; 

SELECT * FROM sakila.address;

SELECT district, COUNT(*) FROM sakila.address
GROUP BY district
ORDER BY COUNT(*) DESC;

SELECT first_name, COUNT(*)
FROM sakila.actor
GROUP BY first_name
HAVING COUNT(*) > 2;

-- Ou, melhor ainda, usando o AS para dar nomes às colunas de agregação,
-- melhorando a leitura do resultado
SELECT first_name, COUNT(*) AS nomes_cadastrados
FROM sakila.actor
GROUP BY first_name
HAVING nomes_cadastrados > 2;

-- Observação: o alias não funciona com strings para o HAVING,
-- então use o underline ("_") para separar palavras
-- Ou seja, o exemplo abaixo não vai funcionar
SELECT first_name, COUNT(*) AS 'nomes cadastrados'
FROM sakila.actor
GROUP BY first_name
HAVING 'nomes cadastrados' > 2;

SELECT rating, rental_rate, COUNT(1) as total FROM sakila.film
GROUP BY rental_rate, rating
HAVING total < 70
ORDER BY rating, rental_rate;

SELECT rating, AVG(length) duracao_media
FROM sakila.film
GROUP BY rating
HAVING duracao_media BETWEEN 115.0 AND 121.50
ORDER BY duracao_media DESC;

SELECT rating, SUM(replacement_cost) soma_substituicao
FROM sakila.film
GROUP by rating
HAVING soma_substituicao > 3950.50
ORDER BY soma_substituicao;