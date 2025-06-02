DROP TABLE IF EXISTS charges;

DROP TABLE IF EXISTS clients;

DROP TABLE IF EXISTS users;

CREATE TYPE status_enum AS ENUM ('paidup', 'in_arrears');

CREATE TYPE status_charges_enum AS ENUM ('paid', 'overdue', 'expected');

CREATE TABLE
  users (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    cpf TEXT UNIQUE,
    phone TEXT,
    createdat TIMESTAMP DEFAULT NOW (),
    updatedAt TIMESTAMP DEFAULT NOW ()
  );

CREATE TABLE
  clients (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users (id),
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    cpf TEXT NOT NULL UNIQUE,
    phone TEXT NOT NULL,
    address TEXT,
    cep TEXT,
    complement TEXT,
    district TEXT,
    city TEXT,
    uf TEXT,
    status status_enum NOT NULL,
    createdat TIMESTAMP DEFAULT NOW (),
    updatedat TIMESTAMP DEFAULT NOW ()
  );

CREATE TABLE
  charges (
    charge_id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users (id),
    client_id INTEGER NOT NULL REFERENCES clients (id),
    name text NOT NULL,
    status status_charges_enum NOT NULL,
    description TEXT NOT NULL,
    due_date DATE,
    value INTEGER,
    createdat TIMESTAMP DEFAULT NOW (),
    updatedat TIMESTAMP DEFAULT NOW ()
  );