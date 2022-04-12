DROP TABLE IF EXISTS estados;

CREATE TABLE IF NOT EXISTS estados(
	"id"		BIGSERIAL 	PRIMARY KEY,
	"nome" 		VARCHAR(30) NOT NULL UNIQUE,
	"sigla" 	VARCHAR	 	NOT NULL UNIQUE,
	"capital" 	VARCHAR(50) NOT NULL UNIQUE,
	"regiao" 	VARCHAR(30),
	"populacao"	DECIMAL,
	"area"		DECIMAL,
    -- CHECK (length(sigla) = 2)
	CONSTRAINT check_sigla_len CHECK (length(sigla) = 2)
);

INSERT INTO estados 
	("nome", "sigla", "capital", "populacao", "area", "regiao")
VALUES
	('Santa Catarina', 'SC', 'Florianópolis', 7, 95.1, 'Sul'),
	('Rio Grande do Sul', 'RS', 'Porto Alegre', 11, NULL, 'Sul'),
	('São Paulo', 'SP', 'São Paulo', 44, 248.2, 'Sudeste'),
	('Rio de Janeiro', 'RJ', 'Rio de Janeiro', 16, 43.6, 'Sudeste'),
	('Minas Gerais', 'MG', 'Belo Horizonte', 20.8, NULL, 'Sudeste'), 
	('Bahia', 'BA', 'Salvador', 15, 567.2, 'Nordeste'),
	('Maranhão', 'MA', 'Sao Luis', 6.8, 331, 'Nordeste'),
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

-- Operador de diferença
SELECT
	id, nome, capital
FROM
	estados
WHERE
	nome LIKE capital
	AND id % 2 <> 0;

-- Builtin functions
SELECT MAX(area) maior_area from estados;

SELECT MIN(area) menor_area from estados;

SELECT AVG(area) media from estados;

SELECT AVG(area) media_s from estados WHERE sigla ILIKE '%s%';

-- Ordenação
-- Por padrao ASC
SELECT * FROM estados ORDER BY sigla;

SELECT * FROM estados ORDER BY sigla ASC;
SELECT * FROM estados ORDER BY sigla DESC;

-- Só os primeiros 2, LIMIT sempre por ultimo
SELECT * FROM estados ORDER BY sigla LIMIT 2;

-- Os dois primeiros registros, mas começando a contar a partir do segundo
SELECT * FROM estados ORDER BY sigla LIMIT 2 OFFSET 2;

-- Agrupar

-- Busca a região, faz a contagem dos estados e agrupa elas, evitando duplicados

-- O Group by está sempre junto com uma função builtin
SELECT regiao, count(*) contador_regiao FROM estados GROUP BY regiao;

-- Soma das areas, do agrupamento por região
SELECT regiao, sum(e."area") FROM estados e GROUP BY regiao;

-- Adicionando filtros de forma errada
-- Agrupando dados, não pode ser usado o WHERE
SELECT
	regiao, sum(e."area")
FROM 
	estados e 
GROUP BY regiao 
	WHERE sum(e."area") > 350;

SELECT
	regiao, sum(e."area")
FROM 
	estados e 
GROUP BY regiao 
	HAVING sum(e."area") > 300;

SELECT
	regiao, sum(e."area")
FROM 
	estados e 
GROUP BY regiao 
	HAVING sum(e."area") > 300
ORDER BY sum(e."area") DESC
LIMIT 1;


-- Update

UPDATE
	estados
SET
	"area" = 586
WHERE
	"area" IS NULL
RETURNING *;

-- Alteração estrutural de uma tabela

-- Comando custoso
ALTER TABLE
	estados
ADD COLUMN
	clima VARCHAR(20) DEFAULT 'tropical';

-- Type Casting
ALTER TABLE
	estados
ALTER COLUMN
	populacao
	TYPE INTEGER
	USING populacao::INTEGER;
 

INSERT INTO	estados
	(nome, sigla, capital, populacao, "area", regiao)
VALUES
	('Goiás', 'GO', 'Goiânia', 6, 340, 'Centro Oeste')
RETURNING *;


SELECT * FROM estados;

SELECT sum(populacao) FROM estados;

INSERT INTO	estados
	(nome, sigla, capital, populacao, "area", regiao, clima)
VALUES
	('Goiás', 'GO', 'Goiânia', 6, 340, 'Centro Oeste', 'outro clima'),
	('Goiáss', 'Ga', 'Goiânias', 6, 340, 'Centro Oeste', DEFAULT)
RETURNING *;