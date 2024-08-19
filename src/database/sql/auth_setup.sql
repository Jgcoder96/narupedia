CREATE TABLE users (
    user_id CHAR(36) NOT NULL, 
    username VARCHAR(50) NOT NULL, 
    email VARCHAR(100) NOT NULL, 
    password VARCHAR(255) NOT NULL,
    PRIMARY KEY (user_id),
    UNIQUE (username),
    UNIQUE (email)
);

CREATE TABLE roles (
    rol_id int UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    rol varchar(50)
);

INSERT INTO roles (rol_id, rol) VALUES
  (0, "user"),
  (0, "moderator"), 
  (0, "admin"),
  (0, "superAdmin");

CREATE TABLE rol_x_user (
    rxu_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    rol_id INT UNSIGNED, 
    user_id CHAR(36), 
    FOREIGN KEY (rol_id) REFERENCES roles(rol_id)
        ON DELETE SET NULL 
        ON UPDATE CASCADE, 
    FOREIGN KEY (user_id) REFERENCES users(user_id)
        ON DELETE SET NULL 
        ON UPDATE CASCADE
);