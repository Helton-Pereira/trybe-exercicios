USE pixar;

SELECT * FROM movies;
SELECT * FROM box_office;
SELECT * FROM theater;

-- 1 
SELECT m.title, bo.domestic_sales, bo.international_sales
FROM movies m
INNER JOIN box_office bo ON m.id = bo.movie_id;

-- 2
SELECT m.title, (bo.domestic_sales + bo.international_sales)
FROM movies m
INNER JOIN box_office bo ON m.id = bo.movie_id
WHERE bo.domestic_sales < bo.international_sales;

-- 3
SELECT m.title, bo.rating
FROM movies m
INNER JOIN box_office bo ON m.id = bo.movie_id
ORDER BY bo.rating DESC;

-- 4
SELECT t.*, m.*
FROM theater t
LEFT JOIN movies m ON t.id = m.theater_id
ORDER BY t.name;

-- 5
SELECT t.*, m.*
FROM theater t
RIGHT JOIN movies m ON m.theater_id = t.id
ORDER BY t.name;

-- 6
SELECT  m.*, t.name, t.location
FROM movies m
INNER JOIN theater t ON m.theater_id = t.id
INNER JOIN box_office bo ON m.id = bo.movie_id
WHERE m.theater_id IS NOT NULL AND bo.rating > 8;