const pool = require("../db");

pool.query("UPDATE public.customer SET last_name = $1 WHERE first_name = 3",['Arnel'],(err,res)=>{
    if(err){
        console.log(err.stack);
    }
    else{
        console.log(res.rows);
    }
});
pool.end();