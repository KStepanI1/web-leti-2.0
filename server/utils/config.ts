
const DEFAULT_PORT = 5432

export default {
    HOST: process.env.APP_HOST,
    PORT: process.env.APP_PORT || DEFAULT_PORT
}