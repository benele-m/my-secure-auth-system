require("dotenv").config();
const {Pool}=require("pg");
const pool=new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
});

module.exports=pool;

/*test db connection-> saves hrs of debugging later
pool.connect()
  .then(() => console.log("PostgreSQL connected"))
  .catch(err => {
    console.error("DB connection failed", err);
    process.exit(1);
  });
*/

