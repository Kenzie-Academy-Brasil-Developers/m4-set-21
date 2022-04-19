
SELECT
	*
FROM
	courses c
WHERE
	c.creator_id = 1;
    
SELECT
	*
FROM
	courses c
WHERE
	c.creator_id IS NULL;
    
    
SELECT
	c.title,
    c.category,
    c.price,
    c.creator_id
FROM
	courses c
WHERE
	c.title ILIKE '%node%'

-- SINTAXE JOIN
SELECT
	tabela.nome_coluna,
FROM
	tabela_onde_esta_a_referencia
TIPO_DE_JOIN JOIN tabela_onde_eu_quero_buscar_os_dados_da_referencia ON condicao;

-- Tipos de Join
-- INNER JOIN

SELECT
	u.id,
    u.name,
    u.email,
    c.id course_id,
    c.title,
    c.category,
    c.price
FROM
	courses c
    INNER JOIN users u ON c.creator_id = u.id;
    
-- LEFT JOIN
-- Buscando as informações do lado esquerdo, todos os cursos além da intersecção
SELECT
	u.id,
    u.name,
    u.email,
    c.id course_id,
    c.title,
    c.category,
    c.price
FROM
	courses c
    LEFT JOIN users u ON c.creator_id = u.id;
    

SELECT * FROM users;

INSERT INTO users 
			  ("name", "email", "is_creator", "watch_time")
		VALUES
        	  ('Chrystian', 'chrystian@kenzie.com.br', true, 20),
              ('Carlos', 'carlos@kenzie.com.br', true, 25),
              ('Malenia', 'malenia@kenzie.com.br', true, 30);
              
-- Right Join
-- Buscando as informações do lado direito, todos os usuarios além da intersecção
SELECT
	u.id,
    u.name,
    u.email,
    c.id course_id,
    c.title,
    c.category,
    c.price
FROM
	courses c
    RIGHT JOIN users u ON c.creator_id = u.id;
    
    
-- FULL OUTER JOIN
-- Combinação da intersecção (inner) com informações dos usuarios (right) e informações do curso (left)
SELECT
	u.id,
    u.name,
    u.email,
    c.id course_id,
    c.title,
    c.category,
    c.price
FROM
	courses c
    FULL OUTER JOIN users u ON c.creator_id = u.id;
	
-- Adicionando o ultimo curso que a pessoa viu
-- Muitos usuários para 1 curso, Many to one
ALTER TABLE
	users
ADD COLUMN
	favorite_course INTEGER,
ADD FOREIGN KEY (favorite_course) REFERENCES courses (id);

INSERT INTO users 
			  ("name", "email", "is_creator", "watch_time", "favorite_course")
		VALUES
        	  ('Wesley', 'wesley@kenzie.com.br', false, 20, 70),
              ('Vilson', 'vilson@kenzie.com.br', true, 25, 71),
              ('Amanda', 'amanda@kenzie.com.br', true, 30, 72);
              
-- INNER JOIN + GROUP BY         
SELECT c.category, 
	COUNT(*) contagem
FROM
	courses c
    INNER JOIN users u ON u.favorite_course = c.id
    GROUP BY c.category;
    
-- Media em cima da intersecção + filtro
SELECT
	c.category, TRUNC(AVG(price), 2) media_preco
FROM
	courses c
	INNER JOIN users u ON u.favorite_course = c.id
    GROUP BY c.category HAVING c.category ILIKE '%Programação%';