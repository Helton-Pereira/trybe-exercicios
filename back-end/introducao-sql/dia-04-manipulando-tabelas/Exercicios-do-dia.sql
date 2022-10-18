USE pixar;
DESCRIBE Movies;
DESCRIBE BoxOffice;
SELECT * FROM Movies;
SELECT * FROM BoxOffice;

-- correções do exercício 2 
DELETE FROM BoxOffice
WHERE domestic_sales = 450; 

UPDATE BoxOffice
SET movie_id = 9
WHERE rating = 6.8;

INSERT INTO Movies(title, director, year, length_minutes)
VALUES 
	('Monstros SA', 'Peter Docter', 2001, 92),
    ('Procurando Nemo', 'John Lasseter', 2003, 107),
    ('Os Incríveis', 'Bradi Bird', 2004, 116),
    ('WALL-E', 'Pete Docter', 2006, 104);
    
INSERT INTO BoxOffice(movie_id, rating, domestic_sales, international_sales)
VALUES (9, 6.8, 450000000, 370000000);

UPDATE Movies
SET director = 'Andrew Staton'
WHERE id = 9;

UPDATE Movies
SET title = 'Ratatoing'
WHERE title = 'ratatui';

INSERT INTO BoxOffice(movie_id, rating, domestic_sales, international_sales)
VALUES (8, 8.5, 300000000, 250000000),
		(10, 7.4, 460000000, 510000000),
        (11, 9.9, 290000000, 280000000);
        
DELETE FROM BoxOffice
WHERE movie_id = 11;

DELETE FROM Movies
WHERE title = 'WALL-E';

SELECT * FROM Movies
WHERE director = 'Andrew Staton';

DELETE FROM BoxOffice
WHERE movie_id IN (2, 9);

DELETE FROM Movies
WHERE director = 'Andrew Staton';

UPDATE BoxOffice
SET rating = 9.0
WHERE domestic_sales > 400000000;

UPDATE BoxOffice
SET rating = 6.0
WHERE international_sales < 300000000 AND domestic_sales > 200000000;

SELECT * FROM Movies
WHERE length_minutes < 100;

DELETE FROM BoxOffice
WHERE movie_id IN (1, 6, 7, 8);

DELETE FROM Movies
WHERE id IN (1, 6, 7, 8);