USE PecasFornecedores;

SELECT * FROM Pecas
WHERE name LIKE 'gr%';

SELECT * FROM Fornecimentos
WHERE peca LIKE 2
ORDER BY Fornecedor;

SELECT 
    peca AS peça, Fornecedor AS Fornecedor, Preco AS preço
FROM
    Fornecimentos
WHERE
    Fornecedor LIKE '%n%';

SELECT 
    *
FROM
    Fornecedores
WHERE
    name LIKE '%ltda'
ORDER BY name DESC;

SELECT 
    COUNT(*)
FROM
    Fornecedores
WHERE
    code LIKE '%f%';

SELECT 
    *
FROM
    Fornecimentos
WHERE
    preco BETWEEN 15 AND 40
ORDER BY preco;

SELECT * FROM Vendas
WHERE date(order_date) BETWEEN '2018-04-15' AND '2019-07-30';
