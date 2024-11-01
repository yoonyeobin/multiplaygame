import dotenv from 'dotenv';

dotenv.config();

export const HOST = process.env.HOST
export const PORT = process.env.PORT
export const CLIENT_VERSION = process.env.CLIENT_VERSION

export const DB_NAME = process.env.DB_NAME
export const DB_USER = process.env.DB_USER
export const DB_PASSWORD = process.env.DB_PASSWORD
export const DB_HOST = process.env.DB_HOST
export const DB_PORT = process.env.DB_PORT