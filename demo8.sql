CREATE TABLE IF NOT EXISTS users_courses (
  id BIGSERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL,
  course_id INTEGER NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE,
  FOREIGN KEY (course_id) REFERENCES courses (id) ON DELETE CASCADE,
);

INSERT INTO
	users_courses("user_id", "course_id")
VALUES
	((SELECT id FROM users WHERE email = 'fabio@kenzie.com.br'), 70),
    (2, 70),
    (3, 70),
    (2, 73),
    (1, 73),
    (4, 139),
    (4, 93);

CREATE TABLE IF NOT EXISTS reviews (
  id BIGSERIAL PRIMARY KEY,
  user_id INTEGER,
  course_id INTEGER NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  review_description VARCHAR,
  review_score INTEGER NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE SET NULL,
  FOREIGN KEY (course_id) REFERENCES courses (id) ON DELETE CASCADE,
  CONSTRAINT review_between_1_and_5 CHECK(review_score BETWEEN 1 AND 5)
);

-- Adicionando a tabela de reviews
INSERT INTO
	reviews("user_id", "course_id", "review_description", "review_score")
VALUES
	((SELECT id FROM users WHERE email = 'fabio@kenzie.com.br'), 70, 'Muito bom!', 5),
    (2, 70, 'Poderia ter mais redux', 4),
    (3, 70, 'Muito bom conteúdo, porém o curso poderia ser mais longo', 4),
    (2, 73, 'Muito bom conteúdo, porém o curso poderia ser mais longo', 3),
    (1, 73, 'Muito bom conteúdo, porém o curso poderia ser mais longo', 3),
    (4, 139, 'Muito bom conteúdo, porém o curso poderia ser mais longo', 2),
    (4, 93, 'Muito bom', 5);
    
    
-- Buscando informações do curso e a review dele
SELECT
	c.title,
    c.category,
    r.review_description,
    r.review_score
FROM courses c
	INNER JOIN reviews r ON c.id = r.course_id;
    
-- Buscando informações do curso e a review dele e o usuario que fez
SELECT
	c.title,
    c.category,
    r.review_description,
    r.review_score,
    u.name,
    u.email
FROM courses c
	INNER JOIN reviews r ON c.id = r.course_id
    INNER JOIN users u ON u.id = r.user_id
WHERE u.id = (SELECT id FROM users WHERE email = 'alexandre@kenzie.com.br');
    
-- Media review
SELECT
	c.id, c.title, TRUNC(AVG(r.review_score), 2) media_nota
FROM courses c
	INNER JOIN reviews r ON c.id = r.course_id
    GROUP BY c.title, c.id ORDER BY media_nota DESC;

-- Contagem de reviews por categoria
SELECT
	c.id, c.category, COUNT(*) contagem
FROM courses c
	INNER JOIN reviews r ON c.id = r.course_id
    GROUP BY c.category, c.id;