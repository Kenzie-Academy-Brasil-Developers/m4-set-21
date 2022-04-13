DROP TABLE IF EXISTS estados;


CREATE TABLE IF NOT EXISTS estados(
  "id" BIGSERIAL PRIMARY KEY,
  "nome" VARCHAR(30) NOT NULL UNIQUE,
  "sigla" VARCHAR NOT NULL UNIQUE,
  "capital" VARCHAR(50) NOT NULL UNIQUE,
  "regiao" VARCHAR(30),
  "populacao" DECIMAL,
  "area" DECIMAL,
  -- CHECK (length(sigla) = 2)
  CONSTRAINT check_sigla_length CHECK (length(sigla) = 2) 
);


INSERT INTO estados
	("nome", "sigla", "capital", "populacao", "area", "regiao")
VALUES
	('Santa Catarina', 'SC', 'Florianópolis', 7, 95.1, 'Sul'),
    ('Rio grande do Sul', 'RS', 'Porto Alegre', 11, NULL, 'Sul'),
    ('São Paulo', 'SP', 'São Paulo', 44, 248.2, 'Sudeste'),
    ('Rio de Janeiro', 'RJ', 'Rio de Janeiro', 16, 43.6, 'Sudeste'),
    ('Minas Gerais', 'MG', 'Belo Horizonte', 20.8, NULL, 'Sudeste'),
    ('Bahia', 'BA', 'Salvador', 15, 567.2, 'Nordeste'),
    ('Maranhão', 'MA', 'São Luis', 6.8, 331, 'Nordeste'),
    ('Espirito Santo', 'ES', 'Vitória', NULL, 20.9, 'Sudeste');

SELECT * FROM estados;

SELECT 
    nome, capital
FROM 
	estados;

SELECT
	id, nome, capital
FROM
	estados
WHERE
	nome LIKE capital;

-- Operador de diferençaa
SELECT
	id,nome, capital
FROM
	estados
WHERE
	nome like capital
    AND id % 2 <> 0;
    
-- Builtin functions

SELECT MAX(area) maior_area from estados;

SELECT MIN(area) menor_area from estados;

SELECT AVG(area) media from estados;

SELECT AVG(area) media_siglas from estados WHERE sigla ILIKE '%m%'

-- Ordenação

SELECT * FROM estados ORDER BY sigla;

SELECT * FROM estados ORDER BY sigla ASC;

SELECT * FROM estados ORDER BY sigla DESC;

SELECT * FROM estados WHERE sigla ILIKE '%m%' ORDER BY populacao ASC;

SELECT * FROM estados ORDER BY sigla LIMIT 2;

SELECT * FROM estados ORDER BY sigla ASC LIMIT 2 OFFSET 2;

SELECT * FROM estados ORDER BY sigla DESC LIMIT 2 OFFSET 2;

-- Agrupar

SELECT regiao, COUNT(*) contador_regiao FROM estados GROUP BY regiao;

SELECT regiao, SUM(e."area") FROM estados e GROUP BY regiao;

-- Adicionando filtro nos agrupamentos
-- Forma errada
SELECT
	regiao, SUM(e."area")
FROM
	estados e
GROUP BY regiao
	WHERE SUM(e."area") > 350;
    
-- Forma correta
SELECT
	regiao, SUM(e."area")
FROM
	estados e
GROUP BY regiao
	HAVING SUM(e."area") > 300;

SELECT
	regiao, SUM(e."area")
FROM
	estados e
GROUP BY regiao
	HAVING SUM(e."area") > 300
ORDER BY SUM(e."area") DESC LIMIT 1;


UPDATE
	estados
SET
	"area" = 580
WHERE
	"area" IS NULL
RETURNING *;


ALTER TABLE
	estados
ADD COLUMN
	clima VARCHAR(20) DEFAULT 'tropical';
    
ALTER TABLE
	estados
ALTER COLUMN
	area
    TYPE INTEGER
    USING area::INTEGER;
    
INSERT INTO estados (nome, sigla, capital, populacao, area, regiao, clima)
VALUES ('Goiás', 'GO', 'Goiânia', 6, 340, 'Centro Oeste', DEFAULT)