
-- Adicionando campo de email
ALTER TABLE
  users
ADD
  COLUMN email VARCHAR(50);

-- Adicionando campo de idade errado
ALTER TABLE
  users
ADD
  COLUMN idade DECIMAL;

-- Corrigindo o campo de idade para o tipo correto
ALTER TABLE
  users
ALTER COLUMN
  idade
  TYPE INTEGER;
  
-- Atualizando todos os usuários 
UPDATE
  users
SET
  idade = 25;

-- Alterando a tabela e adicionando uma nova regra
ALTER TABLE
  users
ALTER COLUMN
  idade
SET
  NOT NULL;

-- Adicionando uma constraint
ALTER TABLE
  users
ADD CONSTRAINT
  unique_email UNIQUE (email);
  
-- Adicionando regra usando o CHECK
ALTER TABLE
  users
ADD CONSTRAINT
  major_age CHECK (idade>=18);
  
-- Tira uma constraint (regra)
ALTER TABLE
  users
DROP CONSTRAINT
  unique_email;
  
-- Removendo coluna
ALTER TABLE
  users
DROP COLUMN height;

-- Renomeando coluna
ALTER TABLE
  users
RENAME email TO email_atualizado;

-- Comando custoso
ALTER TABLE
  users
ADD COLUMN
  height DECIMAL DEFAULT 1.80;

UPDATE
  users
SET
  email = 'padrao@kenzie.com.br'
RETURNING *;

-- Atualizando um dado
UPDATE
  users
SET
  email = 'fabio@kenzie.com.br'
WHERE
  id = 'bb1715c7-598f-42b3-94b7-cd150d0422fe'
RETURNING *;

-- Atualizando um grupo de pessoas e retornando apenas algumas colunas
UPDATE
  users
SET
  email = 'email@modulo4.com.br'
WHERE
  module = 'M4'
RETURNING name, email;

-- Deletando um usuário
DELETE FROM
  users
WHERE
  id = 'bb1715c7-598f-42b3-94b7-cd150d0422fe'
RETURNING *;

-- CREATE
INSERT INTO
  users ("name", "birth_date", "module", "email", "idade")
VALUES
  ('Gabriel', '2001-05-28', 'M4', 'gabriel@kenzie.com.br', 18)
RETURNING *;

-- READ
SELECT * FROM users;

-- UPDATE
UPDATE
  users
SET
  email = 'fabio@kenzie.com.br'
WHERE
  id = 'bb1715c7-598f-42b3-94b7-cd150d0422fe'
RETURNING *;

-- DELETE
DELETE FROM
  users
WHERE
  id = 'bb1715c7-598f-42b3-94b7-cd150d0422fe'
RETURNING *;