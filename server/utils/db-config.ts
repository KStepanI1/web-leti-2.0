
const POSTGRES = 'postgres'
const DEFAULT_HOST = 'localhost'
const DEFAULT_PORT = 5432

export default {
    DB_NAME: process.env.DB_NAME || POSTGRES,
    DB_USER: process.env.DB_USER || POSTGRES,
    DB_PASSWORD: process.env.DB_PASSWORD || POSTGRES,
    HOST: process.env.HOST || DEFAULT_HOST,
    PORT: Number(process.env.PORT) || DEFAULT_PORT
}