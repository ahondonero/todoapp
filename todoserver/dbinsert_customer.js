const pool = require("./db");

const query = "INSERT INTO public.customer (store_id, first_name, last_name, email, address_id, activebool)  VALUES ($1, $2, $3, $4, $5, $6)  RETURNING *";
const data = ["1111","Arnel", "Hondonero", "ahondonero_190000001798@uic.edu.ph","111","true"];
pool.query(query,data,(err,res) => {
    if(err) {
        console.log(err.message);
    }
    else {
        console.log(res.rows);
    }
})