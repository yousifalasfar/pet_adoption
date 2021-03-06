DROP TABLE IF EXISTS pet_types,
pets,
adoption_applications CASCADE;
CREATE TABLE pet_types(
  id SERIAL PRIMARY KEY,
  name VARCHAR (255) NOT NULL,
  img_url VARCHAR (255) NOT NULL,
  description TEXT
);

CREATE TABLE pets(
  id SERIAL PRIMARY KEY,
  name VARCHAR (255) NOT NULL,
  img_url VARCHAR (255) NOT NULL,
  age INTEGER,
  vaccination_status BOOLEAN NOT NULL DEFAULT false,
  adoption_story TEXT NOT NULL,
  available_for_adoption BOOLEAN NOT NULL DEFAULT true,
  pet_type_id INTEGER REFERENCES pet_types(id)
);

CREATE TABLE adoption_applications(
  id SERIAL PRIMARY KEY,
  name VARCHAR (255) NOT NULL,
  phone_number VARCHAR (255) NOT NULL,
  home_status VARCHAR (255) NOT NULL,
  email VARCHAR (255) NOT NULL,
  application_status VARCHAR (255) DEFAULT 'pending',
  pet_id INTEGER REFERENCES pets(id)
);
