import { Sequelize } from 'sequelize';
import dbConfig from '../utils/db-config';


const { DB_NAME = '', DB_PASSWORD, DB_USER, HOST, PORT } = dbConfig;
const dialect = 'postgres'


export const db = new Sequelize(
    DB_NAME,
    DB_USER,
    DB_PASSWORD,
    {
        dialect,
        host: HOST,
        port: PORT
    }
)