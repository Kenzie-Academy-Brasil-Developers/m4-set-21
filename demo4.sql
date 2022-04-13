CREATE TABLE IF NOT EXISTS users(
  id BIGSERIAL PRIMARY KEY,
  "name" VARCHAR(50) NOT NULL,
  "email" VARCHAR(50) NOT NULL UNIQUE,
  "password_hash" VARCHAR(255),
  "is_creator" BOOLEAN NOT NULL DEFAULT FALSE,
  "watch_time" INTEGER NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS courses(
  id BIGSERIAL PRIMARY KEY,
  "title" VARCHAR(100) NOT NULL,
  "price" DECIMAL(5,2) NOT NULL,
  "duration_hours" INTEGER NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

INSERT INTO users("name", "email", "is_creator", "watch_time")
	VALUES
       	('Ivan', 'ivan@kenzie.com.br', FALSE, 16),
       	('Fabio', 'fabio@kenzie.com.br', FALSE, 22),
       	('Felipe', 'felipe@kenzie.com.br', TRUE, 19),
   		('Alexandre', 'alexandre@kenzie.com.br', TRUE, 10),
    	('Gabriel', 'gabriel@kenzie.com.br', TRUE, 8);

INSERT INTO courses("title", "price", "duration_hours")
	VALUES
       	('Introdução ao Javascript', 39.90, 16),
       	('Trabalhando com Django e Django Rest Framework', 45.50, 40),
       	('ReactJS completo', 99.99, 45),
        ('ReactJS Introdução', 25.99, 15),
        ('NodeJS Introdução', 25.99, 15),
        ('NodeJS - Trabalhando com Adonis', 49.99, 25),
        ('NodeJS - Trabalhando com NestJS', 49.99, 20),
   		('Utilizando SEO com NextJS', 59.90, 10),
    	('C# e .NET core completo', 29.99,  38);

SELECT * FROM courses;

-- Adicionando categoria
ALTER TABLE
	courses
ADD COLUMN
	category VARCHAR(50) DEFAULT 'Programação';

-- Adicionando regra not null
ALTER TABLE
	courses
ALTER COLUMN
	category
SET NOT NULL;

-- Buscando o mais caro
SELECT MAX(price) maior_preco FROM courses;

-- Buscando o mais barato
SELECT MIN(price) menor_preco FROM courses;

-- Buscando a média e limitando a duas casas decimais
SELECT ROUND(AVG(price)::numeric, 2) media_preco FROM courses;

-- Lista alfabética
SELECT * FROM
	courses
ORDER BY title;

-- Buscando cursos com react
SELECT * FROM
	courses
WHERE title ILIKE '%react%'

-- Buscando NodeJS
SELECT * FROM
	courses
WHERE title ILIKE '%node%';

-- Quantidade de cursos
SELECT COUNT(*) FROM courses;

-- Inserção de novos dados com novas categorias
INSERT INTO courses("title", "price", "duration_hours", "category")
	   VALUES 
       ('Introdução ao Scrum', 39.90, 16, 'Metodologias Ágeis'),
       ('Trabalhando com Agile', 25.99, 16, 'Metodologias Ágeis'),
       ('Kanban Avançado', 99.99, 16, 'Metodologias Ágeis'),
       ('Melhorando comunicação', 19.90, 15, 'Soft Skills'),
       ('Ferramentas de organização', 29.90, 20, 'Soft Skills'),
       ('Design de interfaces', 59.90, 26, 'Design'),
       ('Brand Design avançado', 199.90, 50, 'Design'),
       ('UI / UX avançado', 99.90, 26, 'Design');

-- Obtendo a média de preço por categoria
SELECT category, CAST(AVG(price) AS DECIMAL(5,2)) media_preco
	FROM courses
GROUP BY category;

SELECT category, TRUNC(AVG(price), 2) media_preco
	FROM courses
GROUP BY category;

-- Obtendo a duração de horas
SELECT category, SUM(duration_hours) soma_horas
	FROM courses
GROUP BY category;

-- Obtendo a quantidade de cursos por categoria
SELECT category, COUNT(*)
	FROM courses
GROUP BY category;

-- Obtendo quantidade por categoria especifica
SELECT category, COUNT(*)
	FROM courses
GROUP BY category
HAVING category LIKE 'Programação';

-- Obtendo o curso de react
SELECT * FROM courses
WHERE title ILIKE '%react%'

-- Atualizando o curso de react
UPDATE courses
SET price = 49.90
WHERE id = 3 RETURNING *;

-- Buscando o curso de C#
SELECT * FROM courses
WHERE title ILIKE '%C#%'

-- Deletando curso de C#
DELETE FROM
	courses
WHERE id = 9;

UPDATE courses
SET category = 'Programação Backend'
WHERE title ILIKE '%nodejs%'
RETURNING *;

-- Obtendo os cursos mais caros
SELECT category, MAX(price) maior_preco
	FROM courses
GROUP BY category; 
