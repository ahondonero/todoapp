const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "qwer",
    host: "localhost",
    port: 5432,
    database: "dvdrental"
});

module.exports = pool;