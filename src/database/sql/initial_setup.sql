CREATE DATABASE IF NOT EXISTS narupedia;
DROP DATABASE narupedia;

USE narupedia;

CREATE TABLE villages (
    village_id int UNSIGNED PRIMARY KEY, 
    village varchar(50)
);

CREATE TABLE clans (
    clan_id int UNSIGNED PRIMARY KEY, 
    clan varchar(50)
);

CREATE TABLE kekkeigenkais (
    kekkeigenkai_id int UNSIGNED PRIMARY KEY, 
    kekkeigenkai varchar(50)
);

CREATE TABLE characters (
    character_id int UNSIGNED PRIMARY KEY, 
    name varchar(50) 
);

CREATE TABLE image_x_character (
    ixc_id int UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
    image varchar(200), 
    character_id int UNSIGNED,
    FOREIGN KEY (character_id) REFERENCES characters(character_id)
        ON DELETE SET NULL 
        ON UPDATE CASCADE
    );

CREATE TABLE village_x_character (
    vxc_id int UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
    village_id int UNSIGNED, 
    character_id int UNSIGNED,
    FOREIGN KEY (village_id) REFERENCES villages(village_id)
        ON DELETE SET NULL 
        ON UPDATE CASCADE, 
    FOREIGN KEY (character_id) REFERENCES characters(character_id)
        ON DELETE SET NULL 
        ON UPDATE CASCADE
);

CREATE TABLE clan_x_character (
    cxc_id int UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    clan_id int UNSIGNED,
    character_id int UNSIGNED,
    FOREIGN KEY (clan_id) REFERENCES clans(clan_id)
        ON DELETE SET NULL 
        ON UPDATE CASCADE, 
    FOREIGN KEY (character_id) REFERENCES characters(character_id) 
        ON DELETE SET NULL 
        ON UPDATE CASCADE
);

CREATE TABLE kekkeigenkai_x_character (
    kxc_id int UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    kekkeigenkai_id int UNSIGNED,
    character_id int UNSIGNED,
    FOREIGN KEY (kekkeigenkai_id) REFERENCES kekkeigenkais(kekkeigenkai_id)
        ON DELETE SET NULL 
        ON UPDATE CASCADE, 
    FOREIGN KEY (character_id) REFERENCES characters(character_id)
        ON DELETE SET NULL 
        ON UPDATE CASCADE
);

CREATE OR REPLACE VIEW view_characters AS 
    SELECT 
        c.character_id,
        c.name,
        CONCAT(
            '[',
            GROUP_CONCAT(
                DISTINCT CONCAT('"',ixc.image,'"')
                SEPARATOR ', '
            ),
            ']'
        ) AS images,
        CONCAT(
            '[',
            GROUP_CONCAT(
                DISTINCT CONCAT('{"id": "', v.village_id, '", "name": "', v.village, '"}')
                ORDER BY v.village 
                SEPARATOR ', '
            ),
            ']'
        ) AS villages,
        CONCAT(
            '[', 
            GROUP_CONCAT(
                DISTINCT CONCAT('{"id": "', cl.clan_id, '", "name": "', cl.clan, '"}') 
                ORDER BY cl.clan 
                SEPARATOR ', '
            ),
            ']'
        ) AS clans,
        CONCAT(
            '[',
            GROUP_CONCAT(
                DISTINCT CONCAT('{"id": "', k.kekkeigenkai_id, '", "name": "', k.kekkeigenkai, '"}')
                ORDER BY k.kekkeigenkai 
                SEPARATOR ', '
            ),
            ']'
        ) AS kekkeigenkais
    FROM 
        characters c
    LEFT JOIN village_x_character vxc ON c.character_id = vxc.character_id
    LEFT JOIN villages v ON vxc.village_id = v.village_id
    LEFT JOIN clan_x_character cxc ON c.character_id = cxc.character_id
    LEFT JOIN clans cl ON cxc.clan_id = cl.clan_id
    LEFT JOIN kekkeigenkai_x_character kxc ON c.character_id = kxc.character_id
    LEFT JOIN kekkeigenkais k ON kxc.kekkeigenkai_id = k.kekkeigenkai_id
    LEFT JOIN image_x_character ixc ON c.character_id = ixc.character_id
    GROUP BY
        c.character_id, c.name
    ORDER BY
        c.character_id;