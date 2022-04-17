ALTER TABLE 
	courses
ADD COLUMN
	creator_id INTEGER NULL,
ADD FOREIGN KEY (creator_id) REFERENCES users (id);

INSERT INTO courses("title", "price", "duration_hours", "category", "creator_id")
	VALUES
     	('Introdução ao React', 39.90, 16, 'Programação', 4),
        ('Criando APIs com Node e Prisma', 59.90, 26, 'Programação', 2),
       	('React Avançado', 39.90, 16, 'Programação', 5),
        ('Introdução ao SQL', 59.90, 26, 'Programação', 5);

-- Relacionando dados nas querys
SELECT
	*
FROM courses c
  JOIN users u ON c.creator_id = u.id
WHERE
	u.id = 5;

-- Selecionando campos especificos
SELECT
	c.title,
    c.category,
    c.price,
    u.name
FROM courses c
  JOIN users u ON c.creator_id = u.id
WHERE
	u.id = 5;
    
-- Removendo relacionamento
ALTER TABLE
	courses
DROP COLUMN
	creator_id;
