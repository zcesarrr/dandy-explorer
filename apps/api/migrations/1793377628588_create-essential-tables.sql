-- Up Migration
CREATE TYPE toon_rarity AS ENUM('normal', 'main');
CREATE TYPE toon_category AS ENUM('none', 'halloween', 'holiday', 'easter');

CREATE TABLE toons(
    id SERIAL PRIMARY KEY NOT NULL UNIQUE,
    name VARCHAR(20) NOT NULL,
    iconUrl TEXT NOT NULL,
    rarity toon_rarity DEFAULT('normal') NOT NULL,
    category toon_category DEFAULT('none') NOT NULL
);

CREATE TYPE stat_icon AS ENUM('heart', 'star');

CREATE TABLE stats(
    id SERIAL PRIMARY KEY NOT NULL UNIQUE,
    toon_id INT NOT NULL,
    name VARCHAR(20) NOT NULL,
    icon stat_icon NOT NULL,
    color VARCHAR(9) NOT NULL,

    FOREIGN KEY (toon_id) REFERENCES toons(id)
);

CREATE TYPE ability_type AS ENUM('passive', 'active');

CREATE TABLE abilities(
    id SERIAL PRIMARY KEY NOT NULL UNIQUE,
    toon_id INT NOT NULL,
    name VARCHAR(50) NOT NULL,
    type ability_type NOT NULL,
    description TEXT,

    FOREIGN KEY (toon_id) REFERENCES toons(id)
);

CREATE TABLE quests(
    id SERIAL PRIMARY KEY NOT NULL UNIQUE,
    toon_id INT NOT NULL,
    content TEXT,

    FOREIGN KEY (toon_id) REFERENCES toons(id)
);

CREATE TYPE requirement_type AS ENUM(
    'ichor',
    'pumpkin',
    'easter',
    'ornament',
    'encounter',
    'research',
    'mastery',
    'toonsOwning',
    'titlesOwning'
);

CREATE TABLE requirements(
    id SERIAL PRIMARY KEY NOT NULL UNIQUE,
    toon_id INT NOT NULL,
    type requirement_type NOT NULL,
    label VARCHAR(80) NOT NULL,

    FOREIGN KEY (toon_id) REFERENCES toons(id)
);

-- Down Migration
DROP TABLE requirements;
DROP TYPE requirement_type;
DROP TABLE quests;
DROP TABLE abilities;
DROP TYPE ability_type;
DROP TABLE stats;
DROP TYPE stat_icon;
DROP TABLE toons;
DROP TYPE toon_category;
DROP TYPE toon_rarity;
