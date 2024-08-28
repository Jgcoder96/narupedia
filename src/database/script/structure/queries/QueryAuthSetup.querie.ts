export const QueryAuthSetup = [
  `USE narupedia;`,
  `CREATE TABLE users (
    user_id CHAR(36) NOT NULL, 
    username VARCHAR(50) NOT NULL, 
    email VARCHAR(100) NOT NULL, 
    password VARCHAR(255) NOT NULL,
    PRIMARY KEY (user_id),
    UNIQUE (username),
    UNIQUE (email)
  );`,
  `CREATE TABLE roles (
    rol_id int UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    rol varchar(50) UNIQUE 
  );`,
  `CREATE TABLE rol_x_user (
    rxu_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    rol_id INT UNSIGNED, 
    user_id CHAR(36), 
    FOREIGN KEY (rol_id) REFERENCES roles(rol_id)
        ON DELETE SET NULL 
        ON UPDATE CASCADE, 
    FOREIGN KEY (user_id) REFERENCES users(user_id)
        ON DELETE SET NULL 
        ON UPDATE CASCADE
  );`,
  `CREATE TABLE methods (
    method_id int UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    method varchar(50) UNIQUE
  );`,
  `CREATE TABLE method_x_rol (
    mxr_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
    method_id INT UNSIGNED, 
    rol_id INT UNSIGNED, 
    FOREIGN KEY (method_id) REFERENCES methods(method_id)
        ON DELETE SET NULL 
        ON UPDATE CASCADE, 
    FOREIGN KEY (rol_id) REFERENCES roles(rol_id)
        ON DELETE SET NULL 
        ON UPDATE CASCADE   
  );`,
  `CREATE OR REPLACE VIEW view_users AS 
SELECT 
    u.user_id,
    u.username,
    u.email, 
    u.password,
    GROUP_CONCAT(DISTINCT r.rol ORDER BY r.rol ASC SEPARATOR ', ') AS roles,
    CONCAT(
        '[',
        GROUP_CONCAT(
            DISTINCT CONCAT('"', m.method, '"')
            ORDER BY m.method ASC
            SEPARATOR ', '
        ),
        ']'
    ) AS methods
FROM
    users u
LEFT JOIN rol_x_user rxu ON u.user_id = rxu.user_id
LEFT JOIN roles r ON rxu.rol_id = r.rol_id
LEFT JOIN method_x_rol mxr ON r.rol_id = mxr.rol_id
LEFT JOIN methods m ON mxr.method_id = m.method_id
GROUP BY
    u.user_id, u.username, u.email, u.password
ORDER BY
    u.user_id;`,
  `INSERT INTO roles (rol_id, rol) VALUES
    (0, "USER"),
    (0, "ADMIN");`,
  `INSERT INTO methods (method_id, method) VALUES 
    (0, "POST"),
    (0, "GET"),
    (0, "PUT"),
    (0, "DELETE");`,
  `INSERT INTO method_x_rol (mxr_id, method_id, rol_id) VALUES 
    (0, 2, 1),
    (0, 1, 2),
    (0, 2, 2),
    (0, 3, 2),
    (0, 4, 2);`,
];
