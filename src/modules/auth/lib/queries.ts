export const QUERIES = {
  insertUser:
    'INSERT INTO users (user_id, username, email, password) VALUES (UUID(),?, ?, ?);',
  insertRol:
    'INSERT INTO rol_x_user (rxu_id, rol_id, user_id) VALUES (0, ?, ?)',
  selectUserById: 'SELECT * FROM view_users WHERE user_id = ?;',
  selectUserByUsername: 'SELECT * FROM users WHERE username = ?;',
  selectUserByEmail: 'SELECT * FROM users WHERE email = ?;',
  selectRolByName: 'SELECT * FROM roles WHERE rol = ?;',
};
