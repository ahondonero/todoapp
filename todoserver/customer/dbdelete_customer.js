const pool = require("./db");

pool.query("DELETE FROM public.customer WHERE first_name = $1 RETURNING *",[3],(err,res)=>{
    if(err){
        console.log(err.stack);
    }
    else{
        console.log(res.rows);
    }
});
pool.end();