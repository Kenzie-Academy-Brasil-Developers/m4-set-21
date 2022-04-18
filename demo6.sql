CREATE TABLE IF NOT EXISTS users(
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE,
  age INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS personal_info(
  id BIGSERIAL PRIMARY KEY,
  cpf VARCHAR(11) NOT NULL UNIQUE,
  user_id INTEGER NOT NULL UNIQUE,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS address(
  id BIGSERIAL PRIMARY KEY,
  street VARCHAR NOT NULL,
  number VARCHAR NOT NULL,
  district VARCHAR NOT NULL,
  state VARCHAR NOT NULL,
  country VARCHAR NOT NULL
);


INSERT INTO
	users (name, email, age)
VALUES
	('Gabriel', 'gabriel@kenzie.com.br', 20),
    ('Fabio', 'fabio@kenzie.com.br', 22);

INSERT INTO
	personal_info (cpf, user_id)
VALUES
	('00011122233', 1),
    ('00011122244', 2);

SELECT * FROM
	personal_info p
	JOIN users u 
	ON p.user_id = u.id
WHERE u.id = 1;

SELECT
	p.user_id,
    p.cpf,
    u.name,
    u.email
FROM
	personal_info p
    JOIN users u ON p.user_id = u.id
WHERE
	u.id = 2;
    
-- Inserindo o endereço
INSERT INTO
	address (street, number, district, state, country)
VALUES
	('Rua das bananeiras', '55b', 'Jardim das bananeiras', 'Paraná', 'Brasil');
    
ALTER TABLE 
	users
ADD COLUMN
	address_id INTEGER UNIQUE,
ADD FOREIGN KEY (address_id) REFERENCES address(id);

UPDATE 
	users
SET
	address_id = 1
WHERE users.id = 1;

SELECT
	u.id,
    u.name,
    a.street,
    a.district
FROM users u JOIN address a ON u.address_id = a.id
WHERE a.id = 1;
