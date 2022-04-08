CREATE EXTENSION IF NOT EXISTS "uuid-ossp"

CREATE TABLE IF NOT EXISTS tabela_teste(
	name VARCHAR(50)
);

INSERT INTO tabela_teste (name) VALUES ('Gabriel'), ('Fabio');

-- Comentário single line

/* 
	Comentario multi line
*/ 

CREATE TABLE IF NOT EXISTS users(
  -- id BIGSERIAL PRIMARY KEY,
  id uuid PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),
  "name" VARCHAR(30) NOT NULL,
  "birth_date" DATE NOT NULL,
  "created_at" TIMESTAMPTZ DEFAULT NOW(),
  "height" DECIMAL,
  "module" VARCHAR(2)
);

INSERT INTO
		users ("name", "birth_date", "height", "module")
VALUES
		('Gabriel', '2001-05-28', 1.80, 'M4'),
        ('Ivan', '1998-06-14', 1.78, 'M3'),
        ('Fabio', '1997-03-24', 1.75, 'M2'),
        ('Chrystian', '1997-03-24', 1.85, 'Q3');
        
SELECT * FROM users;

SELECT * FROM users WHERE "height" > 1.60;

SELECT * FROM users WHERE "height" < 1.80;

SELECT * FROM users WHERE "height" > 1.60 AND "module" = 'M3';

-- Operador LIKE utilizamos como um coringa, e ele é case sensitive
SELECT
	*
FROM
	users
WHERE
	"height" > 1.60
    AND "module" LIKE '%3';
 
--- Buscando usuarios onde a altura é maior que 1.60 e o modulo começa com M
SELECT
	*
FROM
	users
WHERE
	"height" > 1.60
    AND "module" LIKE 'M%';


SELECT
	*
FROM
	users
WHERE
	"height" > 1.60
    AND "module" ILIKE '%q%'