import { config } from 'dotenv';

config();

export default {
  host: process.env.HOST,
  database: process.env.DATABASE,
  port: process.env.PORT,
  user: process.env.USER,
  password: process.env.PASSWORD,
  secret: process.env.SECRET,
  adminDatabaseUsername: process.env.ADMIN_DATABASE_USERNAME,
  adminDatabasePassword: process.env.ADMIN_DATABASE_PASSWORD,
  adminDatabaseEmail: process.env.ADMIN_DATABASE_EMAIL,
};
